import { Button, Form, InputNumber, Select } from "antd";
import {
  AVERAGE_DUST_PER_FRAGMENT,
  BANK_COMMISSION,
  FRAGMENTS_QUALITY_SELECT_OPTIONS,
  INITIAL_VALUES,
  MIN_DUST_PER_FRAGMENT,
} from "./constants";

type TStormDustFormProps = {
  setMinProfit: (minProfit: number) => void;
  setAverageProfit: (averageProfit: number) => void;
  setAmountMoneySpent: (amountMoneySpent: number) => void;
};

type TFormValues = {
  fragmentsCount: number;
  shiningFragmentPrice: number;
  stormDustPrice: number;
};

export function StormDustForm({
  setMinProfit,
  setAverageProfit,
  setAmountMoneySpent,
}: Readonly<TStormDustFormProps>) {
  const onFinish = ({
    fragmentsCount,
    shiningFragmentPrice,
    stormDustPrice,
  }: TFormValues) => {
    const minRevenue = fragmentsCount * MIN_DUST_PER_FRAGMENT * stormDustPrice;
    const averageRevenue =
      fragmentsCount * AVERAGE_DUST_PER_FRAGMENT * stormDustPrice;
    const cost = fragmentsCount * shiningFragmentPrice;
    const bankCommissionMinRevenue = minRevenue * BANK_COMMISSION;
    const bankCommissionAverageRevenue = minRevenue * BANK_COMMISSION;

    setMinProfit(Math.floor(minRevenue - cost - bankCommissionMinRevenue));
    setAverageProfit(
      Math.floor(averageRevenue - cost - bankCommissionAverageRevenue)
    );
    setAmountMoneySpent(Math.floor(fragmentsCount * shiningFragmentPrice));
  };

  return (
    <Form initialValues={INITIAL_VALUES} onFinish={onFinish}>
      <Form.Item
        required
        rules={[{ required: true, message: "Обязательное поле" }]}
        name="fragmentsQuality"
        label="Кол-во осколков"
      >
        <Select
          style={{ maxWidth: "200px" }}
          options={FRAGMENTS_QUALITY_SELECT_OPTIONS}
        />
      </Form.Item>
      <Form.Item
        required
        rules={[{ required: true, message: "Обязательное поле" }]}
        name="fragmentsCount"
        label="Кол-во осколков"
      >
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item
        required
        rules={[{ required: true, message: "Обязательное поле" }]}
        name="shiningFragmentPrice"
        label="Цена одного сияющего осколка"
      >
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item
        required
        rules={[{ required: true, message: "Обязательное поле" }]}
        name="stormDustPrice"
        label="Цена одной штормовой пыли"
      >
        <InputNumber controls={false} />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Рассчитать
        </Button>
      </Form.Item>
    </Form>
  );
}
