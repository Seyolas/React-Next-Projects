import '../styles/globals.css'
import ScrollToTop from "react-scroll-to-top";

import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout';
import { AppProvider } from '../components/Context';
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <AppProvider>
      <Layout>
    <ScrollToTop smooth  />
      <Component {...pageProps} />
      </Layout>
      </AppProvider>
    </UserProvider>
  );
}