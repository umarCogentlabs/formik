import { useEffect, useState } from "react";

const Child_Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`object ${count}`);
  });

  return (
    <h1>
      Hi I am child component <p>123</p>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </h1>
  );
};

export default Child_Component;
