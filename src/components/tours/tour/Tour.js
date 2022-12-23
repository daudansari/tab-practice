import './Tour.css';
function TourFile(props) {
    return(
        <div className='main-box'>
            <div className='image'>
                <img src={props.data.imgUrl}/>
            </div>
            <div className='details'>
                <div className='info-header'>
                    <h2>{props.data.title}</h2>
                    <h3>{props.data.price}</h3>
                </div>
                <p>{props.data.text}</p>
                <div className='button'>
                    <button>not interested</button>
                </div>
            </div>
        </div>
    )
}
export default TourFile;