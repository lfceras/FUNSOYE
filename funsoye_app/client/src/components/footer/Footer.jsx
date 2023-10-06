import styles from './Footer.module.css'
import logo from '../../assets/LOGO_FUNSOYEAA-sin_fondo.png'
import {FaWhatsapp, FaFacebook, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className={styles.principal}>
      <Link to={'/'}>
      <img src={logo} alt="Not found" />
      </Link>
      <div className={styles.horario}>
        <h3>Horario de servicio</h3>
        <label>Visitanos</label>
        <span>Lunes - Viernes: 9 a. m. - 6 p. m.</span>
        <span>Sábado: 10 a. m. - 2 p. m.</span>
        <span>Domingo: cerrado.</span>
      </div>
      <div className={styles.redes}>
        <div className={styles.icons}>
          <a href="https://m.facebook.com/profile.php/?id=100023907551824&name=xhp_nt__fb__action__open_user " target='_blank'>
        <FaFacebook className={styles.icon1} size={40} />
          </a>
        </div>
        <div className={styles.icons}>
        <FaInstagram className={styles.icon2} size={40}/>
        </div>
        <div className={styles.icons}>
          <a href="https://api.whatsapp.com/send?phone=573226455432&text=como%20te%20podemos%20ayudar" target='_blank'>
        <FaWhatsapp className={styles.icon3} size={40}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer