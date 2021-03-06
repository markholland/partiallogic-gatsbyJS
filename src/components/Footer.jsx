import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  font-size: 0.8em;
  margin-top: 20px;
`

export default function Footer() {
  return <Container id="footer-container">© 2021 Mark Holland</Container>
}
