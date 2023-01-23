import { Space, Typography } from "antd";
import {
  CommentOutlined,
  InboxOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { CardData } from "@/types";
import Link from "next/link";
import { useEffect } from "react";

const { Text } = Typography;

const CardImage = ({
  imageLink,
  user,
  createdAt,
  collects,
  mirrors,
  comments,
  postId,
}: CardData) => {
  return (
    <div className="d-flex justify-content-center">
      <Link href={`post/${postId}`}>
        <div className="img__wrap">
          {/* eslint-disable-next-line */}
          <img
            src={imageLink}
            alt="Card Image"
            className="img-fluid isButton roundedImage"
          />
          <div className="prompt_img__description d-flex align-items-center justify-content-between container-fluid">
            <Space direction="vertical" className="textWhite">
              <Text className="textGreen">{user}</Text>
              <Text className="textWhite">Created at: {createdAt}</Text>
              <Text className="textWhite d-flex">
                <InboxOutlined className="d-flex align-items-center" />
                <span className="ms-1">{collects}</span>
              </Text>
              <Text className="textWhite d-flex">
                <SwapOutlined className="d-flex align-items-center" />
                <span className="ms-1">{mirrors}</span>
              </Text>
              <Text className="textWhite d-flex">
                <CommentOutlined className="d-flex align-items-center" />
                <span className="ms-1">{comments}</span>
              </Text>
            </Space>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardImage;
