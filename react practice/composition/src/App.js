import logo from "./logo.svg";
import "./App.css";
import Child_Component from "./components/child_component";

function App(props) {
  return (
    <div className='App'>
      <h1>Hello world</h1>
      <Child_Component>{props.children}</Child_Component>
    </div>
  );
}

export default App;
