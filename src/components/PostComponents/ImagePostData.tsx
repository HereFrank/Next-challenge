import { ImagePostData } from "@/types";
import { Avatar, Col, Space, Typography } from "antd";

const { Text, Title } = Typography;

const ImagePostData = ({
  user,
  profileLink,
  postDescription,
}: ImagePostData) => {
  return (
    <Col md={24} lg={12}>
      <div className="profileMenu p-3">
        <div className="mt-3">
          <Space align="center">
            <Avatar src={profileLink} />
            <Text className="textGreen text-lg isButton">{user}</Text>
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
            style={{ maxHeight: "400px", overflow: "auto" }}
          >
            <div className="my-3">
              <Title
                type="secondary"
                level={5}
                style={{ fontSize: "18px !important" }}
              >
                Comments
              </Title>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ImagePostData;
