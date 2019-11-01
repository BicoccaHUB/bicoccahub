import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contribuisci({ data }) {
  return (
    <Layout>
      <SEO title="Contribuisci" />
      <main>
        <section className="text-center">
          <Container>
            <h1 className="title">Contribuisci</h1>
            <p>Scopri come aggiungere nuovi contenuti</p>
            <hr />
            <h2 className="title">Come aprire una issue (ticket)</h2>
            <img
              style={{
                width: "100%",
                maxWidth: "250px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              src="https://help.github.com/assets/images/help/issues/new_issues_button.png"
            />
            <br />
            <a href="https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue">
              Scopri come aprire una issue nella guida di GitHub{" "}
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
            <hr />
            <h2 className="title">Come creare un nuovo repository su GitHub</h2>
            <img
              style={{
                width: "100%",
                maxWidth: "500px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              src="https://help.github.com/assets/images/help/repository/create-repository-name.png"
            />
            <br />
            <a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository">
              Scopri come creare una nuovo repository nella guida di GitHub{" "}
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
            <hr />
            <h2 className="title">Come scaricare i sorgenti del sito</h2>
            <img
              style={{
                width: "100%",
                maxWidth: "240px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              src="https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png"
            />
            <br />
            <a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">
              Scopri come scaricare i sorgenti del sito nella guida di GitHub{" "}
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
            <hr />
            <h2 className="title">Come creare una nuova pull request</h2>
            <img
              style={{
                width: "100%",
                maxWidth: "300px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              src="https://help.github.com/assets/images/help/pull_requests/pullrequest-send.png"
            />
            <br />
            <a href="https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request">
              Scopri come creare una nuova pull request nella guida di GitHub{" "}
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
            <hr />
            <h2 className="title">Come modificare il codice del sito</h2>
            <FontAwesomeIcon
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              className="fai"
              icon="cogs"
            />
            <br />
            <p>Presto disponibile una guida</p>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default Contribuisci
