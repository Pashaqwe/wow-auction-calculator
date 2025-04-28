import { ConfigProvider } from "antd";
import { StormDustPage } from "./pages";
import "@ant-design/v5-patch-for-react-19";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8860D0",
        },
      }}
    >
      <StormDustPage />
    </ConfigProvider>
  );
}

export default App;
