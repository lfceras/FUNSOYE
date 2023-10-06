import logo from "../../assets/LOGO_FUNSOYEAA-sin_fondo.png";
import styles from './home.module.css'

const Home = () => {
  return (
    <div>
      <div className={styles.home_container}>
          <img src={logo} alt="Not found" />
        <div className={styles.inter_container}>
          <h1>FUNDACIÓN SOCIAL ELOHIM YIREH</h1>
          <ul>
            <li>FUNSOYE</li>
            <li>Personería Jurídica No. 16,292</li> 
            <li>NIT No. 901.124.859-2</li>
          </ul>
          <p className={styles.texto}>
            La <strong>FUNDACIÓN SOCIAL ELOHIM YIRÉH (FUNSOYE)</strong>, en aras del buen
            funcionamiento y logro de los objetivos y metas a alcanzar, ha
            elaborado una Política General, partiendo de los Estatutos Sociales,
            en especial del Objeto Social, que es la razón de ser de esta
            institución. Tiene como objeto: el ejercicio de actividades que
            procuren la prestación de servicio de beneficencia y desarrollo
            social, con la posibilidad de acceso a toda comunidad. En especial
            realizará lo siguiente: 1. Direccionar acciones y mecanismos
            encaminados a promover, proteger, defender y reestablecer los
            derechos de los niños, niñas y jóvenes, garantizándoles en igualdad
            de condiciones y oportunidades el acceso a los servicios médicos, al
            sistema educativo y sus beneficios, a una alimentación adecuada, a
            condiciones de salubridad y medioambientales optimas, a una vivienda
            digna, a la protección y acompañamiento ante cualquier forma de
            abandono, crueldad, violencia física o moral, abuso sexual,
            prostitución, venta, exposición al alcohol cigarrillo, drogas
            psicoactivas y psicotrópicas, pobreza, indigencia, necesidad,
            embarazo a corta edad. Así mismo, la actividad física, la
            recreación, el deporte, la cultura, los hábitos de vida saludable; y
            la formación en competencias laborales, emprendimiento y liderazgo;
            y los valores tales como: el amor, el respeto, la equidad, el
            perdón, la honestidad y la amistad, la responsabilidad y la
            solidaridad. 2. Implementar acciones mecanismos encaminados a
            mejorar la calidad de vida de los campesinos, pequeños productores
            agropecuarios y pesqueros. 3. Proteger, promover, restablecer y
            defender los derechos y libertades de los adultos mayores,
            orientando acciones en el proceso de envejecimiento para garantizar
            en igualdad de oportunidades un entorno que satisfaga las
            necesidades básicas que permitan mantener una adecuada nutrición,
            salud, desarrollo físico, psíquico, psicomotor, emocional afectivo;
            llegando a su desarrollo integral en igualdad de oportunidades
            laborales, económicas, políticas, educativas, culturales,
            espirituales y recreativas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
