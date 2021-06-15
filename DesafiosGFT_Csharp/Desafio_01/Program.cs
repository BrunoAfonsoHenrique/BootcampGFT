using System;

namespace Porgrama01
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] dados = new string[2];

            dados = (Console.ReadLine().Split(' '));

            decimal tempoGasto = 0;

            tempoGasto = Convert.ToInt32(dados[0]);
            
            decimal velMedia = 0;
            
            velMedia = Convert.ToInt32(dados[1]);

            decimal qtdCombustivel = ((velMedia * tempoGasto)/12);

            Console.WriteLine(qtdCombustivel.ToString("N3"));

        }
    }
}
