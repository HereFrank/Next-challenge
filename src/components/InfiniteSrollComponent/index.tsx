import { Col, Row, Button, Typography } from "antd";
import {
  ArrowDownOutlined,
  InboxOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import styles from "./OrderButtons.module.css";
const { Text } = Typography;
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import CardImage from "../CardImage";
import { CardData } from "@/types";
import { useExplorePublications } from "@/hooks/useExplorePublications";

const InfiniteScrollComponent = () => {
  const { data, nextData, loadMoreData } = useExplorePublications();

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

          <Row align={"middle"} gutter={8}>
            <Col>
              <Button shape="round" className={`${styles.sortButton}`}>
                Date created
                <ArrowDownOutlined />
              </Button>
            </Col>
            <Col>
              <Button shape="round" className={`${styles.sortButton}`}>
                Most collected
                <InboxOutlined />
              </Button>
            </Col>
            <Col>
              <Button shape="round" className={`${styles.sortButton}`}>
                Most mirrored
                <SwapOutlined />
              </Button>
            </Col>
          </Row>
        </div>
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

export default InfiniteScrollComponent;
