import * as React from "react"
import { PageProps } from 'gatsby'
// import { Link } from "gatsby"
import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"

type LayoutTypes = {
  location: PageProps['location'],
  title: string,
  children: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutTypes): JSX.Element => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header: React.ReactNode
  
  const [isDark, setIsDark] = React.useState<boolean>()
  

  if (isRootPath) {
    header = (
      <>
      <Navbar isDarkMode={isDark} setDarkMode={setIsDark}/>
      <Header/>
      </>
    )
  } else {
    header = (
      <Navbar isDarkMode={isDark} setDarkMode={setIsDark}/>
    )
  }

  // DarkMode
  React.useEffect(()=>{
    const isDarkUser:boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    // const body:HTMLElement = document.querySelector('body') 
    setIsDark(isDarkUser)
    // body.className = isDarkUser ? 'dark' : ''
  },[])
  React.useEffect(()=>{
    const body:HTMLElement = document.querySelector('body') 
    // setIsDark(isDarkUser)
    body.className = isDark ? 'dark' : ''
  },[isDark])

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
