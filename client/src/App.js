import "./App.css";
import CardsPage from "./cards/pages/CardsPage";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import Sandbox from "./sandbox/Sandbox";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <CardsPage />
        {/* <AboutPage /> */}
        {/* <Sandbox /> */}
      </Layout>
    </div>
  );
};

export default App;
