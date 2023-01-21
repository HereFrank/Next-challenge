import { GetServerSideProps } from "next";
import { getPost } from "@/lensQueries/getPost";
import { useEffect } from "react";
import { PostData } from "@/types";
import { Col, Layout, Row } from "antd";
import ImagePost from "@/components/PostComponents/ImagePost";
import ImagePostData from "@/components/PostComponents/ImagePostData";
import { processPictureUrl } from "@/helpers";

export const getServerSideProps: GetServerSideProps = async (context) => {
  //@ts-ignore
  const { id } = context.params;

  let postData = {
    imageLink: "",
    numberOfCollects: null,
    numberOfMirrors: null,
    numberOfComments: null,
    user: "",
    profileLink: null,
    postDescription: "",
    postId: "",
  };

  try {
    const {
      data: { publication },
    } = await getPost(id);
    postData = {
      imageLink: `https://lens.infura-ipfs.io/ipfs/${
        publication.metadata.media[0].original.url.split("ipfs://")[1]
      }`,
      numberOfCollects: publication.stats.totalAmountOfCollects,
      numberOfMirrors: publication.stats.totalAmountOfMirrors,
      numberOfComments: publication.stats.totalAmountOfComments,
      user: `@${publication.profile.handle}`,
      // @ts-ignore
      profileLink: processPictureUrl(
        publication.profile?.picture?.uri ??
          publication.profile?.picture?.original?.url
      ),
      postDescription: publication.metadata.content,
      postId: id,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: postData, // will be passed to the page component as props
  };
};

const { Content } = Layout;

const PostView = ({
  imageLink,
  numberOfCollects,
  numberOfMirrors,
  numberOfComments,
  user,
  profileLink,
  postDescription,
  postId,
}: PostData) => {
  useEffect(() => {
    getPost("0x28a2-0x0108").then((response) => console.log(response));
  }, []);

  return (
    <Content className="d-flex justify-content-center">
      <div className="container-fluid maxWidth">
        <Row justify={"center"}>
          <Col span={24}>
            <div className="mt-5">
              <Row justify={"center"} align={"top"} gutter={[16, 16]}>
                <ImagePost
                  imageLink={imageLink}
                  numberOfCollects={numberOfCollects}
                  numberOfMirrors={numberOfMirrors}
                  numberOfComments={numberOfComments}
                />
                <ImagePostData
                  user={user}
                  profileLink={profileLink}
                  postDescription={postDescription}
                  postId={postId}
                  numberOfComments={numberOfComments}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default PostView;
