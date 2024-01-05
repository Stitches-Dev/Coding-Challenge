import "./App.css";
import SinglePageUni from "./pages/SinglePageUni/SinglePageUni";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Layout />}>
            <Route index element={<Home />}/>
            <Route path="/university/:id" element={<SinglePageUni />}/>
          </Route>
         
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
