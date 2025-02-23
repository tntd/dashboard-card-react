# TNT dashboard 卡片组件

## 安装

```bash
npm i @tntx/dashboard-card-react --save
```

## 使用

```jsx
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
  );
};
```

## API

### 组件 API

| 参数     | 数据类型 | 是否必填 | 默认值  | 备注                         |
| -------- | -------- | -------- | ------- | ---------------------------- |
| nickname | String   | 是       | -       | 用户昵称                     |
| account  | String   | 是       | -       | 用户账号，用来判断使用颜色   |
| size     | number   | 否       | 32      | 头像大小（宽高）             |
| onClick  | function | 否       | -       | 卡片内的头像点击             |
| theme    | String   | 否       | default | 卡片内的主题，default、plant |
