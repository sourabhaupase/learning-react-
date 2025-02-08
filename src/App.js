import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet.js";
import Message from "./components/Message.js";
import FunctionClick from "./components/FunctionClick.js";
import EventBind from "./components/EventBind.js";
import ChildComponent from "./components/ChildComponent.js";
import NameList from "./components/NameList.js";
import Stylesheet from "./components/Stylesheet.js";
import Inline from "./components/Inline.js";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form.js";
import PureComp from "./components/PureComp.js";
import RefsDemo, { RefExample } from "./components/RefsDemo.js";
import FRParentInput from "./components/FRParentInput.js";
import Hero from "./components/Hero.js";
import ClickCounter from "./components/ClickCounter.js";
import HoverCounter from "./components/HoverCounter.js";
import ComponentC from "./components/ComponentC.js";
import { UserProvider } from "./components/userContext.js";
function App() {
  return (
    <div className="App">
      <UserProvider value="Sourabh">
        <ComponentC />
        {/* <Header /> */}
        <footer />
      </UserProvider>

      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <Hero heroName="Batman" />
      <Hero heroName="Superman" />
      <Hero heroName="Joker" /> */}
      {/* <FRParentInput /> */}
      {/* <RefsDemo /> */}
      {/* <RefExample /> */}
      {/* <PureComp /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <ChildComponent /> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <Greet name="Bruce" heroName="A Man">
        <p>This is children</p>
      </Greet>
      <Greet name="John" heroName="B Man">
        <button>Action</button>
      </Greet>
      <Greet name="Jack" heroName="C Man" /> */}
    </div>
  );
}

export default App;
