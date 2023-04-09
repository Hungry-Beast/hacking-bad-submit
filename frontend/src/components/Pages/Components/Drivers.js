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
const TableHeader = styled.div``;
const Drivers = () => {
  return (
    <Component>
      <ComponentInside>
        <Title>Drivers</Title>
        <MapContainer>
          <TruckMap />
        </MapContainer>
        <TableContainer>
          <TableHeader>Drivers</TableHeader>
          <Table />
        </TableContainer>
      </ComponentInside>
    </Component>
  );
};

export default Drivers;
