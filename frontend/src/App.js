import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import HomeSetRoutes from "./components/Pages/HomeSetRoues";
import HomeUsers from "./components/Pages/HomeUsers";
import HomeDrivers from "./components/Pages/HomeDrivers";
import DashBoard from "./components/Pages/DashBoard";
import Login from "./components/Pages/login";
import DriverRoute from "./components/Pages/DriverRoute";
import UserPage from "./components/Pages/Userpage";

const Component = styled.div`
  width: 100%;
  height: 100vh;
  /* overflow-y: scroll; */
`;


function App() {
  return (
    <Component>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" extact element={<DashBoard/>} />

        <Route path="/home" element={<HomeSetRoutes key={1} />} />
        <Route path="/home/users" element={<HomeUsers key={2}  />} />
        <Route path="/home/drivers" element={<HomeDrivers key={3} />} />
        <Route path="/driver" element={<DriverRoute/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    </Component>
  );
}

export default App;
