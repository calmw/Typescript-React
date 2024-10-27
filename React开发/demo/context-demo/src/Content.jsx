import {useContext} from "react";
import {nameContext} from "./nameContext";

export function Content() {
    const name = useContext(nameContext)
    return (
        <div style={{marginLeft:'300px',height:'500px'}}>
            Content:{name}
        </div>
    )
}