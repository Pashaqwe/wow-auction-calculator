import { Alert, Flex, Statistic, Tag, Typography } from "antd";
import { StormDustForm } from "./modules";
import { useState } from "react";

export function StormDustPage() {
  const [profit, setProfit] = useState(0);

  return (
    <Flex gap={10} vertical style={{ maxWidth: "600px" }}>
      <Typography.Title>Распыление сияющих осколков</Typography.Title>
      <Alert
        style={{ maxWidth: "fit-content" }}
        showIcon
        message={
          <Flex vertical>
            <Typography.Text>
              Цена рассчитывается без учета комиссии аукциона и имеет
              погрешность
            </Typography.Text>
            <Typography.Text>
              При расчетах был использован флакон урожайных времен года третьего
              грейда и раса кровавый эльф
            </Typography.Text>
            <Typography.Text>
              Цена указывается в формате золотых.серебряных(10.09 - 10 золотых,
              9 серебряных)
            </Typography.Text>
          </Flex>
        }
      />

      <Flex>
        <Tag color="#CD7F32">Бронзовый осколок</Tag>
      </Flex>
      <StormDustForm setProfit={setProfit} />

      <Statistic title="Примерная прибыль" value={profit} />
    </Flex>
  );
}
