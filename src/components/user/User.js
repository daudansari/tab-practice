import './User.css'
function User(props) {
    // console.log(props.data)
    return (
        <>
           <div className="user_wrapper">
               {props.data && props.data.map((item,i)=>{
                console.log(item)
                return <div className='row'>
                    <div className='image'></div>
                    <div>
                        <h4>{item.name}</h4>
                        <h6>{item.email}</h6> 
                    </div>
                </div>
               })}
           </div>
        </>
    )
}
export default User;