import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Clients} from "./layout/sections/clients/Clients";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Work} from "./layout/sections/work/Work";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Work/>
            <Clients/>
            <Contacts/>
        </div>
    );
}

export default App;

