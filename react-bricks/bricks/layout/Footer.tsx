import React from "react"
import { RichText, Image, Repeater, types, Link } from "react-bricks/frontend"
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from "../LayoutSideProps"
import Container from "../shared/components/Container"
import Section from "../shared/components/Section"

import styles from "../../../css/Footer.module.css"

interface FooterProps extends LayoutProps {
  siteUrl: string
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  siteUrl,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className='flex justify-between flex-wrap'
        >
          <div className={styles.container}>
            <Link href={siteUrl} className={styles.linkLogo}>
              <Image
                propName='logo'
                alt='Logo'
                maxWidth={300}
                imageClassName={styles.imageLogo}
              />
            </Link>
            <RichText
              propName='copyright'
              placeholder='Copyright notice'
              renderBlock={({ children }) => (
                <p className={styles.paragraphRichText}>{children}</p>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href }) => (
                <Link href={href} className={styles.renderLink}>
                  {children}
                </Link>
              )}
            />
          </div>
          <Repeater propName='columns' />
        </Container>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: "footer",
  label: "Footer",
  category: "layout",
  tags: ["footer"],

  repeaterItems: [
    {
      name: "columns",
      itemType: "footer-column",
      max: 4,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: {
      color: "#f9fafb",
      className: "bg-gray-50 dark:bg-gray-900",
    },
    borderTop: "full",
    logo: {
      src: "https://images.reactbricks.com/original/7fd7ef1a-928f-45d6-b7a7-ff34bf91c15e.svg",
      placeholderSrc:
        "https://images.reactbricks.com/original/7fd7ef1a-928f-45d6-b7a7-ff34bf91c15e.svg",
      srcSet: "",
      alt: "React Bricks",
      seoName: "react-bricks",
      width: 1700.787,
      height: 377.953,
    },
    copyright: [
      {
        type: "paragraph",
        children: [
          {
            text: "© React Bricks, Inc.",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Proudly made in Italy",
          },
        ],
      },
    ],
    columns: [
      {
        title: "Company",
        links: [
          {
            linkText: "About us",
            linkPath: "/",
          },
          {
            linkText: "Why React Bricks?",
            linkPath: "/",
          },
          {
            linkText: "Terms of service",
            linkPath: "/",
          },
          {
            linkText: "Privacy",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Features",
        links: [
          {
            linkText: "Visual editing",
            linkPath: "/",
          },
          {
            linkText: "React components",
            linkPath: "/",
          },
          {
            linkText: "Enterprise-ready",
            linkPath: "/",
          },
          {
            linkText: "Roadmap",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Use cases",
        links: [
          {
            linkText: "Content editors",
            linkPath: "/",
          },
          {
            linkText: "Developers",
            linkPath: "/",
          },
          {
            linkText: "Enterprises",
            linkPath: "/",
          },
        ],
      },
      {
        title: "Learn",
        links: [
          {
            linkText: "Tutorial",
            linkPath: "/",
          },
          {
            linkText: "Documentation",
            linkPath: "/",
          },
          {
            linkText: "Videos",
            linkPath: "/",
          },
          {
            linkText: "Blog",
            linkPath: "/",
          },
        ],
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Footer
