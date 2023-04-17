import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";

const App = () => {
   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

   useEffect(() => {
      const checkIsHeaderScrolled = () => {
         setIsHeaderScrolled(scrollY > 0);
      };

      addEventListener("scroll", checkIsHeaderScrolled);

      return () => removeEventListener("scroll", checkIsHeaderScrolled);
   }, []);

   return (
      <>
         <header>
            <div className="top-bar">
               <div className="container-fluid section-container">
                  <div className="row">
                     <div className="col-sm-auto">
                        <div className="top-bar-item">
                           <a href="https://www.openstreetmap.org/export/embed.html?bbox=-68.1268520951926%2C-16.512089261688363%2C-68.12340277439945%2C-16.51036628593254&layer=cyclosm&marker=-16.511227775730298%2C-68.12512743479601">
                              <i className="fa-solid fa-location-pin"></i>
                              <span>
                                 Av. 20 de Octubre esq. c/ Lisimaco Guitierrez # 2541
                              </span>
                           </a>
                        </div>
                     </div>
                     <div className="col-sm-auto">
                        <div className="top-bar-item">
                           <i className="fa-solid fa-phone-flip"></i>
                           <span>+591 71227697 +591 - 2- 2430555</span>
                        </div>
                     </div>
                     <div className="col-sm-auto">
                        <div className="top-bar-item">
                           <i className="fa-solid fa-envelope"></i>
                           <span>webinfo@policia.bo</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <div className={`c-navbar${isHeaderScrolled ? " active" : ""}`}>
            <div className="container-fluid section-container">
               <div className="row">
                  <div className="col-sm-auto col-auto d-flex align-items-center">
                     <img
                        className="logo"
                        src="https://www.policia.bo/wp-content/uploads/2023/03/Elvin-ultimo-2023-1.png"
                        alt=""
                     />
                  </div>
                  <div className="col-sm-auto ms-auto links-container">
                     <ul className="links">
                        <li>
                           <a href="#">inicio</a>
                        </li>
                        <li>
                           <a href="#">Institución</a>
                        </li>
                        <li>
                           <a href="#">Área Administrativa</a>
                        </li>
                        <li>
                           <a href="#">TRANSPARENCIA</a>
                        </li>
                        <li>
                           <a href="#">Guía de Tramites</a>
                        </li>
                        <li>
                           <a href="#">COMUNICADOS</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col-sm-auto col-auto ms-auto">
                     <div className="menu-bubble">
                        <i className="fa-solid fa-bars"></i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <main>
            <div className="page-hero">
               <div className="container-fluid section-container">
                  <div className="row justify-content-center justify-content-lg-start">
                     <div className="col-sm-auto">
                        <h1 className="hero-title text-lg-start text-center">
                           TRAMITES F.E.L.C.C.
                        </h1>
                     </div>
                  </div>
               </div>
            </div>
            <div className="page-content">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-sm-auto">
                        <h2 className="heading-title">
                           DIRECCION DEPARTAMENTAL DE LA FUERZA ESPECIAL DE LUCHA CONTRA
                           EL CRIMEN (FELCC)
                        </h2>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="accordion-list">
                           <ul>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    1. CERTIFICACION DE EXTRAVIO O ROBO/HURTO DE
                                    DOCUMENTOS
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    2. REQUISITOS PARA LA FIRMA Y OTORGACION DE GARANTIAS
                                    REQUERMIENTO FISCAL U ORDEN JUCIALES ESPECIFICO
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    3. REQUISITOS PARA EL TRAMITE DE CANCELACION DE
                                    ANTECEDENTES POLICIALES
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    4. REQUISITOS PARA REGISTRO DOMICILIARIO PARA
                                    CIUDADANOS EXTRANJEROS
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    5. REQUISITOS PARA REGISTRO DOMICILIARIO PARA
                                    OCUPANTES O CEDIDOS
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    6. REQUISITOS PARA REGISTRO DOMICILIARIO PARA
                                    INQUILINO O ANTICRECISTA
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    7. REQUISITOS PARA REGISTRO DOMICILIARIO PARA
                                    PROPIETARIO
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    8. CÓMO REALIZAR UN DENUNCIA ANTE UN DELITO
                                    INFORMÁTICO
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <i className="fa-solid fa-plus me-2"></i>
                                    9. REQUISITOS PARA REALIZAR REPORTE DE PERSONA
                                    DESAPARECIDA
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-lg-7">
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </div>
         </main>
         <footer>
            <div className="container-fluid section-container">
               <div className="row">
                  <div className="col-sm-3 footer-col">
                     <a className="footer-item" href="">
                        <i className="fa-solid fa-location-pin"></i>
                        Av. 20 de Octubre esq. c/ Lisimaco Guitierrez # 2541
                     </a>
                  </div>
                  <div className="col-sm-3 footer-col">
                     <p className="footer-item">webinfo@policia.bo</p>
                  </div>
                  <div className="col-sm-3 footer-col">
                     <p className="footer-item">
                        <i className="fa-solid fa-phone-flip"></i> 2430555
                     </p>
                  </div>
                  <div className="col-sm-3 footer-col active">
                     <p className="footer-item">
                        2023 - Policia Boliviana - DNTT JUNTOS CONSOLIDAMOS EL CAMBIO Y
                        FORTALECIMIENTO INSTITUCIONAL
                     </p>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default App;
