import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainDashboard from "./components/Main-dashboard/mainDashboard";
import NotFound from "./components/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />}>
            <Route path="" element={<MainDashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
