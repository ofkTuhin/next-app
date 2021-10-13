// import LayOut from '../component/LayOut'
// import NestedLayout from '../component/NestedLayout'
import LayOut from '../component/LayOut'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  
  return (
    
      
    <LayOut><Component {...pageProps} />)</LayOut> 
   
   
  )
}

export default MyApp
