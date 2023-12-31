import styles from './admin.module.css'
import Sidebar2 from './sidebar2';
import Cuadros from './cuadros';
import Barra from './barra';

const Inicioalumno = () =>{
    return (
        <div className={styles.container}>
        <Barra/>
        <main className={styles.xd}>
            <Sidebar2 li1="Principal" li2="Perfil" li3="Prestamos"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, Andrés!</span>
                </div>
                    <Cuadros texto='Últimas Reservas' mostrarOpcion={false}/>
                    <Cuadros texto='Los más pedidos' mostrarOpcion={false}/>
            </section>
        </main>
    </div>
    )
}

export default Inicioalumno;