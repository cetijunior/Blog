import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import React from 'react'
import { Layout } from '../Components'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp