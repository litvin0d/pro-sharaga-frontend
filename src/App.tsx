import "./scss/index.scss";
// import Login from "./components/Login";
import Header from "./components/Header";
import Lessons from "./components/Lessons";
import { userData } from "./data/userData";

const App = () => {
    return (
        <div className="wrapper">
            <div className="app">
                {/*<Login />*/}
                <Header />
                <Lessons userData={userData} />
            </div>
        </div>
    );
};

export default App;
