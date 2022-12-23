import {useState} from 'react'
import './Counter.css'
let arr = ['a', 'b', 'c'];

function Counter() {
    const [count, setCount] = useState(0)
    const decCount = ()=> { 
        setCount(count-1)
        
    }
    // console.log(decCount)
    const incCount = ()=> {
        setCount(count+1)
    }

    return(
        <div className='magic-container'>
             <h1>Magic Word: <span>{arr[count]}</span></h1>
            <form>
                <button className='left-button' type="button" onClick={decCount}>left</button>
                <button className='right-right' type="button" onClick={incCount}>right</button>
            </form>
        </div>
    )
}
export default Counter;
