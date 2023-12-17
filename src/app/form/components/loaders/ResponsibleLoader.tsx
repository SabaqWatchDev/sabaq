import React from "react"
import ContentLoader from "react-content-loader"

const ResponsibleLoader = (props: any) => (
  <ContentLoader
    speed={1}
    width={2200}
    height={84}
    viewBox="0 0 1600 84"
    backgroundColor="#d6d6d6"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="10" y="10" rx="0" ry="0" width="750" height="15" />
    <rect x="10" y="30" rx="10" ry="10" width="750" height="30" />
    <rect x="770" y="10" rx="0" ry="0" width="750" height="15" />
    <rect x="770" y="30" rx="10" ry="10" width="750" height="30" />
  </ContentLoader>
)

export default ResponsibleLoader
