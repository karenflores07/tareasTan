package com.generation;

import java.util.Scanner;//libreria scanner 

public class Codigo4 {
  public static void main (String[]args) {
    Scanner s = new Scanner(System.in);//system in
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    //elimine scanner2 ´por que me narcaba error 
    //syso para jugador dos 
    System.out.println("Turno juagador 2 (introduzca piedra papel p tijera ): ");
    String j2 = s.nextLine();
    //no usar == usar equals
    if (j1.equals(j2)) {
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2.equals ("tijeras")) {//equals
            g = 1;
          }
        break;//break
        case "papel":
          if (j2 .equals ("piedra")) {
            g = 1;
          }//cierre de llave 
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default:
        	System.out.println("opcion no aceptada");
        	return;
      }
      System.out.println("Gana el jugador " + g);
    }
  }
}

  
  
