import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Component = styled.div`
  width: 80%;
  height: 100%;
`;

const TruckMap = () => {
  
  return (
    <Component>
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </Component>
  );
};

export default TruckMap;
