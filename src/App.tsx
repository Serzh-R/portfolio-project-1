import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Clients} from "./layout/sections/clients/Clients";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Work} from "./layout/sections/work/Work";
import {Footer} from "./layout/sections/footer/Footer";
import {Skills} from "./layout/sections/skills/Skills";
import {Indicators} from './layout/sections/indicators/Indicators';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Indicators/>
            <Work/>
            <Clients/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

