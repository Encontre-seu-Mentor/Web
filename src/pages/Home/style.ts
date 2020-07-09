import styled from 'styled-components';

import backgroundImg from '../../assets/img/bg.svg';

export const Container  = styled.section`

    display: flex;
    flex: 1;
    height:100vh;
    width:100vw;
    background: url('${backgroundImg}') no-repeat;
    background-size:cover;
    flex-direction:column;
    justify-content: center;
    align-items:center;



    img{
        max-width:250px;
        height: auto;
        max-height: 315px;
        width:100%;
        margin-bottom: 30px;
        animation-name: breath-animation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }

    h1{
        color: #FFF;
        font-size:2.5rem;
    }

    p{
        font-size: 0.8rem;
        color: #FFF;
        font-weight: 300;
        max-width:550px;
        margin:20px 0 ;
    }

    div.input-group{
        background-color:#FFF;
        max-width:550px;
        width:100%;
        display:flex;
        border-radius:10px;


        & input {
            border: none;
            flex: 1;
            padding: 5px 10px;

            &::placeholder{
                color: #9E9E9E;
            }
        }

        & button {
            border: none;
            background-color: #66E4D1;
            color: #FFF;
            height: 40px;
            padding: 0 20px
        }
    }


    @keyframes breath-animation {
    0% { transform: translateY(0) }
    50% { transform: translateY(-25px) }
    100% {transform: translateY(0) }
    }


`
