
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.scss';

import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/shared/Hero';
import Footer from '@/components/shared/Footer';

const MyApp = ({ Component, pageProps }) => {
  const isHomePage = () => Component.name === 'Home'
  return (
    <>
      <Navbar />
      { isHomePage() && <Hero /> }
      <div className="portfolio-app">
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
      { isHomePage() && <Footer /> }
    </>
  )
}

// MyApp.getInitialProps = async (context) => {
//   console.log('GET INITIAL PROPS _APP');
//   const initialProps = App.getInitialProps && await App.getInitialProps(context);
  
//   return {pageProps: {appData: 'Hello _App Component', ...initialProps.pageProps}}
// }

export default MyApp;
