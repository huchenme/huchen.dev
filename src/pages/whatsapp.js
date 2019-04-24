import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import styled, { css } from 'react-emotion'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import teal from '@material-ui/core/colors/teal'
import SendIcon from '@material-ui/icons/Send'
import Button from '@material-ui/core/Button'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container } from '../components'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  },
  typography: {
    useNextVariants: true
  }
})

export default class Whatsapp extends React.Component {
  state = {
    countryCode: '65',
    phoneNumber: ''
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  openInWhatsapp = () => {
    window.location = `https://api.whatsapp.com/send?phone=${
      this.state.countryCode
    }${this.state.phoneNumber}`
  }

  render() {
    const isDisabled =
      this.state.countryCode.trim() === '' ||
      this.state.phoneNumber.trim() === ''
    return (
      <React.Fragment>
        <Helmet defaultTitle="Whatsapp to Stranger">
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/favicon-16x16.png"
          />
        </Helmet>

        <MuiThemeProvider theme={theme}>
          <Container>
            <Page>
              <ImgContainer>
                <WhatsappImg
                  fluid={this.props.data.whatsappImg.childImageSharp.fluid}
                />
              </ImgContainer>
              <IntroText>
                This page helps you send Whatsapp messages without creating a
                new contact.
                <IntroTextHint>
                  Try open this URL on mobile and it will open your Whatsapp app
                  directly.
                </IntroTextHint>
              </IntroText>
              <InputContainer>
                <CountryTextfield
                  id="country-code"
                  label="Code"
                  type="number"
                  value={this.state.countryCode}
                  onChange={this.handleChange('countryCode')}
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+</InputAdornment>
                    )
                  }}
                />
                <PhoneTextfield
                  id="phone-number"
                  label="Phone"
                  type="number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange('phoneNumber')}
                  InputLabelProps={{
                    shrink: true
                  }}
                  autoFocus
                  onKeyPress={ev => {
                    if (ev.key === 'Enter' && !isDisabled) {
                      this.openInWhatsapp()
                    }
                  }}
                />
              </InputContainer>
              <ButtonContainer>
                <Button
                  disabled={isDisabled}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={this.openInWhatsapp}
                >
                  Open in Whatsapp
                  <SendIcon
                    className={css`
                      margin-left: 16px;
                    `}
                  />
                </Button>
              </ButtonContainer>
            </Page>
          </Container>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

const Page = styled.div`
  font-family: system-ui, 'Helvetica Neue', 'Helvetica', 'Lucida Grande', Arial,
    'Ubuntu', 'Cantarell', 'Fira Sans', sans-serif;
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern';
  line-height: 1.4;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`

const WhatsappImg = styled(Img)`
  height: 50px;
  width: 50px;

  @media (min-width: 500px) {
    height: 100px;
    width: 100px;
  }
`

const IntroText = styled.div`
  margin-top: 2em;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 20px;
  text-align: center;
  margin-bottom: 4em;

  @media (min-width: 500px) {
    margin-top: 2em;
    color: #4b5961;
    font-size: 32px;
    line-height: 45px;
    font-weight: 300;
    margin-bottom: 4em;
  }
`

const IntroTextHint = styled.div`
  display: none;
  margin-top: 2em;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.32);
  line-height: 20px;

  @media (min-width: 1000px) {
    display: block;
  }
`

const InputContainer = styled.div`
  display: flex;

  @media (min-width: 500px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

const CountryTextfield = styled(TextField)`
  && {
    margin-right: 16px;
    width: 50px;

    @media (min-width: 500px) {
      width: 100px;
    }
  }
`

const PhoneTextfield = styled(TextField)`
  && {
    flex: 1;
  }
`

const ButtonContainer = styled.div`
  margin-top: 2em;
  text-align: center;
`

export const query = graphql`
  query {
    whatsappImg: file(relativePath: { eq: "imgs/whatsapp.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
