import styled from "styled-components";

import Banner1 from "../assets/banner.jpg"

export const ContainerAll = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(244 244 245);
`

export const ContainerHeader = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    
`

export const Dropdown = styled.div`
    display: flex;
    gap: 5rem;
`

export const AboutMe = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    gap: 10px;
    div {
        width: 50%;
    }
    h1 {
        font-size: 2rem;
    }

    strong {
        color: #AB222E;
    }

    span {
        width: 400px;
        height: 250px;
        background-color: white;
    }
`

export const LogoTitle = styled.div`
    color: #AB222E;
`

export const Banner = styled.div`
    margin-top: 50px;
    height: 300px;
    width: 100%;
    background-image: url(${Banner1});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`