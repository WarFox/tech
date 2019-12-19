package com.deepumohan.tech.chartostring;

public class CharToString {

    public static void main(String[] args) {
        char x = 'x';

        // Although this method seems very simple, this is less efficient because the concatenation
        // expands to new StringBuilder().append(x).append("").toString();
        String concatBlankString = 'x' + "";

        // use String.valueOf(char) static method
        String stringValueOf = String.valueOf(x);

        // use String.valueOf(char[]) static method
        String stringValueOfCharArray = String.valueOf(new char[]{x});

        // use Character.toString(char) static method
        String characterToString = Character.toString(x);

        // create new Character object from the given char and
        // then use object's toString() method
        String characterObjectToString = new Character(x).toString();

        // create new char[] array from the char and pass it to
        // String constructor
        String fromCharArray = new String(new char[]{x});

        System.out.println(concatBlankString + ":" + stringValueOf + ":" + stringValueOfCharArray);
        System.out.println(characterToString + ":" + characterObjectToString + ":" + fromCharArray);

        /*
        // Compile time error
        // No suitable constructor found
        public static String noConstructor(char x) {
            return new String(x);
        }
        // Compile time error
        // Inconvertible types
        public static String inconvertibleTypes(char x) {
            return (String) x;
        }
        */

    }

}
