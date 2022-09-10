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