import viteLogo from "../logo.svg";

export const ViteLogo = () => {
  return (
    <img
      src={viteLogo}
      alt="Vite Logo"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "130px",
      }}
    />
  );
};
