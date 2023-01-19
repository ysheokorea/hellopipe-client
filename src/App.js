import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React
        </p>
        <p>Pipeline 구축하기</p>
        <p>새로운 내용 추가</p>
        <p>환경변수 : {process.env.REACT_APP_VALUE}</p>
      </header>
    </div>
  );
}

export default App;
