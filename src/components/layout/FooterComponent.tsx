import { Button, Col, Layout, Row, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;
export const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: "#000" }}>
      <Row justify={"space-between"} align={"middle"} gutter={[16, 16]}>
        <Col
          className="text-center d-flex flex-column"
          xs={24}
          sm={24}
          md={12}
          lg={12}
        >
          <Text className="textWhite">
            Made by your frens at{" "}
            <a href="https://thegallerydao.io" className="text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={"0"}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
            </a>
          </Text>
          <Text className="textWhite">AI engine from Selas Studio</Text>
        </Col>
        <Col>
          <Row justify={"center"} gutter={[8, 8]}>
            <Col>
              <Button
                type="text"
                href="https://www.artofficialintelligence.xyz/faq"
              >
                <span className="textWhite">FAQ</span>
              </Button>
            </Col>
            <Col>
              <Button
                type="text"
                href="https://www.artofficialintelligence.xyz/tac"
              >
                <span className="textWhite">Terms & Conditions</span>
              </Button>
            </Col>
            <Col>
              <Button
                type="text"
                href="https://www.artofficialintelligence.xyz/privacy"
              >
                <span className="textWhite">Privacy Policy</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
};
