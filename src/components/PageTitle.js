import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1``

const Subtitle = styled.h3``

const UpdatedAtLine = styled.div``

const UpdatedAtText = styled.span`
  font-weight: bold;
`

const PageTitle = ({ children, subtitle, updatedAt }) => (
  <div>
    <Title>{children}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {updatedAt && (
      <UpdatedAtLine>
        Updated <UpdatedAtText>{updatedAt}</UpdatedAtText>
      </UpdatedAtLine>
    )}
  </div>
)

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  updatedAt: PropTypes.string,
}

export default PageTitle
