import { Routes, Route } from 'react-router-dom';
import Login from "../components/login";
import AppMain from '../components/home';
import ClienteForm from '../components/criarCliente';

export default function RoutesNav() {
    return (
        <Routes>
            <Route exact path="/create-client" element = {<ClienteForm/>}/>
            <Route exact path="/fazer-Login" element={<Login/>}/>
            <Route exact path="/produtos" element={<Login/>}/>
            <Route exact path="/comparar-produtos" element={<Login/>}/>
            <Route exact path="/contatos" element={<Login/>}/>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/app" element={<AppMain />}/> 
        </Routes>
    );
}