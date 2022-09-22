import { Outlet } from "react-router-dom";
import { BandMembers } from "../main/bandMembers";
import { FooterSection } from "../main/footer";
import { MusicList } from "../main/musicList";
import StatisticsPage from "../main/statisticsPage";
import NavigationBar from "./navbar";

const MainLayout  = () => {

  return (
    <main>
      <NavigationBar />
      <Outlet />
      <BandMembers />
      <StatisticsPage />
      <FooterSection />
    </main>
  );
};

export default MainLayout;
