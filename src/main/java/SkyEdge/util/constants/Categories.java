package SkyEdge.util.constants;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public enum Categories {
    Luxury("Luxury"),
    Trending("Trending"),
    Men("Men's glasses"),
    Women("Women's glasses"),
    Sunglasses("Sunglasses"),
    Accessories("Accessories"),
    Frame("Eyeglass Frame");

    private String category;

    private Categories(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }

    // Method to return all categories as a list of strings
    public static List<String> getAllCategories() {
        return Arrays.stream(Categories.values())
                .map(Categories::getCategory)
                .collect(Collectors.toList());
    }
}
