import { Widget } from "./components/Widget";
import { ContainerProjects, ContainerSkills, AboutMe, Banner, ContainerAboutMe, ContainerAll, ContainerHeader, ContainerSocials, ContainerTextAndPictures, Dropdown, LogoTitle, Presentation, ContainerAboutMeBackground, Projects, ImgProjects, ContainerButtonsProjects, ContainerExperienceSkill } from "./styles/styles";

import ArthurPicture from "./assets/Arthur.jpeg"

import Html from "./assets/skills/html.png"
import Css from "./assets/skills/css.png"
import FireBase from "./assets/skills/firebase.png"
import JS from "./assets/skills/javascript.png"
import Node from "./assets/skills/node.png"
import React from "./assets/skills/react.png"
import Mongo from "./assets/skills/mongo.png"
import Jquery from "./assets/skills/jquery.png"
import TypeScript from "./assets/skills/typescript.png"

import CoffeeDelivery from "./assets/projects/coffee-delivery.png"
import AutoSpo from "./assets/projects/auto-spo.png"
import GithubBlog from "./assets/projects/github-blog.png"
import ModaSalurt from "./assets/projects/moda-salurt.png"
import WatchMe from "./assets/projects/watchMe.png"
import NetworkigFeed from "./assets/projects/networking-feed.png"
import IgniteShop from "./assets/projects/ig-news.png"
import PomodoroTimer from "./assets/projects/PomodoroTimer.png"
import FinancialController from "./assets/projects/financial-controller.png"

import TypeIt from "typeit-react";

import Curriculo from "./documents/curriculo.pdf"

import AOS from 'aos';
import 'aos/dist/aos.css';

import { GithubLogo, InstagramLogo, TwitterLogo, LinkedinLogo, FileArrowDown, Envelope } from "phosphor-react"
import { useState } from "react";

interface skillsProps {
  id: number,
  title: string,
  imgUrl: string,
  experience: string,
}

interface projectProps {
  id: number,
  projectName: string,
  repoUrl?: string,
  imgUrl: string,
  urlGithub: string,
}

const MySkills : Array<skillsProps> = [
  {
    id: 1,
    title: "Html",
    imgUrl: Html,
    experience: "2 Anos",
  },
  {
    id: 2,
    title: "Css",
    imgUrl: Css,
    experience: "2 Anos",
  },
  {
    id: 3,
    title: "JS",
    imgUrl: JS,
    experience: "2 Anos",
  },
  {
    id: 4,
    title: "React",
    imgUrl: React,
    experience: "1 Ano e meio",
  },
  {
    id: 5,
    title: "React Native",
    imgUrl: React,
    experience: "1 Ano",
  },
  {
    id: 6,
    title: "TypeScript",
    imgUrl: TypeScript,
    experience: "1 ano e meio",
  },
  {
    id: 7,
    title: "Node",
    imgUrl: Node,
    experience: "1 Ano",
  },
  {
    id: 8,
    title: "Mongo",
    imgUrl: Mongo,
    experience: "1 ano",
  },
  {
    id: 9,
    title: "Jquery",
    imgUrl: Jquery,
    experience: "1 ano",
  },
  {
    id: 10,
    title: "FireBase",
    imgUrl: FireBase,
    experience: "1 ano",
  },
]

const MyProjects : Array<projectProps> = [
  {
    id: 1,
    projectName: "Coffee Delivery",
    imgUrl: CoffeeDelivery,
    urlGithub: "https://github.com/ArthurFilho/coffee-Delivery-Challenger",
    repoUrl: "https://coffees-delivery.netlify.app",
  },
  {
    id: 2,
    projectName: "Moda Salurt",
    imgUrl: ModaSalurt,
    urlGithub: "https://github.com/ArthurFilho/Moda-Salurt",
    repoUrl: "https://moda-salurt.netlify.app",
  },
  {
    id: 3,
    projectName: "Auto Spo",
    imgUrl: AutoSpo,
    urlGithub: "https://github.com/ArthurFilho/AutoSpo-Project",
    repoUrl: "https://auto-spo.netlify.app",
  },
  {
    id: 4,
    projectName: "Networkig Feed",
    imgUrl: NetworkigFeed,
    urlGithub: "https://github.com/ArthurFilho/Networking-feed",
    repoUrl: "https://networking-feed.netlify.app",
  },
  {
    id: 5,
    projectName: "Github Blog",
    imgUrl: GithubBlog,
    urlGithub: "https://github.com/ArthurFilho/GITHUB-Blog",
    repoUrl: "https://github-blog-challenger.netlify.app",
  },
  {
    id: 6,
    projectName: "WatchMe",
    imgUrl: WatchMe,
    urlGithub: "https://github.com/ArthurFilho/WatchMe",
    repoUrl: "",
  },
  {
    id: 7,
    projectName: "Ignite Shop",
    imgUrl: IgniteShop,
    urlGithub: "https://github.com/ArthurFilho/Ignite-Shop",
    repoUrl: "",
  },
  {
    id: 8,
    projectName: "Pomodoro Timer",
    imgUrl: PomodoroTimer,
    urlGithub: "https://github.com/ArthurFilho/Pomodoro-Timer",
    repoUrl: "https://pomodorotimerp.netlify.app",
  },
  {
    id: 9,
    projectName: "Financial Controller",
    imgUrl: FinancialController,
    urlGithub: "https://github.com/ArthurFilho/Financial-Controller",
    repoUrl: "",
  },
]
 
