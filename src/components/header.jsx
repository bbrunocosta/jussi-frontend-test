import useScroll from '../hooks/useScroll'
const HeaderLeft = () => {
  const { scrollTo, aboutRef, solutionsRef } = useScroll()
  
  return (
    <div className="header-left">
      <img src="/assets/svgs/logo-jussi-vector-green.svg" alt="Jussi logo" onClick={e=>window.open('https://jussi.com.br/')}/>
      <nav>
        <menu>
          <button onClick={e=>scrollTo(solutionsRef)}>
            Nossas soluções
          </button>
          <button onClick={e=>scrollTo(aboutRef)}>
           Conheça a Jússi
          </button>
        </menu>
      </nav>
    </div>
  )
}
const HeaderRight = () => {
  return (
    <div className="header-right">
    <div className="search">
      <input type="text" placeholder="Buscar"/>
      <button onClick={e=>alert('Esta ação ainda não implementada!')}>
        <img src="/assets/svgs/search.svg" alt="" />
      </button>
    </div>
    <button onClick={e=>alert('Esta ação ainda não implementada!')}> Login </button>
    <button onClick={e=>alert('Esta ação ainda não implementada!')}>
      <img src="/assets/svgs/shopping-cart.svg" alt="" />
    </button>
  </div>
  )
}
const Header = () => {
  return (
      <header className="header">
        <HeaderLeft/>
        <HeaderRight/>
      </header>
  )
}
export default Header