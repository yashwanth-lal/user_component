import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  handleClick?: () => void;
}

const Buttons = (props:Props) => {

    
    return (
    <Button onclick={()=>props.handleClick}>button</Button>
  )
}

export default Buttons