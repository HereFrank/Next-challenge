import { FooterComponent } from "./FooterComponent";
import { Navbar } from "./Navbar";
import { Layout } from "antd";
import { useEffect, useState } from "react";
import { getRandomRGB } from "@/helpers";

export const LayoutComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [canChange, setCanChange] = useState(true);
  const [fillColors, setFillColors] = useState({
    rec1: getRandomRGB(),
    rec2: getRandomRGB(),
    rec3: getRandomRGB(),
    rec4: getRandomRGB(),
  });

  const handleMouseMove = (event: any) => {
    if (canChange) {
      setCanChange(false);
      setFillColors({
        rec1: getRandomRGB(),
        rec2: getRandomRGB(),
        rec3: getRandomRGB(),
        rec4: getRandomRGB(),
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    if (canChange === false) {
      setTimeout(() => setCanChange(true), 100);
    }
  }, [canChange]);

  return (
    <Layout className="layout" onMouseMove={handleMouseMove}>
      <Navbar fillColors={fillColors} />
      {children}
      <FooterComponent />
    </Layout>
  );
};
