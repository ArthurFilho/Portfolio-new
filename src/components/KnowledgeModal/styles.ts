import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 6px solid #AB222E;
    border-radius: 6px;
    background: rgb(39 39 42);
    color: #f4f4f5;
    overflow-y: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto; 
    margin: 0; 
    padding: 0;

    img {
        width: 600px;
        margin-top: 80px;   
        object-fit: cover;
    } 
`

export const ButtonAndTittle = styled.div`
  color: #f4f4f5;
`
