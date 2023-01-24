import { useGetPostComments } from "@/hooks/useGetPostComments";
import { ImagePostData } from "@/types";
import { Avatar, Col, Divider, List, Skeleton, Space, Typography } from "antd";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const { Text, Title, Link: LinkAnt } = Typography;

const ImagePostData = ({
  user,
  profileLink,
  postDescription,
  postId,
  numberOfComments,
}: ImagePostData) => {
  const { commentData, nextData, loadMoreData } = useGetPostComments();

  useEffect(() => {
    loadMoreData(postId);
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   console.log("making a call", nextData);
  // }, [nextData]);

  return (
    <Col md={24} lg={12}>
      <div className="profileMenu p-3">
        <div className="mt-3">
          <Space align="center">
            <Avatar src={profileLink} />
            <LinkAnt
              className="textGreen text-lg isButton"
              href={`/user/${user.split("@")[1]}`}
            >
              {user}
            </LinkAnt>
          </Space>
        </div>
        <div className="mt-3">
          <Text className="textWhite" style={{ whiteSpace: "pre-line" }}>
            {postDescription}
          </Text>
        </div>
        <div className="mt-3">
          <div
            className="scrollableDiv"
            style={{
              maxHeight: "400px",
              overflow: "auto",
            }}
          >
            <div className="my-3">
              <Title
                type="secondary"
                level={5}
                style={{ fontSize: "18px !important" }}
              >
                Comments
              </Title>
              <InfiniteScroll
                dataLength={commentData.length}
                next={() => loadMoreData(postId, nextData)}
                hasMore={commentData.length < numberOfComments!}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                scrollableTarget="scrollableDiv"
                endMessage={
                  <Divider plain style={{ borderTopColor: "rgb(96 96 96)" }}>
                    <span className="textWhite">
                      It is all, nothing more 🤐
                    </span>
                  </Divider>
                }
              >
                <List
                  itemLayout="horizontal"
                  dataSource={commentData}
                  renderItem={(item, index) => (
                    <List.Item
                      style={
                        index !== commentData.length - 1
                          ? { borderBlockEnd: "1px solid #5c5c5c8f" }
                          : {}
                      }
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={item.profilePictureLink ?? ""}
                            className={
                              item.profilePictureLink ? "" : `avatar-default`
                            }
                          />
                        }
                        title={
                          <Link
                            href={`/user/${item.user.split("@")[1]}`}
                            className="textGreen"
                          >
                            {item.user}
                          </Link>
                        }
                        description={
                          <Text className={"textWhite"}>
                            {item.commentContent}
                          </Text>
                        }
                      />
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ImagePostData;
