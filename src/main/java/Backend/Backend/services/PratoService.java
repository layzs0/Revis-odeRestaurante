package Backend.Backend.services;

import Backend.Backend.models.Prato;
import Backend.Backend.repository.PratoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PratoService {

    private PratoRepository pratoRepository;

    public PratoService(PratoRepository pratoRepository) {
        this.pratoRepository = pratoRepository;
    }

    public List<Prato> listarTodos() {
        return pratoRepository.findAll();
    }

    public Prato salvar(Prato prato) {
        if (pratoRepository.findById(prato.getId()).isPresent()) {
            throw new RuntimeException("Prato já Cadastrado");
        }

        return pratoRepository.save(prato);
    }

    public Prato atualizar(Prato prato){
        Prato pratoAtualizar = pratoRepository.findById(prato.getId())
                .orElseThrow(() -> new RuntimeException("Prato não cadastrado"));

        pratoAtualizar.setNomePrato(prato.getNomePrato());
        pratoAtualizar.setDescricao(prato.getDescricao());
        pratoAtualizar.setPreco(prato.getPreco());
        pratoAtualizar.setCategoria(prato.getCategoria());
        pratoAtualizar.setDisponibilidade(prato.getDisponibilidade());
        pratoAtualizar.setUrlImagem(prato.getUrlImagem());
        return pratoRepository.save(pratoAtualizar);
    }

    public void excluir(Long id){
        Prato pratoAtualizar = pratoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prato não cadastrado"));

                pratoRepository.deleteById(id);
    }
}
