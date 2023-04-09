import React from "react";
import styled from "styled-components";
import Table from "../../Items/Table";
import TruckMap from "../../Items/TruckMap";

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
const Title = styled.h1`
  
`;
const MapContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;
const TableContainer = styled.div``;
const TableHeader = styled.h2`
  font-weight: bold;
`;
const SetRoutes = () => {
  return (
    <Component>
      <ComponentInside>
        <Title>SetRoutes</Title>
        <MapContainer>
          <TruckMap />
        </MapContainer>
        <TableContainer>
          <TableHeader>Routes</TableHeader>
          <Table />
        </TableContainer>
      </ComponentInside>
    </Component>
  );
};

export default SetRoutes;
