import "./App.css";
import Navbar from "./components/Items/Navbar";
import Sidebar from "./components/Items/Sidebar";
import TruckMap from "./components/Items/TruckMap";
import styled from "styled-components";
import Users from "./components/Pages/Components/Users";
import { Routes, Route, Link } from "react-router-dom";
import HomeSetRoutes from "./components/Pages/HomeSetRoues";
import HomeUsers from "./components/Pages/HomeUsers";
import HomeDrivers from "./components/Pages/HomeDrivers";
import DashBoard from "./components/Pages/DashBoard";
import Login from "./components/Pages/login";
import Signup from "./components/Pages/Signup";

const Component = styled.div`
  width: 100%;
  height: 100vh;
  /* overflow-y: scroll; */
`;


function App() {
  return (
    // <Component>
    //   <Routes>
    //     <Route path="/login" element={<Login/>}/>
    //     <Route path="/" extact element={<Dashboard/>} />

    //     <Route path="/home" element={<HomeSetRoutes key={1} />} />
    //     <Route path="/home/users" element={<HomeUsers key={2}  />} />
    //     <Route path="/home/drivers" element={<HomeDrivers key={3} />} />
    //   </Routes>
    // </Component>
    <Signup/>
  );
}

export default App;
