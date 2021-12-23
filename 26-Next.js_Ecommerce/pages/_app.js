import '../styles/globals.css'

import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout';
import { AppProvider } from '../components/Context';
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <AppProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </AppProvider>
    </UserProvider>
  );
}