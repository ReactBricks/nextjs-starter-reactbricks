import * as React from 'react'
import classNames from 'classnames'
import { Text, RichText, Image, Plain, types } from 'react-bricks'

import BlockNames from '../BlockNames'
import styles from './FeatureItem.module.css'

//=============================
// Component to be rendered
//=============================
const FeatureItem = ({
  imageSource,
  title,
  text,
  linkText,
  linkUrl,
  centered,
  onChange,
  ...rest
}) => {
  return (
    <div
      className={classNames(styles.feature_item, {
        [styles.text_center]: centered
      })}
      {...rest}
    >
      <Image
        containerClassName={styles.image_container}
        imageClassName={styles.image}
        source={imageSource}
        alt=""
        propName="imageSource"
        onChange={onChange}
      />

      <div>
        <Text
          renderBlock={props => <h3>{props.children}</h3>}
          value={title}
          placeholder="Type a title..."
          propName="title"
          onChange={onChange}
        />

        <RichText
          renderBlock={props => <p className={styles.text}>{props.children}</p>}
          value={text}
          placeholder="Type a text..."
          propName="text"
          onChange={onChange}
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Link
          ]}
        />

        {linkText && linkUrl && (
          <p>
            <a href={linkUrl}>{linkText} &raquo;</a>
          </p>
        )}
      </div>
    </div>
  )
}

//=============================
// Get Default Props
//=============================
const getDefaultProps = () => ({
  imageSource: {
    src:
      'https://api.reactbricks.com/images/original/0882c680-5e34-11ea-b64f-f36644626031.svg',
    placeholderSrc:
      'https://api.reactbricks.com/images/original/0882c680-5e34-11ea-b64f-f36644626031.svg',
    srcSet: ''
  },
  title: Plain.deserialize('Another React Brick in the wall'),
  text: Plain.deserialize(
    'We create high performance custom Ecommerce websites for any industry and Booking systems.'
  ),
  linkText: '',
  linkUrl: ''
})

//=============================
// Side Edit Props
//=============================
const sideEditProps = [
  {
    name: 'centered',
    label: 'Centered',
    type: types.SideEditPropType.Boolean
  },
  {
    name: 'linkText',
    label: 'Link text',
    type: types.SideEditPropType.Text
  },
  {
    name: 'linkUrl',
    label: 'Link URL',
    type: types.SideEditPropType.Text
  }
]

//=============================
// Exported BlockType Schema
//=============================
const schema = {
  name: BlockNames.FeatureItem,
  label: 'Feature Item',
  superType: types.BlockSuperType.Single,
  render: props => <FeatureItem {...props} />,
  getDefaultProps,
  sideEditProps,
  textEditProps: ['title', 'text'],
  hideFromAddMenu: true
}

export default schema
