import Image from "next/image";
import { Space, Typography } from "antd";
import {
  CommentOutlined,
  InboxOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { CardData } from "@/types";

const { Text } = Typography;

const CardImage = ({
  imageLink,
  user,
  createdAt,
  collects,
  mirrors,
  comments,
}: CardData) => {
  return (
    <div className="d-flex justify-content-center">
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
            <Text className="textWhite d-flex alig-items-center">
              <InboxOutlined /> <span>{collects}</span>
            </Text>
            <Text className="textWhite d-flex alig-items-center">
              <SwapOutlined /> <span>{mirrors}</span>
            </Text>
            <Text className="textWhite d-flex alig-items-center">
              <CommentOutlined /> <span>{comments}</span>
            </Text>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
