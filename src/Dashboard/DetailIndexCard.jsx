import { Card, Col, Row, Skeleton, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { FaPencilAlt } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import DetailOverlay from "./Overlay";
import styles from "../app.module.css";

const { Text, Title } = Typography;

const DetailIndexCard = (Props) => {
  // {
  //   isLoding,
  //   id,
  //   title,
  //   currentValue,
  //   changePercent,
  //   conversionRate,
  // }
  const skeletonProps = {
    title: { width: "75%" },
    paragraph: { rows: 1, width: "100%" },
    active: true,
  };

  return (
    <Card className={styles.editHover}>
      {Props.isLoding ? (
        <Skeleton {...skeletonProps}></Skeleton>
      ) : (
        <>
          <Row >
            <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
              <DetailOverlay>
                <Text className={styles.dashedBottomBorder} strong>
                  {Props.title}
                </Text>
              </DetailOverlay>
            </Col>
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              
            >
              <DropdownMenu>
                <FaPencilAlt className={styles.editIcon} height={16} width={16}/>
              </DropdownMenu>
            </Col>
          </Row>
          <Text className={styles.fontSize16} strong>
            {Props.currentValue || `${Props.conversionRate} %`}
            <sapn>
              <Text style={{ marginLeft: "4px" }} type="secondary">
                {Props.changePercent > 0 ? (
                  <CaretUpOutlined size={"small"} />
                ) : (
                  <CaretDownOutlined size={"small"} />
                )}
                {Props.changePercent}%
              </Text>
            </sapn>
          </Text>
        </>
      )}
    </Card>
  );
};

export default DetailIndexCard;
