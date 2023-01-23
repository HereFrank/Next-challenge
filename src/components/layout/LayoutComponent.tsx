import { FooterComponent } from "./FooterComponent";
import { Navbar } from "./Navbar";
import { Layout } from "antd";

export const LayoutComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Layout className="layout">
      <Navbar />
      {children}
      <FooterComponent />
    </Layout>
  );
};
