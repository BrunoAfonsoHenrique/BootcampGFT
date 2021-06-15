using System;
using System.Text;

class MainClass {
  public static void Main (string[] args) {
        String a ; //declare as suas variaveis
        String b ;
        String c ;

        a = Console.ReadLine(); //insira suas variaveis
        b = Console.ReadLine();
        c = Console.ReadLine();

      if ((a == "vertebrado" ) && (b == "ave" )  && (c == "carnivoro" )) {
      a = "aguia"; //complete o desafio
      Console.WriteLine(a);
    }

     if ((a == "vertebrado" ) && (b == "ave")  && (c == "onivoro" )) {
      a = "pomba";//complete o desafio
      Console.WriteLine(a);
    }

     if ((a == "vertebrado" ) && (b == "mamifero" )  && (c == "onivoro" )) {
      a = "homem";//complete o desafio
      Console.WriteLine(a);

    }

     if ((a == "vertebrado" ) && (b == "mamifero" )  && (c == "herbivoro" )) {
      a = "vaca";//complete o desafio
      Console.WriteLine(a);
    }

     if ((a == "invertebrado" ) && (b == "inseto" )  && (c == "hematofago" )) {
      a = "pulga";//complete o desafio
      Console.WriteLine(a);
    }

     if ((a == "invertebrado" ) && (b == "inseto" )  && (c == "herbivoro" )) {
      a = "lagarta";//complete o desafio
      Console.WriteLine(a);
    }

    if ((a == "invertebrado") && ( b == "anelideo") && (c == "hematofago")) {
      a = "sanguessuga";
      Console.WriteLine(a);
    }

    if ((a == "invertebrado") && ( b == "anelideo") && (c == "onivoro")) {
      a = "minhoca";
      Console.WriteLine(a);
    }


  }
}