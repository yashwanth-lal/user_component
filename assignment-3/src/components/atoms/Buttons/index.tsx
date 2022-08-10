import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  handleClick?: () => void;
}

const Buttons = (props: Props) => {
  return <Button sx={{}} onClick={props.handleClick}>button</Button>;
};

export default Buttons;