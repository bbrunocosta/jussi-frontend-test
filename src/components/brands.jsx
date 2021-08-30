const Brands = () => {
  const brandsList = ['brastemp', 'compra-certa', 'consul','thebar']
  return(
    <div className="brands">
      <p>Nossas principais lojas VTEX</p>
      <span>→</span>
      {
        brandsList.map(brandLogo => <img key={brandLogo} src={`/assets/svgs/logo-${brandLogo}.svg`} alt={`${brandLogo} logo`}/>)
      }
    </div>
  )
}
export default Brands