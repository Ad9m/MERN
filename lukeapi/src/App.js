
import './App.css';
import {Routes,Route,Link,BrowserRouter} from "react-router-dom"
import Form from "./components/Form.jsx";
import People from "./components/People"
import Planet from "./components/Planet"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <h1>Luke API-walker</h1>
      <Form />
      <Routes>
        <Route path="/people/:id">
          <People />
        </Route>
        <Route path="/planets/:id">
          <Planet />
        </Route>
      </Routes>
    </BrowserRouter>
  );

    </div>
  );
}

export default App;
