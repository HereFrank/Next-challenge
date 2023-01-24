import { FooterComponent } from "./FooterComponent";
import { Navbar } from "./Navbar";
import { Layout } from "antd";
import { useMouseMoveEffect } from "@/hooks/useMouseMoveEffect";

export const LayoutComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { fillColors, handleMouseMove } = useMouseMoveEffect();

  return (
    <Layout className="layout" onMouseMove={handleMouseMove}>
      <Navbar fillColors={fillColors} />
      {children}
      <FooterComponent />
    </Layout>
  );
};
