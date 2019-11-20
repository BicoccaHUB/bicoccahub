/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/style.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faHandPointer,
  faChevronCircleRight,
  faChevronCircleDown,
  faExternalLinkAlt,
  faExclamationTriangle,
  faCogs,
  faCodeBranch,
  faUserFriends,
  faTimes,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faHandPointer,
  faTimes,
  faChevronCircleRight,
  faCogs,
  faChevronCircleDown,
  faExternalLinkAlt,
  faExclamationTriangle,
  faCodeBranch,
  faUserFriends,
  faNewspaper
)
