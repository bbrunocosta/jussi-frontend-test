const ProductCard = ({img, action}) => {
  return (
    <div className="product-card">
      <div>
        <img src={img} alt="" />
      </div>
      <button>{action}</button>
    </div>
  )
}
const ProductCardGroup = () => {
  return (
    <div className="product-card-group">
          <ProductCard action="Adicionar à sacola"  img="/assets/images/geladeira.png"/>
          <ProductCard action="Mais Detalhes"       img="/assets/images/batedeira.png"/>
          <ProductCard action="Comprar em 12x"       img="/assets/images/bebida.png"/>
    </div>
  )
}
const Breadcrum = () => {
  return (
    <div className="breadcrum">
      <div className="breadcrum-left">
        <h1>CRIAMOS LOJAS QUE VENDEM MAIS.</h1>
        <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
        <button>Veja nossas soluções</button>
      </div>
      <div className="breadcrum-right">
          <ProductCardGroup/>
      </div>
    </div>
  )
}
export default Breadcrum