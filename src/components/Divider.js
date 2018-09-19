import styled from 'react-emotion'

import { colors, options, presets, rhythm } from '../utils'

const Divider = styled.div`
  margin: ${rhythm(0.5)} 0;

  &::before {
    display: block;
    text-align: center;
    content: '* * *';
    font-size: 25px;
    color: ${colors.ui.divider};
    font-family: ${options.headerFontFamily.join(`,`)};
  }

  ${presets.Tablet} {
    margin: ${rhythm(1)} 0;

    &::before {
      font-size: 30px;
    }
  }
`

export default Divider
