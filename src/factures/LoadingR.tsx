import { useEffect } from "react"
import { LoadingRota, Section } from "./loading"
import { useNavigate } from "react-router-dom";
import { Logued } from "../service/Logued"
export const LoadingR = () => {
    const isLogged = Logued()
    const navigate = useNavigate();
    const validationUser = () => {
        const redirect =sessionStorage.getItem("redirectAfterLogin") || "/portaria";
               sessionStorage.removeItem("redirectAfterLogin");
            if (isLogged) {
            navigate(redirect,{ replace: true, state: { refresh: Date.now() } });
            }else{
                navigate("/login", { replace: false })

            }
    };

    useEffect(() => {
         const clearIteval =  setTimeout(()=>{
     
            validationUser();
            },3000)
        return ()=>clearTimeout(clearIteval)

        
    }, []);

    return (
        <Section className="">
            <LoadingRota></LoadingRota>
        </Section>
    )
}