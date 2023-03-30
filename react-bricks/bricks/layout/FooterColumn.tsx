import React from "react"
import { Text, Repeater, types } from "react-bricks/frontend"
import styles from "../../../css/FooterColumn.module.css"

interface FooterColumnProps {}

const FooterColumn: types.Brick<FooterColumnProps> = (props) => {
  return (
    <div className={styles.container}>
      <Text
        propName='title'
        placeholder='Title...'
        renderBlock={({ children }) => (
          <div className={styles.text}>{children}</div>
        )}
      />
      <Repeater propName='links' />
    </div>
  )
}

FooterColumn.schema = {
  name: "footer-column",
  label: "Column",
  category: "layout",
  hideFromAddMenu: true,
  // tags: [],
  repeaterItems: [
    {
      name: "links",
      itemType: "footer-link",
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: "Features",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default FooterColumn
