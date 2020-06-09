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
  faLongArrowAltDown,
  faCodeBranch,
  faUserFriends,
  faTimes,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons"

import { faGithub } from "@fortawesome/free-brands-svg-icons"

library.add(
  faGithub,
  faHandPointer,
  faTimes,
  faLongArrowAltDown,
  faChevronCircleRight,
  faCogs,
  faChevronCircleDown,
  faExternalLinkAlt,
  faExclamationTriangle,
  faCodeBranch,
  faUserFriends,
  faNewspaper
)
