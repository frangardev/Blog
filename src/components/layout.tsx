import * as React from "react"
// import { Link } from "gatsby"
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import {PageProps} from 'gatsby'

type LayoutTypes = {
  location: PageProps['location'],
  title: string,
  children: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutTypes): JSX.Element => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  console.log('Location: ',location, title);
  

  if (isRootPath) {
    header = (
      <>
      <Navbar/>
      <Header/>
      </>
    )
  } else {
    header = (
      <Navbar/>
    )
  }

  // DarkMode
  // React.useEffect(()=>{
  //   const isDarkUser = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  //   const body = document.querySelector('body') 
  //   body.className = isDarkUser ? 'dark' : ''
  // },[])

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
