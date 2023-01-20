import { Col, Row, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import LensLogo from "public/lens-logo.svg";

export const Navbar = () => {
  return (
    <div className="container-fluid maxWidth">
      <Row justify={"space-between"} align={"middle"} gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} span={12}>
          <Link href="/">
            <div className="d-flex justify-content-center">
              <Image
                src={LensLogo.src}
                alt="Lens Company Logo"
                width={304}
                height={87}
              />
            </div>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} span={12}>
          <Row justify={"space-between"}>
            <Col>
              <Button
                href="https://docs.lens.xyz/docs/what-is-lens"
                type="text"
                className="text-md textGreen"
              >
                Lens 101
              </Button>
            </Col>
            <Col>
              <Button type="primary">Log In / Sign Up</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
