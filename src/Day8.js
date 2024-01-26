import React from 'react'

import "./Counter.css";

const Counter =()=> {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count +1);
    };

    const decrementCount = () => {
        setCount(count -1);
    };

    const resetCount = () =>{
        setCount(0);
    };

}

export default function () {
  return (

    <div>
        <div className="comtainer">
            <div className="counter-box">
                <h1>Counter: {count}</h1>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

            </div>

        </div>
    </div>
  )
}
