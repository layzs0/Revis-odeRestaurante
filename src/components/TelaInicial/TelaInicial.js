import './style.css'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

    const navigate = useNavigate();


    return (

        <div class="container">
            <header class="header">
                <h1>Bem-vindo ao Sistema do Restaurante</h1>
            </header>
            <main class="main-content">
                <p>Selecione uma das opções abaixo para começar.</p>
                <div class="button-group">
                    <button onClick={() => navigate('/cadastrar')} class="btn btn-primary">Cadastrar Novo Prato</button>
                    <button onClick={() => navigate('/cardapio')} class="btn btn-secondary">Ver Pratos Cadastrados</button>
                </div>
            </main>
        </div>

    )

}