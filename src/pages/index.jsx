import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import siteData from "../components/data"
import { Container, ListGroup, Badge, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO/>
    <main>
      <Container>
        <section id="welcome" className="text-center">
          <h1>Benvenuto</h1>
          <h2>{data.description.siteMetadata.description}</h2>
        </section>
        <hr />
        <section id="downloads">
          <p className="mb-5 text-center">
            Testo che dovrebbe davvero ispirare tutti gli studenti della
            bicocca, sopratutto i nuovi arrivati.
          </p>
          <div className="my-4 text-center">
          <h4>
            <Badge pill variant="warning">
              !
            </Badge>{" "}
            Appunti in corso d'opera
          </h4>
          <p>
            Gli appunti con questa indicazione sono ancora incompleti.
            Contribuisci alla loro stesura!
          </p>
        </div>
          <ListGroup>
            {siteData.map(subject => {
              return <ListGroup.Item><FontAwesomeIcon icon="chevron-circle-right"/> {subject.year}</ListGroup.Item>
            })}
          </ListGroup>
        </section>
        <section id="disclaimer" className="my-5 text-center">
          <FontAwesomeIcon icon="exclamation-triangle" class="fai"/><br/>
          <h2>Disclaimer</h2>
          <p>
            Tutti gli appunti potrebbero contenere errori: nell'eventualità,
            siete pregati di notificarlo ai rispettivi autori.<br/>Il materiale qui
            contenuto non intende sostituirsi alle lezioni dei professori nè ai
            testi consigliati da questi ultimi.
          </p>
        </section>
        <section className="mt-5 pt-5">
          <Row>
            <Col className="text-center">
              <FontAwesomeIcon icon="code-branch" className="fai"/><br/>
              <h5>Contribuisci</h5>
              <p>Inviaci una pull request o contattaci.</p>
            </Col>
            <Col className="text-center">
              <FontAwesomeIcon icon="newspaper" className="fai"/><br/>
              <h5>Notizie</h5>
              <p>Prossimamente in arrivo!</p>
            </Col>
            <Col className="text-center">
              <FontAwesomeIcon icon="user-friends" className="fai"/><br/>
              <h5>Lo staff</h5>
              <p>Conosci le fantastiche persone dietro al progetto</p>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  </Layout>
)

export const query = graphql`
  {
    description: site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
