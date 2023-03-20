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
    width: 80%;
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
    width: 60%;
    align-items: center;
    gap: 20px;
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

export const ContainerAboutMeBackground = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(39 39 42);
    margin: 50px;
`

export const ContainerAboutMe = styled.div`
    margin: 50px;
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    span {
        width: 300px;
        height: 300px;
        background-color: white;
    }
`

export const AboutMe = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    width: 50%;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    p {
        margin-bottom: 50px;
    }
`

export const ContainerSocials = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`

export const ContainerSkills = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;
    margin-bottom: 50px;
    gap: 20px;

    div {
        width: 150px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(39 39 42);
        border-radius: 15px;
        flex-direction: column;
        img {
            width: 50px;
        }
    }
`

export const ContainerProjects = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px;

`

export const Projects = styled.div`
    display: flex;
    gap: 10px;
    div {
        width: 300px;
        height: 150px;
        background-color: rgb(39 39 42);
    }
`