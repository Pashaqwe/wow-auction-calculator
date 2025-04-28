import { Alert, Flex, Statistic, Typography } from "antd";
import { StormDustForm } from "./modules";
import { useState } from "react";

export function StormDustPage() {
  const [profit, setProfit] = useState(0);

  return (
    <Flex justify="center" style={{ width: "100%" }}>
      <Flex gap={10} vertical style={{ maxWidth: "600px" }}>
        <Typography.Title>Распыление сияющих осколков</Typography.Title>
        <Alert
          style={{ maxWidth: "fit-content" }}
          message={
            <Flex vertical>
              <Typography.Text>
                Рассчитывается минимальная прибыль с учетом комиссии банка.
              </Typography.Text>
              <Typography.Text>
                При расчетах был использован флакон урожайных времен года
                третьего грейда и раса кровавый эльф.
              </Typography.Text>
              <Typography.Text>
                Цена указывается в формате золотых.серебряных(10.09 - 10
                золотых, 9 серебряных).
              </Typography.Text>
            </Flex>
          }
        />

        <StormDustForm setProfit={setProfit} />

        <Statistic
          title="Минимальная прибыль"
          valueStyle={{ color: profit < 0 ? "#cf1322" : "#3f8600" }}
          value={profit}
        />
      </Flex>
    </Flex>
  );
}
