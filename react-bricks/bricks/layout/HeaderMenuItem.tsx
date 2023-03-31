import React, { useRef, useState } from "react"
import { Text, Repeater, types, Link, Plain } from "react-bricks/frontend"
import useOnClickOutside from "./useClickOutside"

import styles from "../../../css/HeaderMenuItem.module.css"

interface HeaderMenuItemProps {
  linkPath: string
  linkText: any
  submenuItems: any
  isActive: boolean
}

const HeaderMenuItem: types.Brick<HeaderMenuItemProps> = ({
  linkPath,
  linkText,
  submenuItems,
  isActive,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!submenuItems || !submenuItems.length) {
    return (
      <div>
        <Link
          href={linkPath}
          className={styles.linkMenuItem}
          activeClassName={styles.linkMenuItemActive}
        >
          <Text
            propName='linkText'
            placeholder='Type a text...'
            renderBlock={({ children }) => <span>{children}</span>}
          />
        </Link>
        <Link href={linkPath} className={styles.linkHamburgerMenuItem}>
          {typeof linkText === "string" ? linkText : Plain.serialize(linkText)}
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.containerLinkItemWithSubItem}>
        <button
          ref={ref}
          className={`${styles.buttonLinkItemWithSubItems} ${
            open ? styles.buttonLinkItemWithSubItemsOpen : null
          }
          `}
          onClick={() => setOpen((current) => !current)}
        >
          <Text
            propName='linkText'
            placeholder='Type a text...'
            renderBlock={({ children }) => (
              <div
                className={`
                  ${isActive ? styles.buttonTextActive : null}
                `}
              >
                {children}
              </div>
            )}
          />
          {open ? (
            <svg
              viewBox='0 0 14 14'
              width='14px'
              height='14px'
              className='inline-block w-[10px] h-[10px] ml-[5px]'
            >
              <path
                d='m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z'
                fill='currentColor'
              ></path>
            </svg>
          ) : (
            <svg
              viewBox='0 0 14 14'
              width='14px'
              height='14px'
              className={styles.svgClass}
            >
              <path
                d='m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z'
                fill='currentColor'
              ></path>
            </svg>
          )}
        </button>
        {open && (
          <div className={styles.containerSubmenuItemsOpen}>
            <Repeater propName='submenuItems' />
          </div>
        )}
      </div>

      <div className={styles.containerSubmenuItems} role='group'>
        <div className={styles.containerLinkText}>
          {typeof linkText === "string" ? linkText : Plain.serialize(linkText)}
        </div>
        <Repeater propName='submenuItems' />
      </div>
    </div>
  )
}

HeaderMenuItem.schema = {
  name: "header-menu-item",
  label: "Menu Item",
  category: "layout",
  hideFromAddMenu: true,

  repeaterItems: [
    {
      name: "submenuItems",
      itemType: "header-menu-sub-item",
    },
  ],

  getDefaultProps: () => ({
    submenuItems: [],
    linkPath: "/about-us",
    isActive: false,
    linkText: "About us",
  }),

  sideEditProps: [
    {
      name: "linkPath",
      label: "Link to...",
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuItem
