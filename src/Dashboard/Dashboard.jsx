import { Col, Collapse, Row } from "antd";
import { useState } from "react";
import DetailIndexCard from "./DetailIndexCard";
import DualLineGraph from "./DualLineGraph";
import { dropdownDataList } from "../dataset/data";

const { Panel } = Collapse;
const data = [
  {
    id: 1,
    key: 'onlineStoreSesson',
    title: "Online Store Sesson",
    currentValue: "255,581",
    changePercent: "9",
  },
  {
    id: 2,
    key: 'netReturnValue',
    title: "Net Return Value",
    currentValue: "15,07.44",
    changePercent: "3",
  },
  {
    id: 3,
    key: "totalOrders",
    title: "Total Orders",
    currentValue: "10,511",
    changePercent: "2",
  },
  {
    id: 4,
    key: "conversionRate",
    title: "Conversion Rate",
    conversionRate: "3.18",
    changePercent: "7",
  },
];

const Dashboard = (Props) => {
  const [activeKey, setActiveKey] = useState(1);
  // const [dropdownList, setDropdownList] = useState([]);
  const [dashboardItemList, setdashboardItemList] = useState(data);

  console.log('dashboardItemList',dashboardItemList)

  const handleMenuClick = (val) => {
    console.log("val>>", val);
    //need to update on change through selected item
    const newItem = dropdownDataList.find(el => el.key === val.menuId)
    console.log("newItem",newItem);

    setdashboardItemList(prev => {
      let updatedItem = [...prev];
      updatedItem.splice(val.index, 1, {...newItem});
      return [...updatedItem]
    })
    
  };

  const handleCollapseChange = (key) => {
    setActiveKey((prev) => (prev === key ? "" : key));
  };



  const cardProps = {
    dashboardItemList,
    isLoding: Props.isLoding,
    handleMenuClick
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
              {/* {data.map((item) => ( */}
              {dashboardItemList.map((item, index) => (
                <Col key={item.id} sm={6} md={6} lg={6} xl={6} xxl={6}>
                  <DetailIndexCard {...item} {...cardProps} index={index} />
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
