import { Route } from "react-router";
import { WaitingRoom, InterviewRoom, ReviewRoom, SettingRoom } from "./pages";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component ={WaitingRoom}/>
      <Route path="/interview" component={InterviewRoom}/>
      <Route path="/review" component={ReviewRoom}/>
      <Route path="/setting" component={SettingRoom}/>
    </div>
  );
}

export default App;
