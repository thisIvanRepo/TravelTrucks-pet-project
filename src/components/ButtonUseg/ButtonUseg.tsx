import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant: "outlined" | "contained";
  text: string;
  width?: number;
  to?: string;
};

export default function ButtonUseg({
  text,
  width,
  variant,
  onClick,
  to,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      component={to ? Link : "button"}
      to={to}
      sx={{
        textTransform: "none",
        fontFamily: "Inter, sans-serif",
        fontSize: 16,
        lineHeight: 1.5,
        backgroundColor:
          variant === "contained" ? "var(--button)" : "transparent",
        color: variant === "contained" ? "var(--white)" : "var(--main)",
        borderRadius: 200,
        borderColor: "var(--gray-light)",
        width: `${width || 166}px`,
        height: 56,
        transition: "300ms",

        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      {text}
    </Button>
  );
}
