import styled from "styled-components";

export default {
  continer: styled.section`
    display: flex;
    background: var(--header-background);
    width: 100%;
     padding:5px 10px;
    justify-content: space-between;
    align-items:center;
     @media screen  and (min-width: 760px){
             padding:5px 20px;

    }
  `,
  areaMenu: styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  `,

  menu: styled.div`
    padding: 10px 0;
             
             display: none;

    
    @media screen  and (min-width: 760px){
             padding: 0 20px;
              display: block;

             
             

    }
  `,

  menu_nav: styled.nav``,

  menu_ul: styled.ul`
    display: flex;
    gap: 5px;
    list-style: none;
    padding: 0;
    margin: 0;
    @media screen  and (min-width: 760px){
               gap: 5px;


    }
  `,

  menu_li: styled.li`
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.3s;
    @media screen  and (min-width: 760px){
          padding: 8px 5px;
          font-size: 16px;


    }

    &:hover {
        color: #222020;
    }

    /* Mostra o submenu ao passar o mouse */
    &:hover ul {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }
  `,
  logo: styled.img`
    padding: 0 5px;
    color: var(--cor-texto-header);
     object-fit: contain;
     height:38px;
     @media screen  and (max-width: 760px){
              display: none;

             
             

    }
  /* azul suave */

    cursor: pointer;
    @media screen and (min-width: 560px){
         font-size: 14px;
        font-weight: 600;


    }
    `,
  submenu: styled.ul`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient( #FFF); /* azul moderno */
    border-radius: 8px;
    list-style: none;
    padding: 8px 0;
    min-width:160px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.25s ease-in-out;
    z-index: 1000;
    a {
      color: #696666;
      text-decoration: none;
      display: block;
      width: 100%;
    }
  `,

  submenu_item: styled.li`
    padding: 10px 5px;
    color: #332e2e;
   
    font-weight: normal;
    cursor: pointer;
    transition: background 0.3s, padding-left 0.3s;

    &:hover {
      background: rgba(152, 150, 250, 0.15);
      padding-left: 20px;
    }
  `,

  container_int: styled.div`
    padding: 20px;
  `,
  btnMenu: styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    display: none;
     @media screen  and (max-width: 760px){
             
             display: block;

    }
    
  `
};
