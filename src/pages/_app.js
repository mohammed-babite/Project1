import '@/styles/snippets.css'
import '@/styles/theme.css'
import '@/styles/docs.css'
import '@/styles/styles.css'



import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
       <>
          <Head>
           
          </Head>
          <Component {...pageProps} />
       </>
    );
 }
 export default MyApp;