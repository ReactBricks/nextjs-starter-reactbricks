import * as React from 'react'
import { Image, types, Text, Link, Plain } from 'react-bricks/frontend'
import classNames from 'classnames'
import styles from '../../../css/FeatureItem.module.css'
import { ColsNumber } from './Features'
import { icons } from './defaultImages'

export interface FeatureItemProps {
  colsNumber: ColsNumber
  withIcon: boolean
  withLink: boolean
  linkText: any
  linkPath: string
}

const getColumnClass = (colsNumber: ColsNumber) => {
  switch (colsNumber) {
    case '2':
      return styles.cols2
    case '3':
      return styles.cols3
    case '4':
      return styles.cols4
  }
}

const FeatureItem: types.Brick<FeatureItemProps> = ({
  colsNumber,
  withIcon,
  withLink,
  linkText,
  linkPath,
}) => {
  const linkTextPlain =
    typeof linkText === 'string' ? linkText : Plain.serialize(linkText)

  return (
    <div
      className={classNames(
        styles.featureItemContainer,
        getColumnClass(colsNumber)
      )}
    >
      {withIcon && (
        <Image
          propName="image"
          alt="feature"
          aspectRatio={1}
          imageClassName={styles.imageClassName}
          renderWrapper={({ children }) => {
            return <div className={styles.imageWrapper}>{children}</div>
          }}
        />
      )}

      <div className={styles.textFeatureItemContainer}>
        <Text
          propName="title"
          placeholder="Title..."
          renderBlock={(props) => (
            <div className={styles.title}>{props.children}</div>
          )}
        />
        <Text
          propName="text"
          placeholder="Title..."
          renderBlock={(props) => (
            <div className={styles.textColor}>{props.children}</div>
          )}
        />
        {withLink && (
          <div className={styles.linkContainer}>
            <Link
              href={linkPath}
              className={classNames(
                styles.linkWrapper,
                linkTextPlain ? styles.linkTextPlain1 : null
              )}
            >
              <div>
                <Text
                  renderBlock={(props) => <p>{props.children}</p>}
                  placeholder="Link..."
                  propName="linkText"
                />
              </div>
              <svg
                viewBox="0 0 14 14"
                width="14px"
                height="14px"
                className={classNames(
                  styles.svgClass,
                  linkTextPlain ? styles.linkTextPlain2 : styles.linkTextPlain3
                )}
              >
                <path
                  fill="currentColor"
                  d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"
                ></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
FeatureItem.schema = {
  name: 'feature-item',
  label: 'Feature',
  category: 'main content',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/FeatureItem.tsx',

  getDefaultProps: () => ({
    title: 'The best experience for editors',
    text: 'Your marketing team hates gray forms. Give them the easiest UX.',
    withIcon: true,
    withLink: false,
    image: icons.PHOTO_STACK,
    colsNumber: '2',
    linkText: '',
    linkPath: '',
  }),
  sideEditProps: [
    {
      name: 'withIcon',
      label: 'With icon',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'withLink',
      label: 'With link',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkPath',
      label: 'Link to',
      type: types.SideEditPropType.Text,
      show: ({ withLink }) => !!withLink,
    },
  ],
}

export default FeatureItem
