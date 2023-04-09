import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  Popup,
  useMap,
  LayersControl,
} from "react-leaflet";
import { useGeolocated } from "react-geolocated";
import { icon } from "leaflet";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import DeleteIcon from "@mui/icons-material/Delete";
import FireTruckIcon from "@mui/icons-material/FireTruck";

import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { Backdrop, CircularProgress } from "@mui/material";

const Component = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TruckMap = () => {
  const [position, setPosition] = useState(null);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
  useEffect(() => {
    if (isGeolocationAvailable) {
      setPosition(coords);
      console.log(coords);
    }
  }, [coords]);

  return (
    <Component>
      {coords ? (
        <MapContainer
          center={coords ? [coords.latitude, coords.longitude] : [45.4, -75.7]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerLayer draggable={true}>
            <Marker
              draggable={true}
              position={[coords.latitude, coords.longitude]}
            >
              <FireTruckIcon color="primary" />
            </Marker>
          </MarkerLayer>
        </MapContainer>
      ) : (
        <Backdrop open={!coords}>
          <CircularProgress />
        </Backdrop>
      )}
    </Component>
  );
};

export default TruckMap;
