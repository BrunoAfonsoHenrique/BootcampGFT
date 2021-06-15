using System;

class Program {
  
  static void Main(string[] args) {
    int numeroDeFigurinhas = Int32.Parse(Console.ReadLine());
    int numeroDeFigurinhasCompradas = Int32.Parse(Console.ReadLine());
    int totalDeFigurinhas = 0;

    int[] albumDeFigurinha = new int[numeroDeFigurinhas];

    // IMPLEMENTE AQUI A SOLUÇÃO
    for(int indice = 0; indice < numeroDeFigurinhasCompradas; indice++){
      var valor = Int32.Parse(Console.ReadLine()); 
      albumDeFigurinha[valor-1] = valor;
    }

    for(int indice = 0; indice <numeroDeFigurinhas; indice++){
      if(albumDeFigurinha[indice] == 0){
        totalDeFigurinhas = totalDeFigurinhas + 1;
      }
    }

    Console.WriteLine(totalDeFigurinhas);
  }

}