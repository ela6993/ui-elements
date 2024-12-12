import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";

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
      <Input label = 'Ordinary'/>
      <Input label = 'Safe' defaultValue = 'safe'/>
      <Input label = 'Danger' defaultValue = 'danger'/>


      <h1>Typography Component</h1>
      <Typography textSize = 'sm'>SM. Our mission is to redefine the model of learning and re-engineer
its process by providing innovative administrative and instructional
technologies. Click here for our beliefs. If you are a school
administrator and would like to use ecourse.org for your classes,
please create school profiles. Instructors and students may signup
independent user account. For questions, contact us.</Typography>
      <Typography textSize = 'md'>
      MD. Our mission is to redefine the model of learning and re-engineer
its process by providing innovative administrative and instructional
technologies. Click here for our beliefs. If you are a school
administrator and would like to use ecourse.org for your classes,
please create school profiles. Instructors and students may signup
independent user account. For questions, contact us.
      </Typography>
      <Typography textSize = 'lg'>
      LG. Our mission is to redefine the model of learning and re-engineer
its process by providing innovative administrative and instructional
technologies. Click here for our beliefs. If you are a school
administrator and would like to use ecourse.org for your classes,
please create school profiles. Instructors and students may signup
independent user account. For questions, contact us.
      </Typography>

      <h1>Heading Component</h1>
      <Heading level = {1}>Heading 1</Heading>
      <Heading level = {2}>Heading 2</Heading>
      <Heading level = {3}>Heading 3</Heading>
      <Heading level = {4}>Heading 4</Heading>
      <Heading level = {5}>Heading 5</Heading>
      <Heading level = {6}>Heading 6</Heading>

      <h1>Tooltip Component</h1>
      <div className="tooltipexample">
      <Tooltip text = 'Tooltip Text' position = 'top'>Top Tooltip</Tooltip>
      <Tooltip text = 'Tooltip Text' position = 'left'>Left Tooltip</Tooltip>
      <Tooltip text = 'Tooltip Text' position = 'right'>Right Tooltip</Tooltip>
      <Tooltip text = 'Tooltip Text' position = 'bottom'>Bottom Tooltip</Tooltip>
      </div>

      <h1>Accordion Component</h1>
      <Accordion title = 'Accordion 1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
      <Accordion title = 'Accordion 2' defaultOpen = {false}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
      </div>
  );
}

export default App;
