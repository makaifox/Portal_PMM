import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/Banner';
import Search from '../components/Search'
import responsive from '../components/Noticias'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer'



export default function Home() {
  return (

    <div className="container text-center main-page text-white">

      <Head>
        <title>Prefeitura Municipal de Mesquita - RJ</title>
        <meta name="description" content="Prefeitura Municipal de Mesquita - RJ" />
        <link rel="icon" href="/logoPMM.png" />
      </Head>

      <Search />
      <h3> Inicio </h3>

      <Banner />
      <h3> Veja as últimas notícias </h3>

      <Carousel responsive={responsive}>
        <div>
          <Card className="News">

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="News">

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
  </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="News">

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
  </Card.Text>

            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="News">

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
  </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </Carousel>

      <Footer />

    </div>

  )
}
