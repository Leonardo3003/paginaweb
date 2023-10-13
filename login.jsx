"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import styles from './page.module.css'
import Input from './input1';
import Inicioalumno from '../../app/components/inicioalumno'

const adminData = [{"nombres":"Renato Carlos","apellidos":"Sanchez Perez","tipoDocumento":"DNI","nroDocumento":"2222","correo":"renato@gmail.com","password":"2222","repetirPassword":"2222"}];

const userData = [{"nombres":"César Hernan","apellidos":"Morón Loayza","tipoDocumento":"DNI","nroDocumento":"1111","correo":"cesarmoron23@gmail.com","password":"1111","repetirPassword":"1111"}];

const Login = () => {
  const [state, setState] = useState({ usuario: '', contrasena: '' });
  const router = useRouter();

  // Función para manejar cambios en los campos de entrada
  function mngmtChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  // Función para validar el inicio de sesión
  const validarLogeo = async (e) => {
    e.preventDefault();

    const { usuario, contrasena } = state;

    // Verificar si es un administrador
    const admin = adminData.find(
      (admin) => admin.correo === usuario && admin.password === contrasena
    );

    // Verificar si es un alumno
    const alumno = userData.find(
      (alumno) => alumno.correo === usuario && alumno.password === contrasena
    );

    if (admin) {
      // Usuario es un administrador
      router.push(`./Inicioadmin`);
    } else if (alumno && alumno.correo === usuario && alumno.password === contrasena) {
      // Usuario es un alumno
      router.push(`./Inicioalumno`);
    } else {
      // No coincide la contraseña o usuario
      alert('No coincide la contraseña o usuario');
    }
  };
  
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}> 
        <span className={styles.titulo1}>Sistema de reserva de Libros</span>
        <form className={styles.registro} action="">
          <Input inputType="text" spanText="Usuario o Correo" name="usuario" value={state.usuario} onChange={mngmtChange} />
          <div className={styles.label2}>
            <Input inputType="password" spanText="Contraseña" name="contrasena" value={state.contrasena} onChange={mngmtChange} />
            <div className={styles.opcion}>
              <span>Olvidé mi contraseña</span>
            </div>
          </div> 
          <div className={styles.botones}>
            <button className={styles.button1}><Link href="./registro">Registro usuario</Link></button>
            <button className={styles.button2} type="submit" onClick={validarLogeo}>Ingresar</button>
          </div>
        </form>
      </div> 
    </div>
  );
}

export default Login;
