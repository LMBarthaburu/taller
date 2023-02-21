import React from 'react'
import './contactForm.css'
import {useRef, useState} from 'react'
import emailjs from 'emailjs-com'

function ContactForm() {
  const formRef = useRef()
  const [done, setDone]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_sk7z85l','template_fnv45rm', formRef.current,'y7xW86yMJ4daVgaeO')
    setDone(true)
    const formulario =document.getElementById('formulario')
    formulario.reset()
  }

  return (
    <section id='contacto' className='pt-5'>
      <div className='box d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-center py-3'>Formulario de contacto</h1>
        <div className='d-flex justify-content-center align-items-center container'>
          <div className='col-12 col-lg-8'>
            <form className='d-flex flex-column' ref={formRef} onSubmit={handleSubmit} id='formulario'>
              <label className='mt-2 fw-bold'>Nombre completo</label>
              <input type="text" placeholder='Escriba su nombre completo' name='user_name' className='form-input'required/>
              <label className='mt-2 fw-bold'>Asunto</label>
              <input type="text" placeholder='Escriba el motivo de su consulta' name='user_subject' className='form-input'required/>        
              <label className='mt-2 fw-bold'>E-mail</label>
              <input type="email" placeholder='ejemplo@gmail.com' name='user_email' className='form-input'required/>
              <label className='mt-2 fw-bold'>Mensaje</label>
              <textarea id="" placeholder='Escriba su mensaje aquí' name='message' rows="5" className='form-text-area'required></textarea>
              <div className='d-flex align-items-center'>
                <button className='buscador-boton mb-4'>Enviar</button>
                {done && <p className='sent-msg'>Mensaje enviado con exito!!</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm