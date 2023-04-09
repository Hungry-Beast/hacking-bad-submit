import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TruckMap from "../../Items/TruckMap";
import Table from "../../Items/Table";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SignupDriver from "./SignupDriver";
import TruckTable from "../../Items/TruckTable";
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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Drivers = () => {
  const [open, setOpen] = React.useState(false);
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

    fetch("http://localhost:5000/mapData/truck", requestOptions)
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
        <Title>Drivers</Title>
        <MapContainer>
          <TruckMap positions={positions} type={2} />
        </MapContainer>
        <TableContainer>
          <TableHeader>
            <TableTitle>Driver</TableTitle>
            <TableButton onClick={handleOpen}>Add Driver</TableButton>
          </TableHeader>
          <TruckTable drivers={drivers} />
        </TableContainer>
      </ComponentInside>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SignupDriver handleModalClose={handleClose} getDrivers={getDrivers} />
      </Modal>
    </Component>
  );
};

export default Drivers;
