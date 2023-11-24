import styled from 'styled-components'



export const StyledDivCard = styled.div`

    background-color: white;
    width: 85%;
    height: 70vh;
    padding: 2%;
    border-radius: 8px;
    display: flex;
`

export const StyledDivContainer = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
    flex-wrap: wrap;


    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1%;
    gap: 40px;
    justify-content: center;
    align-items: center;
    button:hover{
        transform: scale(1.01); /* Increase the size on hover */
    }

    img{
        height: 70vh;
        border-radius: 8px;
        margin-right: 60%;
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

export const StyledDivInfosCard = styled.div`
    margin-left: 2%;
    margin: 5%;
    
`

export const StyledDivNota = styled.div`
    margin-left: 2%;
    margin: 5%;
    padding: 5px;
    gap: 5%;
    
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

export const StyledButtonDetalhes = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
    background-color: white;
    border-radius: 8px;
    font-family: poppins;
    background-color: rgb(1 22 73);
    color: white;


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
