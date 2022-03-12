import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class Main2 {
    public static void main(String[] args) throws IOException {

        byte[] data;
        try {
            data = Files.readAllBytes(Paths.get("file.txt"));
        } catch (IOException e) {
            throw e;
        }
        String text = new String(data, StandardCharsets.UTF_8);
        System.out.println(text);
    }
}
