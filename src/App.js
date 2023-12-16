import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/404/NotFound";
import SignIn from "./pages/SignIn/SignIn";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='*' element={<NotFound />}/>
            </Route>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signin' element={<SignIn />}/>
        </Routes>
    </div>
  );
}

export default App;
