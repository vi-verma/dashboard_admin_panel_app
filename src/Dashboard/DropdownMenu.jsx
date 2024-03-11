import { Dropdown, Typography } from "antd";
import { BsGraphUp } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import styles from "../app.module.css";
import { useEffect, useState } from "react";

const { Text } = Typography;
const items = [
  {
    key: "1averageOrderValue",
    label: (
      <div className={styles.spaceBetween}>
        <Text>Average order value</Text>
        <BsQuestionCircle />
      </div>
    ),
    icon: <BsGraphUp />,
    disabled: false,
  },
  {
    key: "conversionRate",
    label: (
      <div className={styles.spaceBetween}>
        <Text>Conversion rate</Text>
        <BsQuestionCircle />
      </div>
    ),
    icon: <BsGraphUp />,
    disabled: false,
  },
  {
    key: "grossSales",
    label: (
      <div className={styles.spaceBetween}>
        <Text>Gross sales</Text>
        <BsQuestionCircle />
      </div>
    ),
    icon: <BsGraphUp />,
    disabled: false,
  },
  {
    key: "netReturnValue",
    label: (
      <div className={styles.spaceBetween}>
        <Text>Net return value</Text>
        <BsQuestionCircle />
      </div>
    ),
    icon: <BsGraphUp />,
    disabled: false,
  },
  {
    key: "storeSearchConversion",
    label: (
      <div className={styles.spaceBetween}>
        <Text>Store search conversion</Text>
        <BsQuestionCircle />
      </div>
    ),
    icon: <BsGraphUp />,
  },
  {
    key: "returnRate",
    label: (
      <div className={styles.spaceBetween}>
        <Text>Return rate</Text>
        <BsQuestionCircle />
      </div>
    ),
    icon: <BsGraphUp />,
    disabled: false,
  },
];

const DropdownMenu = (Props) => {
  const [dropdiwnList, setDropdownList] = useState(items);

  useEffect(() => {
    setDropdownList((prev) =>
      prev.map((el) => {
        return {
          ...el,
          disabled: Props.dashboardItemList.find((v) => v.key === el.key),
        };
      })
    );
  }, [Props.dashboardItemList]);

  const menuProps = {
    items: dropdiwnList,
    // items,
    onClick: (key) =>
      Props.handleMenuClick({
        menuId: key.key,
        id: Props?.id,
        index: Props.index,
      }),
  };

  return (
    <div>
      <Dropdown
        // trigger="click"
        menu={menuProps}
      >
        {Props.children}
      </Dropdown>
    </div>
  );
};

export default DropdownMenu;
