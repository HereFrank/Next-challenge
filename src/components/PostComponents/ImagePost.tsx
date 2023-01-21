import { ImagePost } from "@/types";
import {
  CommentOutlined,
  InboxOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";

const ImagePost = ({
  imageLink,
  numberOfCollects,
  numberOfMirrors,
  numberOfComments,
}: ImagePost) => {
  console.log(imageLink);
  return (
    <Col md={24} lg={12}>
      <div className="text-center">
        {" "}
        {/* eslint-disable-next-line */}
        <img
          src={imageLink}
          alt="Post Image"
          className="img-fluid roundedImage "
        />
      </div>
      <div className="mt-3">
        <Row justify={"center"} gutter={16}>
          <Col>
            <Button type="text" className="textWhite">
              <SwapOutlined className="align-middle" />
              <span>{numberOfMirrors}</span>
            </Button>
          </Col>
          <Col>
            <Button type="text" className="textWhite">
              <InboxOutlined className="align-middle" />
              <span>{numberOfCollects}</span>
            </Button>
          </Col>
          <Col>
            <Button type="text" className="textWhite">
              <CommentOutlined className="align-middle" />
              <span>{numberOfComments}</span>
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ImagePost;
