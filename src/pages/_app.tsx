import '../styles/global.css'
// What is declared here is always load on all Pages. Recalculate when user access different Pages


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
