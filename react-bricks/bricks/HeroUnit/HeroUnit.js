import React from 'react'
import classNames from 'classnames'
import { Text, RichText, Plain, types } from 'react-bricks'

import BlockNames from '../BlockNames'
import styles from './HeroUnit.module.css'

//=============================
// Padding enum
//=============================
const Padding = Object.freeze({
  Big: 'BIG',
  Small: 'SMALL',
})

//=============================
// Component to be rendered
//=============================
const HeroUnit = ({ title, text, padding, onChange }) => {
  return (
    <div
      className={classNames(
        styles.heroUnit,
        { [styles.pySmall]: padding === Padding.Small },
        { [styles.pyBig]: padding === Padding.Big }
      )}
    >
      <Text
        renderBlock={props => <h1>{props.children}</h1>}
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
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Link,
        ]}
        renderBold={props => <b className="text-red-500">{props.children}</b>}
      />
    </div>
  )
}

//=============================
// Get Default Props
//=============================
const getDefaultProps = () => ({
  padding: Padding.Big,
  title: Plain.deserialize('We develop beautiful web applications'),
  text: Plain.deserialize(
    "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations."
  ),
})

//=============================
// Side Edit Props
//=============================
const sideEditProps = [
  {
    name: 'padding',
    label: 'Padding',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: Padding.Big, label: 'Big Padding' },
        { value: Padding.Small, label: 'Small Padding' },
      ],
    },
  },
]

//=============================
// Exported BlockType Schema
//=============================
const schema = {
  name: BlockNames.HeroUnit,
  label: 'Hero Unit',
  superType: types.BlockSuperType.Single,
  render: props => <HeroUnit {...props} />,
  getDefaultProps,
  sideEditProps,
  textEditProps: ['title', 'text'],
}

export default schema
