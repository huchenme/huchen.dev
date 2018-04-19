import React from 'react'
import { css, cx } from 'react-emotion'
import presets from '../utils/presets'

import { rhythm, options } from '../utils/typography'

const Container = ({ children, className, styles = {} }) => (
  <div
    className={cx(
      css({
        maxWidth: rhythm(presets.maxWidth),
        margin: `0 auto`,
        padding: `${rhythm(1.5)} ${rhythm(options.blockMarginBottom)}`,
        paddingBottom: rhythm(3.5),
        position: `relative`,
        [presets.Tablet]: {
          paddingBottom: rhythm(1.5)
        },
        ...styles
      }),
      className
    )}
  >
    {children}
  </div>
)

export default Container
