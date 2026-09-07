import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchUser} from "../features/user/userSlice"

const Users = () => {

  const {users, loading,error} = useSelector(state=>state.user)
  console.log(users, loading, error);

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(fetchUser());
  },[dispatch])

  if(loading)
    return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-5">
        {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    </div>
  )
}

export default Users
