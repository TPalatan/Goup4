import { useState } from "react";

function Toggle (){ 

    const [visible , setVisible] = useState(false)

    return(

        <div>
        <input type={visible ?'text' : 'password'} />
        <button onClick={() => setVisible(!visible)}>{visible ? 'hide': 'show'}</button>
        </div>
    )
}

export default Toggle