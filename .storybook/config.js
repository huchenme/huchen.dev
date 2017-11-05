import { configure } from '@storybook/react'

import typography from '../utils/typography'

typography.injectStyles()

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
