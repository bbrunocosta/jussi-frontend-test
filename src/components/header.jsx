const HeaderRight = () => {
  return (
    <div className="header-right">
      <img src="/assets/svgs/logo-jussi-vector-green.svg" alt="Jussi logo" />
      <nav>
        <menu>
          <a href="/">Nossas soluções</a>
          <a href="/">Conheça a Jússi</a>
        </menu>
      </nav>
    </div>
  )
}
const HeaderLeft = () => {
  return (
    <div className="header-left">
    <div className="search">
      <input type="text" placeholder="Buscar"/>
      <button>
        <img src="/assets/svgs/search.svg" alt="" />
      </button>
    </div>
    <a href="/"> Login </a>
    <button>
      <img src="/assets/svgs/shopping-cart.svg" alt="" />
    </button>
  </div>
  )
}
const Header = () => {
  return (
      <header className="header">
        <HeaderRight/>
        <HeaderLeft/>
      </header>
  )
}
export default Header