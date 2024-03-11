import { Col, Collapse, Row } from "antd";
import { useState } from "react";
import DetailIndexCard from "./DetailIndexCard";
import DualLineGraph from "./DualLineGraph";

const { Panel } = Collapse;

const Dashboard = (Props) => {
  const [activeKey, setActiveKey] = useState(1);

  const handleCollapseChange = (key) => {
    setActiveKey((prev) => (prev === key ? "" : key));
  };

  const data = [
    {
      id: 1,
      title: "Online Store Sesson",
      currentValue: "255,581",
      changePercent: "9",
    },
    {
      id: 2,
      title: "Net Return Value",
      currentValue: "15,07.44",
      changePercent: "3",
    },
    {
      id: 3,
      title: "Total Orders",
      currentValue: "10,511",
      changePercent: "2",
    },
    {
      id: 4,
      title: "Conversion Rate",
      conversionRate: "3.18",
      changePercent: "7",
    },
  ];

  const cardProps = {
    isLoding: Props.isLoding,
  };

  return (
    <div>
      <Collapse
        activeKey={activeKey}
        defaultActiveKey={1}
        onChange={handleCollapseChange}
        collapsible="icon"
        expandIconPosition="end"
        bordered={false}
      >
        <Panel
          header={
            <Row gutter={16}>
              {data.map((item) => (
                <Col key={item.id} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <DetailIndexCard {...item} {...cardProps} />
                </Col>
              ))}
            </Row>
          }
          key="1"
        >
          <DualLineGraph isLoding={Props.isLoding} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Dashboard;
