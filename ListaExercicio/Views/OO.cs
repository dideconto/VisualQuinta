using System;
using ListaExercicio.Models;

namespace ListaExercicio.Views
{
    public class OO
    {
        public static void Renderizar()
        {
            Produto produto = new Produto();
            produto.Nome = "Bolacha";
            produto.Preco = 3.5;
            double precoFinal = produto.Preco * 2;
            Console.WriteLine($"Nome do produto: { produto.Nome }");
            Console.WriteLine($"Preço do produto: { produto.Preco }");
            Console.WriteLine($"Preço final: { precoFinal }");
        }
    }
}