import React, { useEffect, useRef, useState } from 'react'
import "./Projects.css"
import { sumArray } from '../../helper'
import { projects } from '../../data'
import Card from './Card'

const tabs = [
  {
    name:"All",
  },
  {
    name:"Web",
  },
  {
    name:"UI/UX",
  },
  {
    name:"Apps",
  },
]
const Projects = () => {
  const [displayableProjects,setDisplayableProjects] = useState(projects);
  const [activeIndex,setActiveIndex] = useState(0);
  const [offset,setOffset] = useState(0);
  const [indicatorWidth,setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array())


  useEffect(()=>{
   const prevEl= itemsEls.current.filter((_,index)=> index < activeIndex);
   setOffset(
    sumArray(
      prevEl.map(item => item.offsetWidth)
    )
   )
   setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth)
  },[activeIndex])


  const setProjects = (category) =>{
     if(category === "All"){
      return setDisplayableProjects(projects)
     }
     const pro = projects.filter((item)=>item.category.toLowerCase() === category.toLowerCase())
     setDisplayableProjects(pro);
  }

  



  return (
    <section id='projects'>
       <div className="section__wrapper projects__container">
        <div className="section__header center">
           <h1 className="primary__title">Projects</h1>
        </div>
        <nav>
           {
             tabs.map((tab,index)=>(
             <button 
              key={index} 
              ref={el => itemsEls.current[index] = el}
              onClick={()=>{
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              >
                {tab.name}
              </button>
             ))
           }
          <span 
          className='active__indicator' 
          style={{
            left:`${offset}px`,
            width:`${indicatorWidth}px`,
          }}
          />
        </nav>


        <div className="card__container">
              {displayableProjects && displayableProjects.map(project =>
                  <Card key={project.id} 
                        title={project.title} 
                        image={project.image} 
                        data={project.data} 
                        stack={project.stack} 
                        demoLink={project.data.demoLink}/>
                 )}
           </div>
       </div>
    </section>
  )
}

export default Projects