import { ImagePost } from "@/types";
import {
  CommentOutlined,
  InboxOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import Link from "next/link";

const { Text } = Typography;
const CardImagePost = ({
  imageLink,
  numberOfCollects,
  numberOfMirrors,
  numberOfComments,
  postId,
}: ImagePost) => {
  return (
    <Link href={`/post/${postId}`}>
      <div className="img__wrap">
        {/* eslint-disable-next-line */}
        <img src={imageLink} className="img-fluid isButton roundedImage"></img>
        <div className="img__description d-flex align-items-center justify-content-between container-fluid">
          <Text className="m-0 d-flex">
            <InboxOutlined className="d-flex align-items-center me-1 textWhite" />
            <span className="textWhite">{numberOfCollects}</span>
          </Text>
          <Text className="m-0 d-flex">
            <SwapOutlined className="d-flex align-items-center me-1 textWhite" />
            <span className="textWhite">{numberOfMirrors}</span>
          </Text>
          <Text className="m-0 d-flex">
            <CommentOutlined className="d-flex align-items-center me-1 textWhite" />
            <span className="textWhite">{numberOfComments}</span>
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default CardImagePost;
