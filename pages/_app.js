import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.css';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
    
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
        
    );
}

export default MyApp
