import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material';
import SearchMovieSuggestion from '../Container/SearchMovieSuggestion';

const darkTheme = createTheme({
    palette:{
        mode:'dark'
    }
})
const Img = styled('img')({
    marginLeft:'auto',
    marginRight:'auto',
    display:'block',
    width:500,
    maxWidth:'100%'
})
const LayoutWrapper = styled('div')(({theme})=>({
    margin:24,
    width:'auto',
    [theme.breakpoints.up("lg")] :{
        marginLeft:'auto',
        marginRight:'auto',
        width: theme.breakpoints.values.lg
    }
}));

const Layout = ({children}) => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <LayoutWrapper>
            <Link to="/">
                <Img src='https://sloba-movie-explorer.netlify.app/static/media/logo.36facc0711ee53c28044.png' alt='The movie db'/>
            </Link>
            <SearchMovieSuggestion/>
        </LayoutWrapper>
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Layout
