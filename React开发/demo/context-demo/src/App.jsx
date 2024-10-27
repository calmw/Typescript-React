import {Header} from "./Header";
import {Body} from "./Body";
import {nameContext} from "./nameContext";

function App() {
    return (
        <div>
            <nameContext.Provider value={'Dell'}>
                <Header/>
                <Body/>
            </nameContext.Provider>
        </div>
    );
}

export default App;
