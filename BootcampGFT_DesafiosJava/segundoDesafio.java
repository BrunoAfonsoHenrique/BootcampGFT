import java.io.IOException;
import java.util.Scanner;

public class  segundoDesafio{
	
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int idadeDias = leitor.nextInt();
        int anos = idadeDias / 365;
        
        idadeDias = idadeDias % 365;
        int meses = idadeDias / 30;

        idadeDias = idadeDias % 30;
        int dias = idadeDias;

        System.out.println( anos + " ano(s)");
        System.out.println( meses + " mes(es)");
        System.out.println(dias + " dia(s)");
    }
	
}