import styled from 'styled-components'



export const StyledDivCard = styled.div`
    background-color: white;
    color: black;
    border-radius: 5px;
    padding: 10px;
    height: 700px;
    border: solid 2px black;
    text-align: cecnter;
    margin-top: 1%;
`

export const StyledDivContainer = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

    justify-content: center;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px; /* Espaço entre as imagens */
    transition: transform 0.7s ease; /* Transição mais lenta */

    div:hover {
        transform: scale(1.01); /* Aumenta o tamanho no hover */
    }


    img{
        width: 70%;
    }

    button{
        width: 30%;
        height: 4%;
        border-radius: 5px;
        border: solid 2px black;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease; /* Added transition property */
        font-family: poppins;
        
    }

    button:hover{
        transform: scale(1.01); /* Increase the size on hover */
    }

    @media (max-width: 768px) {
        /* CSS code for screens with a maximum width of 768px */
        /* Adjust the styles for smaller screens here */
        /* For example, you can change the width of the images and buttons */
        width: 80%;
        margin-left: 10%;
        margin-top: 5%;

        img{
            height: 70%;
        }

        button{
            width: 50%;
        }
    }

    
`

export const StyledNavBar = styled.div`
    background-color: white;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 70px;

    h1{
        margin-left: 7%;
    }
`

export const StyledBusca = styled.input`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

    height: 40px;
    width: 83%;
    border-radius: 4px;
    border: solid 2px black;
    margin-top: 1%;
    font-family: poppins;
    font-weight: bold;

    @media (max-width: 768px) {
        width: 65%;
        margin-top: 5%;
    }
`

export const StyledButton = styled.button`
    background-color: white;
    color: black;
    height: 45px;
    border-radius: 10px;
    cursor: pointer;
    width: 45px;

    margin-left: 1%;

    @media (max-width: 768px) {
        width: 10%;
        height: 35px;
    }

`

export const StyledDivDetails = styled.div`
    color: white;
    margin-top: 2%;

    h3{
        margin-left: 0.5%;
    }
`

export const StyledDivInfos = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    h2{
        width: 50%;
    }
`

export const StyledDatails = styled.div`
    height: 100%;

    img{
        height: 60vh;
    }
    
`

export const LoadingContainer = styled.div`
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        margin-left: 2%;
        font-size: large;
    }
    
`;

export const StyledButtonNext = styled.button`
    margin-top: 2%;
    height: 4%;
    border-radius: 5px;
    border: solid 2px black;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease; /* Added transition property */
    font-family: poppins;
        
    

    transform: scale(1.01); /* Increase the size on hover */
    
`;

export const StyledRodape = styled.div`
    margin-top: 2%;
`
