import { Col, Row, Button } from "antd";
import {
  ArrowDownOutlined,
  InboxOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import styles from "./sortButtons.module.css";
import { ActiveButton, CardData, SortMode } from "@/types";
import { useState } from "react";

const SortButtons = ({
  setSortMode,
  sortMode,
  setData,
}: {
  setSortMode: (newSortMode: SortMode) => void;
  sortMode: SortMode;
  setData: (newSetData: CardData[]) => void;
}) => {
  const handleLatest = () => {
    setSortMode("LATEST");
    setData([]);
  };
  const handleCollected = () => {
    setSortMode("TOP_COLLECTED");
    setData([]);
  };
  const handleMirrored = () => {
    setSortMode("TOP_MIRRORED");
    setData([]);
  };
  return (
    <Row align={"middle"} gutter={[8, 8]}>
      <Col>
        <Button
          shape="round"
          className={`${styles.sortButton} ${
            sortMode === "LATEST" ? styles.sortButtonActive : ""
          }`}
          onClick={handleLatest}
        >
          Date created
          <ArrowDownOutlined />
        </Button>
      </Col>
      <Col>
        <Button
          shape="round"
          className={`${styles.sortButton} ${
            sortMode === "TOP_COLLECTED" ? styles.sortButtonActive : ""
          }`}
          onClick={handleCollected}
        >
          Most collected
          <InboxOutlined />
        </Button>
      </Col>
      <Col>
        <Button
          shape="round"
          className={`${styles.sortButton} ${
            sortMode === "TOP_MIRRORED" ? styles.sortButtonActive : ""
          }`}
          onClick={handleMirrored}
        >
          Most mirrored
          <SwapOutlined />
        </Button>
      </Col>
    </Row>
  );
};

export default SortButtons;
