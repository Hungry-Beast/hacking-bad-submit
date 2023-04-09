import React from "react";
import styled from "styled-components";
import TruckMap from "../../Items/TruckMap";
import Table from "../../Items/Table";

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
  return (
    <Component>
      <ComponentInside>
        <Title>Users</Title>
        <MapContainer>
          <TruckMap />
        </MapContainer>
        <TableContainer>
          <TableHeader>
            <TableTitle>Users</TableTitle>
            <TableButton>Add User</TableButton>
          </TableHeader>
          <Table />
        </TableContainer>
      </ComponentInside>
    </Component>
  );
};

export default Users;
