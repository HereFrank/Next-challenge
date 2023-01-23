import { UserData } from "@/types";
import { InboxOutlined } from "@ant-design/icons";
import { Avatar, Button, Space, Typography } from "antd";
import { useEffect } from "react";

const { Text } = Typography;
const UserComponent = ({
  followers,
  following,
  user,
  profileLink,
}: UserData) => {
  useEffect(() => {
    console.log("profileLink", profileLink);
  }, []);

  return (
    <>
      <div className="profileMenu p-3 d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
          <Space direction="vertical" className="text-center">
            <Avatar src={profileLink} size="large" />
            <Text className="textGreen">{user}</Text>
          </Space>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <Space direction="horizontal" align="center" className="text-center">
            <div className="text-center d-flex flex-column">
              <Text className="text-sm textWhite">{followers}</Text>
              <Text type="secondary" className="text-sm">
                Followers
              </Text>
            </div>
            <div className="text-center d-flex flex-column">
              <Text className="text-sm textWhite">{following}</Text>
              <Text type="secondary" className="text-sm">
                Following
              </Text>
            </div>
          </Space>
        </div>
        <div className="mt-3 text-center"></div>
      </div>
      <div className="profileMenu p-3 mt-2">
        <Space direction="vertical">
          <Button type="text" disabled>
            <Text className="textWhite">Lens Publications</Text>
          </Button>
          <Button type="text" disabled>
            <Text type="secondary">
              Collected Posts <InboxOutlined />
            </Text>
          </Button>
        </Space>
      </div>
    </>
  );
};

export default UserComponent;
