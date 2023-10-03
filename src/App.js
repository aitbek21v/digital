import logo from './logo.svg';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Menu from "./pages/Menu";

function App() {
    // const [selectedCountry, setSelectedCountry] = useState(null);
    // const countries = [
    //
    //     { label: 'США', value: 'usa', flag: `${usa}` },
    //     { label: 'Россия', value: 'russian', flag: `${rus}` },
    //     { label: 'Кыргызстан', value: 'kyrgyzstan', flag: `${kgz}` },
    // ];
    //
    // const handleCountrySelect = (value) => {
    //     setSelectedCountry(value);
    // };

  return (
    <div className="App">
      <Header/>
        <Menu/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Routes>
        {/*<Menu/>*/}
    </div>
  );
}

export default App;
