# Java Coding Conventions for Bellerbys students

## Naming

### Packages

1. The first letter of the package should be lower case. For example:
    ```java
    com.kevin.music
    ```

### Class/Interface

1. Class and Interface should be named with PascalCase. The name should start with an English word. Every word should start with capital letter, and except the first letter, the rest part of the word should all be lower case. For example:
    ```java
    public NurseData  // right
    private Scanner   // right
    ```

### Methods

1. Methods should be named with camelCase. The name should start with an English word. Every word should start with capital letter except the first one, and except the first letter, the rest part of the word should all be lower case.
    ```java
    public static int getIndex();           // right
    private static void setTime();          // right
    private static String GetCurrentTime(); // wrong, should start with a lower-case letter
    ```
2. Recommend that methods start with a verb.

### Variables

1. Any java objects' names should be named with camelCase (see more at [Methods](#methods)). For example:
    ```java
    boolean isValid;  // right
    int studentCount; // right
    String msgText;   // right
    double KNum;      // wrong, should start with lower case
    byte numofdata;   // wrong
    ```

2. But the name of objects which are modified with `final` should be all capital and split every word with `_`. For example:
    ```java
    public final int MAX_OF_CORES = 0;         // right
    public final boolean ValueOfValid = false; // wrong, all letters should be capital and the name should be splitted with `_`.
    public final int Max_Limit = 20;           // wrong, should be capital.
    ```

3. For arguments, the variables should be ended with `In`:
   ```java
   public void setName(String nameIn)          // right
   public void setAge(int age)                 // wrong, age should be ageIn
   ```
