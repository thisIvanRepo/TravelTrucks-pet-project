import { Button } from "@mui/material";

type CustomCheckboxProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function CustomChekbox({
  active,
  onClick,
  children,
}: CustomCheckboxProps) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        borderColor: active ? "var(--button)" : "var(--gray-light)",
        width: "112px",
        height: "96px",
        borderRadius: "12px",
        color: "var(--main)",
        textTransform: "none",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {children}
    </Button>
  );
}
