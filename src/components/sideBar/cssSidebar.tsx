import styled from "styled-components";
import { Link } from "react-router-dom";

type prop = {
    open:any
}
export default {
    container: styled.aside`
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    position: fixed;
    background-color:transparent;
    cursor: pointer;
    `,
    container_int: styled.aside<prop>`
         position:fixed;
         top: 0;
         background: var( --header-background);

          width:260px;
          height: 100%;
          left: ${({open})=>{
            return open ? 0 : "-260px"
          }};
          transition: 0.3s;
          padding: 20px;
          box-shadow: 2px 0px 10px rgba(0,0,0,0.4);
          z-index: 999;
    `,
    menu:styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-weight: 600;
        color: #FFF;
        cursor: pointer;
    `,
    subMenu:styled.div`
        margin-left: 5px;
        
    `,
   MenuLink: styled(Link)`
    color: #cfc9d8;
    text-decoration: none;
    padding: 6px 0;
    display: block;
    font-size: 0.9rem;

    &:hover {
      color: #ebcdcd !important;
      transform: translateX(4px);
      transition: 0.2s ease;
      text-decoration: underline;
    }
  `
}