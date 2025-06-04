import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      style={{
        backgroundColor: "#475467",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <MoonLoader
        color="#F7F7F7"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={0.5}
      />
    </div>
  );
}
