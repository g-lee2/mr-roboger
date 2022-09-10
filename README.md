Describe: returnNumberArray()

Test: "It should return an array of numbers from 0 to the inputted number""
Code: returnNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should replace 1 with "Beep!""
Code: returnNumber(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should replace 2 with "Boop!""
Code: returnNumber(5);
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test: "It should replace 3 with "Won't you be my neighbor?""
Code: returnNumber(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should replace 1, 2, and 3 with their respective message, regardless of how many digits the inputted number is, and following the hierarchy of substitutions" 
Code: returnNumber(13);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]