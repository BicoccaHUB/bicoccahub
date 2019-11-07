import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
              <Col className="pb-3 pb-md-0" xs={12} md={6}>
                <ListGroup>
                  {this.state.subjects.map(subject => {
                    const nsub = subject.repositories.length
                    return (
                      <ListGroup.Item
                        onClick={() => {
                          this.setState({ selected: subject })
                        }}
                        className={
                          "interactive " +
                          (subject === this.state.selected
                            ? "bg-gradient-primary"
                            : "")
                        }
                      >
                        {
                          <Badge
                            pill
                            variant={
                              nsub > 0
                                ? subject.repositories.some(repo => {
                                    return (
                                      repo.wip == null || repo.wip === false
                                    )
                                  })
                                  ? "success"
                                  : "warning"
                                : "secondary"
                            }
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
                  <div>Seleziona un corso per iniziare</div>
                ) : this.state.selected.repositories.length === 0 ? (
                  <div>Nessun appunto disponibile per il corso selezionato</div>
                ) : (
                  <>
                    <h5>Repository diponibili</h5>
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
            <h1 className="title">Benvenuto</h1>
            <h2 className="title">
              {data.description.siteMetadata.description}
            </h2>
          </section>
          <hr />
          <section id="downloads">
            <p className="mb-5 text-center">
              <b>Audentes fortuna iuvat, la fortuna aiuta gli audaci.</b>
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
              {data.subjects.nodes.map(subject => {
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
            <FontAwesomeIcon
              icon="exclamation-triangle"
              class="fai text-danger"
            />
            <br />
            <h2 className="text-danger">Disclaimer</h2>
            <p>
              Tutti gli appunti potrebbero contenere errori: nell'eventualità,
              siete pregati di notificarlo ai rispettivi autori.
              <br />
              Il materiale qui contenuto non intende sostituirsi alle lezioni
              dei professori né ai testi consigliati da questi ultimi.
            </p>
          </section>
          <section className="mt-5 pt-5 contacts">
            <Row>
              <Col className="text-center">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={data.description.siteMetadata.repoUrl}
                >
                  <FontAwesomeIcon icon="code-branch" className="fai" />
                  <br />
                  <h5>Contribuisci</h5>
                </a>
                <p>
                  Inviaci una pull request o contattaci.
                  <br />
                  <a href="/contribuisci">Scopri come.</a>
                </p>
              </Col>
              <Col className="text-center">
                <a href="/">
                  <FontAwesomeIcon icon="newspaper" className="fai" />
                  <br />
                  <h5>Notizie</h5>
                </a>
                <p>Prossimamente in arrivo!</p>
              </Col>
              <Col className="text-center">
                <a href="/staff">
                  <FontAwesomeIcon icon="user-friends" className="fai" />
                  <br />
                  <h5>Lo staff</h5>
                </a>
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
        repoUrl
      }
    }
    subjects: allSubjectsYaml {
      nodes {
        year
        subjects {
          name
          repositories {
            owner
            url
            wip
          }
        }
      }
    }
  }
`

export default IndexPage
