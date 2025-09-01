
import { useState } from "react";


function Counter(){ 


    const [count , setCout] = useState (0)

    const increment = () =>{setCout (count+1)}
    const decrement = () => {setCout(count > 0 ? count-1 : 0)}

    return(

    <div>

        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} > decrement</button>
    </div>


    )
}

export default Counter