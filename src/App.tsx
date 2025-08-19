import react, { Component } from "react";
import { Message } from "./components/FirstReactProgram";
import Welcome from "./components/classandfunctioncomponent/ClsCompWelcome";
import Greet from "./components/classandfunctioncomponent/FunclCompHello";
// we can import default imports with any name- it does not have to match the export name
// - eg. Greet1 is diffr from Greet
import Greet1 from "./components/classandfunctioncomponent/FunclCompHello";
import Hello from "./components/HelloReactWithoutJSX";
import VisitorMessage from "./components/settingstate/StateClassMessage";
import Counter from "./components/settingstate/SetStateCounter";
import GreetD from "./components/destructuring/FnCompDestruct";
import FunctionClick from "./components/eventhandler/EventFnClick";
import ClsClick from "./components/eventhandler/ClsClick";
import EventBind from "./components/eventbinding/EventBind";
import ParentComponent from "./components/parentchildcommunication/ParentComponent";
import UserGreeting from "./components/conditionalrendering/UserGreeting";
import PersonList from "./components/listrendering/PersonList";
import NameList from "./components/listrendering/IndexAntiPatternNameList";
import Stylesheet from "./components/styling/Stylesheet";
import InlineCss from "./components/styling/InlineCss";
import './components/styling/appStyle.css'
import styles from './components/styling/appStyle.module.css'
import Form from "./components/formhandling/Form";
import LifeCycleA from "./components/componentlifecycle/LifeCycleA";

class App extends Component {
  render() {
    return (
      <LifeCycleA />
      //<Form />
      // <div>
      //   <h1 className={styles.success}>Success</h1>
      //   <h1 className='error'>Error</h1>
      // </div>

      //<InlineCss />
      //<Stylesheet primary={true}/>
      //<NameList/>
      // <PersonList/>
      // <UserGreeting />
      // <ParentComponent/>
      //<EventBind/>

      // <ClsClick/>
      //   <FunctionClick></FunctionClick>

      //   {/* <GreetD name = 'Bruce' hero = 'Batman'/> */}
      //   <Welcome name = 'Bruce' hero = 'Batman'></Welcome>

      //   <Counter/>

      //   <VisitorMessage>Welcom Visitor!</VisitorMessage>

      // <div className = 'App'>
      //   <Greet name = 'Bruce' hero = 'Batman'>
      //     <p>This is children props</p>
      //   </Greet>
      //   <Greet name = 'Diana' hero = 'Wonder Woman'>
      //     <button>Click</button>
      //   </Greet>
      //   <Greet name = 'Clark' hero = 'Superman'/>
      //   <Welcome name = 'Bruce' hero = 'Batman'></Welcome>
      //   <Welcome name = "Diana" hero = 'Wonder Woman'></Welcome>
      //   <Welcome name = 'Clark' hero = 'Superman'></Welcome>
      // </div>

      //return <Message/>
      //return <Greet1/>
      //return <Welcome/>
      //return <Hello/>
    );
  }
}

export default App;
