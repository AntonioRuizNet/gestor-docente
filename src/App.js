import { useSelector } from "react-redux";

//Views
import Login from "./views/login";
import Panel from "./views/panel";

//Helpers
import { useAlreadyLogged } from "./hooks/useAlreadyLogged";

//Styles
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const logged = useSelector((state) => state.globalReducer.logged);
  useAlreadyLogged(logged);

  return (
    <>
      <div>{!logged ? <Login /> : <Panel />}</div>
    </>
  );
}

export default App;
