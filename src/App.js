import React from 'react'

import Header from './components/header/header'
import Presentation from './components/presentation/presentation'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import DetailProject from './components/detailProject/detailProject'

function App() {
  return (
    <div>
      <Header />
      <Presentation />
      <About />
      <Projects />
      <DetailProject />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
