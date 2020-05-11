// I Just CLoned Home PAge For This moment
import React from "react"
import { graphql ,useStaticQuery} from "gatsby"

import InfoBlock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"

import Layout from "../components/layout"
import HeroSection from "../components/Reuseable/HeroSection"
import SEO from "../components/seo"

const IndexPage = ({data}) =>{ 

  return(
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img= {data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="Websitename.com"
      heroclass="hero-background" 
    />  
    <InfoBlock heading = "About Us" />
    <DualInfoBlock 
      heading = "Our Team" 
      imgsrc = "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=person-holding-node-text-1261427.jpg&fm=jpg" 
    />
  </Layout>
)}
  
export const query = graphql`
{
 img : file(relativePath: {eq : "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
}
`


export default IndexPage
