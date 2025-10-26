import styled from "styled-components";

export default {
  continer: styled.section`
    display: flex;
    background: var(--header-background);
    width: 100%;
   padding: 0 10px;

    justify-content: space-between;
    align-items:center;
     @media screen  and (min-width: 760px){
             padding:5px 20px;

    }
  `,

  menu: styled.div`
    padding: 10px 0;
    @media screen  and (min-width: 760px){
             padding: 0 20px;

    }
  `,

  menu_nav: styled.nav``,

  menu_ul: styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    @media screen  and (min-width: 760px){
               gap: 20px;


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
          padding: 8px 12px;
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
    margin-right: 10px;
    background: linear-gradient(180deg, #007bff, #0056b3); /* azul moderno */
    border-radius: 8px;
    list-style: none;
    padding: 8px 10px;
    min-width:90px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.25s ease-in-out;
    z-index: 10;
    a {
      color: #fff;
      text-decoration: none;
      display: block;
      width: 100%;
    }
  `,

  submenu_item: styled.li`
    padding: 10px 15px;
    color: #fff;
   
    font-weight: normal;
    cursor: pointer;
    transition: background 0.3s, padding-left 0.3s;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      padding-left: 20px;
    }
  `,

  container_int: styled.div`
    padding: 20px;
  `,
};
