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

export const Presentation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 1.9rem;
    }

    strong {
        color: #AB222E;
    }

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }
`

export const ContainerTextAndPictures = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;

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

export const ContainerAboutMe = styled.div`
    margin: 50px;
    display: flex;
    width: 500px;
    align-items: center;
    justify-content: center;
`

export const ContainerSocials = styled.div`
    display: flex;
    width: 60%;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`