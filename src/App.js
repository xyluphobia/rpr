import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Form from './pages/form';
import Request from './pages/request';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/form" element={ <Form /> }/>
                <Route path="/request" element={ <Request /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;