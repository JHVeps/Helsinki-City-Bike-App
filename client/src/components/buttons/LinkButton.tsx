import { LinkButtonProps } from "types/general.types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LinkButton = (props: LinkButtonProps) => {
  const { textDecoration, color, fontSize, path, title } = props;
  return (
    <Button>
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
