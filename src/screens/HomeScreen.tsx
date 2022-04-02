import { BtnMyLocation, MapView, SearchBar, ViteLogo } from "../components";

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ViteLogo />
      <SearchBar />
    </div>
  );
};
