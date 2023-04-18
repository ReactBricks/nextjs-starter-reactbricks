import * as React from 'react'
import classNames from 'classnames'
import { Text, Link, types, useAdminContext } from 'react-bricks/frontend'

import styles from '../../../css/Button.module.css'

export interface ButtonProps {
  type: 'button' | 'link'
  text: string
  href: string
  isTargetBlank: boolean
  buttonType: 'submit' | 'button' | 'reset'
  simpleAnchorLink: boolean
  variant: 'solid' | 'outline'
  padding: 'normal' | 'small'
  className?: string
}

const Button: types.Brick<ButtonProps> = ({
  type,
  href,
  isTargetBlank,
  buttonType,
  simpleAnchorLink = false,
  variant,
  padding,
  className,
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (type === 'link') {
    return (
      <Link
        href={href}
        {...target}
        className={classNames(
          styles.buttonWrapper,
          padding === 'small' ? styles.buttonPsmall : styles.buttonPnormal,
          variant === 'solid'
            ? styles.buttonColorSolid
            : styles.buttonColorOutline,

          className
        )}
        simpleAnchor={simpleAnchorLink}
      >
        <Text
          propName="text"
          placeholder="Action"
          renderBlock={({ children }) => <span>{children}</span>}
        />
      </Link>
    )
  }

  // Button
  const { isAdmin, previewMode } = useAdminContext()

  return (
    <button
      type={isAdmin && !previewMode ? 'button' : buttonType}
      //disabled={isAdmin && !previewMode}
      className={classNames(
        styles.buttonWrapper,
        padding === 'small' ? styles.buttonPsmall : styles.buttonPnormal,
        variant === 'solid'
          ? styles.buttonColorSolid
          : styles.buttonColorOutline,

        className
      )}
    >
      <Text
        propName="text"
        placeholder="Action"
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </button>
  )
}

Button.schema = {
  name: 'button',
  label: 'Button',
  category: 'shared',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Button.tsx',

  getDefaultProps: () => ({
    type: 'link',
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    buttonType: 'submit',
    simpleAnchorLink: false,
    variant: 'solid',
    padding: 'normal',
  }),
  sideEditProps: [
    {
      groupName: 'Button functionality',
      defaultOpen: true,
      props: [
        {
          name: 'type',
          label: 'Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'link', label: 'Link' },
              { value: 'button', label: 'Form Button' },
            ],
          },
        },
        {
          name: 'href',
          label: 'Link (external or path)',
          type: types.SideEditPropType.Text,
          show: (props) => props.type === 'link',
        },
        {
          name: 'isTargetBlank',
          label: 'Open in new window',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'simpleAnchorLink',
          label: 'Simple anchor (no SPA link)',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'buttonType',
          label: 'Button type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'submit', label: 'Form submit' },
              { value: 'reset', label: 'Form reset' },
              { value: 'button', label: 'Button' },
            ],
          },
          show: (props) => props.type === 'button',
        },
      ],
    },
    {
      groupName: 'Visual',
      props: [
        {
          name: 'variant',
          label: 'Variant',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'solid', label: 'Solid' },
              { value: 'outline', label: 'Outline' },
            ],
          },
        },
        {
          name: 'padding',
          label: 'Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'normal', label: 'Normal' },
              { value: 'small', label: 'Small' },
            ],
          },
        },
      ],
    },
  ],
}

export default Button
