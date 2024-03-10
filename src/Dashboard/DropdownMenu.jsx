import { Dropdown, Typography } from "antd";
import { BsGraphUp } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import styles from "../app.module.css";

const { Text } = Typography;

const DropdownMenu = (Props) => {
  const items = [
    {
      key: "1",
      label: (
        <div className={styles.spaceBetween}>
          <Text>Average order value</Text>
          <BsQuestionCircle />
        </div>
      ),
      icon: <BsGraphUp />,
    },
    {
      key: "2",
      label: (
        <div className={styles.spaceBetween}>
          <Text>Conversion rate</Text>
          <BsQuestionCircle />
        </div>
      ),
      icon: <BsGraphUp />,
    },
    {
      key: "3",
      label: (
        <div className={styles.spaceBetween}>
          <Text>Gross sales</Text>
          <BsQuestionCircle />
        </div>
      ),
      icon: <BsGraphUp />,
    },
    {
      key: "4",
      label: (
        <div className={styles.spaceBetween}>
          <Text>Net return value</Text>
          <BsQuestionCircle />
        </div>
      ),
      icon: <BsGraphUp />,
    },
    {
      key: "5",
      label: (
        <div className={styles.spaceBetween}>
          <Text>Store search conversion</Text>
          <BsQuestionCircle />
        </div>
      ),
      icon: <BsGraphUp />,
    },
    {
      key: "6",
      label: (
        <div className={styles.spaceBetween}>
          <Text>Return rate</Text>
          <BsQuestionCircle />
        </div>
      ),
      icon: <BsGraphUp />,
    },
  ];

  const handleMenuClick = (key) => {
    console.log("key", key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div>
      <Dropdown menu={menuProps}>{Props.children}</Dropdown>
    </div>
  );
};

export default DropdownMenu;
