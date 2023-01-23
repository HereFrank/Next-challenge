import { useCallback, useState } from "react";
import { ImagePost } from "@/types";
import { processPictureUrl } from "@/helpers";
import { getUserPosts } from "@/lensQueries/getUserPosts";

export const useGetUserPosts = () => {

    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState<ImagePost[]>([]);
    const [nextData, setNextData] = useState<string>("")

    const loadMoreData = useCallback(
      async (userId: string, cursorValue = '{"timestamp":1,"offset":0}') => {
        if (loading) {
            return;
        }
        setLoading(true);
        
        try {
            const { data : {publications}} = await getUserPosts(userId, cursorValue); // To get next result replace the cursor with the value of response.pageInfo.next
            console.log('data', publications)
        
            setNextData(publications.pageInfo.next)
            const {items} = publications
          
          const utilData = items.map((item: any) => {
            const {stats: {totalAmountOfCollects, totalAmountOfComments, totalAmountOfMirrors}} = item
            const postLink = processPictureUrl(item.metadata.media[0].original.url)
            return ({
                imageLink: postLink,
                numberOfCollects: totalAmountOfCollects,
                numberOfComments: totalAmountOfComments,
                numberOfMirrors: totalAmountOfMirrors
            })})
            setPostData([...postData, ...utilData])
            setLoading(false)
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      },
      [postData, loading]
    )
    
  return {postData, nextData, setPostData, loadMoreData}
}
