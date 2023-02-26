import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Juan Diaz</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mi
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Servicios
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/juandsh28"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/juandsh28/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/juandsh28"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Juan Diaz. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
