import React, { useEffect, useRef, useState } from 'react'
import { Image, Repeater, types, Link } from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FiMenu, FiX } from 'react-icons/fi'
import useOnClickOutside from './useClickOutside'
import { useTheme } from 'next-themes'

import styles from '../../../css/Header.module.css'

interface HeaderProps {}

const Header: types.Brick<HeaderProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toggleColorMode } = useReactBricksContext()
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <section className={styles.section}>
      <nav className={styles.navClass}>
        <Link href="/" aria-label="home" className={styles.linkLogo}>
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName={styles.imageClass}
          />
        </Link>
        <div className={styles.containerMenuItems}>
          <Repeater
            propName="menuItems"
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
          />
        </div>
        <div className={styles.containerButtons}>
          <Repeater
            propName="buttons"
            itemProps={{ simpleAnchorLink: true }}
            renderWrapper={(items) => (
              <div className={styles.buttonsWrapper}>{items}</div>
            )}
          />
        </div>

        {/* DARK MODE BUTTON */}
        {mounted && (
          <button
            type="button"
            className={styles.darkModeButton}
            onClick={toggleColorMode}
          >
            {theme === 'light' ? (
              <BsMoonFill />
            ) : (
              <BsSunFill
                style={{ fontSize: '1.25rem', lineHeight: '1.75rem' }}
              />
            )}
          </button>
        )}

        <div ref={ref} className={styles.containerHamburgerMenu}>
          <button
            className={styles.buttonHamburgerMenu}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX size={18} className={styles.hamburgerMenuFiX} />
            ) : (
              <FiMenu size={20} className={styles.hamburgerMenuFiMenu} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className={styles.containerHamburgerMenuItems}>
              <Repeater
                propName="menuItems"
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div>
      </nav>
    </section>
  )
}

Header.schema = {
  name: 'header',
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'header-menu-item',
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: 'button',
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [],
  getDefaultProps: () => ({
    menuItems: [
      {
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
    buttons: [
      {
        text: 'Edit content',
        href: '/admin',
        isTargetBlank: false,
        type: 'link',
        variant: 'solid',
        padding: 'small',
      },
    ],
  }),
}

export default Header
