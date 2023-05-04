import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --limeGreen: #FF7600;
        --lightGreen: #88FFD7;
        --greyGreen: #b2e2ae;
        --forrestGreen: #04241E;
        --nav-link-el-padding-box: 0 clamp(10px, 2vw 100px);
        background-image: url("/bg.png");
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        border:none;
    }

    @font-face {
      font-family: "Lato";
      src: ${(props) => `url(/fonts/Lato/Lato-BlackItalic.ttf)`};
      font-weight: 800;
    }

    html {
        background-color: black;
        border:none;
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        font-family: "Andale Mono", monospace;
        border:none;
        overflow: hidden;
    }

    em {
        color: var(--limeGreen);
    }

    .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 100vh;   
        z-index: 999;   
        border:none;
    }

    .container2 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;    
    }

    .outlined-box{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        width: clamp(75px, 40vw, 500px);
        overflow: scroll;
        text-align: left;
        background-color: var(--forrestGreen);
        color: var(--lightGreen);
        border: 2px solid var(--forrestGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(12px, 3vw, 15px);
        background-color: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        -moz-backdrop-filter: blur(2px);
        -o-backdrop-filter: blur(2px);
        -ms-backdrop-filter: blur(2px);
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2);
    }

    .outlined-boxx{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        width: clamp(75px, 40vw, 500px);
        overflow: scroll;
        text-align: left;
        background-color: var(--forrestGreen);
        color: var(--lightGreen);
        border: 3px solid var(--forrestGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(12px, 3vw, 15px);
        box-shadow: 0px 0px 5px 0px var(--forrestGreen);
    }

    .outlined-boxxx{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        width: clamp(75px, 40vw, 700px);
        overflow: scroll;
        text-align: left;
        background-color: var(--forrestGreen);
        color: var(--lightGreen);
        border: 3px solid var(--forrestGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(12px, 3vw, 15px);
        overflow:scroll;
        box-shadow: 0px 0px 5px 0px var(--forrestGreen);
        margin: 0 auto;
    }

    .outlined-box-free-flex{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        overflow: scroll;
        text-align: center;
        background-color: var(--forrestGreen);
        color: var(--greyGreen);
        border: 3px solid var(--greyGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(15px, 3vw, 22px);   
    }

    .outlined-box-free-flex-2{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        overflow: scroll;
        text-align: center;
        background-color: var(--forrestGreen);
        color: var(--greyGreen);
        border: 3px solid var(--greyGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(12px, 3vw, 16px);
        width: fit-content;  
    }

     .outlined-box-free-flex-22{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        overflow: scroll;
        text-align: center;
        background-color: var(--forrestGreen);
        color: var(--greyGreen);
        border: 3px solid var(--greyGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(12px, 3vw, 16px);
        width: fit-content;
    }
    
    .outlined-box-free-flex-3{
        padding: .5rem 1rem;
        border-radius: 1rem;
        margin: 0;
        overflow: scroll;
        text-align: center;
        background-color: var(--forrestGreen);
        color: var(--greyGreen);
        border: 3px solid var(--greyGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(9px, 3vw, 14px);
        width: fit-content;
    }
`;
export default GlobalStyle;
