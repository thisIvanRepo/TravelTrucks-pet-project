import Button from "@mui/material/Button";

type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  variant: "outlined" | "contained";
  text: string;
  width?: number;
};

export default function ButtonUseg({
  text,
  width,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={{
        textTransform: "none",
        fontFamily: "Inter, sans-serif",
        fontSize: 16,
        lineHeight: 1.5,
        backgroundColor: "var(--button)",
        color: "var(--white)",
        borderRadius: 200,
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
