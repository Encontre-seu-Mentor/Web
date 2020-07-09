import {createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0
        -webkit-font-smoothing: antialiased;
    }

    body{
        background-color: #00000005;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`


export default GlobalStyle;

