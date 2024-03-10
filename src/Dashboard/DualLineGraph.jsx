import { useEffect, useState } from "react";
import { DualAxes } from "@ant-design/charts";
import { Col, DatePicker, Row } from "antd";
const { RangePicker } = DatePicker;


const data = [
  {
    year: "1991",
    value: 3,
    count: 10,
  },
  {
    year: "1992",
    value: 4,
    count: 4,
  },
  {
    year: "1993",
    value: 3.5,
    count: 5,
  },
  {
    year: "1994",
    value: 5,
    count: 5,
  },
  {
    year: "1995",
    value: 4.9,
    count: 4.9,
  },
  {
    year: "1996",
    value: 6,
    count: 35,
  },
  {
    year: "1997",
    value: 7,
    count: 7,
  },
  {
    year: "1998",
    value: 9,
    count: 1,
  },
  {
    year: "1999",
    value: 13,
    count: 20,
  },
];


const DualLineGraph = () => {
  const [statics, setStatics] = useState([[{}], [{}]])

  useEffect(()=> {
    setStatics([data, data])
  },[])

  const config = {
    
    data: statics,
    xField: "year",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
      },
      {
        geometry: "line",
        color: "#5AD8A6",
      },
    ],
    xAxis: {
        visible: true,
        line: {
            visible:true
        },

        label: {
            autoHide: true,
            formatter: (v) => v
        },
    },
    yAxis: {
        visible: true,
        min: 0
    },
  };

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <DualAxes  autoFit  {...config} />
        <RangePicker format={'MMM D, YYYY'} />
      </Col>
    </Row>
  );
};

export default DualLineGraph;
