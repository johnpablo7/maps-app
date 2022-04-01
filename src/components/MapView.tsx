import { useContext, useLayoutEffect, useRef } from "react";
import { Map } from "mapbox-gl";

import { PlacesContext } from "../context";
import { Loading } from "./Loading";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading && userLocation) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: { lat: userLocation[1], lng: userLocation[0] }, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  console.log({ userLocation: userLocation?.join(",") });

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100vw",
      }}
    />
  );
};
