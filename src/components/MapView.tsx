import { useContext, useLayoutEffect, useRef } from "react";
import { Map } from "mapbox-gl";

import { MapContext, PlacesContext } from "../context";
import { Loading } from "./Loading";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // if (!isLoading && userLocation) {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL.. despues del mapbox/ =>[ /streets-v11 | /dark-v10 | /light-v10]
        // center: { lat: userLocation[1], lng: userLocation[0] },
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  // console.log({ userLocation: userLocation?.join(",") });

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
