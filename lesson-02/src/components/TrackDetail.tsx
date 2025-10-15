import {useState} from "react";

export function TrackDetail() {
    const [counter, setCounter] = useState(0)

    return <div onClick={ () => {setCounter(counter + 1)}}>TrackDetail {counter}</div>
}