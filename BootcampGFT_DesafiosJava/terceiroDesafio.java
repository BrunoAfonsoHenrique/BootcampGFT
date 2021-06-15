import java.io.IOException;
import java.util.Scanner;

public class terceiroDesafio{
	
    public static void main(String[] args) throws IOException {
        Scanner entrada = new Scanner(System.in);
        int num = entrada.nextInt();

        char nota = 'A';
        if (num == 0){
            nota = 'E';
        } else if(num >= 1 && num <= 35){
            nota = 'D';
        }else if (num >= 36 && num <= 60){
            nota = 'C';
        }else if(num >= 61 && num <= 85){
            nota = 'B';
        }else{
            nota = 'A';
        }
        System.out.println(nota);
    }
	
}