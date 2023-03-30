import React from "react"
import { RichText, Image, Repeater, types, Link } from "react-bricks/frontend"
// import Container from "../shared/components/Container"
// import Section from "../shared/components/Section"

import styles from "../../../css/Footer.module.css"

interface FooterProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  borderTop: "full" | "boxed" | "none"
  borderBottom: "full" | "boxed" | "none"
  width?: "medium" | "small" | "full"
  paddingTop: "0" | "6" | "8" | "10" | "12" | "16" | "20"
  paddingBottom: "0" | "6" | "8" | "10" | "12" | "16" | "20"
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <footer>
      <div
      // backgroundColor={backgroundColor}
      // borderTop={borderTop}
      // borderBottom={borderBottom}
      >
        <div
        // paddingTop={paddingTop}
        // paddingBottom={paddingBottom}
        // className='flex justify-between flex-wrap'
        >
          <div className={styles.container}>
            <Link href='/' className={styles.linkLogo}>
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
        </div>
      </div>
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
    paddingTop: "16",
    paddingBottom: "16",
    borderBottom: "none",
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
  sideEditProps: [
    {
      groupName: "Background",
      props: [
        {
          name: "backgroundColor",
          label: "Background",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              {
                label: "White",
                value: {
                  color: "#ffffff",
                  className: "bgWhite",
                },
              },
              {
                label: `Light Gray`,
                value: {
                  color: "#f9fafb",
                  className: "bgLightGray",
                },
              },
              {
                label: "Gray",
                value: {
                  color: "#f3f4f6",
                  className: "bgGray",
                },
              },
              {
                label: `Dark Gray`,
                value: {
                  color: "#1f2937",
                  className: "dark bgDarkGray",
                },
              },
            ],
          },
        },
      ],
    },
    {
      groupName: "Padding & Borders",
      defaultOpen: false,
      props: [
        {
          name: "paddingTop",
          label: "Padding Top",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "20", label: "20" },
              { value: "16", label: "16" },
              { value: "12", label: "12" },
              { value: "10", label: "10" },
              { value: "8", label: "8" },
              { value: "6", label: "6" },
              { value: "0", label: "None" },
            ],
          },
        },
        {
          name: "paddingBottom",
          label: "Padding Bottom",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "20", label: "20" },
              { value: "16", label: "16" },
              { value: "12", label: "12" },
              { value: "10", label: "10" },
              { value: "8", label: "8" },
              { value: "6", label: "6" },
              { value: "0", label: "None" },
            ],
          },
        },

        {
          name: "borderTop",
          label: "Border Top",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "none", label: "None" },
              { value: "full", label: "Full-width" },
              { value: "boxed", label: "Boxed" },
            ],
          },
        },
        {
          name: "borderBottom",
          label: "Border Bottom",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "none", label: "None" },
              { value: "full", label: "Full-width" },
              { value: "boxed", label: "Boxed" },
            ],
          },
        },
        ,
      ],
    },
  ],
}

export default Footer
