import { GetServerSideProps } from "next";
import { getPost } from "@/lensQueries/getPost";
import { useEffect } from "react";
import { PostData } from "@/types";
import { Col, Layout, Row } from "antd";
import ImagePost from "@/components/PostComponents/ImagePost";
import ImagePostData from "@/components/PostComponents/ImagePostData";

export const getServerSideProps: GetServerSideProps = async (context) => {
  //@ts-ignore
  const { id } = context.params;

  let postData = {
    imageLink: "",
    numberOfCollects: null,
    numberOfMirrors: null,
    numberOfComments: null,
    user: "",
    profileLink: "",
    postDescription: "",
  };

  try {
    const {
      data: { publication },
    } = await getPost(id);
    console.log(publication);
    postData = {
      imageLink: `https://lens.infura-ipfs.io/ipfs/${
        publication.metadata.media[0].original.url.split("ipfs://")[1]
      }`,
      numberOfCollects: publication.stats.totalAmountOfCollects,
      numberOfMirrors: publication.stats.totalAmountOfMirrors,
      numberOfComments: publication.stats.totalAmountOfComments,
      user: `@${publication.profile.handle}`,
      profileLink: `https://lens.infura-ipfs.io/ipfs/${
        publication.profile.picture.original.url.split("ipfs://")[1]
      }`,
      postDescription: publication.metadata.content,
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
}: PostData) => {
  useEffect(() => {
    getPost("0x015c72-0x30").then((response) => console.log(response));
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
