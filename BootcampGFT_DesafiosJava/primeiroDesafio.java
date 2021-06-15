import java.io.IOException;
import java.util.Scanner;

public class primeiroDesafio{
	
    public static void main(String[] args) throws IOException {
        Scanner entrada = new Scanner(System.in);
        int num = entrada.nextInt();
    	for (int i = 2 ; i <= num ; i++) {
    		if (i % 2 == 0 ) System.out.println(i);
        }
        	
    }
}