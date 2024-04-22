import React,{useState,useEffect,useRef} from 'react'
import Odometer from 'react-odometerjs'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import "./Facts.css"

const Facts = () => {
    const [experinece, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    const container = useRef();
    gsap.registerPlugin(useGSAP)
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExperience(10);
            setProjects(150);
            setClients(2.50)
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

   useGSAP(()=>{
    const timeline = gsap.timeline();
    timeline
    .from(".fact__item",{
        delay:1.5,
        x:-100,
        stagger:.5,
        opacity:0,
    })
   },{scope:container})




  return (
    <div className="fact__container" ref={container}>
       <div className="fact__item">
           <div className="count__container">
             <Odometer
              value={experinece}
             />
             <span className="indicator">+</span>
           </div>
           <p className="name">Years Of Experience</p>
       </div>

       <div className="fact__item">
           <div className="count__container">
             <Odometer
              value={projects}
             />
             <span className="indicator">+</span>
           </div>
           <p className="name">Completed Projects</p>
       </div>
       <div className="fact__item">
           <div className="count__container">
             <Odometer
              value={clients}
             />
             <span className="indicator">K</span>
           </div>
           <p className="name">Satisfied Clients</p>
       </div>
    </div>
  )
}

export default Facts
