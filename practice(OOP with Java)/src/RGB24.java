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
        String greatestString = "red";
        int greatest = this.red;

        if(greatest <= this.green){
            greatestString = "green";
            greatest = this.green;
        }

        if(greatest <= this.blue){
            greatestString = "blue";
            greatest = this.blue;
        }

        return greatestString;
    }
}

class Main{
    public static void main(String[] args){
        // 3つのRGB24インスタンスを作成します。
        RGB24 color1 = new RGB24(0, 153, 255);
        RGB24 color2 = new RGB24(255, 153, 204);
        RGB24 color3 = new RGB24(153, 255, 51);

        System.out.println(color1.getHex() + " <-> " + color1.getBits() + ". Color: " + color1.getColorShade());
        System.out.println(color2.getHex() + " <-> " + color2.getBits() + ". Color: " + color2.getColorShade());
        System.out.println(color3.getHex() + " <-> " + color3.getBits() + ". Color: " + color3.getColorShade());

        RGB24 gray = new RGB24(123, 123, 123);
        System.out.println(gray.getHex() + " <-> " + gray.getBits() + ". Color: " + gray.getColorShade());
    }
}
