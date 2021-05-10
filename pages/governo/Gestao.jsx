import React from 'react'
import Search from '../../components/Search'
import Footer from '../../components/Footer'
import Card from 'react-bootstrap/Card';

const Gestao = () => {
  return (
    <div className="container text-center main-page text-white">



      <Search />
      <h3> Gestão Municipal </h3>

      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Text>
            Jorge Lúcio Ferreira Miranda nasceu em Mesquita, em Santa Terezinha,
            onde foi criado pelo ex-vereador e militar da reserva, Sérgio Miranda.
            Atualmente, com 50 anos, ele atuou nos bastidores políticos da cidade desde sua emancipação,
            em 1999.<br />

            Disputou sua primeira eleição para prefeito em 2016,
            vencendo pelo voto da maioria. Desde então,
            investiu na modernização tecnológica da administração pública,
            desburocratização e outras políticas públicas de incentivo à educação,
            saúde e assistência social – como a implementação do novo modelo de saúde,
            com as Clínicas da Família, além da inauguração de novas unidades escolares e CRAS.<br />

            Isso, tendo administrado o município de forma honesta e íntegra.
            Em 2018, Mesquita recebeu o título de município mais transparente do Estado do Rio de Janeiro,
             de acordo com o Ministério da Transparência e Controladoria Geral da União.
              Honra repetida em 2020, desta vez seguindo os critérios do Ministério Público do Estado do Rio de Janeiro.<br />

            Prefeito

            Jorge Lúcio Ferreira Miranda

            Secretário Executivo do Gabinete do Prefeito

            Luciano Loyola Lucena de Souza

            Subsecretário Executivo do Gabinete do Prefeito

            Alex Maroto de Oliveira
    </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Footer />

    </div>
  )
}

export default Gestao
