import { Outlet } from "react-router-dom";
import { FooterSection } from "../main/footer";
import StatisticsPage from "../main/statisticsPage";
import NavigationBar from "./navbar";

const MainLayout  = () => {

  return (
    <main>
      <NavigationBar />
      <Outlet />
      <StatisticsPage />
      <FooterSection />
    </main>
  );
};

export default MainLayout;
