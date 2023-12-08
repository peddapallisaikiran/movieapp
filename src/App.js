import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PopularMovies from './Container/PopularMovies';
import MovieDetails from './Container/MovieDetails';
import Layout from './Components.js/Layout';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Layout>
                    <Routes>

                        <Route path="/" element={<PopularMovies />}>
                            <Route path="/Movie/:id" element={<MovieDetails />}></Route>

                        </Route>
                    </Routes>
                </Layout>

            </BrowserRouter>
        </div>
    )
}

export default App
