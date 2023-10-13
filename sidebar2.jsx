import styles from './admin.module.css';

const Sidebar2 = (props) => {
    return (
        <aside className={styles.barralateral}>
            <ul className={styles.opciones}>
                <li className={styles.li}><a href="./Inicioalumno">{props.li1}</a></li>
                <li className={styles.li}><a href="/Perfilalumno">{props.li2}</a></li>
                <li className={styles.li}><a href="/Biblioteca">{props.li3}</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar2;
