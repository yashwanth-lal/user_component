import React from "react";
interface Props {
  height?: string;
  width?: string;
  icon?: any;
  alt?: string
}

const AppIcons = ({ height, width, icon, alt }: Props) => {
  return (
    <>
      <img src={icon} alt={alt} style={{ height: height, width: width }}></img>
    </>
  );
};

export default AppIcons;