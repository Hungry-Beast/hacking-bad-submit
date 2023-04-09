import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TruckMap from "../../Items/TruckMap";
import DusbinMap from "../../Items/DusbinMap";
import Table from "../../Items/Table";
import { Modal } from "@mui/material";
import SignupUsers from "./SignupUsers";
import UserTable from "../../Items/UserTable";

const Component = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 20px 30px; */
  overflow-y: scroll;
`;
const ComponentInside = styled.div`
  width: 90%;
  margin: auto;
`;
const Title = styled.h1``;
const MapContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;
const TableContainer = styled.div``;
const TableHeader = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TableTitle = styled.h2`
  font-weight: bold;
`;
const TableButton = styled.button`
  all: unset;
  height: 70%;
  padding: 5px 15px;
  background-color: lightgreen;
  border-radius: 5px;
  border: 1px solid black;
`;
const Users = () => {
  const [open, setOpen] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [positions, setPosition] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getDrivers = () => {
    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + user.token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:5000/mapData/dusbins", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        const driverData = [];
        response[0].map((driver) => {
          let temp = driver;
          temp.id = temp._id;
          driverData.push(temp);
        });
        setDrivers(driverData);
        setPosition(response[1]);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <Component>
      <ComponentInside>
        <Title>Users</Title>
        <MapContainer>
          <DusbinMap />
        </MapContainer>
        <TableContainer>
          <TableHeader>
            <TableTitle>Users</TableTitle>
            <TableButton onClick={handleOpen}>Add User</TableButton>
          </TableHeader>
          <UserTable drivers={drivers} positions={positions} />
        </TableContainer>
      </ComponentInside>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignupUsers handleModalClose={handleClose} getDrivers={getDrivers} />
      </Modal>
    </Component>
  );
};

export default Users;
