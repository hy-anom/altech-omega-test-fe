import './Navbar.scss'

type props = {
  refToOtherComponent: {
    refToContactComponent: React.MutableRefObject<HTMLDivElement | null>
    refToPricingComponent: React.MutableRefObject<HTMLDivElement | null>
    refToAboutComponent: React.MutableRefObject<HTMLDivElement | null>
  }
}

function Navbar({ refToOtherComponent }: props) {
  const scrolltoComponent = (component: 'refToAboutComponent' | 'refToPricingComponent' | 'refToContactComponent') => {
    if (refToOtherComponent[component]) {
      if (refToOtherComponent[component].current) {
        refToOtherComponent[component].current.scrollIntoView();
      }
    }
    
  };

  return (
    <nav>
      <div className='left-side'>
        <a href='#'>home</a>
      </div>
      <div className='right-side'>
        <a href='#' onClick={() => scrolltoComponent('refToAboutComponent')}>about</a>
        <a href='#' onClick={() => scrolltoComponent('refToPricingComponent')}>pricing</a>
        <a href='#' onClick={() => scrolltoComponent('refToContactComponent')}>contact</a>
        <a className='button' href='#'>login</a>
      </div>
    </nav>
  )
}

export default Navbar