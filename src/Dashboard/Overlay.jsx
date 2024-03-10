import { Dropdown, Typography } from "antd";
const { Text } = Typography;

const DetailOverlay = (Props) => {
  const items = [
    {
      key: "1",
      label: (
        <>
          <Text strong>Online store sessions</Text>
          <br/>
          <Text>
            {"Your online store's traffic volume, shown in sessions"}
          </Text>
        </>
      ),
    },
  ];

  return <Dropdown menu={{ items }}>{Props.children}</Dropdown>;
};

export default DetailOverlay;
