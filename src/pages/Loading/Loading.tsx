import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <MoonLoader
        color="#E44848"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={0.5}
      />
    </div>
  );
}
