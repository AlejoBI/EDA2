import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
    const { counter, increment } = useCounter(1);
    const [first, setFirst] = useState(10);
    
    return (
        <div>
        <h1>
            Memorize <Small value={counter} />
        </h1>
        <hr />
        <button className="btn btn-primary" onClick={increment}>
            +1
        </button>
        <button
            className="btn btn-outline-primary ms-3"
            onClick={() => setFirst(first + 1)}
        >
            set Memorize State
        </button>
        </div>
    );
}

export default Memorize;