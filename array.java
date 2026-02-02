import java.util.*;
public class array {
    public static void main (String [] args){
        Scanner sc = new Scanner (System.in);
        int[] n = {12, 34, 23, 54};
        // System.out.println(n[1]);
        // int[] n = new int[4];
        // n[0] = sc.nextInt();
        // n[1] = sc.nextInt();
        // n[2] = sc.nextInt();
        // n[3] = sc.nextInt();
        // n[4] = sc.nextInt();

        // for (int i = 0; i< n.length; i++){
        //     System.out.print(n[i]);
        // }

        for (int num : n){
            System.out.println(num);
        }
    }
    
}
