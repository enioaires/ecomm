import { css } from '@emotion/react'

export const stylesGlobal = css`
  // variables
  :root {
    // font
    --font-regular: NunitoRegular;
    --font-bold: NunitoBold;
    --font-semibold: NunitoSemiBold;
    --font-light: NunitoLight;
    --font-medium: NunitoMedium;


    // colors
    --color-white: #fff;
    --color-black: #000;

    --color-selected: #0a2498;
    --color-gray: #a0a0a0;
    --color-red: #982f2f;
    --color-promotion: #2fbb7f;
    --color-price: #0045a4;

    --color-button: #2f880f;
  }


  // styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
      width: 2px;
    }
  *::-webkit-scrollbar-track {
    background: var(--color-white);
  }
  *::-webkit-scrollbar-thumb {
    background: var(--color-black);
  }
  *::-webkit-scrollbar-thumb:hover {
    background: var(--color-white);
  }

  html {
    width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
  }

  body, html {
    font: 400 18px NunitoRegular, 'Montserrat', Roboto, sans-serif;
    background-color: #1C093D;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 2px;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-white);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-white);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-white);
    }

    scrollbar-color: var(--color-white);
    scrollbar-width: thin;
  }

  @media screen and (max-width: 1900px) {
    body, html {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1400px) {
    body, html {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1300px) {
    body, html {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1200px) {
    body, html {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 900px) {
    body, html {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 700px) {
    body, html {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 460px) {
    body, html {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 350px) {
    body, html {
      font-size: 6px;
    }
  }


`
