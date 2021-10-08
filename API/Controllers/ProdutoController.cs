using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/produto")]
    public class ProdutoController : ControllerBase
    {
        private readonly DataContext _context;
        //Construtor
        public ProdutoController(DataContext context) => _context = context;

        //POST: api/produto/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Produto produto)
        {
            int categoriaId = produto.CategoriaId;
            produto.Categoria = _context.Categorias.Find(categoriaId);
            _context.Produtos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        //GET: api/produto/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() =>
            Ok(_context.Produtos
                .Include(p => p.Categoria)
                .ToList());

        //GET: api/produto/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            //Buscar o produto pelo Id
            Produto produto = _context.Produtos.Find(id);
            if (produto == null)
            {
                return NotFound();
            }
            return Ok(produto);
        }

        //DELETE: api/produto/delete/Bolacha
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            //Where
            //Expressão lambda
            //Buscar o primeiro produto pelo nome
            // Produto produto = _context.Produtos.FirstOrDefault
            // (
            //     produto => produto.CategoriaId == 1
            // );
            Produto produto = _context.Produtos.FirstOrDefault
            (
                produto => produto.Nome == name
            );
            if (produto == null)
            {
                return NotFound();
            }
            _context.Produtos.Remove(produto);
            _context.SaveChanges();
            return Ok(_context.Produtos.ToList());
        }

        //PUT: api/produto/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Produto produto)
        {
            _context.Produtos.Update(produto);
            _context.SaveChanges();
            return Ok(produto);
        }
    }
}