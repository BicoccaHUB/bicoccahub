/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/style.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faChevronCircleRight,
  faChevronCircleDown,
  faExternalLinkAlt,
  faExclamationTriangle,
  faCogs,
  faCodeBranch,
  faUserFriends,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faChevronCircleRight,
  faCogs,
  faChevronCircleDown,
  faExternalLinkAlt,
  faExclamationTriangle,
  faCodeBranch,
  faUserFriends,
  faNewspaper
)
