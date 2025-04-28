import { Button, Form, InputNumber, Select } from "antd";
import {
  BANK_COMMISSION,
  DUST_PER_FRAGMENT,
  FRAGMENTS_QUALITY_SELECT_OPTIONS,
  INITIAL_VALUES,
} from "./constants";

type TStormDustFormProps = { setProfit: (profit: number) => void };

type TFormValues = {
  fragmentsCount: number;
  shiningFragmentPrice: number;
  stormDustPrice: number;
};

export function StormDustForm({ setProfit }: Readonly<TStormDustFormProps>) {
  const onFinish = ({
    fragmentsCount,
    shiningFragmentPrice,
    stormDustPrice,
  }: TFormValues) => {
    const revenue = fragmentsCount * DUST_PER_FRAGMENT * stormDustPrice;
    const cost = fragmentsCount * shiningFragmentPrice;
    const bankCommission = revenue * BANK_COMMISSION;

    setProfit(Math.floor(revenue - cost - bankCommission));
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
