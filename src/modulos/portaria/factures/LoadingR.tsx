import { useEffect } from "react"
import { LoadingRota, Section } from "./loading"
import { useNavigate } from "react-router-dom";
import { Logued } from "../service/Logued"
export const LoadingR = () => {
    const isLogged = Logued()
    const navigate = useNavigate();
    const validationUser = () => {
        const redirect =sessionStorage.getItem("redirectAfterLogin") || "/";
               sessionStorage.removeItem("redirectAfterLogin");
            if (isLogged) {
            window.location.href = redirect;
            }else{
                navigate("/login", { replace: true })

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