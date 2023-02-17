import styles from './Rodape.module.scss'
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

import React from 'react'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
        <img src={facebook} alt="Logo do Alura Space" />
        <img src={twitter} alt="Logo do Alura Space" />
        <img src={instagram} alt="Logo do Alura Space" />
        </div>

        <p className={styles.rodape__texto}>Desenvolvido por Gabriel/Alura.</p>
    </footer>
  )
}
