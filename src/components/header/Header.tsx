import React from "react";

type PropsType = {
    name:string,
    job:string,
    mobile:string,
    email:string,
}

export const Header: React.FC<PropsType> = (props) => {
  return <div>
    {props.name}
  </div>;
};
