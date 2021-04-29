import '../styles/globals.css'
import Sidebar from '../src/components/sidebar';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
