import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import ss from "./Carrousel.module.scss";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import useAppContext from '../../Context/UseAppContext';
import Image from 'next/image'





const Carrousel = () => {
   const { lang } = useAppContext();
   return (<>
      <div className={ss.container}>
         <div className={ss.overlay}>
            <Image src='/ofi3.jpg' alt="socio" layout="fill"></Image>
         </div>
         <div className={ss.content}>

            <div className={ss.title_container}>
               <SectionTitle>{lang == "ESP" ? esp[0] : eng[0]}</SectionTitle>
            </div>
            <div className={ss.carousel_container}>
               <Carousel autoplay draggable={true} autoplaySpeed={6000} speed={1000}>


                  <div className={ss.contentStyle}>
                     <p className={ss.referencia}>
                        {lang == "ESP" ? "Su conocimiento del negocio también facilita nuestro trabajo como empresa internacional, en un mercado tan cambiante como el argentino."
                           : "Their knowledge of the business also facilitates our work in a market as changing and challenging as Argentina"
                        }
                        <p style={{ fontWeight: "bold", marginTop: "1rem", fontStyle: "normal" }}></p>
                        <span>{duracell}</span>
                     </p>
                  </div>

                  <div className={ss.contentStyle}>
                     <p className={ss.referencia}>
                        {lang == "ESP" ? "Se caracterizan por anticiparse a los hechos y mostrar un alto compromiso con las necesidades de nuestro día a día"
                           : "They are characterized by anticipating the facts and show high commitment in the needs of our day to day"
                        }


                        <p style={{ fontWeight: "bold", marginTop: "1rem", fontStyle: "normal" }}>
                           <Image src="/CMC.png" width="150px" height="45px"></Image>
                        </p>
                     </p>

                  </div>

                  <div className={ss.contentStyle}>
                     <p className={ss.referencia}>
                        {lang == "ESP" ? "El equipo de HSR nos propone soluciones prácticas e innovadoras en sus distintas áreas de práctica"
                           :
                           "HSR Team proposes us practical and innovative solutions in different areas of practices"

                        }

                        <p style={{ fontWeight: "bold", marginTop: "1rem", fontStyle: "normal" }}>
                           <Image src="/hidraco.png" width="150px" height="45px"></Image>
                        </p>
                     </p>

                  </div>


                  <div className={ss.contentStyle}>
                     <p className={ss.referencia}>
                        {lang == "ESP" ? "Son muy profesionales, proactivos y comprometidos"
                           : "They are professional, proactive and committed"}
                        <p style={{ fontWeight: "bold", marginTop: "1rem", fontStyle: "normal" }}>
                           <Image src="/aversa.png" width="150px" height="45px"></Image>
                        </p>
                     </p>
                  </div>



                  <div className={ss.contentStyle}>
                     <p className={ss.referencia}>
                        {lang == "ESP" ? "La confianza generada nos permite delegarle asuntos muy variados y complejos"
                           : "The generated trust allow us to delegate them many different and complex issues"}
                        <p style={{ fontWeight: "bold", marginTop: "1rem", fontStyle: "normal" }}>
                           <Image src="/columbia.png" width="150px" height="45px"></Image>
                        </p>
                     </p>
                  </div>








                  <div className={ss.contentStyle}>
                     <p className={ss.referencia}>
                        {lang == "ESP" ? "Son un equipo de abogados que conocen la dinámica de nuestra empresa, ofreciendo un asesoramiento pragmático que se adapta a nuestra situación."
                           : "The team knows the dynamics of our company, offering pragamatic assessment adapted to our situation"}
                        <p style={{ fontWeight: "bold", marginTop: "1rem", fontStyle: "normal" }}>
                           <Image src="/walmart.png" width="150px" height="45px"></Image>
                           <Image src="/changomas.png" width="150px" height="45px"></Image>
                        </p>
                     </p>
                  </div>


               </Carousel>
            </div>
         </div>
      </div>
   </>);
};

export default Carrousel;

const esp = [
   "Testimonios"
]

const eng = [
   "Client Comments"
]

const duracell = <svg xmlns="http://www.w3.org/2000/svg" width="109.221" height="16.063" viewBox="0 0 109.221 16.063">
   <g id="Layer_2" data-name="Layer 2" transform="translate(0.001 0.001)">
      <g id="tick" transform="translate(-0.001 -0.001)">
         <path id="Path_111" data-name="Path 111" d="M90.883.134H88.741A1.553,1.553,0,0,0,87.135,1.74V15.794H96.5l.8-2.811H90.883Zm11.779,0H100.52A1.553,1.553,0,0,0,98.914,1.74V15.794h9.5l.8-2.811H102.8V.134ZM26.234,1.74v8.3a2.918,2.918,0,0,1-3.078,3.212,2.971,2.971,0,0,1-3.078-3.212V.134H16.33V9.5c0,4.417,2.543,6.559,6.826,6.559S29.982,13.92,29.982,9.5V.134H27.841A1.633,1.633,0,0,0,26.234,1.74ZM78.3,9.1h5.354V6.291H78.3V2.945H84.86V.134H74.553V14.188a1.512,1.512,0,0,0,1.472,1.606h8.432l.8-2.811H78.3ZM60.232,8.031a7.241,7.241,0,0,0,7.5,7.763h4.149V12.983H69.6c-2.811,0-5.488-.937-5.488-4.952S66.79,3.079,69.6,3.079h2.275V.134H67.727C63.444.134,60.232,3.079,60.232,8.031ZM6.96.134H1.606A1.553,1.553,0,0,0,0,1.74V15.794H6.96a7.241,7.241,0,0,0,7.5-7.763C14.456,3.079,11.243.134,6.96.134ZM5.22,12.983H3.882v-9.9H5.22c2.811,0,5.488.937,5.488,4.952S8.031,12.983,5.22,12.983Zm102.26-9.5a1.686,1.686,0,0,0,1.74-1.74A1.767,1.767,0,0,0,107.48,0a1.686,1.686,0,0,0-1.74,1.74,1.686,1.686,0,0,0,1.74,1.74Zm0-3.078a1.338,1.338,0,0,1,1.338,1.472,1.472,1.472,0,0,1-1.338,1.472,1.338,1.338,0,0,1-1.338-1.472A1.338,1.338,0,0,1,107.48.4Z" transform="translate(0.001 0.001)" fill="#fff" />
         <path id="Path_112" data-name="Path 112" d="M98.887,1.979h.4l.535.8h.268l-.535-.8a.5.5,0,0,0,.535-.535c0-.4-.268-.535-.669-.535h-.8V2.916h.268Zm0-.937h.4c.268,0,.4,0,.4.268s-.268.268-.535.268h-.4V1.042ZM43.474.105a1.874,1.874,0,0,0-2.142,1.606L36.648,15.364,33.7,10.813a4.792,4.792,0,0,0,3.614-4.952A5.822,5.822,0,0,0,31.428.105H25.806A1.553,1.553,0,0,0,24.2,1.712V15.766h3.748V2.916h2.275c3.078,0,3.614,2.008,3.614,2.945,0,2.945-2.677,3.078-4.551,3.212l3.882,6.692H40.53l.8-2.677h5.889l.8,2.677h4.149L46.954.105ZM41.868,10.679l2.409-8.031,2.409,8.031Z" transform="translate(8.192 0.029)" fill="#fff" />
      </g>
   </g>
</svg>

