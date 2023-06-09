import styled from "styled-components";

// export const RedButton = styled.button `
//     width: 200px;
//     height: 50px;
//     background-color: red;
// `
// export const GreenButton = styled.button `
//     width: 200px;
//     height: 50px;
//     background-color: green;
// `
// export const VioletButton = styled.button `
//     width: 200px;
//     height: 50px;
//     border-radius: 30px;
//     background-color: violet;
// `
export const Button = styled.button `
    width: 200px;
    height: 50px;
    border-radius: 30px;
    background-color: ${((props) =>props.backgroundColor)};

    &:hover{
        background-color: coral;
    }
    &:active{
        background-color: yellow;
    }
`