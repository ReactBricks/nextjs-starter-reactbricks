import styles from "../../../css/HeaderMenuSubItem.module.css"

import React from "react"
import { Text, types, Link } from "react-bricks/frontend"
import { FiChevronRight } from "react-icons/fi"

interface HeaderMenuSubItemProps {
  linkPath: string
}

const HeaderMenuSubItem: types.Brick<HeaderMenuSubItemProps> = ({
  linkPath,
}) => {
  return (
    <Link href={linkPath} className={styles.linkContainer}>
      <div className={styles.fiContainer}>
        <FiChevronRight />
      </div>
      <div className={styles.textContainer}>
        <Text
          propName='linkText'
          placeholder='Type a text...'
          renderBlock={({ children }) => (
            <div className={styles.linkText}>{children}</div>
          )}
        />
        <div className={styles.descriptionContainer}>
          <Text
            propName='linkDescription'
            placeholder='Type a text...'
            renderBlock={({ children }) => (
              <div className={styles.linkDescription}>{children}</div>
            )}
          />
        </div>
      </div>
    </Link>
  )
}

HeaderMenuSubItem.schema = {
  name: "header-menu-sub-item",
  label: "Submenu Item",
  category: "layout",
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    linkText: "Changelog",
    linkDescription: "Release notes for all React Bricks versions",
    linkPath: "/",
  }),

  sideEditProps: [
    {
      name: "linkPath",
      label: "Link to...",
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuSubItem
