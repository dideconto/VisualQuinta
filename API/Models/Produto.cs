using System;

namespace API.Models
{
    public class Produto
    {
        //Construtor
        public Produto() => CriadoEm = DateTime.Now;

        //Propriedades ou atributos
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }
        public string Descricao { get; set; }
        public int Quantidade { get; set; }
        public DateTime CriadoEm { get; set; }
        public Categoria Categoria { get; set; }
        public int CategoriaId { get; set; }

        //ToString
        public override string ToString() =>
            $"Nome: {Nome} | Preco: {Preco:C2} | Criado em: {CriadoEm}";
    }
}