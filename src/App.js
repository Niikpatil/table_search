// import logo from "./logo.svg";
// import "./App.css";

import UserDetail from "./components/UserDetail";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-5">
          <UserTable />
        </div>
        <div class="col-5">
          <UserDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
