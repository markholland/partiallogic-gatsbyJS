import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'

import Link from '../components/Link'

import Layout from '../layouts/index'

import '../scss/index.scss'
import '../scss/content-container.scss'

const PostPreview = styled.div`
  margin: 0 auto 30px 0;
  padding-bottom: 20px;
  maxwidth: 960;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-bottom: 2px solid #eee;

  &:last-child {
    border-bottom-width: 0;
  }
`

const PostTitle = styled.h1`
  width: 100%;
  font-size: 1.5em;
  margin-top: 0;

  @media only screen and (max-width: 720px) {
    font-size: 1.4em;
  }
`

export default function Index({ data, location }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout location={location}>
      <div className="content-container">
        <div className="content">
          {posts
            .filter((post) => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <PostPreview id="blog-post-preview" key={post.id}>
                <PostTitle id="blog-post-title">
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </PostTitle>
                <p>{post.excerpt}</p>
                <Link to={post.frontmatter.path}>Read more</Link>
                {/* <PostDate id="date">
                  {post.frontmatter.date}
                </PostDate> */}
              </PostPreview>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = () =>
  graphql`
    query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
            }
          }
        }
      }
    }
  `
