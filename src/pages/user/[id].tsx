import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { getUserProfile } from "@/lensQueries/getUserProfile";
import { UserData } from "@/types";
import { processPictureUrl } from "@/helpers";
import { Col, Layout, Row, Typography } from "antd";
import UserComponent from "@/components/UserComponent";
import { useGetUserPosts } from "@/hooks/useGetUserPosts";
import { getUserPosts } from "@/lensQueries/getUserPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import CardImagePost from "@/components/UserComponent/CardImagePost";

export const getServerSideProps: GetServerSideProps = async (context) => {
  //@ts-ignore
  const { id } = context.params;

  let userData = {
    followers: 0,
    following: 0,
    user: "",
    userId: "",
    profileLink: "",
    postsTotal: 0,
  };

  try {
    const profile = await getUserProfile(id);

    userData = {
      followers: profile.stats.totalFollowers,
      following: profile.stats.totalFollowing,
      user: `@${profile.handle}`,
      userId: profile.id,
      // @ts-ignore
      profileLink: processPictureUrl(
        profile?.picture?.uri ?? profile?.picture?.original?.url
      ),
      postsTotal: profile.stats.postsTotal,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: userData, // will be passed to the page component as props
  };
};

const { Content } = Layout;
const { Title } = Typography;
const UserView = (userData: UserData) => {
  const { postData, nextData, loadMoreData } = useGetUserPosts();

  useEffect(() => {
    loadMoreData(userData.userId);
  }, []);

  return (
    <Content className="d-flex justify-content-center">
      <div className="container-fluid maxWidth site-layout-content">
        <Row justify={"center"}>
          <Col span={24}>
            <div className="py-5">
              {/* New Component here */}
              <Row align={"top"} gutter={[8, 8]}>
                <Col xs={24} sm={24} md={4} lg={4}>
                  <UserComponent {...userData} />
                </Col>
                <Col xs={24} sm={24} md={20} lg={20}>
                  <div className="profileGallery p-4">
                    <InfiniteScroll
                      dataLength={postData.length}
                      next={() => loadMoreData(userData.userId, nextData)}
                      hasMore={postData.length < userData.postsTotal}
                      loader={
                        <Title level={1} className="textWhite text-big">
                          Loading...
                        </Title>
                      }
                    >
                      <Row gutter={[8, 8]}>
                        {postData.map((data, index) => (
                          <Col key={index} xs={8} sm={8} md={6} lg={6}>
                            <CardImagePost {...data} />
                          </Col>
                        ))}
                      </Row>
                    </InfiniteScroll>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default UserView;
