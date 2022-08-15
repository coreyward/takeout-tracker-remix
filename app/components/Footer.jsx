import React from "react"
import ExternalLink from "components/ExternalLink"

const Footer = () => (
  <footer css={{ padding: "var(--pagePadding)" }}>
    <div>Takeout Tracker</div>

    <div>
      Built on the shoulders of giants including{" "}
      <ExternalLink href="https://www.sanity.io/">Sanity.io</ExternalLink> and{" "}
      <ExternalLink href="https://www.gatsbyjs.org/">GatsbyJS</ExternalLink>. By{" "}
      <ExternalLink href="https://twitter.com/love_fangs">
        Fannie Gunton
      </ExternalLink>{" "}
      and{" "}
      <ExternalLink href="https://twitter.com/coreyward">
        Corey Ward
      </ExternalLink>
      .
    </div>

    <nav>
      <ExternalLink href="https://github.com/coreyward/takeout-tracker-web/">
        See the source on Github
      </ExternalLink>
      <div></div>
    </nav>
  </footer>
)

export default Footer
