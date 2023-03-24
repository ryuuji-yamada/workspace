class wallet{
    public int bill1 = 3;
    public int bill5 = 1;
    public int bill10;
    public int bill20;
    public int bill50;
    public int bill100;

    public wallet(){}

    public int getTotalMoney(){
        return (1*this.bill1) + (5*this.bill5) + (10*this.bill10) + (20*this.bill20) + (50*this.bill50) + (100*this.bill100);
    }
}

class Person{
    public String firstName;
    public String lastName = "?????";
    public int age = 20;
    public double heightM;
    public double weightKg;
    public wallet w;

    public Person(String firstName){
        this.firstName = firstName;
        //this.w = new wallet();//デフォルトのwallet
    }

    public int getCash(){
        //walletはオブジェクト型のため、nullになる
        if(this.w == null){
            System.out.println("NO WALLET");
            return 0;
        }
        return this.w.getTotalMoney();
    }
}

public class Wallet {
    public static void main(String[] args){
        Person p = new Person("Ryu");
        System.out.println("firstname - " + p.firstName);
        System.out.println("lastname - " + p.lastName);
        System.out.println("age - " + p.age);
        System.out.println("height - " + p.heightM);
        System.out.println("weight - " + p.weightKg);
        System.out.println("Current Money - " + p.getCash());

        p.lastName = "Poolhopper";
        p.age = 40;
        p.heightM = 180;
        p.weightKg = 140;

        System.out.println();
        System.out.println("firstname - " + p.firstName);
        System.out.println("lastname - " + p.lastName);
        System.out.println("age - " + p.age);
        System.out.println("height - " + p.heightM);
        System.out.println("weight - " + p.weightKg);
    }
}