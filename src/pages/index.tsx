import type { NextPage } from "next";
import { NavBar } from "../components";
import { Home } from "../modules";

const HomePage: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default HomePage;
