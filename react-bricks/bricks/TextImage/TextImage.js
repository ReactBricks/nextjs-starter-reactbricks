import React from 'react'
import classNames from 'classnames'
import { Text, RichText, Image, Plain, types } from 'react-bricks'

import BlockNames from '../BlockNames'
import styles from './TextImage.module.css'

//=============================
// Enums
//=============================
const ImageSide = {
  Right: 'RIGHT',
  Left: 'LEFT'
}
const Colors = {
  white: { value: '#fff', label: 'White' },
  lightGray: { value: '#f7fafc', label: 'Light Gray' }
}

//=============================
// Component to be rendered
//=============================
const TextImage = ({
  onChange,
  backgroundColor,
  imageSide,
  imageSource,
  altText,
  title,
  text,
  rounded
}) => {
  return (
    <section className={styles.text_image} style={{ backgroundColor }}>
      <div
        className={classNames(styles.container, {
          [styles.container_reverse]: imageSide === ImageSide.Left
        })}
      >
        <React.Fragment>
          <div
            className={classNames(styles.text_container, {
              [styles.text_container_right]: imageSide === ImageSide.Left
            })}
          >
            <Text
              renderBlock={props => <h2>{props.children}</h2>}
              value={title}
              placeholder="Type a title..."
              propName="title"
              onChange={onChange}
            />
            <RichText
              renderBlock={props => <p>{props.children}</p>}
              value={text}
              placeholder="Type a text..."
              propName="text"
              onChange={onChange}
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Highlight,
                types.RichTextFeatures.Link
              ]}
            />
          </div>
          <div
            className={classNames(styles.image_container, {
              [styles.image_container_right]: imageSide === ImageSide.Right
            })}
          >
            <Image
              imageClassName={classNames(styles.image, {
                [styles.image_rounded]: rounded
              })}
              source={imageSource}
              alt={altText}
              propName="imageSource"
              onChange={onChange}
            />
          </div>
        </React.Fragment>
      </div>
    </section>
  )
}

//=============================
// Get Default Props
//=============================
const getDefaultProps = () => ({
  backgroundColor: Colors.white,
  imageSide: ImageSide.Right,
  imageSource: {
    src:
      'https://api.reactbricks.com/images/original/55498a00-5e32-11ea-b64f-f36644626031.svg',
    placeholderSrc:
      'https://api.reactbricks.com/images/original/55498a00-5e32-11ea-b64f-f36644626031.svg',
    srcSet: ''
  },
  altText: 'You can trust us',
  title: Plain.deserialize('You can trust us'),
  text: Plain.deserialize(
    'We create and host websites since 1997. We saw the Internet grow up as the standards evolved. We have built hundreds of successful web applications and we still have a lot of fun.'
  ),
  rounded: false
})

//=============================
// Side Edit Props
//=============================
const sideEditProps = [
  {
    name: 'backgroundColor',
    label: 'Background',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Color,
      options: [Colors.white, Colors.lightGray]
    }
  },
  {
    name: 'imageSide',
    label: 'Image on side',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Radio,
      options: [
        { value: ImageSide.Right, label: 'Right' },
        { value: ImageSide.Left, label: 'Left' }
      ]
    }
  },
  {
    name: 'altText',
    label: 'Image Alt Text',
    type: types.SideEditPropType.Text
  },
  {
    name: 'rounded',
    label: 'Rounded border',
    type: types.SideEditPropType.Boolean
  }
]

//=============================
// Exported BlockType Schema
//=============================
const schema = {
  name: BlockNames.TextImage,
  label: 'Text-Image',
  superType: types.BlockSuperType.Single,
  render: props => <TextImage {...props} />,
  getDefaultProps,
  sideEditProps,
  textEditProps: ['title', 'text']
}

export default schema
