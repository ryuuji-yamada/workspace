class RGB24{
    public int red;
    public int green;
    public int blue;

    // RGB24のコンストラクタ。thisは現在のインスタンスの変数へアクセスできるキーワードです。
    // Javaでは、コンストラクタはクラス名と同じ名前のメソッドです。
    // オブジェクトは、thisキーワードで自分自身を参照することができます。thisキーワードは、現在のインスタンスのオブジェクトです。メソッドの内部でアクセスすることができます。
    public RGB24(int red, int green, int blue){
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    //文字列のみを入力とするRGB24用のコンストラクタ。関数のオーバーロードを使用
    public RGB24(String inputString){
        int l = inputString.length();

        if(l == 6) this.setColorsByHex(inputString);
        else if(l == 24) this.setColorsByBin(inputString);
        else this.setAsBlack();
    }

    //RGBの状態を16進数で指定
    public void setColorsByHex(String hex){
        if(hex.length() != 6) this.setAsBlack();
        else{
            this.red = Integer.parseInt(hex.substring(0, 2),16);
            this.green = Integer.parseInt(hex.substring(2,4),16);
            this.blue = Integer.parseInt(hex.substring(4, 6),16);
        }
    }

    //RGBの状態を2進数で指定
    public void setColorsByBin(String bin){
        if(bin.length() != 24) this.setAsBlack();
        else{
            this.red = Integer.parseInt(bin.substring(0,8), 2);
            this.green = Integer.parseInt(bin.substring(8,16), 2);
            this.blue = Integer.parseInt(bin.substring(16), 2);
        }
    }

    //状態を黒に設定
    public void setAsBlack(){
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }

    public String getHex(){
        String hex = Integer.toHexString(this.red);
        hex+=Integer.toHexString(this.green);
        hex+=Integer.toHexString(this.blue);

        return hex;
    } 

    public String getBits(){
        return Integer.toBinaryString(Integer.parseInt(this.getHex(), 16));
    }

    // RGBが赤、青、緑の中でどの色が濃いのか、もしくはgrayなのか決定することができます。
    public String getColorShade(){
        if(this.red == this.green && this.green == this.blue) return "grayscale";
        String[] stringTable = new String[]{"red","green","blue"};
        int[] values = {this.red,this.green,this.blue};

        //max algorithm
        int max = values[0];
        int maxIndex = 0;
        for(int i = 1; i < values.length; i++){
            if(max <= values[i]){
                max = values[i];
                maxIndex = i;
            }
        }
        return stringTable[maxIndex];
    }

    public String toString(){
        return "The color is rgb(" + this.red + "," + this.green + "," + this.blue + "). Hex: " + this.getHex() + ", binary: " + this.getBits();
    }
}

class Main{
    public static void main(String[] args){
        RGB24 color1 = new RGB24(0, 153, 255);
        RGB24 color2 = new RGB24("ff99cc"); //rgb(255, 153, 204)
        RGB24 color3 = new RGB24("100110011111111100110011"); //rgb(153, 255, 51)
        RGB24 gray = new RGB24("7b7b7b"); //rgb(123, 123, 123)

        System.out.println(color1);
        System.out.println(color2);
        System.out.println(color3);
        System.out.println(gray);
        
        System.out.println();	
        System.out.println("Changing the state of colors");
        System.out.println();
        
        // 状態の変更
        gray.setAsBlack();
        System.out.println(gray);
        color1.setColorsByHex("2EB656");
        System.out.println(color1);
    }
}
