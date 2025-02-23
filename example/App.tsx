import React from "react";
import DashboardCard from "../src";
import { message, Row, Col } from "antd";
import {
  AreaChartOutlined,
  DotChartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default () => {
  const list: any = [
    {
      title: "内容生成量",
      count: "5367",
      color: "#F78435",
      icon: <AreaChartOutlined />,
    },
    {
      title: "内容点击量",
      count: "123",
      color: "#6BCE6B",
      icon: <DotChartOutlined />,
    },
    {
      title: "内容曝光量",
      count: "5643",
      color: "#59a6e5",
      icon: <HeartOutlined />,
    },
    {
      title: "用户活跃数",
      count: "7779",
      color: "#ec7f7f",
      icon: <UserOutlined />,
    },
  ];
  return (
    <div style={{ padding: "10px 30px" }}>
      <h3>默认主题</h3>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                onClick={() => {
                  message.info("点击了卡片");
                }}
              />
            </Col>
          );
        })}
      </Row>
      <h3>S1</h3>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                onClick={() => {
                  message.info("点击了卡片");
                }}
                theme="s1"
                bgGradient
              />
            </Col>
          );
        })}
      </Row>
      <h3>S2</h3>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                onClick={() => {
                  message.info("点击了卡片");
                }}
                theme="s2"
              />
            </Col>
          );
        })}
      </Row>
      <h3>S3</h3>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                onClick={() => {
                  message.info("点击了卡片");
                }}
                theme="s3"
              />
            </Col>
          );
        })}
      </Row>
      <h3>S4</h3>
      <Row gutter={20}>
        {list.map((item: any, index: number) => {
          return (
            <Col span={6}>
              <DashboardCard
                key={index}
                {...item}
                onClick={() => {
                  message.info("点击了卡片");
                }}
                theme="s4"
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
