public class Main {
    public static void main(String[] args)
    {
        File file = new File("file.txt");
        int length = (int) file.length();
        try (
                FileInputStream stream = new FileInputStream(file);
                InputStreamReader reader = new InputStreamReader(stream, StandardCharset.UTF_8);
                ){
            char[] data = new char[length];
            int readBytes = reader.read(date, 0, length);
            if (readBytes != length) {
                throw new IOException("File reading error.");
            }
            String text = new String();
            System.out.println(text);
        } finally {
            reader.close();
            stream.close();
        }
        catch (FileNotFoundException e){
            e.printStackTrace();
        }
    }
}
