import Third from "./third/ThirdComp";

function Second(props) {
    console.log(props.data)
    return(
        <div>
            <Third/>
        </div>
    )
}
export default Second;