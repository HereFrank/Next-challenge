import { Col, Row, Button, Typography } from "antd";
const { Text } = Typography;
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import CardImage from "./CardImage";
import { useExplorePublications } from "@/hooks/useExplorePublications";
import SortButtons from "./SortButtons";
import { SortMode } from "@/types";

const FeedComponent = () => {
  const { data, nextData, setData, loadMoreData } = useExplorePublications();
  const [sortMode, setSortMode] = useState<SortMode>("LATEST");

  useEffect(() => {
    loadMoreData(sortMode);
    // eslint-disable-next-line
  }, [sortMode]);

  return (
    <>
      <div className="my-3">
        <Text type="secondary">
          The LensAI frens has shared{" "}
          <span className="text-white">beautiful artworks!</span>
        </Text>

        <div className="mt-5">
          <div className="mb-3">
            <Text type="secondary" aria-level={6}>
              Sort by:
            </Text>
          </div>
        </div>

        <SortButtons
          setSortMode={setSortMode}
          setData={setData}
          sortMode={sortMode}
        />
      </div>

      <InfiniteScroll
        dataLength={data.length}
        next={() => loadMoreData(nextData)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Row justify={"center"} gutter={[8, 8]}>
          {data.map(
            (
              { imageLink, user, createdAt, collects, mirrors, comments },
              index
            ) => (
              <Col key={index} xs={8} sm={8} md={6} lg={6}>
                <CardImage
                  imageLink={imageLink}
                  user={user}
                  createdAt={createdAt}
                  collects={collects}
                  mirrors={mirrors}
                  comments={comments}
                />
              </Col>
            )
          )}
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default FeedComponent;
