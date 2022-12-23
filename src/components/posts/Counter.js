import './Counter.css'

function CounterF(props) {
    // console.log(props)// {count: 5}
    return(
        <div>
            <h3>count: {props.count}</h3>
        </div>
    )
}
export default CounterF;