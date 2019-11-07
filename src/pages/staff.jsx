import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"

function Staff({ data }) {
  return (
    <Layout>
      <SEO title="Staff" />
      <main>
        <section id="staff" className="text-center">
          <Container>
            <h1 class="title">Lista degli autori</h1>
            <hr />
            <h2 class="title">Coders</h2>
            <p className="mb-5">
              Tutti gli studenti che hanno contribuito alla creazione del sito
            </p>
            <Row>
              {data.coders.members.map(s => {
                return (
                  <Col>
                    <a rel="noopener noreferrer" target="_blank" href={s.url}>
                      <img
                        className="rounded-circle avatar mb-2"
                        src={s.image}
                        alt="Avatar"
                      />
                      <h6>{s.name}</h6>
                    </a>
                  </Col>
                )
              })}
            </Row>
            <hr />
            <h2 class="title">Autori</h2>
            <p className="mb-5">
              Tutti gli studenti che hanno condiviso i propri appunti
            </p>
            <Row>
              {data.authors.members.map(s => {
                return (
                  <Col>
                    <a rel="noopener noreferrer" target="_blank" href={s.url}>
                      <img
                        className="rounded-circle avatar mb-2"
                        src={s.image}
                        alt="Avatar"
                      />
                      <h6>{s.name}</h6>
                    </a>
                  </Col>
                )
              })}
            </Row>
            <hr />
            <h2 class="title">Ringraziamenti speciali</h2>
            <p className="mb-5">
              Tutti gli studenti che hanno contribuito in altri modi
            </p>
            <Row>
              {data.thanks.members.map(s => {
                return (
                  <Col>
                    <a rel="noopener noreferrer" target="_blank" href={s.url}>
                      <img
                        className="rounded-circle avatar mb-2"
                        src={s.image}
                        alt="Avatar"
                      />
                      <h6>{s.name}</h6>
                    </a>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    coders: staffYaml(team: { eq: "coders" }) {
      members {
        name
        image
        url
      }
    }
    authors: staffYaml(team: { eq: "authors" }) {
      members {
        name
        image
        url
      }
    }
    thanks: staffYaml(team: { eq: "thanks" }) {
      members {
        name
        image
        url
      }
    }
  }
`

export default Staff
