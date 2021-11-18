using System;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/usuario")]
    public class UsuarioController : ControllerBase
    {
        private readonly DataContext _context;
        //Construtor
        public UsuarioController(DataContext context) => _context = context;

        //POST: api/usuario/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();
            usuario.Senha = "";
            return Created("", usuario);
        }

        // GET: api/usuario/login
        [HttpGet]
        [Route("login")]
        public IActionResult Login([FromBody] Usuario usuario)
        {
            return Ok(usuario);
        }

    }
}