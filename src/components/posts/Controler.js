function Controler(props) {
    // console.log(props)// {handleIncFn: ()=> {}, handleDecFn: ()=> {}}
    return (    
        <>
            <button onClick={props.handleDecFn}>dec</button>
            <button onClick={props.handleIncFn}>Inc</button>
        </>
    )
}
export default Controler