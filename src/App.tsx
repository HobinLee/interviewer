import { Route } from 'react-router';
import { WaitingRoom, InterviewRoom, ReviewRoom } from './pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Route exact path="/" component ={WaitingRoom}/>
        <Route path="/interview" component={InterviewRoom}/>
        <Route path="/review" component={ReviewRoom}/>
      </main>
    </div>
  );
}

export default App;
