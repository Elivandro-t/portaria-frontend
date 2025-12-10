import { useEffect, useState } from "react"
import { LoadingSecundary } from "./components/LoadingSecundary/LoadingSecundary";

function SuspenseDelay({delay=800}:{delay:any}){
    const [show,setShow]=useState(false);
    useEffect(()=>{
       const timer = setTimeout(()=>setShow(true),delay);
     return ()=>clearTimeout(timer)
    },delay);
    return show ? <LoadingSecundary /> : null;
}
export default SuspenseDelay;