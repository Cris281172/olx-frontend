import './App.css';
import {BrowserRouter} from "react-router-dom";
import UnLoggedRoutesWrapper from "./routes/UnLoggedRoutesWrapper";
import LoggedRoutesWrapper from "./routes/LoggedRoutesWrapper";
import useAuth from "./hooks/useAuth";

function App() {
    const auth = useAuth();
    console.log(auth)
  return (
      <BrowserRouter>
          {auth ? <LoggedRoutesWrapper /> : <UnLoggedRoutesWrapper />}
      </BrowserRouter>
  );
}

export default App;
