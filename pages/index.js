import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

const HomePage = props => {
console.log(props)
  return (
  <div>
    <h1>hello</h1>
  </div>

  )
}

HomePage.getInitialProps = async context => {
  const home = await client.getSingle('home_page')

  return { home }
}

export default HomePage