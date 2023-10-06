import Arte_Cultura from "./arte_cultura/Arte_Cultura";
import Entorno_Saludable from "./entorno_saludable/Entorno_Saludable";
import Me_protegen from "./me_protegen/Me_protegen";
import styles from "./Servicios.module.css";
import Me_Educan from "./todos_educados/Me_Educan";

const Servicios = () => {
  return (
    <div className={styles.principal_container}>
      <h1>Los servicios de FUNSOYE</h1>
      <h1>Amor por lo social</h1>
        <Me_protegen />
      <div className={styles.hidden}>
        <Arte_Cultura />
        </div>
      <div className={styles.hidden2}>
        <Me_Educan />
      </div>
        <Entorno_Saludable />
    </div>
  );
};

export default Servicios;
