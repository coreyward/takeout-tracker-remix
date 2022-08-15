import React from "react"
import PropTypes from "prop-types"

// TODO: Re-enable outbound link tracking
// import { OutboundLink } from "gatsby-plugin-google-analytics"

const ExternalLink = (props) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a target="_blank" rel="noopener noreferrer" {...props} />
)

export default ExternalLink

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
