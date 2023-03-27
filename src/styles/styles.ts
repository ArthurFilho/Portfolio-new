import styled from "styled-components";

import Banner1 from "../assets/banner.png"

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
    
    div {
        transition: all 0.3s;
    }
    div:hover {
        color: #AB222E;
    }
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
        border-radius: 40%;
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
    height: 250px;
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
    margin-bottom: 50px;
`

export const ContainerAboutMe = styled.div`
    margin: 50px;
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 15px;
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

        a {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 180px;
            margin-top: 20px;
            padding: 20px;
            border: 3px solid #09090A;
            border-radius: 15px;
        }

        a:hover {
            background-color: #09090A;
            color: #AB222E;
        }
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

    a:hover {
        color: #AB222E;
    }
`

export const ContainerSkills = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;
    margin-top: 50px;
    gap: 20px;

    div {
        width: 150px;
        height: 125px;
        background-color: rgb(39 39 42);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        img {
            width: 50px;
            margin-bottom: 10px;
        }
    }
`

export const ContainerExperienceSkill = styled.div`
    
    img {
        opacity: 0.1;
    }

    p {
        opacity: 0.1;
    }
    
    h1 {
        position: absolute;
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
        h1 {
            width: 80%;
            margin: 50px;
    }
`

export const Projects = styled.div`
    display: flex;
    width: 90%;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    div {
        width: 400px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

        img {
            width: 100%;
            object-fit: cover;
        }
        p {
            position: absolute;
        }
    }

    div:hover {
        transform:scale(1.09,1.09);
    }

    img {
        width: 50px;
    }
`

export const ImgProjects = styled.img`
    opacity: 0.3;
`
export const ContainerButtonsProjects = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
     p {
        margin-bottom: 100px;
     }
     div {
        gap: 30px;
     }
     a {
        background: rgb(39 39 42);
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
     }
     a:hover {
        background-color: #AB222E;
     }
`



