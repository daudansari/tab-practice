import './Posts.css'
function Posts(props) {
    // console.log(props)// {data: [...]}
    if (!props.data) {
        return <div>No Data Found</div>
    }
    return (
        <div>
           {props.data.map(item=> {
            return <h3 key={item}>{item}</h3>
           })}
        </div>
    )
}
export default Posts;