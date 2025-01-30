'use client';

import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from "react";

const withAuth = Component => {
    
    
    const Auth = (props) => {
        
        const router = useRouter();
        const isLoggedIn = useSelector(state => state.isLoggedIn);
  
        // If user is not logged in, return login component
        useEffect(() => {
            if (!isLoggedIn) {                         // Using useEffect just to make sure it runs in browser. without useEffect is
                return router.push('/');               // it gives build error due to running in server at build time. The router uses
            }                                          // history object that is not available in server which is the reason for the error.
        }, [isLoggedIn, router])
    
        // If user is logged in, return original component
        return (
            <Suspense>
                <Component {...props} />
            </Suspense>
        );
    };
  
    // // Copy getInitial props so it will run as well
    // if (Component.getInitialProps) {
    //   Auth.getInitialProps = Component.getInitialProps;
    // }
  
    return Auth;
  };
  
  export default withAuth;