import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
