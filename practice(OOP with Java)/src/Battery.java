class Battery {
    public String manufacturer;
    public String model;
    public double voltage;
    public double ampHours;
    public double weightKg;
    public double[] dimensionMm;

    public Battery(String manufacturer, String model, double voltage, double ampHours, double weightKg, double wMm, double hMm, double dMm){
        this.manufacturer = manufacturer;
        this.model = model;
        this.voltage = voltage;
        this.ampHours = ampHours;
        this.weightKg = weightKg;
        this.dimensionMm = new double[]{wMm, hMm, dMm};
    }

    public String toString(){
        //このオブジェクトの参照を取得
        String referenceHash = Integer.toHexString(this.hashCode());

        return this.manufacturer + " " + this.model + ": " + this.getPowerCapacity()
         + "Wh (" + this.voltage + "V/" + this.ampHours + "Ah) - " + this.dimensionMm[0] + "(W)x" + this.dimensionMm[1] + "(H)x" + this.dimensionMm[2] + "(D) " + this.weightKg + "kg .... Instance Reference:" + referenceHash;
    }

    public double getPowerCapacity(){
        return this.voltage * this.ampHours;
    }
}

class Main{
    public static void main(String[] args){
        Battery mc96 = new Battery("VTec", "MC96", 14.4, 6.6, 0.55, 72, 97, 51.5);
        Battery mc96Second = mc96;//シャローコピー
        //↓メンバ変数がすべて同じのディープコピー
        Battery mc96Third = new Battery("VTec", "MC96", 14.4, 6.6, 0.55, 72, 97, 51.5);
        Battery mdLs95 = new Battery("Atomic Units", "MD-LS95", 14.4, 6.6, 0.55, 72, 97, 51.5);

        System.out.println(mc96);
        System.out.println();
        System.out.println(mc96Second);
        System.out.println();
        System.out.println(mc96Third);
        System.out.println();
        System.out.println(mdLs95);

        System.out.println();
        //System.out.println(mc96 == mc96); //Syntax error
        System.out.println(mc96 == mc96Second); //True
        System.out.println(mc96 == mc96Third); //False
        System.out.println(mc96 == mdLs95); //False
    }
}
