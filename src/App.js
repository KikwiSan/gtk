import './App.css';
import Menu from "./components/Menu";
import PassengerDeclaration from "./components/PassengerDeclaration";
import {Routes, Route} from "react-router-dom";
import BlockedProducts from "./components/BlockedProducts";
import NotPersonalProducts from "./components/NotPersonalProducts";
import Drugs from "./components/Drugs";
import Recommendation from "./components/Recommendation";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/*' element={<Menu/>}/>
            <Route path='/declaration' element={<PassengerDeclaration/>}/>
            <Route path='/blockedProducts' element={<BlockedProducts/>}/>
            <Route path='/notPersonalProducts' element={<NotPersonalProducts/>}/>
            <Route path='/drugs' element={<Drugs/>}/>
            <Route path='/recommendation' element={<Recommendation/>}/>
        </Routes>
    </div>
  );
}

export default App;
