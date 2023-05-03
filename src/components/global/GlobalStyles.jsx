import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${
      "" /* @import url("https://fonts.googleapis.com/css2?family=Anek+Odia:wght@400;500&family=Baloo+Bhaijaan+2:wght@400;700;800&family=Cairo:wght@900&family=Kanit:wght@100;400&family=Lora&display=swap"); */
    }

    :root {
        ${"" /* --limeGreen: #FF2280; */}
        --limeGreen: #FF7600;
        --lightGreen: #88FFD7;
        --greyGreen: #b2e2ae;
        ${"" /* --greyGreen: #88FFD7; */}
        --forrestGreen: #04241E;
        --nav-link-el-padding-box: 0 clamp(10px, 2vw 100px);
        background-image: url("/bg.png");

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    @font-face {
      font-family: "Lato";
      src: ${(props) => `url(/fonts/Lato/Lato-BlackItalic.ttf)`};
      font-weight: 800;
    }

    html {
        background-color: black;
    }

    body {
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        font-family: "Andale Mono", monospace;
    }

    em {
        color: var(--limeGreen);
    }

    .container {
        position: absolute;
        ${"" /* width: 100vw; */}
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        ${"" /* padding: 20vh 10vw;  */}
        max-height: 100vh;      
    }

    @media only screen and (max-width: 760px) {
        .container{
            ${
              "" /* width: 8vw;
            padding: 15vh 15vw; 
            min-height: 70vh; */
            }
        
        }
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
        border: 3px solid var(--forrestGreen);
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

        ${
          "" /* background-color: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        -moz-backdrop-filter: blur(2px);
        -o-backdrop-filter: blur(2px);
        -ms-backdrop-filter: blur(2px);
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2); */
        }
    }
    .outlined-boxxx{
        padding: 1rem;
        border-radius: 1rem;
        margin: 0;
        ${"" /* width: clamp(75px, 40vw, 700px); */}
        overflow: scroll;
        text-align: left;
        background-color: var(--forrestGreen);
        color: var(--lightGreen);
        border: 3px solid var(--forrestGreen);
        font-family: "Andale Mono", monospace;
        font-size: clamp(12px, 3vw, 15px);

        box-shadow: 0px 0px 5px 0px var(--forrestGreen);

        ${
          "" /* background-color: rgba(255, 255, 255, 0.01);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        -moz-backdrop-filter: blur(2px);
        -o-backdrop-filter: blur(2px);
        -ms-backdrop-filter: blur(2px);
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.2); */
        }
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
