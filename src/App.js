import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Helmet>
        <title>Happy New Year 2022!</title>
        <meta name="description" content="User Dashboard"></meta>
      </Helmet>
      <div className="row">
        <div className="col-md-auto box"></div>
      </div>
    </div>
  );
}

export default App;
