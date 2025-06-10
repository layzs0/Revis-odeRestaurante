import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Cardapio.css';



const Cardapio = () => {
    const [pratos, setPratos] = useState([]);
    const navigate = useNavigate();


    function formatEnum(enumValue) {
        return enumValue
            .toLowerCase()            // deixa tudo minúsculo
            .replace(/_/g, ' ')       // troca underscore por espaço
            .replace(/\b\w/g, c => c.toUpperCase()); // capitaliza cada palavra
    }


    // Função para buscar os pratos
    useEffect(() => {
        axios.get('https://atividadedeploy-wxbq.onrender.com') // Ajuste conforme sua API
            .then(response => {
                setPratos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar pratos:', error);
            });
    }, []);

    // Função para deletar prato
    const deletarPrato = (id) => {
        axios.delete(`https://atividadedeploy-wxbq.onrender.com${id}`)
            .then(() => {
                // Atualiza a lista de pratos após a exclusão
                setPratos(pratos.filter(prato => prato.id !== id));
            })
            .catch(error => {
                console.error('Erro ao deletar prato:', error);
            });
    };

    return (
        <div className="cardapio-container">
            <h2>Cardápio</h2>
            {pratos.length > 0 ? (
                <div className="pratos-grid">
                    {pratos.map((prato, index) => (
                        <div key={index} className="prato-card">
                            <img src={prato.urlImagem} alt={prato.nomePrato} className="prato-img" width={200}/>
                            <h3>{prato.nomePrato}</h3>
                            <p>{prato.descricao}</p>
                            <p><strong>Preço:</strong> R$ {Number(prato.preco).toFixed(2)}</p>
                            <p><strong>Categoria:</strong> {formatEnum(prato.categoria)}</p>
                            <p><strong>Status:</strong> {formatEnum(prato.disponibilidade)}</p>
                            {/* Botão de deletar */}
                            <button
                                className="delete-button"
                                onClick={() => deletarPrato(prato.id)} // Passando o id do prato para a função de deletar
                            >
                                Deletar
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhum prato cadastrado.</p>
            )}

            <button className="voltar-button" onClick={() => navigate('/')}>
                Voltar à Página Inicial
            </button>
        </div>
    );
};



export default Cardapio;