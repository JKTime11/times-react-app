import './App.css';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Userform></Userform>
      <Userlist></Userlist>
    </div>
  );
}

export default App;
