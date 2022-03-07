import './App.css';
import Nav from './Nav/nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './First/first';
import Second from './Second/second';
import Third from './Third/third';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header className="App-header">
          <Nav />
        </header>
        <div className="pageContent">
          <Routes>

            <Route path="/first" element={<First />}></Route>
            <Route path="/second" element={<Second />}></Route>
            <Route path="/third" element={<Third />}></Route>

          </Routes>
        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
