import React from "react";
import styled from "styled-components";
import Navbar from "../Items/Navbar";
import TruckMap from "../Items/TruckMap";
import Sidebar from "../Items/Sidebar";
import Drivers from "./Components/Drivers";
import Users from "./Components/Users";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const HomeUsers = () => {
  return (
    <Component>
      <Sidebar key={3} />

      <Users />
    </Component>
  );
};

export default HomeUsers;
