import Navbar from './Navbar'

const Main = ({children}) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Main