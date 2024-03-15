import { Content, LayoutContainer } from './Layout.style'
import { LayoutProps } from '../../types'
import Header from '../Header/Header'
import ScrollToTop from '../ScrollTop/ScrollToTop'

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <Content>{children}</Content>
      <ScrollToTop />
    </LayoutContainer>
  )
}

export default Layout
