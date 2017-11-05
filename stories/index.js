import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { PageTitle } from '../src/components'

storiesOf('PageTitle', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <PageTitle
      subtitle={text('Subtitle', 'This is a subtitle')}
      updatedAt={text('UpdateAt', 'Sept 2017')}
    >
      {text('Title', 'This is a title')}
    </PageTitle>
  ))
