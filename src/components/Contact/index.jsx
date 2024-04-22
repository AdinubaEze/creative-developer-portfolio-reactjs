import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className='primary__title'>Contact Me</h2>
          <div className="text__muted description">
            Ready to take your digital presence to the next level? Whether you're looking to launch a new website, revamp an existing one, or need expert advice on the best web technologies, I'm here to help. Reach out to discuss your project, ask questions, or just say hello.
          </div>
        </div>

       <div className="contact__group">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__icon'/>
            <h3>Email</h3>
            <h5>emma234eze@gmail.com</h5>
            <a href="mailto:emma234eze@gmail.com" target='_blank' className='btn'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__icon'/>
            <h3>Messenger</h3>
            <h5>Emmanuel Eze</h5>
            <a href="http://m.me/profile.php?id=100076751404019" target='_blank' className='btn'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__icon'/>
            <h3>WhatsApp</h3>
            <h5>+2347039681695</h5>
            <a href="https://api.whatsapp.com/send?phone=+2347039681695" target='_blank' className='btn'>Send a message</a>
          </article>


        </div>
        {/* END OF CONTACT OPTION */}

        <form /* ref={form} onSubmit={sendEmail} */>
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn__primary'>Send Message</button>
        </form>
       </div>
      </div>
    </section>
  )
}

export default Contact
