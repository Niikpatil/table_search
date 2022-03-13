// import logo from "./logo.svg";
// import "./App.css";

import UserDetail from "./components/UserDetail";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-5">
          <UserTable />
        </div>
        <div className="col-5">
          <UserDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
