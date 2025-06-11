package Backend.Backend.controller;

import Backend.Backend.models.Prato;
import Backend.Backend.services.PratoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/Prato")

public class PratoController {

    private PratoService pratoService;

    public PratoController(PratoService pratoService){
        this.pratoService = pratoService;
    }

    @GetMapping
    public List<Prato> listartodos() {
        return pratoService.listarTodos();
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@RequestBody Prato prato) {
        pratoService.salvar(prato);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("mensagem", "Prato Criado Com Sucesso."));
    }

    @PutMapping
    public ResponseEntity<Map<String, Object>> atualizar(@RequestBody Prato prato) {
        pratoService.atualizar((prato));
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "Prato Atualizado Com Sucesso"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> excluir(@PathVariable Long id){
        pratoService.excluir(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of("mensagem", "Prato Excluido Com Sucesso."));
    }
}
