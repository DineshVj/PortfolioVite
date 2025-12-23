
import './App.css'
import profileImage from './assets/Profile_Image.png'
import illustrateImage from './assets/Gemini_Generated_Image_.png'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
function App() {

  return (
    <>
      <div className='cl_wholeContainer'>
        <div className='cl_navBar'>


          <img src='../public/icon.png' alt='Logo' className='cl_logo' />

          <ul className='cl_navItems'>
            <li className='cl_navItems2'>About</li>
            <li className='cl_navItems4'>Contact</li>
          </ul>
        </div>

        <div className='cl_landing'>
          {/* <h2>Dinesh VJ</h2> */}
          <h1 className='cl_hero-title'>Full-Stack Developer · Python · Django · JavaScript · React</h1>

          <p className='cl_hero-subtitle'>I build clean, accessible, and scalable web applications with a focus on user experience.</p>

          <img className='cl_profileImg' src={profileImage} alt='ProfilePic' />

          <img className='cl_illustrateImage' src={illustrateImage} alt='Illustration' />
        </div>


        <div className='cl_intro'>
          <h1 className='cl_intro-Title'>Hi, I’m Dinesh. Nice to meet you.</h1>
          <p className='cl_intro-para'>
            I’m a Full-Stack Developer who enjoys building well-structured and scalable web applications.
            My primary stack includes Python, Django, JavaScript, and React, allowing me to work
            confidently across the entire application lifecycle.
          </p>
          <p className='cl_intro-para2'>
            I focus on writing clean, maintainable code and creating accessible, user-friendly interfaces.
            Whether it’s designing backend logic, integrating APIs, or crafting responsive UIs,
            I aim to deliver solutions that are both efficient and easy to use.
          </p>
        </div>

        <div className='cl_experiance'>
          <h1 className='cl_experiance-Title'>Experiance</h1>
          <div className='cl_experiance-paraSection'>


            <p className='cl_experiance-para'>Software Engineer Intern at TechNova Solutions (June 2023 - August 2023)</p>
            <ul className='cl_experiance-ul'>
              <li>Developed and maintained web applications using Django and React, improving user engagement by 15% through enhanced UI/UX design.</li>
              <li>Collaborated with cross-functional teams to implement RESTful APIs, ensuring seamless integration between frontend and backend systems.</li>
              <li>Optimized database queries and application performance, resulting in a 20% reduction in load times.</li>
            </ul>

          </div>

        </div>

        <div className='cl_contact'>
          <h3 className='cl_contact-Title'>Let's work together...</h3>
          <p className='cl_contact-para'>Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <button className='cl_contact-btn'>Say Hello</button>
        </div>

        <div className='cl_footer'>
          <img src='../public/icon_white.png' alt='Logo' className='cl_logo' />

          <p className='cl_footer-Title'></p>

          <div className='cl_socialIcons'>
            <a className='cl_socialIconRef' href='https://www.linkedin.com/in/dineshvj/' target='_blank'><FaLinkedinIn className='cl_linkedin' size={20} /></a>
            <a className='cl_socialIconRef' href='https://github.com/vjDinesh' target='_blank'><FaGithub className='cl_github' size={20} /></a>
            <a className='cl_socialIconRef' href=''><FaEnvelope className='cl_envelope' size={20} /></a>
          </div>

          <p className='cl_footer-para'>© 2024 Dinesh VJ. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default App
