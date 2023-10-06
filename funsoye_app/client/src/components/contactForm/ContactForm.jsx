import styles from './ContactForm.module.css'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import { useRef } from 'react'
import * as Yup from 'yup'
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env
import swal from 'sweetalert'
import logo from '../../assets/LOGO_FUNSOYEAA-sin_fondo.png'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
  const form = useRef()
  const navigate = useNavigate()
  const sendEmail = () => {
    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current,
        VITE_PUBLIC_KEY
      )
      .then((result) => (result))
      .catch((error) => {
        throw new Error(error)
      })
  }

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_adress: '',
      user_phone: '',
      user_email: '',
      user_message: '',
      user_subject: ''
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .min(3, 'Demasiado corto!')
        .max(30, 'Te excediste en el numero de caracteres')
        .required('Este campo es obligatorio'),
      user_adress: Yup.string()
        .min(3, 'Debes introducir una direccion valida!')
        .max(30, 'Te excediste en el numero de caracteres')
        .required('Este campo es obligatorio'),
      user_phone: Yup.string()
        .min(3, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Este campo es obligatorio'),
      user_email: Yup.string().email('Invalid email').required('Required'),
      user_message: Yup.string()
        .max(30, 'Too Long!')
        .required('Este campo es obligatorio'),
      user_subject: Yup.string()
        .min(3, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Este campo es obligatorio')
    }),
    onSubmit: (values) => {
      swal('Listo!', 'Tu mensaje ha sido enviado!', 'success')
      sendEmail(values)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  })
  return (
    <>
      <div className={styles.test}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <img src={logo} alt='Not found' />
            <h1>Contactanos....</h1>
            <span>Manati - Atlantico</span>
            <span>funsoye07@hotmail.com</span>
            <span>300 150 2309</span>
          </div>

          <div className={styles.formulario}>
            <form ref={form} onSubmit={formik.handleSubmit}>
              <h2>Contactenos....</h2>
              <input
                type='text'
                name='user_name'
                value={formik.values.user_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Nombre'
              />
              {formik.touched.user_name && formik.errors.user_name ? (
                <div className={styles.errors}>{formik.errors.user_name}</div>
              ) : null}
              <input
                type='text'
                name='user_adress'
                value={formik.values.user_adress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Dirección'
              />
              {formik.touched.user_adress && formik.errors.user_adress ? (
                <div className={styles.errors}>{formik.errors.user_adress}</div>
              ) : null}
              <input
                type='email'
                name='user_email'
                value={formik.values.user_email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Email'
              />
              {formik.touched.user_email && formik.errors.user_email ? (
                <div className={styles.errors}>{formik.errors.user_email}</div>
              ) : null}
              <input
                type='text'
                name='user_phone'
                value={formik.values.user_phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Teléfono'
                maxLength={10}
              />
              {formik.touched.user_phone && formik.errors.user_phone ? (
                <div className={styles.errors}>{formik.errors.user_phone}</div>
              ) : null}
              <input
                type='text'
                name='user_subject'
                value={formik.values.user_subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Asunto'
              />
              {formik.touched.user_subject && formik.errors.user_subject ? (
                <div className={styles.errors}>
                  {formik.errors.user_subject}
                </div>
              ) : null}
              <textarea
                cols='10'
                rows='3'
                name='user_message'
                value={formik.values.user_message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Ecribe tu mensaje aquí'
              ></textarea>
              {formik.touched.user_message && formik.errors.user_message ? (
                <div className={styles.errors}>
                  {formik.errors.user_message}
                </div>
              ) : null}
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
