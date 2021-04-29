import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../src/components/banner';



export default function Home() {
  return (

    <div className="container text-center text-white">

      <Head>
        <title>Prefeitura Municipal de Mesquita - RJ</title>
        <meta name="description" content="Prefeitura Municipal de Mesquita - RJ" />
        <link rel="icon" href="/logoPMM.png" />
      </Head>


      <h3> Inicio </h3>

      <Banner />

      <footer class="page-footer font-small text-white fixed-bottom">


        <div class="footer-copyright text-center py-3">
          <p>&copy;2021 | Todos os Direitos Reservados | PMM - Prefeitura de Mesquita | CNPJ: 04.132.090/0001-25</p>
          <p> Desenvolvimento: </p>
          <p> CCS - Coordenadoria de Comunicação Social </p>

        </div>


      </footer>

    </div>

  )
}
