using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    //Utilizar o EF para nossa aplicação
    public class DataContext : DbContext
    {
        //Entity Framework - Code First
        //Construtor para definir como será conectado com o BD
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //Lista de propriedades que vão definir quais classes vão virar tabelas no DB
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
    }
}