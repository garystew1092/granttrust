import { useContext, useEffect } from "react"
import { UserContext } from "../Context/userContext"
import { useNavigate } from "react-router-dom";


export const useUserAuth = ()=>{
    const {user, loading, clearUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        if (loading) return;
        if (user) return;

        if (!user){
            clearUser();
            navigate("/auth");
        }

    }, [user, loading, clearUser, navigate])


}