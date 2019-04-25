package hello;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class testP extends java.lang.Object{
    public static void main(String[] args) throws ScriptException, FileNotFoundException, NoSuchMethodException {


        StringBuffer javascript = null;
        ScriptEngine runtime = null;
//
        try {
            runtime = new ScriptEngineManager().getEngineByName("javascript");
            javascript = new StringBuffer();

            javascript.append("1 + 1");

            double result = (Double) runtime.eval(javascript.toString());

            System.out.println("Result: " + result);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            System.out.println("i dont have any Idea");
        }


        // +++++++++++++++++++++++++++++++++++++++


        //++++++++++++++++++++++++++++++++++++++
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
        engine.eval(new FileReader("D:\\ABschlussArbeit\\IDE_Project\\IntelliJ_Workspace\\SudokuSpringboot\\src\\main\\resources\\static\\js\\main.js"));

       // Invocable invocable = (Invocable) engine;
//        Object result = invocable.invokeFunction("fun2", "Yassine Chakri");

        //String strObjects = result.toString();
       // int[][] a = (int[][]) result;

//        var data =[1,2,3,4,5,6];
//        var JavaArray = Java.to(data,"int[]");
//        print(JavaArray[0]+JavaArray[1]+JavaArray[2]);

//        int[][] iarr = (int[][]) ScriptUtils.convert(result, int[].class);
        for (int i=0 ; i<9; i++){
            for (int j=0 ; j<9; j++) {
          //      System.out.print(result.toString().charAt(0));
            }
            System.out.println();
        }
        //System.out.println(result.getClass());
        //int[] iarr = (int[])ScriptUtils.convert(arr, int[].class)




    }
}
