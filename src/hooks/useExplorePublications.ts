import { useCallback, useEffect, useState } from "react";
import { explorePublications } from '@/lensQueries/explorePublications'
import { CardData } from "@/types";
import { formatDate } from "@/helpers";

export const useExplorePublications = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<CardData[]>([]);
    const [nextData, setNextData] = useState<string>("")

    const loadMoreData = useCallback(
      async (cursorValue = '{"timestamp":1,"offset":0}') => {
        if (loading) {
            return;
        }
        setLoading(true);
        
        try {
          const request = {
            sortCriteria: "LATEST", //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
            noRandomize: true,
            sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
            publicationTypes: ["POST"],
            cursor: cursorValue,
            limit: 24,
          };
          const { data: response } = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
          setNextData(response.explorePublications.pageInfo.next)
          const newData = response.explorePublications.items.map((item: any) => {
            const imageId = (item.metadata.media[0].original.url).split("ipfs://")[1];
            return ({
                imageLink: `https://lens.infura-ipfs.io/ipfs/${imageId}`,
                user: `@${item.profile.handle}`,
                createdAt: formatDate(item.createdAt),
                collects: item.stats.totalAmountOfCollects,
                mirrors:  item.stats.totalAmountOfMirrors,
                comments: item.stats.totalAmountOfComments
            })})
          setData([...data, ...newData])
          setLoading(false)
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      },
      [data, loading]
    )

    // const loadMoreData = async (cursorValue = '{"timestamp":1,"offset":0}') => {
    //     if (loading) {
    //         return;
    //     }
    //     setLoading(true);
        
    //     try {
    //       const request = {
    //         sortCriteria: "LATEST", //You can filter by TOP_COMMENTED | TOP_COLLECTED | TOP_MIRRORED | LATEST
    //         noRandomize: true,
    //         sources: ["5bba5781-78b5-4927-8d2f-122742817583"],
    //         publicationTypes: ["POST"],
    //         cursor: cursorValue,
    //         limit: 24,
    //       };
    //       const { data: response } = await explorePublications(request); // To get next result replace the cursor with the value of response.pageInfo.next
    //       setNextData(response.explorePublications.pageInfo.next)
    //       const newData = response.explorePublications.items.map((item: any) => {
    //         const imageId = (item.metadata.media[0].original.url).split("ipfs://")[1];
    //         return ({
    //             imageLink: `https://lens.infura-ipfs.io/ipfs/${imageId}`,
    //             user: `@${item.profile.handle}`,
    //             createdAt: formatDate(item.createdAt),
    //             collects: item.stats.totalAmountOfCollects,
    //             mirrors:  item.stats.totalAmountOfMirrors,
    //             comments: item.stats.totalAmountOfComments
    //         })})
    //       setData([...data, ...newData])
    //       setLoading(false)
    //     } catch (err) {
    //       console.log(err);
    //       setLoading(false);
    //     }
    // }
    
    useEffect(() => {
        loadMoreData();
    // eslint-disable-next-line
    }, []);

  return {data, nextData, loadMoreData}
}
