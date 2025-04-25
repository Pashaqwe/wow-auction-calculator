import { Button, Form, InputNumber } from "antd";

const initialValues = {
  fragmentsCount: 1000,
};

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
    const revenue = fragmentsCount * 3.75 * stormDustPrice;
    const cost = fragmentsCount * shiningFragmentPrice;

    setProfit(Math.floor(revenue - cost));
  };

  return (
    <Form
      initialValues={initialValues}
      labelCol={{ span: 16 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: "350px" }}
      onFinish={onFinish}
    >
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
