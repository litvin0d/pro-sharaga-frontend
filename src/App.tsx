import { Routes, Route } from "react-router-dom";

import "./scss/index.scss";
// import LoginPage from "./pages/LoginPage";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div>
            {/* <LoginPage /> */}
            <Sidebar />
            <Routes>
                <Route path="/" />
            </Routes>
        </div>
    );
};

export default App;
