import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button size = 'lg'>Confirm</Button>
      <Button>Cancel</Button>
      <Button size = 'sm'>Cancel</Button><br></br>
      <Button variant = 'bordered' size = 'lg'>Cancel</Button>
      <Button variant = 'bordered'>Cancel</Button>
      <Button variant = 'bordered' size = 'sm'>Cancel</Button>

    </div>
  );
}

export default App;
