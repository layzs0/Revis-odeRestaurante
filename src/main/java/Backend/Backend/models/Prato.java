package Backend.Backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Prato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "Insira o nome do Prato.")
    private String nomePrato;

    @NotBlank(message = "Insira a descricao do Prato.")
    private String descricao;

    @NotBlank(message = "Insira o preco.")
    private String preco;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;

    @NotBlank(message = "Insira uma imagem do Prato.")
    private String urlImagem;


    public Prato() {
    }

    public Prato(long id, String nomePrato, String descricao, String preco, Categoria categoria, Disponibilidade disponibilidade, String urlImagem) {
        this.id = id;
        this.nomePrato = nomePrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public @NotBlank String getNomePrato() {
        return nomePrato;
    }

    public void setNomePrato(@NotBlank String nomePrato) {
        this.nomePrato = nomePrato;
    }

    public @NotBlank String getDescricao() {
        return descricao;
    }

    public void setDescricao(@NotBlank String descricao) {
        this.descricao = descricao;
    }

    public @NotBlank String getPreco() {
        return preco;
    }

    public void setPreco(@NotBlank String preco) {
        this.preco = preco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public @NotBlank String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(@NotBlank String urlImagem) {
        this.urlImagem = urlImagem;
    }
}
