import React from "react"
import { Text, types, Link } from "react-bricks/frontend"

import styles from "../../../css/FooterLink.module.css"

interface FooterLinkProps {
  linkPath: string
}

const FooterLink: types.Brick<FooterLinkProps> = ({ linkPath }) => {
  return (
    <Link href={linkPath}>
      <Text
        propName='linkText'
        placeholder='Link...'
        renderBlock={({ children }) => (
          <div className={styles.text}>{children}</div>
        )}
      />
    </Link>
  )
}

FooterLink.schema = {
  name: "footer-link",
  label: "Link",
  category: "layout",
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    linkText: "Pricing",
    linkPath: "/",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: "linkPath",
      label: "Link to...",
      type: types.SideEditPropType.Text,
    },
  ],
}

export default FooterLink
