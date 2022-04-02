import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "es",
    access_token:
      "pk.eyJ1IjoiamRhdmlzMTk4NyIsImEiOiJjbDFmajYwbWIwaGVtM2ltaTV3eHh5NGNrIn0.C8do9OC261c_dmkHaPf_Ng",
  },
});

export default searchApi;
