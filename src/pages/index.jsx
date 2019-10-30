import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import siteData from "../components/data"
import {
  Container,
  ListGroup,
  Badge,
  Row,
  Col,
  Collapse,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SubjectCollapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      year: props.year,
      subjects: props.subjects,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open || this.state.open,
      year: nextProps.name || this.state.year,
      subjects: nextProps.subjects || this.state.subject,
    })
  }

  render() {
    return (
      <>
        <ListGroup.Item
          onClick={() => {
            this.setState(this.state.open ? { open: false } : { open: true })
          }}
          className="interactive"
        >
          <FontAwesomeIcon
            icon={
              this.state.open ? "chevron-circle-down" : "chevron-circle-right"
            }
          />{" "}
          {this.state.year}
        </ListGroup.Item>
        <Collapse in={this.state.open}>
          <ListGroup.Item>
            <Row>
              <Col xs={12} md={6}>
                <ListGroup>
                  {this.state.subjects.map(subject => {
                    const nsub = subject.repositories.length
                    return (
                      <ListGroup.Item
                        onClick={() => {
                          this.setState({ selected: subject })
                        }}
                        className="interactive"
                      >
                        {
                          <Badge
                            pill
                            variant={nsub > 0 ? "success" : "secondary"}
                          >
                            {nsub}
                          </Badge>
                        }{" "}
                        {subject.name}
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              </Col>
              <Col xs={12} md={6}>
                {this.state.selected == null ? (
                  <div>Seleziona una materia per iniziare</div>
                ) : this.state.selected.repositories.length === 0 ? (
                  <div>
                    Nessun appunto disponibile per la materia selezionata
                  </div>
                ) : (
                  <>
                    <h2>Appunti diponibili</h2>
                    <ul>
                      {this.state.selected.repositories.map(repo => {
                        return (
                          <li>
                            <a href={repo.url}>
                              Appunti di {repo.owner}{" "}
                              {repo.wip != null && repo.wip ? (
                                <Badge pill variant="warning">
                                  !
                                </Badge>
                              ) : (
                                ""
                              )}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}
              </Col>
            </Row>
          </ListGroup.Item>
        </Collapse>
      </>
    )
  }
}

function IndexPage({ data }) {
  return (
    <Layout hero>
      <SEO />
      <main>
        <Container>
          <section id="welcome" className="text-center">
            <h1>Benvenuto</h1>
            <h2>{data.description.siteMetadata.description}</h2>
          </section>
          <hr />
          <section id="downloads">
            <p className="mb-5 text-center">
              Audentes fortuna iuvat, la fortuna aiuta gli audaci.
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
                return (
                  <SubjectCollapse
                    year={subject.year}
                    subjects={subject.subjects}
                  />
                )
              })}
            </ListGroup>
          </section>
          <section id="disclaimer" className="my-5 text-center">
            <FontAwesomeIcon icon="exclamation-triangle" class="fai" />
            <br />
            <h2>Disclaimer</h2>
            <p>
              Tutti gli appunti potrebbero contenere errori: nell'eventualità,
              siete pregati di notificarlo ai rispettivi autori.
              <br />
              Il materiale qui contenuto non intende sostituirsi alle lezioni
              dei professori nè ai testi consigliati da questi ultimi.
            </p>
          </section>
          <section className="mt-5 pt-5 contacts">
            <Row>
              <Col className="text-center">
                <FontAwesomeIcon icon="code-branch" className="fai" />
                <br />
                <h5>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/GitBicocca/GitBicocca.github.io"
                  >
                    Contribuisci
                  </a>
                </h5>
                <p>Inviaci una pull request o contattaci.</p>
              </Col>
              <Col className="text-center">
                <FontAwesomeIcon icon="newspaper" className="fai" />
                <br />
                <h5>Notizie</h5>
                <p>Prossimamente in arrivo!</p>
              </Col>
              <Col className="text-center">
                <FontAwesomeIcon icon="user-friends" className="fai" />
                <br />
                <h5>
                  <a href="/staff">Lo staff</a>
                </h5>
                <p>Conosci le fantastiche persone dietro al progetto</p>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    </Layout>
  )
}

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
