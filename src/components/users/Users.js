import './Users.css';
import User from '../user/User';
import { useEffect } from 'react';
import Second from './second/SecondComp';

function Users(props) {
  console.log(props.users)
  // {users:[....]}
  // console.log('users render')
  
    return (
        <div className='container-fluid'>
          <div className='main_wrapper'>
            <h1>birthdays</h1>
            {props.data && props.data[0].userId}
            <div>
              {/* {props.users && props.users.slice(0,5).map(()=> {
                return <h2>hello</h2>
              })} */}
              {/* <User data={props.data}/> */}

              <Second data={props}/>
              
            </div>


            {/* <div className='button'>
              <button type='button'>clear all</button>
            </div> */}


          </div>
        </div>
    )
}
export default Users;