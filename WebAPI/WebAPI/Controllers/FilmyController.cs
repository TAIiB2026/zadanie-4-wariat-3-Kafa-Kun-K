using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmyController : ControllerBase
    {
        public class Film
        {
            public int Id { get; set; }
            public string Tytul { get; set; }
            public decimal Cena { get; set; }
            public DateTime DataPremiery { get; set; }

            public string Nazwa { set { Tytul = value; } }
            public DateTime Data { set { DataPremiery = value; } }
        }

        private static List<Film> _bazaDanych = new List<Film>
        {
            new Film { Id = 1, Tytul = "Film 1", Cena = 10, DataPremiery = new DateTime(2003, 8, 14) },
            new Film { Id = 2, Tytul = "Film 2", Cena = 20, DataPremiery = new DateTime(2026, 6, 02) }
        };

        [HttpGet]
        public IActionResult Get() => Ok(_bazaDanych);

        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _bazaDanych.FirstOrDefault(x => x.Id == id);
            return item == null ? NotFound() : Ok(item);
        }

        [HttpPost]
        public IActionResult Add([FromBody] Film film)
        {
            film.Id = _bazaDanych.Any() ? _bazaDanych.Max(x => x.Id) + 1 : 1;
            _bazaDanych.Add(film);
            return Ok(true);
        }

        [HttpPut("{id}")]
        public IActionResult Edit(int id, [FromBody] Film film)
        {
            var item = _bazaDanych.FirstOrDefault(x => x.Id == id);
            if (item == null) return NotFound();

            item.Tytul = film.Tytul;
            item.Cena = film.Cena;
            item.DataPremiery = film.DataPremiery;
            return Ok(true);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = _bazaDanych.FirstOrDefault(x => x.Id == id);
            if (item == null) return NotFound();

            _bazaDanych.Remove(item);
            return Ok(true);
        }
    }
}