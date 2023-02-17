import { Fragment } from "react";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Rodape from "../../components/Rodape";
import Galeria from "../../components/Galeria";
import Populares from "../../components/Populares";

import styles from './PaginaInicial.module.scss';


export default function PaginaInicial() {
    return (
        <Fragment>

        <Cabecalho />
        <main>
        <section className={styles.principal}>
        <Menu />
        <Banner />
        </section>
        <div className={styles.galeria}>
            <Galeria />
            <Populares />
        </div>
        </main>
        <Rodape />
        </Fragment>
    )
}