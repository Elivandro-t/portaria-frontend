import styled from "styled-components";

export default {
  container: styled.main`
    position: relative;
    `,
  Container_int: styled.main`
      @media screen and (max-width: 560px) {
        padding: 0;
      }
     `,
  PlaceholderContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 10em;
  text-align: center;
  color: #333;
  /* padding: 20px; */
  border-radius: 12px;

  .emoji {
    font-size: 64px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 8px;
    color: #1a237e;
  }

  .subtitle {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 12px;
    color: #3949ab;
  }

  .description {
    font-size: 16px;
    max-width: 500px;
    color: #555;
  }
`
}