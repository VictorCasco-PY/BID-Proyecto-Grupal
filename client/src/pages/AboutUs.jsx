import React from 'react'
import AboutUsHeader from '../layouts/AboutUsHeader'
import Footer from '../layouts/Footer'

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeader />
      <div className='main-container mt-5'>
        <h2>Sobre Nosotros</h2>
        <div className='about-content mt-5 gap-5'>
          <img className='w-100 object-fit-cover' src={require('../assets/images/image-about-us.jpg')} alt="" />
          <div>
            <p className='mb-0'>En Blog de Futbol, creemos que el futbol es más que un simple deporte. Es una pasión, 
            una forma de vida, que une a personas de diferentes culturas y orígenes en todo el mundo. Es por eso que 
            nuestro blog está diseñado para satisfacer las necesidades de los fanáticos del futbol de todas partes, 
            desde los recién llegados hasta los expertos. Nuestro objetivo es proporcionar a nuestros lectores información 
            precisa y actualizada sobre el mundo del futbol, de una manera accesible y fácil de entender. Nos aseguramos de 
            estar al tanto de las últimas tendencias y novedades en el mundo del futbol, y compartimos nuestras ideas y 
            opiniones con nuestros lectores de una manera clara y concisa. Además de ofrecer noticias y análisis de calidad, 
            también nos enorgullece crear una comunidad en línea de fanáticos del futbol. Nuestros lectores son bienvenidos 
            a participar en discusiones y debates sobre diferentes temas relacionados con el futbol, y estamos siempre abiertos 
            a sugerencias y comentarios sobre cómo mejorar nuestra plataforma..</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
