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
              alt="Creazione di una nuova issue"
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
              alt="Creazione di una nuova repository"
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
              alt="Clonazione dei sorgenti di una repository"
              src="https://docs.github.com/assets/images/help/repository/https-url-clone.png"
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
              alt="Creazione di una nuova pull request"
              src="https://help.github.com/assets/images/help/pull_requests/pullrequest-send.png"
            />
            <br />
            <a href="https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request">
              Scopri come creare una nuova pull request nella guida di GitHub{" "}
              <FontAwesomeIcon icon="external-link-alt" />
            </a>
            <hr />
            <h2 className="title">Come modificare il codice del sito</h2>
            <img
              style={{
                width: "100%",
                maxWidth: "300px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              alt="Modifica del codice sorgente del sito"
              src="https://help.github.com/assets/images/help/repository/edit-readme-light.png"
            />
            <br />
            <a href="https://github.com/BicoccaHUB/bicoccahub/blob/master/README.md#-quick-start">
              Scopri come contribuire modificando i sorgenti del sito nella file
              README del progetto <FontAwesomeIcon icon="external-link-alt" />
            </a>
          </Container>
        </section>
      </main>
    </Layout>
  )
}

export default Contribuisci
