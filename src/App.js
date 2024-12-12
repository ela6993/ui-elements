import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <h1>Button Component</h1>
      <Button size = 'lg'>Button</Button>
      <Button>Button</Button>
      <Button size = 'sm'>Button</Button><br></br>
      <Button variant = 'bordered' size = 'lg'>Button</Button>
      <Button variant = 'bordered'>Button</Button>
      <Button variant = 'bordered' size = 'sm'>Button</Button>
      <h1>Input Component</h1>
      <Input label = 'Hello'/>
    </div>
  );
}

export default App;
