import styled from "styled-components"

import Banner1 from "../assets/logo.png"

export const ContainerAll = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f4f4f5;
    width: 100%;
`

export const ContainerHeader = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;

    @media (max-width: 768px) {
        width: 50%;
        flex-direction: column;
        gap: 50px;
      }
`

export const Dropdown = styled.div`
    display: flex;
    gap: 5rem;
    
    a {
        cursor: pointer;
    }

    div {
        transition: all 0.3s;
    }
    div:hover {
        color: #AB222E;
    }
`

export const Presentation = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
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
        width: 400px;
        height: 500px;
        object-fit: cover;
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        width: 80%;
        img {
            width: 150px;
        }
    }
`

export const ContainerTextAndPictures = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 768px) {
        width: 90%;

        img {
            display: none;
        }
    }
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
        border: 5px solid black;
    }

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        img {
            width: 300px;
            height: 400px;
        }
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
            transition: all 0.3s
        }

        a:hover {
            background-color: #09090A;
        }
    }
    p {
        margin-bottom: 50px;
    }
    @media (max-width: 768px) {
        width: 80%;
        font-size: 10px;
            div {
                gap: 10px;
            }
            a {
                width: 50px;
                padding: 5px;
            }
            li {
                font-size: 6px;
            }
      }
`

export const ContainerSocials = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s;

    a:hover {
        color: #AB222E;
    }
`

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-top: 50px;
    margin-bottom: 50px;
    
    h2 {
        font-size: 25px;
        margin-bottom: 50px;
    }

    span {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

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
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: center;
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
            width: 77%;
            margin: 50px;
            font-size: 25px;
    }
    a {
        background-color: rgb(39 39 42);
        padding: 15px;
        margin-top: 50px;
        border-radius: 10px;
        transition: all 0.3s;
        cursor: pointer;
        
        :hover {
            background-color: #AB222E;
        }
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

export const WorkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px;
    
    h1 {
        margin-bottom: 50px;
        font-size: 25px;
    }
    ul {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
        justify-content: center;

        li {
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 350px;
            padding: 40px;
            background-color: rgb(39 39 42);
            border-radius: 15px;
            align-items: flex-start;
            justify-content: center;

            p {
                font-size: 15px;
                opacity: 0.7;
        }
        
        h2 {
            margin-top: 10px;
            margin-bottom: 20px;
        }
    }
    }    
    @media (max-width: 768px) {
       li {
        width: 100px;
       }
      }
`

export const Footer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(39 39 42);
    

    a {
        display: flex;
    }
    
    h1 {
        margin: 20px;
    }

    div {
        display: flex;
        gap: 10px;
    }
    
    a:hover {
        color: #AB222E;
        transition: all 0.3s
    }
`

export const KnowledgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;
    margin-bottom: 100px;

        h1 {
            font-size: 25px;
        }
    
        div {
            display: flex;
            width: 60%;
            align-items: center;
            justify-content: space-between;
            padding: 50px;
            background: rgb(39 39 42);
            border-radius: 15px;
            height: 350px;
        }

        li {
            margin-bottom: 30px;
            
            button {
                display: flex;
                gap: 10px;
                transition: all 0.3s;
            }
            
            button:hover {
                color: #09090A;
            }
        }

        span {
            width: 50%;
            font-size: 15px;
                h2 {
                    margin-bottom: 20px;
                }
                p {
                    margin-bottom: 30px;
                }
                button {
                    display: flex;
                    width: 89%;
                    align-items: center;
                    justify-content: center;
                    background: #09090A;
                    padding: 10px;
                    transition: all 0.3s;
                    border-radius: 15px;
            }
        }
        @media (max-width: 768px) {
        div {
            width: 100%;
            height: 600px;
            flex-direction: column;
        }
      }
`

export const ButtonNotAllowed = styled.button`
    cursor: not-allowed;
    background-color: #09090A;
    opacity: 0.8;
`

export const ButtonAllowed = styled.button`
    :hover {
                background-color: #AB222E;
            }
`

export const WidgetStyleMedia = styled.div`
@media (max-width: 768px) {
    display: none;
    position: relative;
}
`