import { useCallback, useState } from "react";
import { ImagePost } from "@/types";
import { processPictureUrl } from "@/helpers";
import { getUserPosts } from "@/lensQueries/getUserPosts";

export const useGetUserPosts = () => {

    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState<ImagePost[]>([]);
    const [nextData, setNextData] = useState<string>('{"timestamp":1,"offset":0}')

    const loadMoreData = useCallback(
      async (userId: string, cursorValue = nextData) => {
        if (loading) {
            return;
        }
        setLoading(true);
        
        try {
            const { data : {publications}} = await getUserPosts(userId, cursorValue); // To get next result replace the cursor with the value of response.pageInfo.next    
            setNextData(publications.pageInfo.next)
            const {items} = publications
          
          const utilData = items.map((item: any) => {
            const {stats: {totalAmountOfCollects, totalAmountOfComments, totalAmountOfMirrors}} = item
            const postLink = processPictureUrl(item.metadata.media[0].original.url)
            return ({
                imageLink: postLink,
                numberOfCollects: totalAmountOfCollects,
                numberOfComments: totalAmountOfComments,
                numberOfMirrors: totalAmountOfMirrors,
                postId: item.id
            })})
            setPostData((oldPostData) => [...oldPostData, ...utilData])
            setLoading(false)
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      },
      // eslint-disable-next-line
      []
    )
    
  return {postData, nextData, setPostData, loadMoreData}
}
