import Head from 'next/head'  ;
import {BsFillMoonStarsFill, BsFillTerminalFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import Image from "next/image";
import jasp from '../public/JasperSelf.png';
import chartSpot from '../public/ChartSpot.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import vitalpic from '../public/VM.png';
import golang from '../public/golang.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jasper Levy Portfolio </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <div>
        <section className="min-h-screen">
         <nav className="py-10 mb-12 flex justify-between">
         <ul className ="flex items-center gap-x-5">
            <li>
            <h1 className='text-xl dark:text-white'>jglevy@princeton.edu</h1>
            </li>
            <li>
            <BsFillTerminalFill className="text-2xl dark:text-white"/>
            </li>

          </ul>
          <ul className ="flex items-center">
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
            </li>
            <li>
              <a 
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py2 rounded-md ml-8 "
                href="https://docs.google.com/document/d/e/2PACX-1vT_4fAXZ_eiycoUYi_XzGJKdOE1W7Jv_jFndVTv1wjaH9EnCAmKLKbY33OwZEd8vHO3r32PBMY5m9Gr/pub"
                target="_blank"
              >
              Resume
              </a>
              </li>

          </ul>
         </nav>
         <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Jasper Levy</h2>
          <h3 className='text-2xl py-2 md:text-3xl max-w-l mx-auto dark:text-white'>Undergraduate CS Student, Developer, and Researcher</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md-text-xl max-w-xl mx-auto dark:text-white">
            Undergraduate Student at Princeton University. 
            Studying Computer Science Engineering and in the process
            of obtaining a Statistic and Machine Learning Certificate (Minor).
            Open to work in Software Engineering, Data Science, or related roles.
          </p>
         </div>
         <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
         <a href="https://github.com/jaslevy" target="_blank">
          <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/jasper-levy-956722208/" target="_blank">
          <AiFillLinkedin />
        </a>
         </div>
         <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-60 mt-20 overflow-hidden md:w-96 md:h-80">
          <Image src={jasp} layout="fill" objectFit="cover"/>
         </div>
        </section>
        <section>
          <br/>
          <br/>
          <div className="text-center p-10">
            <h3 className='text-3xl py-1 dark:text-white'>More About Me</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                I am passionate about ML/AI, web development, visualization, data analysis, deep learning, and more. Previously, I have worked as a SWE 
                Intern at a military defense contractor, making UI improvements for products that serve the U.S. Military. Also, I have 
                worked as a Data Lab Research Associate at Princeton - completing a data analysis project regarding broadband inequality by income. 
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
               Last year, I finished a research project titled <span className="text-teal-500 italic">Analyzing the Pseudo-Accuracy of Spotify’s Music Genre Taxonomy and the Decisions That This Black Box Algorithm Makes</span>. 
               In this project, I used decision trees, random forests, K-means clustering, and TSNE validation to draw some interesting conclusions regarding music genre taxonomy on Spotify.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
               This year, I spent a lot of time developing a community driven Progressive Web App with other Princeton students titled  <span className="text-teal-500 italic">VitalMap</span>. Aside from that,
               I spend a lot of my spare time listening to music and training as a Division-I Varsity Fencer on Princeton's Varsity Fencing Team. 
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
               While I continue to take classes and solidify my programming skills, I am in search of employment for the Summer of 2023. Feel to reach out for any questions or interest!
              </p>
          </div>
        </section>
        <section>
          <br/>
          <br/>
        <h1 className='text-3xl py-1 dark:text-white text-center flex justify-center'> Some things I've done</h1>
          <div className='lg:flex gap-20 items-center'>
            <div className="text-center shadow-lg p-10 rounded-xl my-1 dark:text-white">
              <div className='flex justify-center'>
              <Image src={vitalpic} width={150} height={150}/>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>VitalMap</h3>
              <a href="https://vitalmap.onrender.com/" target="_blank">
              <p className="text-gray-800 py-1 text-blue-700 italic">Link to VitalMap</p>
              </a>
              <br/> 
              <p className="dark:text-white">
                VitalMap is a Progressive Web App that I created with four fellow Princeton undergrads. VitalMap allows students to locate contraceptive 
                and menstrual products on campus, check which locations have sufficient quantities of product, and update 
                stock levels of certain products. 
              </p>
              <h4 className="py-4 dark:text-white italic"> Technologies Used</h4>
                <div className="container-fluid">Flask</div>
                <div className="container-fluid">PostgreSQL</div>
                <div className="container-fluid">AJAX</div>
                <div className="container-fluid">JQuery</div>
                <div className="container-fluid">JavaScript</div>
                <div className="container-fluid">Jinja2</div>
                <div className="container-fluid">Bootstrap</div>
                <div className="container-fluid">ArcGIS API</div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:text-white">
              <div className='flex justify-center'>
              <Image src={chartSpot} width={150} height={175}/>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Spotify Genre Taxonomy Research</h3>
              <a href="https://docs.google.com/document/d/e/2PACX-1vQ-h17WFmbc4wEYUZBc_OkWIsWuOTMJQYXP8ZsGU4g2WW1wPOIN_V2Afg4Ml9a7XrIed3VsbxUp2TVu/pub" target="_blank">
              <p className="text-gray-800 py-1 text-blue-700 italic">Link to Paper</p>
              </a>
              <br/>
              <p className="dark:text-white">
              Fundamentally, Music genre classification is a difficult task due to the fact that it is highly subjective and ambiguous: 
              there are no absolutely true, incontestable labels for a song’s genre(s). 
              In this research, my goal is to determine how Spotify’s algorithm makes music genre classification decisions and examine how Spotify’s 
              algorithm classifies as compared to musicologists.

              </p>
              <h4 className="py-4 dark:text-white italic">Technologies Used</h4>
              <div className="container-fluid">R</div>
                <div className="container-fluid">Python</div>
                <div className="container-fluid">Dplyr</div>
                <div className="container-fluid">TidyModels</div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className='flex justify-center'>
              <Image src={golang} width={150} height={150}/>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>DORM for SQL Queries in Golang</h3>
              <p className="dark:text-white"> An object-relational mapper provides an object-oriented layer between relational 
              databases and object-oriented programming languages without having to write SQL queries. 
              It standardizes interfaces reducing boilerplate and speeding development time.
              </p>
              <br/>
              <p className='dark:text-white'>
              I built a Dopey Object Relational Mapping with SQL Queries (Golang). I Used Golang Interfaces and the Golang
               “reflect” package to allow clients to communicate with SQL databases
                through Go structs while abstracting schema and table architecture
                 (which were determined at runtime using reflection). 
              </p>
              <h4 className="py-4 dark:text-white italic"> Technologies Used</h4>
              <p className="text-gray-800 py-1 dark:text-white">Golang</p>
              <p className="text-gray-800 py-1 dark:text-white">Reflection Package</p>
            </div>

          </div>
          <div className="text-center p-10 my-10">
            <h3 className='text-3xl py-1 dark:text-white'>Relevant Coursework</h3>
              <ul className='text-md py-10 leading-8 text-gray-800 dark:text-white'>
                <li>Computer Science - Interdisciplinary Approach</li>
                <li>Data Structures and Algorithms</li>
                <li>Programming Systems</li>
                <li>Multivariable Calculus</li>
                <li>Linear Algebra</li>
                <li>Fundamentals of Statistics</li>
                <li>Foundations of Machine Learning</li>
                <li>Fundamentals of Data Science</li>
                <li>Machine Learning with Social Data</li>
                <li>Venture Capital Finance</li>
                <li>Reasoning About Computation</li>
                <li>Advanced Programming Techniques</li>
                <li>Computer System Design</li>
                <li>And More...</li>
              </ul>
          </div>
        </section>
        <section>
          <div>
            
            <div className="flex w-full justify-center items-center">
              <div className=" flex flex-col space-y-6 bg-teal-600 w-full p-8 rounded-xl shadow-lg dark:bg-black">
                <div className="flex flex-col space-y-8 justify-between">
                      <h1 className="font-bold text-4xl tracking-wide dark:text-white">Contact Me</h1>
                      <p className="pt-2 text-md dark:text-white"> If you have any questions for me, or would just like to reach out for any other 
                        reason, don't hesitate! Also, feel free to message me on Linkedin for anything work related!
                      </p>
                        <nav className="mb-12 flex justify-between">
                          <ul className ="flex items-center">
                            <li>
                              <AiOutlineMail onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white"/>
                            </li>
                            <li className="dark:text-white px-5" >
                               jglevy@princeton.edu
                            </li>

                          </ul>
                        </nav>
                      <div className="flex space-x-4 text-4xl gap-5 text-black dark:text-white">
                        <a href="https://github.com/jaslevy" target="_blank">
                            <AiFillGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/jasper-levy-956722208/" target="_blank">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
                        <form
                            action="https://formspree.io/f/mrgvzvzq"
                            method="POST"
                        > 
                            <div>
                              
                              <input 
                                type="text" 
                                placeholder="Your name" 
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                                focus:ring-teal-300 mt-2"
                                name="Name">
                              </input>
                            </div>
                            <br/>
                            <div>
                             
                            </div>
                            <div>
                              <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                                focus:ring-teal-300 mt-2"
                                name="email">
                              </input>
                            </div> 
                            <div>
                              <br/>
                            </div>
                            <div>
                              <textarea
                                rows='4'
                                placeholder="Message" 
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                                focus:ring-teal-300 mt-2"
                                name="message">
                              </textarea>
                            </div>
                            <br/>
                            <div className='text-right'>
                            <button type="submit" className="inline-block self-end bg-black text-white font-bolf rounded-lg px-6 py-2 uppercase text-sm">
                              Sumbit Message
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <br/>
            <br/>
          </div>
        </section>
        </div>
      </main> 
    </div>
  )
}
