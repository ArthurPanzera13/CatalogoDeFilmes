import styled from 'styled-components'

export const StyledDivCard = styled.div`

    background-color: white;
    width: 85%;
    padding: 2%;
    border-radius: 8px;
    display: flex;
    height: 22vh;
    transition: background-color 0.8s ease; /* Transição mais lenta (0.5s) */
    gap: 5px;
    justify-content: flex-end;

    &:hover{
        background-color: #DCDCDC;
    }

    @media (max-width: 1120px) {
        width: auto;
        height: auto;
        background-color: rgb(1 22 73);
        
    }
`

export const StyledDivContainer = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
    display: flex;
    flex-direction: column;
    margin-top: 1%;
    justify-content: center;
    button:hover{
        transform: scale(1.01); /* Increase the size on hover */
    }

    img{
        height: 22vh;
        border-radius: 8px;
        margin-right: 60%;
    }


    @media (max-width: 1120px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 25px;
        margin-top: 5%;

        img{
            height: 50vh;
            display: flex;
        }
    }
    
`

export const StyledNavBar = styled.div`
    background-color: white;
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 10vh;

    h1{
        margin-left: 7%;
    }

    a{
        margin-left: 5%;
    }

    @media (max-width: 1120px) {
        h1{
            width: 5%;
        }

        a{
            margin-left: 0%;
        }

        gap: 75px;
        
    }
`

export const StyledDivInfosCard = styled.div`
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1120px) {
        display: none;
        
    }
    
`

export const StyledDivVideo = styled.div`
    
    @media (max-width: 1120px) {
        iframe{
            width: 45vh;
        }
        
    }
    
`

export const StyledImageFilm = styled.div`
    margin-right: auto;

    @media (max-width: 1120px) {
        margin: auto;
        
    }
    
    
`

export const StyledDivNota = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2%;
    margin: 5%;
    padding: 5px;
    gap: 5%;

    @media (max-width: 1120px) {
        display: none;
    }
    
`

export const StyledTeste = styled.div`
    margin-left: 2%;
    margin: 5%;
    padding: 5px;
    gap: 5%;
    
`

export const StyledBusca = styled.input`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

    height: 30px;
    width: 800px;
    border-radius: 4px;
    border: solid 2px;
    opacity: 0.5;
    margin-top: 1%;
    font-family: poppins;
    font-weight: bold;
    margin-right: 25%;
    
    @media (max-width: 1120px) {
        width: 20vh;
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

    @media (max-width: 1120px) {
        width: 10%;
        height: 35px;
    }

`

export const StyledButtonDetalhes = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
    width: 100%;
    height: 20%;
    border-radius: 8px;
    font-family: poppins;
    background-color: rgb(1 22 73);
    color: white;
    display: flex;
    margin-top: 10%;


    @media (max-width: 1120px) {
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
export const StyledDivButtonDetails = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: auto;
`;

export const StyledContainerNav = styled.div`
    display: flex;
    align-items: flex-end;
    margin:0 auto;
`;