import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1>Project Lists</h1>
      <Link to={"/stepcounter"}>
        <p>Step Counter</p>
      </Link>
      <Link to={"/tempconverter"}>
        <p>Temp Converter</p>
      </Link>
      <Link to={"/user"}>UserExplorer</Link>
      <Link to={"/dynamichome"}>Dynamic Dashboard </Link>
    </>
  );
}

export default App;
