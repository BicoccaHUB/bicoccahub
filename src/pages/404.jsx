import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Pagina non trovata" />
    <main>
      <Container>
        <h1 className="text-center title">
          La pagina che stai cercando non esiste
        </h1>
      </Container>
    </main>
  </Layout>
)

export default NotFoundPage
