// pages/_app.js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'; 
import '../index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouter } from 'next/router';


import Layout from '../components/layout';
import AdminLayout from '../components/AdminLayout/Layout'

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();
  console.log(router.pathname);
  const isAdminRoute = router.pathname.startsWith('/admin');
  return (
    <>
      {isAdminRoute ? (
        // Render only the Component for admin routes (no Layout)
        <AdminLayout >
        <Component {...pageProps} />
        </AdminLayout>
   
      ) : (
        // Render Layout for user routes
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <ToastContainer />
    </>
  );
}



