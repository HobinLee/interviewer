import { Route } from 'react-router';
import { WaitingRoom, InterviewRoom, ReviewRoom } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path="/" component ={WaitingRoom}/>
        <Route path="/interview" component={InterviewRoom}/>
        <Route path="/review" component={ReviewRoom}/>
      </main>
    </div>
  );
}

export default App;
