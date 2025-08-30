import { useContext } from "react";
import { myContext } from "./app.jsx";
function Component3() {
  // myContext
  // we have to use the context that we have created

  let data = useContext(myContext); // data = { name: "Anuj", email: "a@gmail.com" }
  console.log("component3 is rendering");
  console.log(data);
  return (
    <>
      <p>Hi I am Component 3</p>
      <div>name:{data.name} </div>
      <div>email:{data.email} </div>
    </>
  );
}

export default Component3;
