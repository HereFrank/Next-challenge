import { Footer } from "./Footer";
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
      <Footer />
    </Layout>
  );
};
