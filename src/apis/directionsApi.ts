import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiamRhdmlzMTk4NyIsImEiOiJjbDFmajYwbWIwaGVtM2ltaTV3eHh5NGNrIn0.C8do9OC261c_dmkHaPf_Ng",
  },
});

export default directionsApi;
