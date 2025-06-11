import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './TelaCadastroPratos.css'; // Caso queira estilizar


export default function FomularioCadastro() {

    const navigate = useNavigate();

    const [dadosPratos, setdadosPratos] = useState({
        nomePrato: '',
        descricao: '',
        preco: '',
        categoria: '',
        disponibilidade: '',
        urlImagem: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdadosPratos(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Enviando dados para o backend:', dadosPratos);

            await axios.post('https://atividadedeploy-wxbq.onrender.com/Prato', dadosPratos);

            alert('Prato cadastrado com sucesso!');
            navigate('/');
        } catch (error) {
            console.error('Erro ao cadastrar prato:');
            console.error('Dados enviados:', dadosPratos);
            console.error('Resposta da API:', error.response?.data || error.message);

            alert(
                error.response?.data?.mensagem ||
                error.response?.data?.erro ||
                'Erro ao cadastrar prato. Verifique os dados e tente novamente.'
            );
        }
    };

    return (
        <div className="cadastrar-prato-container">
            <h2>Cadastrar Prato</h2>
            <form onSubmit={handleSubmit} className="cadastrar-prato-form">
                <input
                    type="text"
                    name="nomePrato"
                    placeholder="Nome do Prato"
                    value={dadosPratos.nomePrato}
                    onChange={handleChange}
                    required
                />

                <input
                    type='text'
                    name="descricao"
                    placeholder="Descrição"
                    value={dadosPratos.descricao}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="preco"
                    placeholder="Preço"
                    value={dadosPratos.preco}
                    onChange={handleChange}
                    required
                />

                <select
                    name="categoria"
                    value={dadosPratos.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione a Categoria</option>
                    <option value="ENTRADA">Entrada</option>
                    <option value="PRATO_PRINCIPAL">Prato Principal</option>
                    <option value="SOBREMESA">Sobremesa</option>
                    <option value="BEBIDA">Bebida</option>
                </select>

                <select
                    name="disponibilidade"
                    value={dadosPratos.disponibilidade}
                    onChange={handleChange}
                    required
                >
                    <option value="">Disponibilidade</option>  {/* Essa opção tem valor vazio */}
                    <option value="EM_ESTOQUE">Em estoque</option>
                    <option value="ESGOTADO">Esgotado</option>
                </select>

                <input
                    type="url"
                    name="urlImagem"
                    placeholder="URL da Imagem do Prato"
                    value={dadosPratos.urlImagem}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Cadastrar</button>
            </form>

            <button className="voltar-button" onClick={() => navigate('/')}>
                Voltar à Página Inicial
            </button>
        </div>
    );
};

