import { Card, Col, Row } from "antd";
import { Skeleton } from "antd";

const DashboardLoder = () => {
  return (
    <Card>
          <Skeleton 
          co
          title={{
            width: '75%',
            
          }}
          paragraph={{
      rows: 1,
      width:'100%',
          }} active></Skeleton>

      {/* <Row gutter={16}>
        <Col sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Skeleton active></Skeleton>
        </Col>
        <Col sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Skeleton active></Skeleton>
        </Col>
      </Row> */}
    </Card>
  );
};

export default DashboardLoder;
