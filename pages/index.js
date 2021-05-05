import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../components/Banner';
import Search from '../components/Search'
import responsive from '../components/Noticias'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'



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

      <Row className=" padding-div">
        <Banner />
      </Row>

      <h3> Veja as últimas notícias </h3>


      <Row className="padding-div">

      </Row>
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
      <Row className="padding-div">
        <Button variant="primary" className="button" size="lg" block>
          Veja outras notícias do município, clique aqui!
      </Button>
      </Row>
      <Container>
        <Row className="Caculinha">
          <Col sm={6}>
            <Container>
              <h1 >Mesquita, a caçulinha da Baixada Fluminense</h1>
              <p>Os primeiros cidadãos da área onde está assendado o município de Mesquita foram
              os índios Jacutingas. A localização, farta de mananciais de água que desciam do
              Gericinó, proporcionava a formação de belíssimas cachoeiras e ricas florestas.
              </p>
              <Button variant="primary" className="button" size="lg" block>
                Conheça a nossa história!
            </Button>
            </Container>
          </Col>
          <Col sm={6}></Col>
        </Row>

      </Container>

      <br />
      <h3>Acesso Rápido</h3>

      <Row className="padding-div">

      </Row>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>
        <div>
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
          <Card className="acesso-rapido">

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
