import styled from "styled-components";

export default {
  container: styled.div`
        background-color: #FFF;
        width: 250px;
        height: 100vh;
        border-right: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0 0 10px rgba(0,0,0,0.1);

        @media screen and (max-width: 760px) {
            position: fixed;
            width: 100%;
            background-color: rgba(0,0,0,0.4); /* Fundo escurecido no mobile */
            z-index: 1000;
        }
    `,

  container_int: styled.div`
        height: 100vh;
        background-color: #FFF;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 560px) {
            width: 300px;
        }
    `,

  areaMenu: styled.div`
        padding: 10px 0;
    `,

  menu_nav: styled.nav`
        width: 100%;
    `,

  menu_ul: styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;

    `,

  menu_li: styled.li`
        padding: 15px 20px;
        cursor: pointer;
        color: #333;
        font-weight: 500;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        flex-direction: column;
        transition: background 0.2s;

        &:hover {
            background-color: #f8faff;
        }
    `,
  menu_liApi: styled.li`
        padding: 15px 20px;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        border-bottom: 1px solid #f8f8f8;
        transition: all 0.2s;
        gap: 12px;
        a{
        display: flex;
        color: #444;
        align-items: center;
        gap: 12px;
          text-decoration:none;
          list-style: none;
          display: flex;
          align-self: center;
        }
        &:hover {
            background-color: #f0f4ff;
            color: #5B7FFF;
        }

        &:active {
            transform: scale(0.98);
        }
    `,
  LabelSection: styled.div`
        padding: 20px 20px 10px 20px;
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 700;
        color: #999;
        letter-spacing: 1px;
        background-color: #fcfcfc;
    `,
  submenu: styled.ul<{ isOpen: boolean }>`
        list-style: none;
        padding: 0;
        margin-top: 10px;
        max-height: ${props => (props.isOpen ? "500px" : "0")};
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        opacity: ${props => (props.isOpen ? "1" : "0")};
    `,

  submenu_item: styled.li`
        padding: 10px 20px;
        font-size: 14px;
        color: #666;
        border-left: 2px solid transparent;

        &:hover {
            color: #5B7FFF;
            border-left: 2px solid #5B7FFF;
            background-color: #eef4ff;
        }
    `
};