import { useContext } from "react";
import { contextData } from "./app.jsx";

function C3() {
  let h=10;
  // here we are going to se the contxt that we have create
  let myContextData = useContext(contextData);
  console.log(myContextData);
  return (
    <>
      <div> userName:{myContextData.name} </div>
      <div>userEmail :{myContextData.email}</div>
    </>
  );
}

export default C3;
