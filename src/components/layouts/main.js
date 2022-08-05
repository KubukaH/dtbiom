import { Outlet } from "react-router-dom";
import { FooterSection } from "../main/footer";
import NavigationBar from "./navbar";

const MainLayout  = () => {

  return (
    <main>
      <NavigationBar />
      <Outlet />
      <FooterSection />
    </main>
  );
};

export default MainLayout;
