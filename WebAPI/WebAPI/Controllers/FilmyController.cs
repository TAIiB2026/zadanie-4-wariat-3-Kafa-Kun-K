using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmyController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new[] {
                new { id = 1, tytul = "Film 1", rezyser = "Rezyser 1"},
                new { id = 2, tytul = "Film 2", rezyser = "Rezyser 2" }
            });
        }

    [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(new { id = id, tytul = "Film 1", rezyser = "Rezyser 1" });
        }
    }
}
