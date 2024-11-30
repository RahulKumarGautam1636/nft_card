'use client';

import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

const withAuth = Component => {
    
    
    const Auth = (props) => {
        
        const router = useRouter();
        const isLoggedIn = useSelector(state => state.isLoggedIn);
  
        // If user is not logged in, return login component
        if (!isLoggedIn) {
            return router.push('/');
        }
    
        // If user is logged in, return original component
        return (
            <Component {...props} />
        );
    };
  
    // // Copy getInitial props so it will run as well
    // if (Component.getInitialProps) {
    //   Auth.getInitialProps = Component.getInitialProps;
    // }
  
    return Auth;
  };
  
  export default withAuth;