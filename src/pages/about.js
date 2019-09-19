import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Content from 'gatsby-theme-amsterdam/src/components/Content'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'

const AboutPage = ({ data }) => {
  return (
    <Container>
      <SEO title="About" description="Learn more about Ben Partch" />
      <Content>
        <h1>About</h1>
        <p>Hi. I'm Ben, nice to meet you. 🤣 This is maybe going to be my website. Let's give it a few months and see what I can make it do. 💥</p>
      </Content>
    </Container>
  )
}

export default AboutPage
