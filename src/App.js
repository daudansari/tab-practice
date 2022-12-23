import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import Users from './components/users/Users';
import TourApp from './components/tours/Tours';


function App(props) {
  const [data, setData] = useState('hello')
  const [users, setUsers] = useState(null)
  console.log('app render')

  useEffect(()=> {
    console.log('app useeffect')
    getData()
  }, []) // it will be rendered once

  const getData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setUsers(response.data)
    // console.log(response.data)
  }
  
  // const handleRender = ()=> {
  //   setData('hello dear')
  // }

  return (
    <div className='main-container'>
      {/* <button onClick={handleRender}>Render</button> */}
      {/* <Users users={users}/> */}
      <TourApp/>
    </div>
  )
}
export default App;