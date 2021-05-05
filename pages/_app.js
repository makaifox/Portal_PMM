import '../styles/globals.css'
import Sidebar from '../components/Sidebar';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="main_area container-xl ">
        <Sidebar />

        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
