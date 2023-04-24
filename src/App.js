import logo from './logo.svg';
import './App.css';
import DisplayNews from './DisplayNews';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
          Fake News Detection Application
        </p>

           <SearchForm></SearchForm>
      </header>
    </div>
  );
}

export default App;
