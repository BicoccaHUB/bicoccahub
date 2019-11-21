import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Accordion, Card, Row, Col, ListGroup, Badge } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class RepositoryExplorer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
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
        `}
        render={data => {
          const [selected, setSelected] = useState(null)
          return (
            <Accordion>
              {data.subjects.nodes.map((subject, index) => {
                const [couseData, setCourseData] = useState(null)
                return (
                  <Card key={index}>
                    <Accordion.Toggle
                      className="interactive"
                      onClick={() => {
                        if (selected === index) {
                          setSelected(null)
                        } else {
                          setCourseData(null)
                          setSelected(index)
                        }
                      }}
                      eventKey={index}
                      as={Card.Header}
                    >
                      <FontAwesomeIcon
                        icon={
                          selected === index
                            ? "chevron-circle-down"
                            : "chevron-circle-right"
                        }
                      />{" "}
                      {subject.year}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body>
                        <Row>
                          <Col className="pb-3 pb-md-0" xs={12} md={6}>
                            <ListGroup>
                              {subject.subjects.map((course, index) => {
                                const nsub = course.repositories.length
                                return (
                                  <ListGroup.Item
                                    key={index}
                                    className="interactive"
                                    active={couseData === course ? true : false}
                                    onClick={() => {
                                      setCourseData(course)
                                    }}
                                  >
                                    {
                                      <Badge
                                        pill
                                        variant={
                                          nsub > 0
                                            ? course.repositories.some(repo => {
                                                return (
                                                  repo.wip == null ||
                                                  repo.wip === false
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
                                    {course.name}
                                  </ListGroup.Item>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs={12} md={6}>
                            {couseData == null ? (
                              <div
                                className="d-flex flex-column"
                                style={{
                                  height: "100%",
                                  display: "block",
                                  maxHeight: "30rem",
                                }}
                              >
                                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                                  <div className="text-center">
                                    <FontAwesomeIcon
                                      className="fai text-info"
                                      icon="hand-pointer"
                                    />
                                    <br />
                                    <strong>
                                      Seleziona un corso per iniziare
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            ) : couseData.repositories.length > 0 ? (
                              <>
                                <h5>Repository disponibili:</h5>
                                <ul>
                                  {couseData.repositories.map((repo, index) => (
                                    <li key={index}>
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
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <div
                                className="d-flex flex-column"
                                style={{ height: "100%", display: "block" }}
                              >
                                <div className="d-flex align-items-center justify-content-center flex-grow-1">
                                  <div className="text-center">
                                    <FontAwesomeIcon
                                      icon="times"
                                      className="fai text-danger"
                                    />
                                    <br />
                                    <strong>
                                      Nessun appunto disponibile per il corso
                                      selezionato
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )
              })}
            </Accordion>
          )
        }}
      />
    )
  }
}

export default RepositoryExplorer
