import info from "../../info.json";
import styles from './AcercaDe.module.css'
import {Link} from 'react-router-dom'

const AcercaDe = () => {
  // console.log(info);
  return (
      <div className={styles.principal_container}>
      <h1>FUNDACIÓN SOCIAL ELOHIM YIREH</h1>
          <h1>FUNSOYE</h1>
      <div className={styles.principal_container2}> 
        <div className={styles.mision}>
          <h2>{info[0].title1}</h2>
          <span>{info[0].description1}</span>
        </div>
        <div className={styles.vision}>
          <h2>{info[1].title2}</h2>
          <span>{info[1].description2}</span>
        </div>
        <h2>OBJETIVOS</h2>
        <div className={styles.objetivo_general}>
          <h2>{info[2].title3}</h2>
          <span>{info[2].description3}</span>
        </div>
        <div className={styles.objetivo_especifico}>
          <h2>{info[3].title4}</h2>
          <span>
            {info[3].description4.map((el, index) => (
              <ul key={index}>
                <li>{el}</li>
              </ul>
            ))}
          </span>
        </div>
        <div className={styles.principios}>
          <h2>{info[4].title5}</h2>
          <span>{info[4].description5}</span>
          <span>
            {info[4].description_number.map((el, index) => (
             <ul key={index}>
               <li>{el}</li>
             </ul>
            ))}
          </span>
        </div>
        <Link to={'/contact'}>
          <button>Contactanos...</button>
        </Link>
      </div>
      </div>
  );
};

export default AcercaDe;
