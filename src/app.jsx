import { useState } from "react";

function App() {
  let isLogeIn = false;
  // let content;
  // if (isLogeIn) content = <Admin />;
  // else content = <User />;

  // console.log(content, typeof content);
  return (
    <>
      <MyButtons />
      <MyButtons />
      <div>hello india</div>
    </>
  );
}

function MyButtons() {
  let [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      click {count} times
    </button>
  );
}

export default App;
