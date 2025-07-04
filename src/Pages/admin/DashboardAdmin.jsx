import React, { useContext } from 'react'
import { useUserAuth } from '../../Hooks/useUserAuth'
import { UserContext } from '../../Context/userContext';
import axiosInstance from '../../Utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { API_PATHS } from '../../Utils/apiPaths';

export default function DashboardAdmin() {
    useUserAuth();
    const {updateUser} = useContext(UserContext);
    const navigate = useNavigate()
    const onLogOut = async () => {
   
      try {
          const response = await axiosInstance.get(API_PATHS.AUTH.LOG_OUT );
                //const {message, loggedOutAt}= response.data;
                updateUser(null);
                //redirect user
                navigate("/auth");
                
                
      } catch (err) {
          console.log(err);
      }

  };
  return (
    <div>DashboardAdmin<br/>
      <button className='p-2 bg-amber-500 rounded-lg cursor-pointer' onClick={onLogOut}> LOG OUT</button>



    </div>
  )
}
