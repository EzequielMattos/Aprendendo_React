using Microsoft.AspNetCore.Mvc;
using ProAtividade_API.Models;

namespace ProAtividade_API.Controllers
{
    [ApiController]
    public class AtividadeController : ControllerBase
    {
        [HttpGet("v1/atividade")]
        public Atividade Get()
        {
            return new Atividade();
        }

        [HttpGet("v1/atividade/{id}")]
        public string Get([FromRoute] int id)
        {
            return $"Meu primeiro metodo Get com parametro {id}";
        }

        [HttpPost("v1/atividade")]
        public Atividade Post([FromBody] Atividade atividade)
        {
            return atividade;
        }

        [HttpPut("v1/atividade/{id}")]
        public string Put([FromRoute] int id)
        {
            return "Meu primeiro metodo Put";
        }

        [HttpDelete("v1/atividade/{id}")]
        public string Delete([FromRoute] int id)
        {
            return "Meu primeiro metodo Delete";
        }
    }
}
