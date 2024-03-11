import { Col, Row, Skeleton, Typography } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { FaPencilAlt } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import DetailOverlay from "./Overlay";
import styles from "../app.module.css";
import { CheckPositiveNegativeValue } from "../utils.js/CheckPositiveNegativeValue";

const { Text } = Typography;

const DetailIndexCard = (Props) => {
  const skeletonProps = {
    title: { width: "75%" },
    paragraph: { rows: 1, width: "100%" },
    active: true,
  };

  return (
    <div className={`${styles.editHover} ${styles.detailCardHover}`}>
      {Props.isLoding ? (
        <div className={styles.cardBcg}>
          <Skeleton {...skeletonProps}></Skeleton>
        </div>
      ) : (
        <>
          <Row justify={'space-between'}>
            <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
              <DetailOverlay>
                <Text className={styles.dashedBottomBorder} strong>
                  {Props.title}
                </Text>
              </DetailOverlay>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
              <DropdownMenu>
                <FaPencilAlt
                  className={styles.editIcon}
                  height={16}
                  width={16}
                />
              </DropdownMenu>
            </Col>
          </Row>
          <Text className={styles.fontSize16} strong>
            { `${CheckPositiveNegativeValue(Props.currentValue)}` || `${CheckPositiveNegativeValue(Props.conversionRate)} %`}
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
    </div>
  );
};

export default DetailIndexCard;
