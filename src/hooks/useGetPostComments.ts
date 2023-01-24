import { useCallback, useState } from "react";
import { CommentData } from "@/types";
import { processPictureUrl } from "@/helpers";
import { getPostComments } from "@/lensQueries/getPostComments";

export const useGetPostComments = () => {

    const [loading, setLoading] = useState(false);
    const [commentData, setCommentData] = useState<CommentData[]>([]);
    const [nextData, setNextData] = useState<string>('{"timestamp":1,"offset":0}')

    const loadMoreData = useCallback(
      async (postId: string, cursorValue = nextData) => {
        if (loading) {
            return;
        }
        setLoading(true);
        
        try {
          const { data: {publications} } = await getPostComments(postId, cursorValue); // To get next result replace the cursor with the value of response.pageInfo.next
          setNextData(publications.pageInfo.next)
          const {items} = publications
          
          const utilData = items.map((item: any) => {
            const link = processPictureUrl(item.profile?.picture?.uri ?? item.profile?.picture?.original?.url)
            return ({
                profilePictureLink: link,
                user: `@${item.profile.handle}`,
                commentContent: item.metadata.content
            })})
          setCommentData((prevCommentData) => [...prevCommentData, ...utilData])
          setLoading(false)
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      },
      // eslint-disable-next-line
      []
    )
    
  return {commentData, nextData, setCommentData, loadMoreData}
}
