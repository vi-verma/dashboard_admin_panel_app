import { useEffect, useState } from "react";
import { DualAxes } from "@ant-design/charts";
import { Col, DatePicker, Row } from "antd";
import LoderSkeleton from "./DashboardLoder";
import { dateFormateDefault } from "../utils.js/dateFormat";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const data = [
  {
    date: "01/03/2001",
    value: 3,
    count: 10,
    averageOrderValue: '10000',
    conversionRate: '2',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2002",
    value: 4,
    count: 4,
    averageOrderValue: '10000',
    conversionRate: '4',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2003",
    value: 3.5,
    count: 5,
    averageOrderValue: '10000',
    conversionRate: '7',
    grossSales: '12000',
    netReturnValue: '176999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2004",
    value: 5,
    count: 5,
    averageOrderValue: '10000',
    conversionRate: '5',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2005",
    value: 4.9,
    count: 4.9,
    averageOrderValue: '10000',
    conversionRate: '17',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2006",
    value: 6,
    count: 35,
    averageOrderValue: '10000',
    conversionRate: '13',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2007",
    value: 7,
    count: 7,
    averageOrderValue: '10000',
    conversionRate: '16',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2008",
    value: 9,
    count: 1,
    averageOrderValue: '10000',
    conversionRate: '14',
    grossSales: '12000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
  {
    date: "01/03/2009",
    value: 13,
    count: 20,
    averageOrderValue: '10000',
    conversionRate: '13',
    grossSales: '164000',
    netReturnValue: '135999',
    storeSearchConversion: '234',
    returnRate: '14'
  },
];

const DualLineGraph = (Props) => {
  const [dataList, setdataList] = useState([[{}], [{}]]);

  useEffect(() => {
    setdataList([data, data]);
  }, []);

  const handleDateRangeChange = (val) => {
    console.log(
      "val1",
      dateFormateDefault(val[0]),
      "val2",
      dateFormateDefault(val[1])
    );
    const filterDatalist = dataList[0].filter(
      (el) =>
        dayjs(el.date) > dayjs(val[0]) &&
        dayjs(el.date) < dayjs(val[1])
    );

    console.log("filterDatalist", filterDatalist);
  };

  const config = {
    data: dataList,
    xField: "date",
    yField: ["value", "count"],
    geometryOptions: [
      {
        geometry: "line",
        color: "#5B8FF9",
        smooth: false,
        lineStyle: {
          lineWidth: 4,
          opacity: 0.5,
        },
      },
      {
        geometry: "line",
        color: "#5AD8A6",
        smooth: true,
        lineStyle: {
          lineWidth: 2,
          lineDash: [5, 5],
          opacity: 0.3,
        },
      },
    ],
    xAxis: {
      visible: true,
      line: {
        visible: true,
      },

      label: {
        autoHide: true,
        formatter: (v) => dateFormateDefault(v),
      },
    },
    yAxis: {
      visible: true,
      min: 0,
    },
  };

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        {Props.isLoding ? (
          <LoderSkeleton />
        ) : (
          <>
            <DualAxes autoFit {...config} />
            <RangePicker
              onChange={handleDateRangeChange}
              format={"MMM D, YYYY"}
            />
          </>
        )}
      </Col>
    </Row>
  );
};

export default DualLineGraph;
