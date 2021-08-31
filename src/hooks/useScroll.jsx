import { createContext, useContext, createRef} from 'react'
const Context = createContext()
export const UseScrollProvider = ({children}) => {
  const scrollTo = (componentRef) => window.scrollTo({
    top: componentRef.current.offsetTop,
    behavior: 'smooth'
  })
  const aboutRef = createRef(null)
  const solutionsRef = createRef(null)
  return (
    <Context.Provider value={{ scrollTo , aboutRef, solutionsRef}}>
      {children} 
    </Context.Provider>
  )
}
 const useScroll = () => {
  return useContext(Context)
}

export default useScroll