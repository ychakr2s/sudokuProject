package hello.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class sudokuController {

    @GetMapping("/greeting")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World is my") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @RequestMapping(value = "/appUrl", method = RequestMethod.POST)
    public @ResponseBody
    int[] yourMethod(@RequestBody int[] dataArrayToSend) {
        int k=0;
        int a[]= new int[81];
        int b[][] = new int[9][9];

        for (Integer data : dataArrayToSend) {
            a[k]= data;

            k++;
        }
        for (int i = 0; i < 81; i++) {
            System.out.println(i+" Your A[] =>" + a[i]);
        }
        int count =0;
        for (int i =0; i<9; i++){
            for (int j =0; j<9; j++){
                int c = a[count];
               // System.out.print(" "+b[i][j]);
                b[i][j] = c;
              //  System.out.print(" "+b[i][j]);
                count++;
            }
            //System.out.println();
        }
        printMatrix(b);

        return a;
    }

//    public String controllerMethod(@RequestParam(value="myArray[]") List<Integer> myArray){
//        System.out.println("My Array"+myArray.get(0));
//        return "";
//    }

    public void printMatrix(int a[][]){
        for (int i =0; i<9; i++){
            for (int j =0; j<9; j++){
                System.out.print(" "+a[i][j]);
            }
            System.out.println();
        }
    }

}