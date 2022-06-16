package br.com.calculadora;

import java.util.Scanner;

public class Calculadora {

	public static void main(String[] args) {
		try (Scanner scan = new Scanner(System.in)) {
			int a, b;
			
			System.out.println("Digite o primeiro valor: ");
			a = scan.nextInt();
			System.out.println("Digite o segundo valor: ");
			b = scan.nextInt();
			
			int soma = soma(a,b);
			int subtracao = subtracao(a,b);
			int multiplicacao = multiplicacao(a,b);
			float divisao = divisao(a,b);
			
			System.out.println("A soma de " + a + " + " + b + " �: " + soma);
			System.out.println("A subtracao de " + a + " - " + b + " �: " +  subtracao);
			System.out.println("A multiplica��o de " + a + " x " + b + " �: " +  multiplicacao);
			System.out.println("A divis�o de " + a + " / " + b + " �: " + divisao);
		}
		
		
	}

	public static int soma(int a, int b) {
		return a + b;
	}

	public static int subtracao(int a, int b) {
		return a - b;
	}

	public static float divisao(float a, float b) {
		return a / b;
	}

	public static int multiplicacao(int a, int b) {
		return a * b;
	}

}
