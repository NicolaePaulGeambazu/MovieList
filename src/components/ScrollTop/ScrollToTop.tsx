import { TfiArrowCircleUp } from 'react-icons/tfi'
import { ArrowButton } from './ScrollToTop.style'

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ArrowButton
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <TfiArrowCircleUp size={30} />
    </ArrowButton>
  )
}

export default ScrollToTop