export function App(){

  const [hoverProjects, setHoverProjects] = useState(0)

  const [hoverSkills, setHoverSkills] = useState(0)

  AOS.init({
    duration: 500,
  });

  return(
      <ContainerAll> 

                <ContainerHeader>
                  
                  <LogoTitle>
                      Arthur Timóteo Bezerra Pereira Filho
                  </LogoTitle>

                  <Dropdown>
                    
                    <div>       
                     <a href="#home">Home</a>
                    </div>
                    
                    <div>
                      <a href="#projects">Projetos</a>
                    </div>
                    
                    <div>
                      <a href="mailto:peraarthur2018@hotmail.com"> Contato</a>   
                    </div>

                  </Dropdown>
                
                </ContainerHeader>
                 
                <Presentation id="home">
                  <ContainerTextAndPictures>
                    <div>
                      <h1>

                      <TypeIt
                        options={{
                          strings: ["Olá, meu nome é Arthur 😎"],
                          speed: 100,
                          waitUntilVisible: true,
                        }}
                      />
                       
                      </h1>

                      <p>
                      Estou em busca de me tornar o melhor programador que posso ser.
                      Sou muito dedicado e comprometido em alcançar esse objetivo.
                      </p>
                    </div>

                  <img src={ArthurPicture} />

                  </ContainerTextAndPictures>
                    
                  <ContainerSocials>
                    
                    <a href="https://github.com/ArthurFilho"> <GithubLogo size={24} /> </a> 
                    
                    <a href="https://www.linkedin.com/in/arthur-filho/"> <LinkedinLogo size={24} /> </a>
                    
                    <a href="https://www.instagram.com/4rthur.tutu/"> <InstagramLogo size={24} /> </a>
                    
                    <a href="https://twitter.com/timoteo_arthur"> <TwitterLogo size={24} /> </a>

                  </ContainerSocials>
                 
                </Presentation>

                <Banner>
                </Banner>

              <ContainerAboutMeBackground>
                <ContainerAboutMe data-aos="zoom-in">

                    <span></span> 

                    <AboutMe>
                        <p>
                            Eu sou um desenvolvedor frontend capaz de criar soluções inovadoras e proporcionar uma 
                            experiência única aos usuários. <br /> Meu comprometimento e dedicação constantes me permitem 
                            aprimorar minhas habilidades e buscar sempre a excelência em cada projeto desenvolvido. 
                            Eu sempre busco ter criatividade e determinação para alcançar os objetivos propostos.
                        </p>


                        <div>
                          <ul>
                            <li>
                              Nome: Arthur Filho
                            </li>

                            <li>
                              Idade: 18 
                            </li>
                          </ul>
                          <ul>
                            <li>
                              Contato: peraarthur2018@gmail.com
                            </li>

                            <li>
                              Endereço: Sergipe - Aracaju
                            </li>
                          </ul>
                        </div>

                        <div> 
                          
                          <a href={Curriculo} download="Curriculo"> Currículo <FileArrowDown size={24} /> </a> 
                          
                          <a href="mailto:peraarthur2018@gmail.com"> Email <Envelope size={24} /> </a> 

                        </div>
                        
                    </AboutMe>

                </ContainerAboutMe>
              </ContainerAboutMeBackground>

                <ContainerSkills>
              
                {MySkills.map((Skills) => {
                  return(
                      <div data-aos="flip-up" onMouseOver={() => {setHoverSkills(Skills.id)}} onMouseOut={() => {setHoverSkills(0)}} key={Skills.id}>
                        {hoverSkills == Skills.id ? 
                        <ContainerExperienceSkill>
                          <img src={Skills.imgUrl} alt="" />
                          <p>{Skills.title}</p>
                          <h1>{Skills.experience}</h1>
                        </ContainerExperienceSkill>
                        : 
                        <>
                          <img src={Skills.imgUrl} alt="" />
                          <p>{Skills.title}</p>
                        </>
                        }
                      </div>
                  )
                })}
                              
                </ContainerSkills>

                <ContainerProjects id="projects">

                  <h1>Projetos Feitos</h1>
                  
                  <Projects>
                    {MyProjects.map((repos)=> {
                      return(
                            <div data-aos="fade-right" onMouseOver={() => {setHoverProjects(repos.id)}} onMouseOut={() => {setHoverProjects(0)}} key={repos.id}>
                            {hoverProjects == repos.id ? 
                            <>
                              <ImgProjects src={repos.imgUrl} alt="" />
                              
                              <ContainerButtonsProjects> 
                                <p>{repos.projectName}</p>
                                <div>
                                  
                                  <a href={repos.urlGithub}>Github</a> 

                                  {repos.repoUrl == '' ? '' : <a href={repos.repoUrl}>Site no Ar</a>}
                            
                                </div>
                              </ContainerButtonsProjects>
                            </>
                            :
                            <img src={repos.imgUrl} alt="" />
                          }
                              
                            </div>
                      )
                    })}
                  </Projects>

                </ContainerProjects>

        <Widget />
      </ContainerAll>
  )
}
