import { LinkButtonProps } from "types/general.types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = ({
  textDecoration,
  color,
  fontSize,
  path,
  title,
}: LinkButtonProps) => {
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: "#e50914",
        },
      }}
    >
      <Link
        style={{
          textDecoration: textDecoration,
          color: color,
          fontSize: fontSize,
        }}
        to={path}
      >
        {title}
      </Link>
    </Button>
  );
};

export default LinkButton;
