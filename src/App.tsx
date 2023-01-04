import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

import Home from "./components/Home";
import Game from "./components/Game";
import customTheme from './styles/theme'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <CssBaseline/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/games"/>}/>
                    <Route path="/games" element={<Home/>}/>
                    <Route path="/games/:provider/:gameId" element={<Game/>}/>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
