import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { WhatsAppIcon } from "../../Icons/Icons";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className="fixed right-6 bottom-6">
        <WhatsAppIcon />
      </div>
      <Footer />
    </>
  );
};
