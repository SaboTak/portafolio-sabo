import NavBar from './components/navBar/Navbar';
import Preview from './components/myPreview/PreviewMe';
import About from './components/myAbout/AboutMe'
import Contact from './components/myContact/ContactMe'
import Experiencie from './components/myExperiencie/ExperiencieMe'
import Family from './components/myFamily/FamilyMe'
import Skills from './components/mySkills/SkillsMe'
import Works from './components/myWorks/WorksMe'


export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <section>
        <Preview />
      </section>

      <section>
        <About />
      </section>
      
      <section>
        <Skills />
      </section>

      <section>
        <Experiencie />
      </section>

      <section>
        <Works />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Family />
      </section>
      
    </div>
  )
}
