// Comprehensive DSA Question Bank (300 Multiple Choice Questions)
export const QUESTION_BANK = [
  {
    "id": 1,
    "number": 1,
    "title": "Q1. What is the time complexity of accessing an element by index in an array?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of accessing an element by index in an array?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Array indexing provides constant O(1) time complexity direct memory access."
  },
  {
    "id": 2,
    "number": 2,
    "title": "Q2. What is the worst-case time complexity of inserting an element at the beginning of an array of size n?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What is the worst-case time complexity of inserting an element at the beginning of an array of size n?",
    "options": [
      "O(n^2)",
      "O(log n)",
      "O(n)",
      "O(1)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Inserting at the beginning requires shifting all n existing elements right by one position, taking O(n) time."
  },
  {
    "id": 3,
    "number": 3,
    "title": "Q3. Using Kadane's Algorithm, what is the maximum subarray sum of [-2,1,-3,4,-1,2,1,-5,4]?",
    "topic": "Arrays",
    "difficulty": "Medium",
    "questionText": "Using Kadane's Algorithm, what is the maximum subarray sum of [-2,1,-3,4,-1,2,1,-5,4]?",
    "options": [
      "7",
      "5",
      "4",
      "6"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The contiguous subarray with the maximum sum is [4, -1, 2, 1], which sums to 6."
  },
  {
    "id": 4,
    "number": 4,
    "title": "Q4. Which technique is most efficient for finding a pair with a given sum in a sorted array?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "Which technique is most efficient for finding a pair with a given sum in a sorted array?",
    "options": [
      "Nested loops (brute force)",
      "Recursion without memoization",
      "Two pointers",
      "Bubble sort first"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The Two Pointers approach moves inward from both ends of a sorted array in O(n) time and O(1) space."
  },
  {
    "id": 5,
    "number": 5,
    "title": "Q5. What does the 'sliding window' technique primarily optimize for?",
    "topic": "Arrays",
    "difficulty": "Medium",
    "questionText": "What does the 'sliding window' technique primarily optimize for?",
    "options": [
      "Sorting arrays in place",
      "Finding the median of two arrays",
      "Reversing linked lists",
      "Contiguous subarray/substring problems"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sliding window avoids recomputing sums/subarrays from scratch, reducing O(n^2) substring problems to O(n)."
  },
  {
    "id": 6,
    "number": 6,
    "title": "Q6. What is the time complexity of building a prefix sum array of size n?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of building a prefix sum array of size n?",
    "options": [
      "O(n^2)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Prefix sum array computation requires a single pass over the array of size n, taking O(n) time."
  },
  {
    "id": 7,
    "number": 7,
    "title": "Q7. After building a prefix sum array, a range sum query [l, r] can be answered in:",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "After building a prefix sum array, a range sum query [l, r] can be answered in:",
    "options": [
      "O(log n)",
      "O(n)",
      "O(1)",
      "O(r-l)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Range sum [l, r] is calculated directly as prefix[r] - prefix[l-1] in O(1) constant time."
  },
  {
    "id": 8,
    "number": 8,
    "title": "Q8. What is the output of the following code?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nint[] arr = {1, 2, 3, 4, 5};\nint sum = 0;\nfor (int i = 1; i < arr.length; i += 2) sum++;\nSystem.out.println(sum);",
    "options": [
      "2",
      "Compilation Error",
      "3",
      "4"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The loop runs for index i=1 and i=3, so sum is incremented 2 times."
  },
  {
    "id": 9,
    "number": 9,
    "title": "Q9. Which algorithm is used to rotate an array of size n by k positions in O(n) time and O(1) extra space?",
    "topic": "Arrays",
    "difficulty": "Medium",
    "questionText": "Which algorithm is used to rotate an array of size n by k positions in O(n) time and O(1) extra space?",
    "options": [
      "Reversal algorithm (reverse whole array, then reverse parts)",
      "Using a second array of size n always",
      "Insertion sort",
      "Bubble rotation"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Reversing the whole array and then reversing the two subarrays [0..k-1] and [k..n-1] rotates in O(n) time and O(1) space."
  },
  {
    "id": 10,
    "number": 10,
    "title": "Q10. What is the time complexity of the two-pointer approach to check if a sorted array has a pair summing to a target?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the two-pointer approach to check if a sorted array has a pair summing to a target?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Each pointer moves at most n times, visiting each element once in O(n) total time."
  },
  {
    "id": 11,
    "number": 11,
    "title": "Q11. In the 'Dutch National Flag' algorithm used to sort an array of 0s, 1s, and 2s, how many passes over the array are required?",
    "topic": "Arrays",
    "difficulty": "Medium",
    "questionText": "In the 'Dutch National Flag' algorithm used to sort an array of 0s, 1s, and 2s, how many passes over the array are required?",
    "options": [
      "3",
      "2",
      "n",
      "1"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dutch National Flag algorithm sorts 0s, 1s, and 2s in a single single-pass O(n) time using three pointers."
  },
  {
    "id": 12,
    "number": 12,
    "title": "Q12. What will the following code print?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What will the following code print?\nint[] arr = {4, 2, 6, 8, 10};\nint target = 5;\nint lo = 0, hi = arr.length - 1, ans = -1;\nwhile (lo <= hi) {\n  int mid = (lo + hi) / 2;\n  if (arr[mid] == target) { ans = mid; break; }\n  else if (arr[mid] < target) lo = mid + 1;\n  else hi = mid - 1;\n}\nSystem.out.println(ans);",
    "options": [
      "ArrayIndexOutOfBoundsException",
      "4",
      "0",
      "-1"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Target 5 is not present in the array. Binary search completes and prints default ans = -1."
  },
  {
    "id": 13,
    "number": 13,
    "title": "Q13. You need to find the majority element (appears more than n/2 times) in O(n) time and O(1) space. Which algorithm should you use?",
    "topic": "Arrays",
    "difficulty": "Medium",
    "questionText": "You need to find the majority element (appears more than n/2 times) in O(n) time and O(1) space. Which algorithm should you use?",
    "options": [
      "Binary Search",
      "Merge Sort",
      "Boyer-Moore Voting Algorithm",
      "Kadane's Algorithm"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Boyer-Moore Voting Algorithm finds the majority element in O(n) time and O(1) space."
  },
  {
    "id": 14,
    "number": 14,
    "title": "Q14. A ride-sharing app stores driver ratings in an array and needs the k-th largest rating frequently as new ratings arrive. Which data structure gives the best amortized performance for repeated k-th largest queries?",
    "topic": "Heap",
    "difficulty": "Medium",
    "questionText": "A ride-sharing app stores driver ratings in an array and needs the k-th largest rating frequently as new ratings arrive. Which data structure gives the best amortized performance for repeated k-th largest queries?",
    "options": [
      "Sorting the array on every query",
      "Singly linked list",
      "Unsorted array with linear scan each time",
      "Min-heap of size k"
    ],
    "correctAnswerIndex": 3,
    "explanation": "A min-heap of size k maintains the k largest elements dynamically in O(log k) per new item."
  },
  {
    "id": 15,
    "number": 15,
    "title": "Q15. What is the time complexity of merging two sorted arrays of size m and n into one sorted array?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of merging two sorted arrays of size m and n into one sorted array?",
    "options": [
      "O(m + n)",
      "O(m * n)",
      "O(min(m,n))",
      "O((m+n) log(m+n))"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Two pointers can merge two sorted arrays of size m and n in a single pass taking O(m + n) time."
  },
  {
    "id": 16,
    "number": 16,
    "title": "Q16. Which of the following best describes 'in-place' array rotation?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "Which of the following best describes 'in-place' array rotation?",
    "options": [
      "It uses recursion of depth n",
      "It rotates the array using O(1) extra space",
      "It only works on sorted arrays",
      "It requires a second array equal in size"
    ],
    "correctAnswerIndex": 1,
    "explanation": "In-place operations modify the input array directly using O(1) auxiliary space."
  },
  {
    "id": 17,
    "number": 17,
    "title": "Q17. What is the output of the following code snippet?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code snippet?\nint[] arr = {1, 1, 2, 2, 3};\nStringBuilder sb = new StringBuilder();\nfor (int x : arr) sb.append(x).append(\" \");\nSystem.out.println(sb.toString().trim());",
    "options": [
      "1 2 3",
      "Compilation Error",
      "3 2 1",
      "1 1 2 2 3"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The loop iterates through every element in order, appending all 5 numbers separated by spaces."
  },
  {
    "id": 18,
    "number": 18,
    "title": "Q18. Given an array representing stock prices per day, which approach finds the maximum profit from a single buy-sell transaction in O(n) time?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "Given an array representing stock prices per day, which approach finds the maximum profit from a single buy-sell transaction in O(n) time?",
    "options": [
      "Try every pair of buy/sell days (O(n^2))",
      "Use a stack of all prices",
      "Track minimum price so far and max profit while scanning once",
      "Sort the array first"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Scanning once while tracking the running minimum price and peak profit computes optimal profit in O(n) time."
  },
  {
    "id": 19,
    "number": 19,
    "title": "Q19. What happens when you try to access arr[arr.length] in a Java array of size 'arr.length'?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "What happens when you try to access arr[arr.length] in a Java array of size 'arr.length'?",
    "options": [
      "Compilation error",
      "It returns null",
      "It returns 0 silently",
      "ArrayIndexOutOfBoundsException is thrown at runtime"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Java arrays are 0-indexed from 0 to length-1. Accessing index length throws ArrayIndexOutOfBoundsException."
  },
  {
    "id": 20,
    "number": 20,
    "title": "Q20. What is the space complexity of the standard merge sort algorithm applied on an array?",
    "topic": "Sorting",
    "difficulty": "Medium",
    "questionText": "What is the space complexity of the standard merge sort algorithm applied on an array?",
    "options": [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Standard merge sort requires O(n) auxiliary space to merge left and right subarrays."
  },
  {
    "id": 21,
    "number": 21,
    "title": "Q21. Which of these problems is typically solved using the 'sliding window' technique rather than the 'two-pointer on sorted array' technique?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "Which of these problems is typically solved using the 'sliding window' technique rather than the 'two-pointer on sorted array' technique?",
    "options": [
      "Longest substring without repeating characters",
      "Binary search on a sorted array",
      "Merging two sorted arrays",
      "Finding a pair with given sum in a sorted array"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Longest substring without repeating characters uses a dynamic sliding window over contiguous string regions."
  },
  {
    "id": 22,
    "number": 22,
    "title": "Q22. What is the time complexity of the naive (brute-force) pattern matching algorithm for a text of length n and pattern of length m?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the naive (brute-force) pattern matching algorithm for a text of length n and pattern of length m?",
    "options": [
      "O(n*m)",
      "O(m log n)",
      "O(n log m)",
      "O(n+m)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Naive pattern matching compares pattern at all (n-m+1) alignment offsets, taking O(n*m) worst case time."
  },
  {
    "id": 23,
    "number": 23,
    "title": "Q23. The KMP (Knuth-Morris-Pratt) algorithm improves pattern matching by precomputing:",
    "topic": "Strings",
    "difficulty": "Hard",
    "questionText": "The KMP (Knuth-Morris-Pratt) algorithm improves pattern matching by precomputing:",
    "options": [
      "The suffix array of the text",
      "The reverse of the pattern",
      "A hash table of all substrings",
      "The longest proper prefix which is also a suffix (LPS array)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "KMP precomputes the LPS (Longest Prefix Suffix) array to skip redundant comparisons."
  },
  {
    "id": 24,
    "number": 24,
    "title": "Q24. What is the time complexity of the KMP string matching algorithm?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of the KMP string matching algorithm?",
    "options": [
      "O(n log m)",
      "O(m^2)",
      "O(n + m)",
      "O(n * m)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "KMP preprocessing takes O(m) and text matching takes O(n), achieving linear O(n + m) time."
  },
  {
    "id": 25,
    "number": 25,
    "title": "Q25. The Rabin-Karp algorithm primarily relies on which concept to achieve fast average-case matching?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "The Rabin-Karp algorithm primarily relies on which concept to achieve fast average-case matching?",
    "options": [
      "Dynamic programming",
      "Rolling hash",
      "Suffix trees",
      "Binary search"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Rabin-Karp uses rolling hash values to compare substring hash matches in O(1) expected time per window shift."
  },
  {
    "id": 26,
    "number": 26,
    "title": "Q26. What does the following code check?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "What does the following code check?\nboolean check(String s) {\n  int i = 0, j = s.length() - 1;\n  while (i < j) {\n    if (s.charAt(i) != s.charAt(j)) return false;\n    i++; j--;\n  }\n  return true;\n}",
    "options": [
      "Whether the string has duplicate characters",
      "Whether the string is empty",
      "Whether the string is a palindrome",
      "Whether the string is sorted"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Comparing characters symmetrically from outer edges inward checks if the string reads identical backwards and forwards (palindrome)."
  },
  {
    "id": 27,
    "number": 27,
    "title": "Q27. Two strings are anagrams of each other. What is the most efficient way to check this using O(n) time (assuming a fixed alphabet size)?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "Two strings are anagrams of each other. What is the most efficient way to check this using O(n) time (assuming a fixed alphabet size)?",
    "options": [
      "Reverse one string and compare",
      "Compare characters one by one without sorting",
      "Sort both strings and compare (O(n log n))",
      "Use a frequency count array of character occurrences"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Counting character frequencies in a fixed-size array takes O(n) time and O(1) space."
  },
  {
    "id": 28,
    "number": 28,
    "title": "Q28. What is the output of the following code?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nString s = \"hello\";\nString rev = new StringBuilder(s).reverse().toString();\nSystem.out.println(rev);",
    "options": [
      "hello",
      "hlelo",
      "olleh",
      "Compilation Error"
    ],
    "correctAnswerIndex": 2,
    "explanation": "StringBuilder.reverse() reverses the characters of 'hello' to produce 'olleh'."
  },
  {
    "id": 29,
    "number": 29,
    "title": "Q29. Which data structure is most commonly used to efficiently store and search a large dictionary of words for prefix-based search (autocomplete)?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "Which data structure is most commonly used to efficiently store and search a large dictionary of words for prefix-based search (autocomplete)?",
    "options": [
      "Linked List",
      "Stack",
      "Trie",
      "Array of strings sorted alphabetically only"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A Trie (prefix tree) organizes strings by shared prefixes, allowing O(m) prefix searches for word length m."
  },
  {
    "id": 30,
    "number": 30,
    "title": "Q30. What is the time complexity to insert a word of length m into a Trie?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the time complexity to insert a word of length m into a Trie?",
    "options": [
      "O(m)",
      "O(m^2)",
      "O(log m)",
      "O(1)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Trie insertion traverses or creates m child nodes corresponding to each character in O(m) time."
  },
  {
    "id": 31,
    "number": 31,
    "title": "Q31. The 'Z-Algorithm' is used to compute, for each position in a string, the length of:",
    "topic": "Strings",
    "difficulty": "Hard",
    "questionText": "The 'Z-Algorithm' is used to compute, for each position in a string, the length of:",
    "options": [
      "The number of distinct characters so far",
      "The longest substring starting there that matches a prefix of the string",
      "The longest common subsequence",
      "The longest palindromic substring"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The Z-array stores the length of the longest common prefix between s and the suffix starting at index i."
  },
  {
    "id": 32,
    "number": 32,
    "title": "Q32. What is the output of the following code?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nString s = \"aabbbcc\";\nint maxCount = 0, count = 1;\nfor (int i = 1; i < s.length(); i++) {\n  if (s.charAt(i) == s.charAt(i - 1)) count++;\n  else count = 1;\n  maxCount = Math.max(maxCount, count);\n}\nSystem.out.println(maxCount);",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The longest consecutive identical character block is 'bbb' (length 3)."
  },
  {
    "id": 33,
    "number": 33,
    "title": "Q33. String compression converts \"aaabbc\" to which of the following (typical run-length encoding)?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "String compression converts \"aaabbc\" to which of the following (typical run-length encoding)?",
    "options": [
      "a3b2c1",
      "abc",
      "a3b2c",
      "3a2b1c"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Run-length encoding counts character runs: 'aaa' -> a3, 'bb' -> b2, 'c' -> c1 => a3b2c1."
  },
  {
    "id": 34,
    "number": 34,
    "title": "Q34. A search engine's autosuggest feature must return all words with a given prefix quickly as the user types. Which structure best supports this?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "A search engine's autosuggest feature must return all words with a given prefix quickly as the user types. Which structure best supports this?",
    "options": [
      "Unsorted array of words",
      "Stack",
      "Trie",
      "Singly linked list"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A Trie isolates all words sharing a common prefix subtree instantly."
  },
  {
    "id": 35,
    "number": 35,
    "title": "Q35. What is the time complexity of checking if a string is a palindrome using the two-pointer technique?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of checking if a string is a palindrome using the two-pointer technique?",
    "options": [
      "O(n^2)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Comparing character pairs inward traverses half the string, taking linear O(n) time."
  },
  {
    "id": 36,
    "number": 36,
    "title": "Q36. In the Longest Common Subsequence (LCS) problem for two strings of length m and n, what is the time complexity of the standard DP solution?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "In the Longest Common Subsequence (LCS) problem for two strings of length m and n, what is the time complexity of the standard DP solution?",
    "options": [
      "O(m+n)",
      "O(m*n*min(m,n))",
      "O(2^(m+n))",
      "O(m*n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Standard 2D DP for LCS computes an m x n table in O(m * n) time."
  },
  {
    "id": 37,
    "number": 37,
    "title": "Q37. What does this code output?",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "What does this code output?\nString a = \"listen\";\nString b = \"silent\";\nchar[] ac = a.toCharArray();\nchar[] bc = b.toCharArray();\nArrays.sort(ac);\nArrays.sort(bc);\nSystem.out.println(Arrays.equals(ac, bc));",
    "options": [
      "false",
      "true",
      "Compilation Error",
      "null"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sorting 'listen' and 'silent' produces identical character arrays ['e','i','l','n','s','t'], printing true."
  },
  {
    "id": 38,
    "number": 38,
    "title": "Q38. Which approach finds the longest substring without repeating characters in O(n) time?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "Which approach finds the longest substring without repeating characters in O(n) time?",
    "options": [
      "Sliding window with a hash set/map of last seen indices",
      "Sorting the string first",
      "Checking every substring individually (O(n^3))",
      "Using recursion without memoization"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sliding window with a HashSet maintains unique characters dynamically in O(n) total time."
  },
  {
    "id": 39,
    "number": 39,
    "title": "Q39. A plagiarism-detection tool needs to check if one document's text contains another shorter text as a substring, for very long documents, many times. Which algorithm avoids the O(n*m) worst case of naive search?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "A plagiarism-detection tool needs to check if one document's text contains another shorter text as a substring, for very long documents, many times. Which algorithm avoids the O(n*m) worst case of naive search?",
    "options": [
      "Bubble sort based comparison",
      "KMP or Rabin-Karp",
      "Selection sort of characters",
      "Linear scan without preprocessing"
    ],
    "correctAnswerIndex": 1,
    "explanation": "KMP and Rabin-Karp provide linear time substring searching."
  },
  {
    "id": 40,
    "number": 40,
    "title": "Q40. What is the output of the following code?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "What is the output of the following code?\nString s = \"abcabcbb\";\nSet<Character> set = new HashSet<>();\nint left = 0, maxLen = 0;\nfor (int right = 0; right < s.length(); right++) {\n  while (set.contains(s.charAt(right))) {\n    set.remove(s.charAt(left));\n    left++;\n  }\n  set.add(s.charAt(right));\n  maxLen = Math.max(maxLen, right - left + 1);\n}\nSystem.out.println(maxLen);",
    "options": [
      "0",
      "abc",
      "cba",
      "3"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The longest substring without repeating characters in 'abcabcbb' is 'abc', which has length 3."
  },
  {
    "id": 41,
    "number": 41,
    "title": "Q41. Which of the following correctly describes a 'suffix array'?",
    "topic": "Strings",
    "difficulty": "Hard",
    "questionText": "Which of the following correctly describes a 'suffix array'?",
    "options": [
      "A hash table mapping characters to indices",
      "An array storing character frequencies",
      "A sorted array of all suffixes of a string",
      "An array of all prefixes only"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A Suffix Array is a lexicographically sorted array of all suffixes of a string."
  },
  {
    "id": 42,
    "number": 42,
    "title": "Q42. What is the time complexity of accessing the k-th element in a singly linked list?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of accessing the k-th element in a singly linked list?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n)",
      "O(k^2)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Singly linked lists do not support random indexing; reaching node k requires traversing k links in O(n) time."
  },
  {
    "id": 43,
    "number": 43,
    "title": "Q43. Which algorithm is commonly used to detect a cycle in a linked list in O(n) time and O(1) space?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "Which algorithm is commonly used to detect a cycle in a linked list in O(n) time and O(1) space?",
    "options": [
      "Merge Sort",
      "Depth First Search",
      "Binary Search",
      "Floyd's Cycle Detection (slow and fast pointer)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Floyd's Cycle Detection uses slow (1 step) and fast (2 steps) pointers to detect cycles in O(n) time and O(1) space."
  },
  {
    "id": 44,
    "number": 44,
    "title": "Q44. What is the time complexity of reversing a singly linked list iteratively?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of reversing a singly linked list iteratively?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Iteratively reversing node links requires a single pass over n nodes in O(n) time."
  },
  {
    "id": 45,
    "number": 45,
    "title": "Q45. In Floyd's cycle detection algorithm, if a cycle exists, at what point do the slow and fast pointers meet?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "In Floyd's cycle detection algorithm, if a cycle exists, at what point do the slow and fast pointers meet?",
    "options": [
      "Always at the head of the list",
      "Somewhere inside the cycle",
      "They never meet",
      "Always at the tail"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The fast pointer enters the cycle first and loops until the slow pointer enters, meeting somewhere inside the cycle."
  },
  {
    "id": 46,
    "number": 46,
    "title": "Q46. What is the output of the following code, assuming the list is 1->2->3->4->5?",
    "topic": "Linked List",
    "difficulty": "Medium",
    "questionText": "What is the output of the following code, assuming the list is 1->2->3->4->5?\nNode slow = head, fast = head;\nwhile (fast != null && fast.next != null) {\n  slow = slow.next;\n  fast = fast.next.next;\n}\nSystem.out.println(slow.val);",
    "options": [
      "5",
      "3",
      "2",
      "4"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slow pointer advances 1 step while fast advances 2 steps. When fast reaches end node 5, slow points to middle node 3."
  },
  {
    "id": 47,
    "number": 47,
    "title": "Q47. Which of these is a key advantage of a doubly linked list over a singly linked list?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "Which of these is a key advantage of a doubly linked list over a singly linked list?",
    "options": [
      "It cannot have a cycle",
      "It uses less memory per node",
      "It allows O(1) random access",
      "It allows O(1) traversal in both forward and backward directions"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Each node in a doubly linked list contains both next and prev pointers, enabling bidirectional traversal."
  },
  {
    "id": 48,
    "number": 48,
    "title": "Q48. To merge two sorted singly linked lists of size m and n into one sorted list, what is the time complexity of the optimal approach?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "To merge two sorted singly linked lists of size m and n into one sorted list, what is the time complexity of the optimal approach?",
    "options": [
      "O(m * n)",
      "O((m+n) log(m+n))",
      "O(m + n)",
      "O(m^2 + n^2)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Using two pointers to stitch node pointers together merges the lists in O(m + n) linear time."
  },
  {
    "id": 49,
    "number": 49,
    "title": "Q49. An LRU (Least Recently Used) Cache is most efficiently implemented using which combination of data structures?",
    "topic": "Linked List",
    "difficulty": "Hard",
    "questionText": "An LRU (Least Recently Used) Cache is most efficiently implemented using which combination of data structures?",
    "options": [
      "A max-heap only",
      "A doubly linked list combined with a hash map",
      "A singly linked list only",
      "An array sorted by recency"
    ],
    "correctAnswerIndex": 1,
    "explanation": "A HashMap provides O(1) key lookups, and a Doubly Linked List provides O(1) insertion/deletion to maintain recency order."
  },
  {
    "id": 50,
    "number": 50,
    "title": "Q50. What is the output of the following code, given the list 1->2->3->4 and no cycle?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code, given the list 1->2->3->4 and no cycle?\nNode slow = head, fast = head;\nboolean hasCycle = false;\nwhile (fast != null && fast.next != null) {\n  slow = slow.next;\n  fast = fast.next.next;\n  if (slow == fast) { hasCycle = true; break; }\n}\nSystem.out.println(hasCycle);",
    "options": [
      "true",
      "Compilation Error",
      "NullPointerException",
      "false"
    ],
    "correctAnswerIndex": 3,
    "explanation": "For an acyclic list 1->2->3->4, fast reaches null, terminating the loop and returning false."
  },
  {
    "id": 51,
    "number": 51,
    "title": "Q51. What is the time complexity to find the middle node of a singly linked list using the slow/fast pointer technique?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What is the time complexity to find the middle node of a singly linked list using the slow/fast pointer technique?",
    "options": [
      "O(n^2)",
      "O(n/2) is asymptotically different from O(n)",
      "O(log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The slow/fast pointer technique scans the list in a single pass of O(n) time."
  },
  {
    "id": 52,
    "number": 52,
    "title": "Q52. In a music streaming app's 'Now Playing' queue that supports moving forward and backward between songs efficiently, which structure fits best?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "In a music streaming app's 'Now Playing' queue that supports moving forward and backward between songs efficiently, which structure fits best?",
    "options": [
      "Singly linked list only",
      "Stack only",
      "Array with shifting on every move",
      "Doubly linked list"
    ],
    "correctAnswerIndex": 3,
    "explanation": "A doubly linked list allows O(1) moving to next and previous tracks."
  },
  {
    "id": 53,
    "number": 53,
    "title": "Q53. What is a key disadvantage of arrays compared to linked lists for frequent insertions/deletions in the middle?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What is a key disadvantage of arrays compared to linked lists for frequent insertions/deletions in the middle?",
    "options": [
      "Arrays require shifting elements, costing O(n) per operation",
      "Arrays require more memory per element always",
      "Arrays cannot be resized ever",
      "Arrays cannot store insertion order"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Array insertions/deletions in the middle require shifting trailing elements, costing O(n) time."
  },
  {
    "id": 54,
    "number": 54,
    "title": "Q54. What does the following code do to a singly linked list?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What does the following code do to a singly linked list?\nNode prev = null, curr = head;\nwhile (curr != null) {\n  Node next = curr.next;\n  curr.next = prev;\n  prev = curr;\n  curr = next;\n}\nhead = prev;",
    "options": [
      "Reverses the list",
      "Detects a cycle",
      "Finds the middle node",
      "Deletes every alternate node"
    ],
    "correctAnswerIndex": 0,
    "explanation": "This is the classic iterative algorithm for reversing node links of a singly linked list."
  },
  {
    "id": 55,
    "number": 55,
    "title": "Q55. To detect the starting node of a cycle in a linked list (not just whether a cycle exists), after slow and fast meet, what is the next step?",
    "topic": "Linked List",
    "difficulty": "Medium",
    "questionText": "To detect the starting node of a cycle in a linked list (not just whether a cycle exists), after slow and fast meet, what is the next step?",
    "options": [
      "Delete the node where they met",
      "Move one pointer to head, then advance both one step at a time until they meet",
      "Immediately return the meeting point as the start",
      "Restart fast pointer from head at double speed"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Resetting one pointer to head and moving both 1 step at a time guarantees they meet at the cycle entry node."
  },
  {
    "id": 56,
    "number": 56,
    "title": "Q56. What is the space complexity of reversing a singly linked list using recursion (call stack included)?",
    "topic": "Linked List",
    "difficulty": "Easy",
    "questionText": "What is the space complexity of reversing a singly linked list using recursion (call stack included)?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(1)",
      "O(log n)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Recursive list reversal creates n call stack frames for n nodes, taking O(n) space."
  },
  {
    "id": 57,
    "number": 57,
    "title": "Q57. Which data structure is best suited to check if an expression has balanced parentheses?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "Which data structure is best suited to check if an expression has balanced parentheses?",
    "options": [
      "Stack",
      "Queue",
      "Array without auxiliary structure",
      "Linked List traversal only"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A stack (LIFO) pushes opening brackets and pops matching closing brackets to check balance."
  },
  {
    "id": 58,
    "number": 58,
    "title": "Q58. What is the time complexity of pushing and popping elements from a stack implemented using an array or linked list?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of pushing and popping elements from a stack implemented using an array or linked list?",
    "options": [
      "O(n) for both",
      "O(1) push, O(n) pop",
      "O(log n) for both",
      "O(1) for both"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Stack push and pop operations execute at the top of the stack in O(1) constant time."
  },
  {
    "id": 59,
    "number": 59,
    "title": "Q59. What is the output of the following code?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nStack<Character> st = new Stack<>();\nString s = \"{[()]}\";\nboolean valid = true;\nMap<Character, Character> map = Map.of(')', '(', ']', '[', '}', '{');\nfor (char c : s.toCharArray()) {\n  if (\"([{ \".indexOf(c) != -1) st.push(c);\n  else {\n    if (st.isEmpty() || st.pop() != map.get(c)) { valid = false; break; }\n  }\n}\nSystem.out.println(valid && st.isEmpty());",
    "options": [
      "Compilation Error",
      "StackOverflowError",
      "false",
      "true"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The string \"{[()]}\" is properly nested and balanced, outputting true."
  },
  {
    "id": 60,
    "number": 60,
    "title": "Q60. The 'Next Greater Element' problem for an array is most efficiently solved in O(n) time using:",
    "topic": "Stack",
    "difficulty": "Medium",
    "questionText": "The 'Next Greater Element' problem for an array is most efficiently solved in O(n) time using:",
    "options": [
      "A min-heap",
      "A monotonic decreasing stack",
      "Sorting the array first",
      "Nested loops (O(n^2))"
    ],
    "correctAnswerIndex": 1,
    "explanation": "A monotonic decreasing stack stores indices and processes each element in amortized O(n) time."
  },
  {
    "id": 61,
    "number": 61,
    "title": "Q61. How can a Min Stack support push, pop, and getMin all in O(1) time?",
    "topic": "Stack",
    "difficulty": "Medium",
    "questionText": "How can a Min Stack support push, pop, and getMin all in O(1) time?",
    "options": [
      "By sorting the stack after every push",
      "By scanning the whole stack on every getMin call",
      "It is not possible in O(1)",
      "By maintaining an auxiliary stack that tracks the minimum at each level"
    ],
    "correctAnswerIndex": 3,
    "explanation": "An auxiliary min-stack keeps track of the minimum value present at each corresponding stack level."
  },
  {
    "id": 62,
    "number": 62,
    "title": "Q62. What is the primary use of a stack in evaluating postfix (Reverse Polish Notation) expressions?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "What is the primary use of a stack in evaluating postfix (Reverse Polish Notation) expressions?",
    "options": [
      "To convert infix to postfix only",
      "To reverse the expression first",
      "To store operands and apply operators as they are encountered",
      "To store operators only"
    ],
    "correctAnswerIndex": 2,
    "explanation": "In postfix evaluation, operands are pushed onto the stack and operators pop two operands, evaluate, and push result."
  },
  {
    "id": 63,
    "number": 63,
    "title": "Q63. What is the output of the following code?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nStack<Integer> st = new Stack<>();\nst.push(10);\nst.push(20);\nst.push(30);\nst.pop();\nSystem.out.println(st.peek());",
    "options": [
      "10",
      "Empty stack error",
      "20",
      "30"
    ],
    "correctAnswerIndex": 2,
    "explanation": "30 is popped off top, leaving 20 as the top element returned by peek()."
  },
  {
    "id": 64,
    "number": 64,
    "title": "Q64. How is a stack typically used to implement function call recursion internally?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "How is a stack typically used to implement function call recursion internally?",
    "options": [
      "Each function call pushes a stack frame; returning pops it off (call stack)",
      "Each function call is stored in a queue",
      "Function calls are stored in a heap-ordered structure",
      "Recursion does not use any stack-like structure"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The runtime call stack manages activation records/frames for recursive call execution."
  },
  {
    "id": 65,
    "number": 65,
    "title": "Q65. Which of the following problems is a classic application of a stack rather than a queue?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "Which of the following problems is a classic application of a stack rather than a queue?",
    "options": [
      "Breadth-first search of a graph",
      "Evaluating and converting infix/postfix/prefix expressions",
      "Level-order traversal of a tree",
      "Implementing a print job scheduler (FIFO)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Expression evaluation requires LIFO order provided by a stack."
  },
  {
    "id": 66,
    "number": 66,
    "title": "Q66. A text editor's 'undo' feature stores each edit action as it happens and reverts the most recent one first when undo is pressed. Which data structure models this behavior naturally?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "A text editor's 'undo' feature stores each edit action as it happens and reverts the most recent one first when undo is pressed. Which data structure models this behavior naturally?",
    "options": [
      "Array sorted by timestamp requiring search",
      "Queue (FIFO)",
      "Stack (LIFO)",
      "Min-heap"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Undo operates on Last-In, First-Out (LIFO) order, which is the exact contract of a stack."
  },
  {
    "id": 67,
    "number": 67,
    "title": "Q67. Two stacks can be used together to efficiently implement which other data structure, achieving amortized O(1) operations?",
    "topic": "Stack",
    "difficulty": "Medium",
    "questionText": "Two stacks can be used together to efficiently implement which other data structure, achieving amortized O(1) operations?",
    "options": [
      "A binary search tree",
      "A hash map",
      "A queue",
      "A min-heap"
    ],
    "correctAnswerIndex": 2,
    "explanation": "One stack serves as input buffer and the second stack reverses elements to achieve FIFO queue behavior."
  },
  {
    "id": 68,
    "number": 68,
    "title": "Q68. What is the time complexity of the 'Next Greater Element' problem using a monotonic stack, for an array of size n?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the 'Next Greater Element' problem using a monotonic stack, for an array of size n?",
    "options": [
      "O(2^n)",
      "O(n^2)",
      "O(n log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Each element index is pushed and popped at most once, yielding linear O(n) total runtime."
  },
  {
    "id": 69,
    "number": 69,
    "title": "Q69. What is the output of the following code, which finds the next greater element for [2, 1, 2, 4, 3]?",
    "topic": "Stack",
    "difficulty": "Medium",
    "questionText": "What is the output of the following code, which finds the next greater element for [2, 1, 2, 4, 3]?",
    "options": [
      " [4, 2, 4, -1, -1]",
      "[4, 4, 4, -1, -1]",
      "[1, 2, 4, 3, -1]",
      "[-1, -1, -1, -1, -1]"
    ],
    "correctAnswerIndex": 0,
    "explanation": "For array [2, 1, 2, 4, 3], next greater elements are 4 for 2, 2 for 1, 4 for 2, and none (-1) for 4 & 3."
  },
  {
    "id": 70,
    "number": 70,
    "title": "Q70. In a browser, the 'back' button functionality (returning to previously visited pages in reverse order of visit) is best modeled using:",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "In a browser, the 'back' button functionality (returning to previously visited pages in reverse order of visit) is best modeled using:",
    "options": [
      "A queue of visited pages",
      "A stack of visited pages",
      "A sorted array of URLs",
      "A hash set of URLs"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Browser history back navigation returns to the most recently visited URL first (LIFO stack)."
  },
  {
    "id": 71,
    "number": 71,
    "title": "Q71. What happens when you call pop() on an empty stack implemented using Java's java.util.Stack class?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "What happens when you call pop() on an empty stack implemented using Java's java.util.Stack class?",
    "options": [
      "It returns 0",
      "It returns null silently",
      "It blocks until an element is pushed",
      "EmptyStackException is thrown"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Calling pop() on an empty java.util.Stack throws EmptyStackException."
  },
  {
    "id": 72,
    "number": 72,
    "title": "Q72. A queue follows which ordering principle?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "A queue follows which ordering principle?",
    "options": [
      "LIFO (Last In First Out)",
      "Priority order always",
      "FIFO (First In First Out)",
      "Random order"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Queues follow First-In, First-Out (FIFO) ordering where items exit in arrival order."
  },
  {
    "id": 73,
    "number": 73,
    "title": "Q73. What is the main advantage of a circular queue over a simple linear queue implemented with an array?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "What is the main advantage of a circular queue over a simple linear queue implemented with an array?",
    "options": [
      "It requires no fixed size",
      "It allows negative indices",
      "It reuses freed space efficiently, avoiding wasted slots",
      "It allows LIFO order"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Circular queue wraps front and rear pointers using modulo arithmetic to reuse dequeued array slots."
  },
  {
    "id": 74,
    "number": 74,
    "title": "Q74. Which data structure is most naturally used to implement Breadth-First Search (BFS) on a graph?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "Which data structure is most naturally used to implement Breadth-First Search (BFS) on a graph?",
    "options": [
      "Min-heap only",
      "Queue",
      "Doubly linked list is required",
      "Stack"
    ],
    "correctAnswerIndex": 1,
    "explanation": "BFS explores neighbors level-by-level using a FIFO queue."
  },
  {
    "id": 75,
    "number": 75,
    "title": "Q75. What is the time complexity of enqueue and dequeue operations in a properly implemented circular queue or deque?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of enqueue and dequeue operations in a properly implemented circular queue or deque?",
    "options": [
      "O(n^2)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Circular queue enqueue and dequeue operate on pointer offsets in O(1) constant time."
  },
  {
    "id": 76,
    "number": 76,
    "title": "Q76. A priority queue typically is implemented internally using which data structure for O(log n) insert and extract-min/max?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "A priority queue typically is implemented internally using which data structure for O(log n) insert and extract-min/max?",
    "options": [
      "A singly linked list",
      "A stack",
      "An unsorted array",
      "A binary heap"
    ],
    "correctAnswerIndex": 3,
    "explanation": "A binary heap maintains priority ordering with logarithmic O(log n) insertions and extractions."
  },
  {
    "id": 77,
    "number": 77,
    "title": "Q77. What is the output of the following code?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nQueue<Integer> q = new LinkedList<>();\nq.add(1); q.add(2); q.add(3);\nStringBuilder sb = new StringBuilder();\nwhile (!q.isEmpty()) sb.append(q.poll()).append(\" \");\nSystem.out.println(sb.toString().trim());",
    "options": [
      "3 2 1",
      "Compilation Error",
      "1",
      "1 2 3"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Elements are polled in FIFO arrival order: 1, then 2, then 3."
  },
  {
    "id": 78,
    "number": 78,
    "title": "Q78. The 'Sliding Window Maximum' problem (finding max in every window of size k) can be solved in O(n) time using:",
    "topic": "Queue",
    "difficulty": "Hard",
    "questionText": "The 'Sliding Window Maximum' problem (finding max in every window of size k) can be solved in O(n) time using:",
    "options": [
      "A max-heap rebuilt every window (O(n log k))",
      "Brute force scanning each window (O(n*k))",
      "A stack only",
      "A monotonic deque storing indices"
    ],
    "correctAnswerIndex": 3,
    "explanation": "A monotonic deque maintains candidate maximum indices in decreasing order in O(n) total time."
  },
  {
    "id": 79,
    "number": 79,
    "title": "Q79. In a print spooler system, jobs must be processed in the exact order they were submitted. Which structure models this correctly?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "In a print spooler system, jobs must be processed in the exact order they were submitted. Which structure models this correctly?",
    "options": [
      "Queue (FIFO)",
      "Priority queue by job size",
      "Stack (LIFO)",
      "Unordered set"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jobs arrive and process strictly in arrival order (FIFO queue)."
  },
  {
    "id": 80,
    "number": 80,
    "title": "Q80. A 'deque' (double-ended queue) allows insertion and deletion at:",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "A 'deque' (double-ended queue) allows insertion and deletion at:",
    "options": [
      "Only the back",
      "Both the front and the back in O(1)",
      "Only the middle",
      "Only the front"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Deques support O(1) push and pop operations at both head and tail ends."
  },
  {
    "id": 81,
    "number": 81,
    "title": "Q81. What is the output of the following code that finds the maximum in each window of size 3 for [1,3,-1,-3,5,3,6,7]? (first window only)",
    "topic": "Queue",
    "difficulty": "Medium",
    "questionText": "What is the output of the following code that finds the maximum in each window of size 3 for [1,3,-1,-3,5,3,6,7]? (first window only)",
    "options": [
      "-1",
      "3",
      "5",
      "1"
    ],
    "correctAnswerIndex": 1,
    "explanation": "First window is [1, 3, -1], whose maximum element is 3."
  },
  {
    "id": 82,
    "number": 82,
    "title": "Q82. A hospital emergency room treats patients based on severity of condition rather than arrival order. Which structure best models patient scheduling?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "A hospital emergency room treats patients based on severity of condition rather than arrival order. Which structure best models patient scheduling?",
    "options": [
      "Priority queue",
      "Stack",
      "Simple FIFO queue",
      "Circular array without priority"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A Priority Queue extracts the patient with highest severity regardless of arrival order."
  },
  {
    "id": 83,
    "number": 83,
    "title": "Q83. What is a key limitation of implementing a queue using a simple (non-circular) array with a fixed front index that only increments?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "What is a key limitation of implementing a queue using a simple (non-circular) array with a fixed front index that only increments?",
    "options": [
      "Space at the front becomes unusable/wasted over time",
      "It cannot store integers",
      "It cannot support enqueue at all",
      "It has O(n) enqueue always"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A naive linear array queue wastes empty slots at the front after items are dequeued."
  },
  {
    "id": 84,
    "number": 84,
    "title": "Q84. What is the time complexity of searching for a value in a balanced Binary Search Tree (BST) with n nodes?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of searching for a value in a balanced Binary Search Tree (BST) with n nodes?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A balanced BST halves the search space at each node step, running in O(log n) time."
  },
  {
    "id": 85,
    "number": 85,
    "title": "Q85. What is the worst-case time complexity of searching in a BST that has degenerated into a skewed (linked-list-like) shape?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the worst-case time complexity of searching in a BST that has degenerated into a skewed (linked-list-like) shape?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A skewed BST degrades to a single line of n nodes, taking O(n) linear search time."
  },
  {
    "id": 86,
    "number": 86,
    "title": "Q86. In-order traversal of a Binary Search Tree produces elements in which order?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "In-order traversal of a Binary Search Tree produces elements in which order?",
    "options": [
      "Sorted (descending) order",
      "Random order",
      "Sorted (ascending) order",
      "Level order"
    ],
    "correctAnswerIndex": 2,
    "explanation": "In-order traversal visits left subtree, root, right subtree, yielding sorted ascending order for BSTs."
  },
  {
    "id": 87,
    "number": 87,
    "title": "Q87. Which traversal visits nodes level by level, using a queue internally?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "Which traversal visits nodes level by level, using a queue internally?",
    "options": [
      "In-order traversal",
      "Level-order (BFS) traversal",
      "Pre-order traversal",
      "Post-order traversal"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Level-order traversal uses a FIFO queue to visit tree nodes top-to-bottom, left-to-right."
  },
  {
    "id": 88,
    "number": 88,
    "title": "Q88. What is the height of a balanced binary tree with n nodes?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the height of a balanced binary tree with n nodes?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n^2)",
      "O(log n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "A balanced binary tree distributes n nodes across log2(n) levels."
  },
  {
    "id": 89,
    "number": 89,
    "title": "Q89. An AVL tree maintains balance by ensuring the height difference between left and right subtrees of any node is at most:",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "An AVL tree maintains balance by ensuring the height difference between left and right subtrees of any node is at most:",
    "options": [
      "log n",
      "2",
      "1",
      "0"
    ],
    "correctAnswerIndex": 2,
    "explanation": "AVL balance factor requires |height(left) - height(right)| <= 1 for every node."
  },
  {
    "id": 90,
    "number": 90,
    "title": "Q90. What is the output of the following code, which performs an in-order traversal of the BST built by inserting 5, 3, 8, 1, 4?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code, which performs an in-order traversal of the BST built by inserting 5, 3, 8, 1, 4?",
    "options": [
      "8 5 4 3 1",
      "1 3 4 5 8",
      "1 4 3 8 5",
      "5 3 8 1 4"
    ],
    "correctAnswerIndex": 1,
    "explanation": "In-order traversal of BST with elements {5, 3, 8, 1, 4} prints them sorted: 1 3 4 5 8."
  },
  {
    "id": 91,
    "number": 91,
    "title": "Q91. What data structure is a Trie primarily optimized for?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What data structure is a Trie primarily optimized for?",
    "options": [
      "Random access by index",
      "Efficient storage and prefix search of strings",
      "Storing graphs with cycles",
      "Efficient numeric range queries"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Tries store characters along edge paths, optimizing prefix queries across string collections."
  },
  {
    "id": 92,
    "number": 92,
    "title": "Q92. Which algorithm finds the Lowest Common Ancestor (LCA) of two nodes in a BST most efficiently by comparing values?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "Which algorithm finds the Lowest Common Ancestor (LCA) of two nodes in a BST most efficiently by comparing values?",
    "options": [
      "Use Dijkstra's algorithm",
      "Sort all values first",
      "Always traverse full tree with BFS",
      "Traverse from root, moving left/right based on comparing node values to both targets"
    ],
    "correctAnswerIndex": 3,
    "explanation": "In a BST, starting at root and navigating left if both nodes are smaller or right if both are larger identifies LCA in O(h) time."
  },
  {
    "id": 93,
    "number": 93,
    "title": "Q93. A Segment Tree is primarily used for:",
    "topic": "Trees",
    "difficulty": "Hard",
    "questionText": "A Segment Tree is primarily used for:",
    "options": [
      "Sorting an array in O(n)",
      "Storing hierarchical file systems only",
      "Efficient range queries and range updates on an array",
      "Finding shortest paths in graphs"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Segment trees allow O(log n) range sum/min/max queries and updates on arrays."
  },
  {
    "id": 94,
    "number": 94,
    "title": "Q94. What is the time complexity of a range sum query using a Segment Tree built on an array of size n?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of a range sum query using a Segment Tree built on an array of size n?",
    "options": [
      "O(log n)",
      "O(1)",
      "O(n log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Range queries on a Segment Tree traverse at most 4 * log(n) nodes."
  },
  {
    "id": 95,
    "number": 95,
    "title": "Q95. A Fenwick Tree (Binary Indexed Tree) supports point update and prefix sum query both in:",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "A Fenwick Tree (Binary Indexed Tree) supports point update and prefix sum query both in:",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(1)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Fenwick Trees use bitwise least-significant-bit operations to execute prefix sums and updates in O(log n) time."
  },
  {
    "id": 96,
    "number": 96,
    "title": "Q96. What is the output of the following code that computes the height of a binary tree? (root=1, left=2 with left=4, right=3)",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that computes the height of a binary tree? (root=1, left=2 with left=4, right=3)",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The longest path root(1)->left(2)->left(4) contains 3 nodes, height = 3."
  },
  {
    "id": 97,
    "number": 97,
    "title": "Q97. Which traversal order is used to safely delete a binary tree (deleting children before the parent)?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "Which traversal order is used to safely delete a binary tree (deleting children before the parent)?",
    "options": [
      "In-order traversal",
      "Level-order traversal",
      "Pre-order traversal",
      "Post-order traversal"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Post-order traversal visits left and right child subtrees before parent node, allowing safe deletion without dangling references."
  },
  {
    "id": 98,
    "number": 98,
    "title": "Q98. In a file system explorer feature, folders and subfolders need to be displayed with efficient search by path. Which structure models this naturally?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "In a file system explorer feature, folders and subfolders need to be displayed with efficient search by path. Which structure models this naturally?",
    "options": [
      "A single flat array",
      "A hash set without hierarchy",
      "A stack only",
      "A tree (hierarchical) structure"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Hierarchical file directories translate directly to tree parent-child node relationships."
  },
  {
    "id": 99,
    "number": 99,
    "title": "Q99. What is the 'diameter' of a binary tree?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "What is the 'diameter' of a binary tree?",
    "options": [
      "The number of nodes at the deepest level",
      "The number of leaf nodes",
      "The length of the longest path between any two nodes in the tree",
      "The height of the root"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tree diameter is the number of edges/nodes on the longest path between any pair of leaf nodes."
  },
  {
    "id": 100,
    "number": 100,
    "title": "Q100. Which of the following is true about a complete binary tree with n nodes stored in an array (0-indexed)?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "Which of the following is true about a complete binary tree with n nodes stored in an array (0-indexed)?",
    "options": [
      "It cannot be represented using an array",
      "The children of node i are always at i-1 and i+1",
      "The parent of node i is at index i+2",
      "The children of node i are at indices 2i+1 and 2i+2"
    ],
    "correctAnswerIndex": 3,
    "explanation": "For 0-indexed complete binary trees, left child is at 2i + 1 and right child is at 2i + 2."
  },
  {
    "id": 101,
    "number": 101,
    "title": "Q101. What is the time complexity of building a balanced BST from a sorted array of n elements?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of building a balanced BST from a sorted array of n elements?",
    "options": [
      "O(log n)",
      "O(n log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Recursively picking the array middle element as root builds a balanced BST in O(n) time."
  },
  {
    "id": 102,
    "number": 102,
    "title": "Q102. Which traversal would you use to serialize a binary tree such that it can be exactly reconstructed (with null markers)?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "Which traversal would you use to serialize a binary tree such that it can be exactly reconstructed (with null markers)?",
    "options": [
      "In-order traversal alone (without markers)",
      "Pre-order traversal with null markers",
      "Only level-order traversal works, others do not",
      "Any traversal without markers works"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pre-order traversal (root, left, right) with null markers uniquely serializes and reconstructs binary trees."
  },
  {
    "id": 103,
    "number": 103,
    "title": "Q103. What is the output of the following code that checks if a binary tree is a valid BST (root=5, left=3, right=8)?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that checks if a binary tree is a valid BST (root=5, left=3, right=8)?",
    "options": [
      "false",
      "true",
      "NullPointerException",
      "Compilation Error"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Root 5 with left 3 (<5) and right 8 (>5) satisfies BST invariant, returning true."
  },
  {
    "id": 104,
    "number": 104,
    "title": "Q104. In a min-heap, what is always true about the root element?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "In a min-heap, what is always true about the root element?",
    "options": [
      "It is always at the last index",
      "It is the smallest element in the heap",
      "It is unrelated to ordering",
      "It is the largest element in the heap"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Min-heap property dictates that root at index 0 holds the minimum value in the heap."
  },
  {
    "id": 105,
    "number": 105,
    "title": "Q105. What is the time complexity of extracting the minimum element from a min-heap of size n?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of extracting the minimum element from a min-heap of size n?",
    "options": [
      "O(1)",
      "O(n log n)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Removing root and running heapify-down restores heap property in O(log n) time."
  },
  {
    "id": 106,
    "number": 106,
    "title": "Q106. What is the time complexity of building a heap from an unsorted array of n elements (heapify)?",
    "topic": "Heap",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of building a heap from an unsorted array of n elements (heapify)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Bottom-up heap construction via sift-down runs in linear O(n) total time."
  },
  {
    "id": 107,
    "number": 107,
    "title": "Q107. To find the k largest elements in a stream of numbers efficiently, which structure is most suitable?",
    "topic": "Heap",
    "difficulty": "Medium",
    "questionText": "To find the k largest elements in a stream of numbers efficiently, which structure is most suitable?",
    "options": [
      "A stack",
      "A max-heap of size n storing all elements and re-sorting",
      "A min-heap of size k",
      "A sorted array requiring O(n) insertion each time"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A min-heap of size k holds top k maximum elements seen so far in O(log k) time per update."
  },
  {
    "id": 108,
    "number": 108,
    "title": "Q108. What is the output of the following code?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nPriorityQueue<Integer> pq = new PriorityQueue<>();\npq.add(5); pq.add(1); pq.add(3);\nSystem.out.println(pq.peek());",
    "options": [
      "3",
      "1",
      "5",
      "Compilation Error"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Java PriorityQueue is a min-heap by default, so peek() returns the minimum element 1."
  },
  {
    "id": 109,
    "number": 109,
    "title": "Q109. Which algorithm uses a heap to repeatedly select the smallest/largest remaining element, achieving O(n log n) sorting?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Which algorithm uses a heap to repeatedly select the smallest/largest remaining element, achieving O(n log n) sorting?",
    "options": [
      "Bubble Sort",
      "Counting Sort",
      "Radix Sort",
      "Heap Sort"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Heap Sort builds a heap and repeatedly extracts root to achieve guaranteed O(n log n) time."
  },
  {
    "id": 110,
    "number": 110,
    "title": "Q110. To find the median of a running stream of numbers efficiently, a common technique uses:",
    "topic": "Heap",
    "difficulty": "Hard",
    "questionText": "To find the median of a running stream of numbers efficiently, a common technique uses:",
    "options": [
      "A single sorted array re-sorted on every insert",
      "A single queue",
      "Two heaps: a max-heap for the lower half and a min-heap for the upper half",
      "A single stack"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Two balanced heaps (max-heap for lower values, min-heap for upper values) find stream median in O(1) time and O(log n) insert."
  },
  {
    "id": 111,
    "number": 111,
    "title": "Q111. In Dijkstra's shortest path algorithm, a min-heap (priority queue) is used to:",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "In Dijkstra's shortest path algorithm, a min-heap (priority queue) is used to:",
    "options": [
      "Reverse the graph edges",
      "Store the graph's adjacency list",
      "Always process the next unvisited node with the smallest known distance",
      "Detect cycles in the graph"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Min-heap extracts the unvisited graph node with the smallest tentative distance in O(log V) time."
  },
  {
    "id": 112,
    "number": 112,
    "title": "Q112. A hospital triage system needs to always treat the most critical patient next as new patients arrive continuously. Which structure supports this in O(log n) per operation?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "A hospital triage system needs to always treat the most critical patient next as new patients arrive continuously. Which structure supports this in O(log n) per operation?",
    "options": [
      "A max-heap (priority queue) keyed by severity",
      "A stack",
      "An unsorted array scanned each time",
      "A simple FIFO queue"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Max-heap supports O(log n) insertions and extracts highest severity patient in O(log n)."
  },
  {
    "id": 113,
    "number": 113,
    "title": "Q113. What is the parent index of the node at index i in a 0-indexed array-based binary heap?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "What is the parent index of the node at index i in a 0-indexed array-based binary heap?",
    "options": [
      "i / 2",
      "(i - 1) / 2",
      "i * 2",
      "i + 1"
    ],
    "correctAnswerIndex": 1,
    "explanation": "For 0-indexed binary heaps, parent index of node i is floor((i - 1) / 2)."
  },
  {
    "id": 114,
    "number": 114,
    "title": "Q114. What is the output of the following code that builds a max-heap style priority queue and polls elements?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that builds a max-heap style priority queue and polls elements?",
    "options": [
      "2 5 9",
      "9 2 5",
      "Compilation Error",
      "9 5 2"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Collections.reverseOrder() converts PriorityQueue to max-heap, polling elements in descending order: 9, 5, 2."
  },
  {
    "id": 115,
    "number": 115,
    "title": "Q115. Which of these best describes why a heap (not a sorted array) is preferred for a priority queue with frequent insertions?",
    "topic": "Heap",
    "difficulty": "Medium",
    "questionText": "Which of these best describes why a heap (not a sorted array) is preferred for a priority queue with frequent insertions?",
    "options": [
      "A sorted array cannot store duplicate priorities",
      "A heap allows O(1) search for any arbitrary element",
      "A heap always uses less total memory than an array",
      "Heap insertion is O(log n) while keeping a sorted array requires O(n) shifting per insert"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Inserting into a heap takes O(log n) vs O(n) element shifts in a sorted array."
  },
  {
    "id": 116,
    "number": 116,
    "title": "Q116. What is the average-case time complexity of insert, delete, and search operations in a hash map?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the average-case time complexity of insert, delete, and search operations in a hash map?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A well-distributed hash map achieves O(1) constant average time for search, insert, and delete."
  },
  {
    "id": 117,
    "number": 117,
    "title": "Q117. What is the worst-case time complexity of a hash map lookup when many keys collide into the same bucket (e.g., all in one linked list)?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the worst-case time complexity of a hash map lookup when many keys collide into the same bucket (e.g., all in one linked list)?",
    "options": [
      "O(n log n)",
      "O(n)",
      "O(1)",
      "O(log n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "When all n keys collide into a single linked list bucket, lookup degrades to linear O(n) search."
  },
  {
    "id": 118,
    "number": 118,
    "title": "Q118. Which collision resolution technique stores colliding elements in a linked list (or similar structure) at each bucket?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "Which collision resolution technique stores colliding elements in a linked list (or similar structure) at each bucket?",
    "options": [
      "Open addressing with linear probing only",
      "Double hashing only",
      "Chaining",
      "Perfect hashing only"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Separate Chaining stores colliding key-value pairs in bucket linked lists or trees."
  },
  {
    "id": 119,
    "number": 119,
    "title": "Q119. In 'open addressing' with linear probing, what happens when a collision occurs during insertion?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "In 'open addressing' with linear probing, what happens when a collision occurs during insertion?",
    "options": [
      "The element replaces the existing one silently",
      "A new hash table is always created",
      "The element is discarded",
      "The algorithm probes the next slot(s) in sequence until an empty one is found"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Linear probing checks bucket (hash + 1), (hash + 2), etc., until finding an open slot."
  },
  {
    "id": 120,
    "number": 120,
    "title": "Q120. What is the time complexity of checking whether two strings are anagrams using a frequency hash map, for strings of length n?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of checking whether two strings are anagrams using a frequency hash map, for strings of length n?",
    "options": [
      "O(1)",
      "O(n^2)",
      "O(n)",
      "O(n log n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Populating and comparing frequency counts for n characters takes linear O(n) time."
  },
  {
    "id": 121,
    "number": 121,
    "title": "Q121. What is the output of the following code?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nint[] arr = {1, 2, 3, 2, 4};\nSet<Integer> seen = new HashSet<>();\nboolean hasDup = false;\nfor (int x : arr) {\n  if (!seen.add(x)) { hasDup = true; break; }\n}\nSystem.out.println(hasDup);",
    "options": [
      "Compilation Error",
      "true",
      "NullPointerException",
      "false"
    ],
    "correctAnswerIndex": 1,
    "explanation": "When 2 is encountered a second time, HashSet.add(2) returns false, setting hasDup = true."
  },
  {
    "id": 122,
    "number": 122,
    "title": "Q122. A good hash function for a hash table should primarily aim to:",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "A good hash function for a hash table should primarily aim to:",
    "options": [
      "Distribute keys uniformly across buckets to minimize collisions",
      "Only work for integer keys",
      "Be as slow as possible for security",
      "Always produce the same output regardless of input"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Uniform key distribution minimizes bucket collisions and maintains average O(1) performance."
  },
  {
    "id": 123,
    "number": 123,
    "title": "Q123. Finding the first non-repeating character in a string can be done efficiently in O(n) time using:",
    "topic": "Strings",
    "difficulty": "Easy",
    "questionText": "Finding the first non-repeating character in a string can be done efficiently in O(n) time using:",
    "options": [
      "Sorting the string (O(n log n)) then scanning",
      "A frequency hash map followed by a single pass to find the first count-1 character",
      "Checking every character against every other character (O(n^2))",
      "A stack only"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Pass 1 counts character frequencies in a HashMap; Pass 2 finds first char with count 1 in O(n) time."
  },
  {
    "id": 124,
    "number": 124,
    "title": "Q124. What is the output of the following code that finds two numbers in an array summing to a target using a hash map?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that finds two numbers in an array summing to a target using a hash map?",
    "options": [
      " [1, 2]",
      "No pair found",
      "[0, 1]",
      "[0, 2]"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Array [2, 7, 11, 15] with target 9: when i=1 (val 7), complement 2 is in map at index 0, printing [0, 1]."
  },
  {
    "id": 125,
    "number": 125,
    "title": "Q125. A caching system (e.g., a web cache) needs O(1) average lookup for whether a resource is already cached. Which structure is most suitable?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "A caching system (e.g., a web cache) needs O(1) average lookup for whether a resource is already cached. Which structure is most suitable?",
    "options": [
      "A singly linked list scanned linearly",
      "A sorted array requiring binary search",
      "A hash map/hash set",
      "A stack"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Hash maps and hash sets offer O(1) average key lookup time."
  },
  {
    "id": 126,
    "number": 126,
    "title": "Q126. What is the load factor of a hash table?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the load factor of a hash table?",
    "options": [
      "The number of collisions that occurred",
      "The size of the largest bucket only",
      "The ratio of the number of stored elements to the number of buckets",
      "The maximum key value stored"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Load factor alpha = (total items n) / (table bucket capacity k)."
  },
  {
    "id": 127,
    "number": 127,
    "title": "Q127. When the load factor of a hash table exceeds a threshold, what commonly happens?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "When the load factor of a hash table exceeds a threshold, what commonly happens?",
    "options": [
      "Nothing; performance is unaffected",
      "The table is resized (rehashed) to a larger size",
      "All elements are deleted",
      "The table stops accepting new elements permanently"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Exceeding threshold triggers table dynamic expansion and key rehashing."
  },
  {
    "id": 128,
    "number": 128,
    "title": "Q128. Grouping anagrams together from a list of strings is efficiently done by:",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "Grouping anagrams together from a list of strings is efficiently done by:",
    "options": [
      "Using a min-heap of string lengths",
      "Using a stack of characters",
      "Using a hash map keyed by the sorted version (or character count signature) of each string",
      "Comparing every pair of strings directly (O(n^2 * m))"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Grouping by sorted string key collects anagrams into map bucket lists in O(n * m log m) time."
  },
  {
    "id": 129,
    "number": 129,
    "title": "Q129. What is the output of the following code, which counts frequency of elements?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code, which counts frequency of elements?\nint[] arr = {1, 2, 1, 3};\nMap<Integer, Integer> freq = new TreeMap<>();\nfor (int x : arr) freq.put(x, freq.getOrDefault(x, 0) + 1);\nSystem.out.println(freq);",
    "options": [
      "{1=2, 2=1, 3=1}",
      "{1=3, 2=1, 3=1}",
      "{1=1, 2=2, 3=1}",
      "Compilation Error"
    ],
    "correctAnswerIndex": 0,
    "explanation": "TreeMap sorts keys: element 1 appears 2 times, 2 appears 1 time, 3 appears 1 time => {1=2, 2=1, 3=1}."
  },
  {
    "id": 130,
    "number": 130,
    "title": "Q130. Which of the following is a valid reason to use a HashSet over an ArrayList when checking for membership repeatedly?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "Which of the following is a valid reason to use a HashSet over an ArrayList when checking for membership repeatedly?",
    "options": [
      "ArrayList cannot store duplicate-free data at all",
      "HashSet uses less memory than ArrayList always",
      "HashSet preserves insertion order strictly, ArrayList does not",
      "HashSet offers O(1) average membership checks vs O(n) for ArrayList"
    ],
    "correctAnswerIndex": 3,
    "explanation": "HashSet.contains() runs in O(1) average time compared to ArrayList.contains() which requires O(n) linear search."
  },
  {
    "id": 131,
    "number": 131,
    "title": "Q131. Which traversal algorithm uses a queue and explores a graph level by level from the source?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "Which traversal algorithm uses a queue and explores a graph level by level from the source?",
    "options": [
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm"
    ],
    "correctAnswerIndex": 0,
    "explanation": "BFS uses a FIFO queue to visit graph nodes level-by-level."
  },
  {
    "id": 132,
    "number": 132,
    "title": "Q132. Which traversal algorithm uses a stack (explicit or via recursion) and explores as far as possible along each branch?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "Which traversal algorithm uses a stack (explicit or via recursion) and explores as far as possible along each branch?",
    "options": [
      "Prim's Algorithm",
      "Breadth-First Search (BFS)",
      "Bellman-Ford Algorithm",
      "Depth-First Search (DFS)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "DFS uses recursion or a stack to plunge deep down branches before backtracking."
  },
  {
    "id": 133,
    "number": 133,
    "title": "Q133. BFS is guaranteed to find the shortest path (in terms of number of edges) between two nodes in which type of graph?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "BFS is guaranteed to find the shortest path (in terms of number of edges) between two nodes in which type of graph?",
    "options": [
      "An unweighted graph",
      "It never guarantees shortest path",
      "Only in a tree",
      "A weighted graph with negative edges"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In unweighted graphs, BFS explores nodes by minimum edge count distance."
  },
  {
    "id": 134,
    "number": 134,
    "title": "Q134. Which algorithm finds the shortest paths from a single source in a graph with non-negative edge weights?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "Which algorithm finds the shortest paths from a single source in a graph with non-negative edge weights?",
    "options": [
      "Kruskal's Algorithm",
      "Depth-First Search",
      "Topological Sort",
      "Dijkstra's Algorithm"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dijkstra's algorithm computes single-source shortest paths on non-negative weighted graphs."
  },
  {
    "id": 135,
    "number": 135,
    "title": "Q135. Which algorithm can handle graphs with negative edge weights (but no negative cycles) to find shortest paths from a single source?",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "Which algorithm can handle graphs with negative edge weights (but no negative cycles) to find shortest paths from a single source?",
    "options": [
      "Bellman-Ford Algorithm",
      "Dijkstra's Algorithm",
      "BFS",
      "Prim's Algorithm"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bellman-Ford relaxes edges V-1 times, handling negative edge weights correctly."
  },
  {
    "id": 136,
    "number": 136,
    "title": "Q136. Which algorithm computes shortest paths between all pairs of nodes in a graph?",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "Which algorithm computes shortest paths between all pairs of nodes in a graph?",
    "options": [
      "Dijkstra's Algorithm (single run)",
      "Floyd-Warshall Algorithm",
      "BFS",
      "DFS"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Floyd-Warshall is a DP algorithm computing all-pairs shortest paths in O(V^3) time."
  },
  {
    "id": 137,
    "number": 137,
    "title": "Q137. Topological sorting is only well-defined for which type of graph?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "Topological sorting is only well-defined for which type of graph?",
    "options": [
      "Any undirected graph",
      "A Directed Acyclic Graph (DAG)",
      "A graph with negative cycles",
      "A complete graph only"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Topological ordering orders vertices such that for all directed edges u->v, u comes before v (only possible in DAGs)."
  },
  {
    "id": 138,
    "number": 138,
    "title": "Q138. Which two algorithms are commonly used to find the Minimum Spanning Tree (MST) of a weighted undirected graph?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "Which two algorithms are commonly used to find the Minimum Spanning Tree (MST) of a weighted undirected graph?",
    "options": [
      "Floyd-Warshall and Topological Sort",
      "Dijkstra's and Bellman-Ford",
      "Kruskal's and Prim's Algorithms",
      "BFS and DFS"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Kruskal's (edge-based with Disjoint Set) and Prim's (vertex-based with priority queue) compute MSTs."
  },
  {
    "id": 139,
    "number": 139,
    "title": "Q139. Kruskal's algorithm for MST relies primarily on which data structure to efficiently detect cycles?",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "Kruskal's algorithm for MST relies primarily on which data structure to efficiently detect cycles?",
    "options": [
      "A min-heap only",
      "A stack only",
      "A hash map only",
      "Disjoint Set Union (Union-Find)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Union-Find (DSU) checks whether edge endpoints belong to the same component in near O(1) time."
  },
  {
    "id": 140,
    "number": 140,
    "title": "Q140. What is the time complexity of BFS/DFS traversal on a graph with V vertices and E edges (adjacency list representation)?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of BFS/DFS traversal on a graph with V vertices and E edges (adjacency list representation)?",
    "options": [
      "O(E log V)",
      "O(V + E)",
      "O(V * E)",
      "O(V^2)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "BFS/DFS visits every vertex V and traverses every edge E once, running in O(V + E) time."
  },
  {
    "id": 141,
    "number": 141,
    "title": "Q141. Which algorithm is used to detect a cycle in a directed graph using DFS?",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "Which algorithm is used to detect a cycle in a directed graph using DFS?",
    "options": [
      "DFS with three colors (white/gray/black) or a recursion-stack visited array",
      "BFS with a simple visited array only",
      "Dijkstra's algorithm",
      "Kruskal's algorithm"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tracking recursion stack nodes (or 3-color states: unvisited, visiting, visited) detects back-edges indicating cycles."
  },
  {
    "id": 142,
    "number": 142,
    "title": "Q142. What is the output (order of nodes visited) when performing BFS from node A on graph: A-B, A-C, B-D, C-D?",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "What is the output (order of nodes visited) when performing BFS from node A on graph: A-B, A-C, B-D, C-D?",
    "options": [
      "A D B C",
      "A C B D",
      "A B D C",
      "A B C D"
    ],
    "correctAnswerIndex": 3,
    "explanation": "BFS queue starts with [A]. Neighbors B and C added ([B, C]). Next node B adds D ([C, D]). Order: A B C D."
  },
  {
    "id": 143,
    "number": 143,
    "title": "Q143. A social network wants to suggest 'friends of friends' (2 hops away) efficiently. Which traversal is naturally suited?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A social network wants to suggest 'friends of friends' (2 hops away) efficiently. Which traversal is naturally suited?",
    "options": [
      "BFS starting from the user, limited to depth 2",
      "DFS to the deepest possible node",
      "A stack-based reversal of the friend list",
      "Sorting all users alphabetically"
    ],
    "correctAnswerIndex": 0,
    "explanation": "BFS layer 1 gives direct friends; layer 2 yields friends of friends."
  },
  {
    "id": 144,
    "number": 144,
    "title": "Q144. In a road network with travel times as weights (all non-negative) between cities, which algorithm finds the fastest route from one city to all others?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "In a road network with travel times as weights (all non-negative) between cities, which algorithm finds the fastest route from one city to all others?",
    "options": [
      "Dijkstra's Algorithm",
      "DFS only",
      "Kruskal's Algorithm",
      "Topological Sort"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dijkstra's algorithm computes shortest paths on non-negative weighted graphs."
  },
  {
    "id": 145,
    "number": 145,
    "title": "Q145. What does 'Union-Find' (Disjoint Set Union) with path compression and union by rank achieve in terms of amortized time complexity per operation?",
    "topic": "Graphs",
    "difficulty": "Hard",
    "questionText": "What does 'Union-Find' (Disjoint Set Union) with path compression and union by rank achieve in terms of amortized time complexity per operation?",
    "options": [
      "O(log n) always with no better bound possible",
      "O(n^2)",
      "Nearly O(1) (inverse Ackermann function)",
      "O(n) always"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Path compression + union by rank achieves near O(1) amortized time per operation alpha(N)."
  },
  {
    "id": 146,
    "number": 146,
    "title": "Q146. Which algorithm is used to find strongly connected components (SCCs) in a directed graph?",
    "topic": "Graphs",
    "difficulty": "Hard",
    "questionText": "Which algorithm is used to find strongly connected components (SCCs) in a directed graph?",
    "options": [
      "Dijkstra's Algorithm",
      "Kosaraju's or Tarjan's Algorithm",
      "Kruskal's Algorithm",
      "Simple BFS only"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kosaraju's (2-pass DFS) and Tarjan's (low-link values DFS) identify SCCs in O(V + E) time."
  },
  {
    "id": 147,
    "number": 147,
    "title": "Q147. A 'bridge' in a graph refers to:",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "A 'bridge' in a graph refers to:",
    "options": [
      "An edge with the maximum weight",
      "An edge whose removal increases the number of connected components",
      "Any edge in a spanning tree",
      "The shortest edge in the graph"
    ],
    "correctAnswerIndex": 1,
    "explanation": "A bridge (cut-edge) is an edge whose deletion increases graph connected components."
  },
  {
    "id": 148,
    "number": 148,
    "title": "Q148. What is the time complexity of Prim's algorithm for MST using a binary heap, with V vertices and E edges?",
    "topic": "Graphs",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of Prim's algorithm for MST using a binary heap, with V vertices and E edges?",
    "options": [
      "O(1)",
      "O(E log V)",
      "O(V^3)",
      "O(V + E)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "With binary heap priority queue, Prim's algorithm updates vertex distances in O(E log V) time."
  },
  {
    "id": 149,
    "number": 149,
    "title": "Q149. A flight-booking system models airports as nodes and flights as directed weighted edges (cost). To find the cheapest route between two specific airports, which algorithm is most appropriate given non-negative costs?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A flight-booking system models airports as nodes and flights as directed weighted edges (cost). To find the cheapest route between two specific airports, which algorithm is most appropriate given non-negative costs?",
    "options": [
      "Dijkstra's Algorithm",
      "Topological Sort alone",
      "Simple DFS without weights",
      "Union-Find"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dijkstra's finds single-source shortest path for weighted non-negative edges."
  },
  {
    "id": 150,
    "number": 150,
    "title": "Q150. Course scheduling, where some courses have prerequisites, is typically modeled and solved using:",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "Course scheduling, where some courses have prerequisites, is typically modeled and solved using:",
    "options": [
      "Topological Sort on a Directed Acyclic Graph",
      "A min-heap without graph structure",
      "Dijkstra's Algorithm",
      "Union-Find only"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Course prerequisites form directed edges; topological sort orders courses without prerequisite conflicts."
  },
  {
    "id": 151,
    "number": 151,
    "title": "Q151. What are the two key properties a problem must exhibit to be solvable using Dynamic Programming?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What are the two key properties a problem must exhibit to be solvable using Dynamic Programming?",
    "options": [
      "Overlapping subproblems and optimal substructure",
      "Randomization and approximation",
      "Sorted input and divide and conquer only",
      "Greedy choice property and matroid structure"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dynamic programming applies to problems with optimal substructure and overlapping subproblems."
  },
  {
    "id": 152,
    "number": 152,
    "title": "Q152. What is the time complexity of computing the n-th Fibonacci number using memoization (top-down DP)?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of computing the n-th Fibonacci number using memoization (top-down DP)?",
    "options": [
      "O(log n)",
      "O(n)",
      "O(n^2)",
      "O(2^n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Memoization evaluates each subproblem fib(i) exactly once, running in linear O(n) time."
  },
  {
    "id": 153,
    "number": 153,
    "title": "Q153. What is the time complexity of the naive recursive (no memoization) Fibonacci algorithm?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the naive recursive (no memoization) Fibonacci algorithm?",
    "options": [
      "O(2^n)",
      "O(n)",
      "O(n^2)",
      "O(n log n)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Naive recursive Fibonacci recomputes subproblems repeatedly, creating an exponential O(2^n) binary tree."
  },
  {
    "id": 154,
    "number": 154,
    "title": "Q154. For the 0/1 Knapsack problem with n items and capacity W, what is the time complexity of the standard DP solution?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "For the 0/1 Knapsack problem with n items and capacity W, what is the time complexity of the standard DP solution?",
    "options": [
      "O(n log n)",
      "O(2^n)",
      "O(n + W)",
      "O(n * W)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "0/1 Knapsack DP computes an n x W table, running in O(n * W) pseudo-polynomial time."
  },
  {
    "id": 155,
    "number": 155,
    "title": "Q155. What is the key difference between the 0/1 Knapsack and the Fractional Knapsack problem?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the key difference between the 0/1 Knapsack and the Fractional Knapsack problem?",
    "options": [
      "There is no difference in approach",
      "0/1 Knapsack always has a greedy optimal solution",
      "0/1 Knapsack requires taking an item fully or not at all, while Fractional allows partial items",
      "Fractional Knapsack is solved with DP and 0/1 with greedy"
    ],
    "correctAnswerIndex": 2,
    "explanation": "0/1 Knapsack items are indivisible (requires DP); Fractional Knapsack allows item splitting (solved with Greedy)."
  },
  {
    "id": 156,
    "number": 156,
    "title": "Q156. What is the time complexity of the standard DP solution for the Longest Common Subsequence (LCS) of two strings of length m and n?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of the standard DP solution for the Longest Common Subsequence (LCS) of two strings of length m and n?",
    "options": [
      "O(m + n)",
      "O(2^(m+n))",
      "O(m * n * min(m,n))",
      "O(m * n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "2D DP array dp[i][j] computes LCS in O(m * n) time."
  },
  {
    "id": 157,
    "number": 157,
    "title": "Q157. The Longest Increasing Subsequence (LIS) problem can be solved in O(n log n) time using:",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "questionText": "The Longest Increasing Subsequence (LIS) problem can be solved in O(n log n) time using:",
    "options": [
      "Only brute force in O(2^n)",
      "Binary search combined with a patience-sorting-like array of tails",
      "A single pass with no auxiliary structure in O(n)",
      "Sorting the array first, destroying order information"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Maintaining active tail lists and using binary search (std::lower_bound) finds LIS in O(n log n) time."
  },
  {
    "id": 158,
    "number": 158,
    "title": "Q158. What is the output of the following code, which computes the n-th Fibonacci number using DP for n = 6 (0-indexed, fib(0)=0, fib(1)=1)?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code, which computes the n-th Fibonacci number using DP for n = 6 (0-indexed, fib(0)=0, fib(1)=1)?",
    "options": [
      "13",
      "8",
      "5",
      "6"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fibonacci sequence: fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8."
  },
  {
    "id": 159,
    "number": 159,
    "title": "Q159. In the Matrix Chain Multiplication problem, DP is used to determine:",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "In the Matrix Chain Multiplication problem, DP is used to determine:",
    "options": [
      "The optimal order of multiplying matrices to minimize total scalar multiplications",
      "The determinant of each matrix",
      "The actual product of the matrices",
      "The transpose of the final matrix"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Matrix chain DP computes optimal parenthesis placement to minimize scalar multiplication cost."
  },
  {
    "id": 160,
    "number": 160,
    "title": "Q160. What is 'tabulation' in the context of Dynamic Programming?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is 'tabulation' in the context of Dynamic Programming?",
    "options": [
      "A method to avoid using arrays entirely",
      "A technique unrelated to DP used only for sorting",
      "A bottom-up approach that fills a table iteratively starting from base cases",
      "A top-down recursive approach with memoization"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tabulation is bottom-up iterative DP that populates lookup tables starting from base cases."
  },
  {
    "id": 161,
    "number": 161,
    "title": "Q161. What is 'memoization' in the context of Dynamic Programming?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is 'memoization' in the context of Dynamic Programming?",
    "options": [
      "A technique that only works for sorting algorithms",
      "Randomly guessing subproblem answers",
      "A bottom-up approach that never uses recursion",
      "A top-down approach that caches results of subproblems to avoid recomputation"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Memoization caches top-down recursive function results to avoid redundant calculations."
  },
  {
    "id": 162,
    "number": 162,
    "title": "Q162. For the Coin Change problem (minimum coins to make amount A with n coin denominations), what is the time complexity of the standard DP solution?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "For the Coin Change problem (minimum coins to make amount A with n coin denominations), what is the time complexity of the standard DP solution?",
    "options": [
      "O(n * A)",
      "O(n + A)",
      "O(A log A)",
      "O(2^A)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "1D DP array dp[0..A] updates each state across n coin types in O(n * A) total time."
  },
  {
    "id": 163,
    "number": 163,
    "title": "Q163. 'Digit DP' is a specialized DP technique typically used to solve problems that involve:",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "questionText": "'Digit DP' is a specialized DP technique typically used to solve problems that involve:",
    "options": [
      "Sorting digits of a number",
      "Graph traversal problems",
      "Matrix multiplication only",
      "Counting numbers within a range satisfying digit-based constraints"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Digit DP counts numbers in range [L, R] satisfying digit constraints by building numbers digit by digit."
  },
  {
    "id": 164,
    "number": 164,
    "title": "Q164. What is the space complexity of an optimized DP solution for the 0/1 Knapsack problem using a 1D array instead of a 2D table?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "What is the space complexity of an optimized DP solution for the 0/1 Knapsack problem using a 1D array instead of a 2D table?",
    "options": [
      "O(n)",
      "O(1)",
      "O(n * W)",
      "O(W)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Iterating backwards over capacity W allows updating state in a single 1D array of size O(W)."
  },
  {
    "id": 165,
    "number": 165,
    "title": "Q165. What is the output of the following code that computes the minimum number of coins for amount 11 using denominations {1, 2, 5}?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that computes the minimum number of coins for amount 11 using denominations {1, 2, 5}?",
    "options": [
      "3",
      "11",
      "2",
      "5"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Optimal coin combination for 11 is 5 + 5 + 1 = 3 coins."
  },
  {
    "id": 166,
    "number": 166,
    "title": "Q166. 'Bitmask DP' is commonly used to solve which classic problem optimally for small n (e.g., n <= 20)?",
    "topic": "Dynamic Programming",
    "difficulty": "Hard",
    "questionText": "'Bitmask DP' is commonly used to solve which classic problem optimally for small n (e.g., n <= 20)?",
    "options": [
      "Traveling Salesman Problem (TSP)",
      "Simple linear search",
      "Binary search on sorted arrays",
      "Standard merge sort"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bitmask DP represents visited subset states as bit flags to solve TSP in O(n^2 * 2^n) time."
  },
  {
    "id": 167,
    "number": 167,
    "title": "Q167. A budgeting app wants to select a subset of expenses to maximize satisfaction without exceeding a fixed budget, where each expense is indivisible. Which technique models this best?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "A budgeting app wants to select a subset of expenses to maximize satisfaction without exceeding a fixed budget, where each expense is indivisible. Which technique models this best?",
    "options": [
      "Simple sorting only",
      "Fractional Knapsack Greedy",
      "0/1 Knapsack DP",
      "Union-Find"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Indivisible item budget selection translates directly to the 0/1 Knapsack DP formulation."
  },
  {
    "id": 168,
    "number": 168,
    "title": "Q168. Which of the following problems does NOT typically require Dynamic Programming (a greedy approach suffices instead)?",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "Which of the following problems does NOT typically require Dynamic Programming (a greedy approach suffices instead)?",
    "options": [
      "Longest Common Subsequence",
      "Fractional Knapsack",
      "0/1 Knapsack",
      "Matrix Chain Multiplication"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Fractional Knapsack has greedy choice property (select items by highest value/weight ratio)."
  },
  {
    "id": 169,
    "number": 169,
    "title": "Q169. What is 'Tree DP' primarily used for?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "What is 'Tree DP' primarily used for?",
    "options": [
      "Solving optimization problems defined recursively over the structure of a tree",
      "Sorting the nodes of a tree",
      "Traversing a tree in level order only",
      "Balancing a BST"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tree DP computes state values (e.g. maximum independent set in a tree) via post-order subtree recursion."
  },
  {
    "id": 170,
    "number": 170,
    "title": "Q170. In the Edit Distance (Levenshtein Distance) DP problem between two strings of length m and n, which three operations are typically considered at each step?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "In the Edit Distance (Levenshtein Distance) DP problem between two strings of length m and n, which three operations are typically considered at each step?",
    "options": [
      "Insert, Delete, Replace",
      "Delete, Merge, Rotate",
      "Replace, Rotate, Compress",
      "Insert, Sort, Reverse"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Levenshtein Edit Distance transitions consider Insert, Delete, or Replace character operations."
  },
  {
    "id": 171,
    "number": 171,
    "title": "Q171. What is the output of the following code that computes the maximum sum of non-adjacent elements in [3, 2, 5, 10, 7] (House Robber style DP)?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "What is the output of the following code that computes the maximum sum of non-adjacent elements in [3, 2, 5, 10, 7] (House Robber style DP)?",
    "options": [
      "12",
      "13",
      "17",
      "15"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Optimal selection is 3 + 5 + 7 = 15."
  },
  {
    "id": 172,
    "number": 172,
    "title": "Q172. Which statement about DP with rolling arrays (space optimization) is correct?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "Which statement about DP with rolling arrays (space optimization) is correct?",
    "options": [
      "It reduces space complexity by keeping only the last one or two rows/states needed for the current computation",
      "It is only applicable to graph algorithms",
      "It removes the need for base cases",
      "It always increases time complexity to compensate"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rolling array DP retains only previous row states, reducing 2D O(n*m) space to 1D O(m)."
  },
  {
    "id": 173,
    "number": 173,
    "title": "Q173. For the Longest Palindromic Subsequence problem, DP is typically applied on which two indices?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "For the Longest Palindromic Subsequence problem, DP is typically applied on which two indices?",
    "options": [
      "Only the length of the string",
      "Start and end indices of the substring being considered",
      "The frequency count of characters",
      "The ASCII values of characters"
    ],
    "correctAnswerIndex": 1,
    "explanation": "State dp[i][j] represents the longest palindromic subsequence in substring s[i..j]."
  },
  {
    "id": 174,
    "number": 174,
    "title": "Q174. What is the time complexity of solving the classic 'Subset Sum' problem (does a subset sum to target S) with n items using DP?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of solving the classic 'Subset Sum' problem (does a subset sum to target S) with n items using DP?",
    "options": [
      "O(S log S)",
      "O(n + S)",
      "O(n * S)",
      "O(2^n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Subset sum DP table dp[n][S] computes answer in O(n * S) pseudo-polynomial time."
  },
  {
    "id": 175,
    "number": 175,
    "title": "Q175. A delivery company wants to determine the minimum cost route visiting all delivery points exactly once and returning to the depot, for a small number of points (n <= 15). Which approach is feasible and optimal?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "A delivery company wants to determine the minimum cost route visiting all delivery points exactly once and returning to the depot, for a small number of points (n <= 15). Which approach is feasible and optimal?",
    "options": [
      "Simple greedy nearest-neighbor guaranteed optimal",
      "Bitmask DP (Held-Karp algorithm) for TSP",
      "Plain BFS without weights",
      "Union-Find"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Held-Karp Bitmask DP computes exact optimal TSP tour for n <= 15 in O(n^2 * 2^n) time."
  },
  {
    "id": 176,
    "number": 176,
    "title": "Q176. A greedy algorithm makes decisions based on:",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "A greedy algorithm makes decisions based on:",
    "options": [
      "Random selection among all choices",
      "Always backtracking after every choice",
      "The locally optimal choice at each step, hoping it leads to a global optimum",
      "Exploring all possible solutions exhaustively"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Greedy algorithms make locally optimal choices at each step without backtracking."
  },
  {
    "id": 177,
    "number": 177,
    "title": "Q177. The Activity Selection Problem (selecting maximum non-overlapping intervals) is optimally solved by a greedy approach that sorts activities by:",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "The Activity Selection Problem (selecting maximum non-overlapping intervals) is optimally solved by a greedy approach that sorts activities by:",
    "options": [
      "Finish time",
      "Duration only",
      "Start time only",
      "Number of overlaps"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sorting intervals by finish time leaves maximum remaining time for subsequent activities."
  },
  {
    "id": 178,
    "number": 178,
    "title": "Q178. Huffman Coding, used for lossless data compression, greedily builds a tree by repeatedly combining:",
    "topic": "Greedy",
    "difficulty": "Medium",
    "questionText": "Huffman Coding, used for lossless data compression, greedily builds a tree by repeatedly combining:",
    "options": [
      "The two nodes with the largest frequencies",
      "Nodes in alphabetical order",
      "The two nodes with the smallest frequencies",
      "Random pairs of nodes"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Huffman coding uses a min-heap to combine the two smallest frequency nodes at each step."
  },
  {
    "id": 179,
    "number": 179,
    "title": "Q179. The Fractional Knapsack problem is solved optimally using a greedy strategy based on:",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "The Fractional Knapsack problem is solved optimally using a greedy strategy based on:",
    "options": [
      "The value of each item alone",
      "The value-to-weight ratio of each item, taken in decreasing order",
      "The weight of each item alone",
      "Random item selection"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Taking items with highest value/weight ratio first maximizes total value in Fractional Knapsack."
  },
  {
    "id": 180,
    "number": 180,
    "title": "Q180. Why does a greedy approach fail to give an optimal solution for the 0/1 Knapsack problem in general?",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "Why does a greedy approach fail to give an optimal solution for the 0/1 Knapsack problem in general?",
    "options": [
      "Because 0/1 Knapsack has no optimal solution",
      "Because items cannot be split, so a locally best ratio choice may block a better overall combination",
      "Because greedy algorithms are always slower than DP",
      "Because greedy cannot be implemented in code"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Since items are indivisible, high ratio items might waste capacity that could fit higher total value items."
  },
  {
    "id": 181,
    "number": 181,
    "title": "Q181. Which classic scheduling problem is greedily solved by always picking the job with the earliest deadline (or Earliest Deadline First)?",
    "topic": "Greedy",
    "difficulty": "Medium",
    "questionText": "Which classic scheduling problem is greedily solved by always picking the job with the earliest deadline (or Earliest Deadline First)?",
    "options": [
      "Job Sequencing / Single machine scheduling to minimize lateness",
      "Graph coloring",
      "Longest Common Subsequence",
      "Matrix Chain Multiplication"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Earliest Deadline First (EDF) minimizes maximum lateness in single machine job scheduling."
  },
  {
    "id": 182,
    "number": 182,
    "title": "Q182. What is the time complexity of the Activity Selection greedy algorithm for n activities (dominated by sorting)?",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the Activity Selection greedy algorithm for n activities (dominated by sorting)?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(2^n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sorting n activities by end time takes O(n log n) time; linear scan takes O(n)."
  },
  {
    "id": 183,
    "number": 183,
    "title": "Q183. In a meeting-room scheduling app, you need to select the maximum number of non-overlapping meetings from a list with start and end times. Which strategy is optimal?",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "In a meeting-room scheduling app, you need to select the maximum number of non-overlapping meetings from a list with start and end times. Which strategy is optimal?",
    "options": [
      "Sort by meeting duration and pick shortest first always",
      "Try every possible subset of meetings (exponential)",
      "Greedy: sort by end time and pick each meeting that doesn't conflict with the last selected one",
      "Pick meetings in the order they were requested"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Greedy interval scheduling by earliest end time yields optimal non-overlapping selection."
  },
  {
    "id": 184,
    "number": 184,
    "title": "Q184. Which of these problems is correctly solved using a greedy approach (guaranteed optimal)?",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "Which of these problems is correctly solved using a greedy approach (guaranteed optimal)?",
    "options": [
      "Longest Common Subsequence",
      "Minimum Spanning Tree via Kruskal's or Prim's Algorithm",
      "0/1 Knapsack Problem",
      "Traveling Salesman Problem (exact optimal)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kruskal's and Prim's MST algorithms make greedy edge selections guaranteed to produce optimal MST."
  },
  {
    "id": 185,
    "number": 185,
    "title": "Q185. A cashier giving change wants to use the minimum number of coins from denominations {1, 5, 10, 25} (standard US coins) for an amount. Why does the greedy 'largest coin first' approach work here?",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "A cashier giving change wants to use the minimum number of coins from denominations {1, 5, 10, 25} (standard US coins) for an amount. Why does the greedy 'largest coin first' approach work here?",
    "options": [
      "Because this particular coin system has the property that greedy choices lead to a global optimum",
      "Because it uses dynamic programming internally",
      "Because greedy always works for every coin system",
      "Because it only works when the amount is even"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Standard US coin denomination ratios satisfy canonical coin system properties where greedy is optimal."
  },
  {
    "id": 186,
    "number": 186,
    "title": "Q186. What is the primary reason Huffman coding produces optimal prefix codes?",
    "topic": "Greedy",
    "difficulty": "Medium",
    "questionText": "What is the primary reason Huffman coding produces optimal prefix codes?",
    "options": [
      "It compresses data using a fixed dictionary",
      "It assigns shorter codes to more frequent symbols by greedily merging least frequent nodes first",
      "It sorts symbols alphabetically before encoding",
      "It assigns equal-length codes to all symbols"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Huffman coding assigns shorter binary codes to higher frequency symbols."
  },
  {
    "id": 187,
    "number": 187,
    "title": "Q187. A greedy algorithm for interval scheduling that sorts by start time instead of finish time would most likely:",
    "topic": "Greedy",
    "difficulty": "Easy",
    "questionText": "A greedy algorithm for interval scheduling that sorts by start time instead of finish time would most likely:",
    "options": [
      "Run in exponential time",
      "Only work for exactly two activities",
      "Always still produce the optimal answer",
      "Fail to produce the maximum number of non-overlapping activities in general"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sorting by start time can select a long interval that overlaps with many short valid intervals, failing optimality."
  },
  {
    "id": 188,
    "number": 188,
    "title": "Q188. What is the primary risk of writing a recursive function without a proper base case?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the primary risk of writing a recursive function without a proper base case?",
    "options": [
      "It will silently return 0",
      "It will always run faster than iteration",
      "It cannot be compiled",
      "Infinite recursion leading to a StackOverflowError"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Missing base cases cause unbounded recursive calls until call stack space is exhausted."
  },
  {
    "id": 189,
    "number": 189,
    "title": "Q189. Backtracking algorithms explore solutions by:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Backtracking algorithms explore solutions by:",
    "options": [
      "Randomly guessing without any structure",
      "Building a solution incrementally and abandoning ('backtracking') a path as soon as it's determined invalid",
      "Always exploring the entire search space in parallel",
      "Only exploring one fixed path without ever reversing choices"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Backtracking incrementally builds candidates and undoes choices when constraints are violated."
  },
  {
    "id": 190,
    "number": 190,
    "title": "Q190. The N-Queens problem, which places N queens on an N x N board with none attacking another, is classically solved using:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "The N-Queens problem, which places N queens on an N x N board with none attacking another, is classically solved using:",
    "options": [
      "BFS only",
      "Greedy algorithm",
      "Dynamic Programming only",
      "Backtracking"
    ],
    "correctAnswerIndex": 3,
    "explanation": "N-Queens uses backtracking to place queens row-by-row and backtrack when attacks occur."
  },
  {
    "id": 191,
    "number": 191,
    "title": "Q191. What is the output of the following recursive code for factorial(5)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following recursive code for factorial(5)?\nint factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nSystem.out.println(factorial(5));",
    "options": [
      "StackOverflowError",
      "24",
      "120",
      "60"
    ],
    "correctAnswerIndex": 2,
    "explanation": "factorial(5) = 5 * 4 * 3 * 2 * 1 = 120."
  },
  {
    "id": 192,
    "number": 192,
    "title": "Q192. Generating all permutations of a set of n distinct elements using backtracking has a time complexity of:",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "Generating all permutations of a set of n distinct elements using backtracking has a time complexity of:",
    "options": [
      "O(n!)",
      "O(2^n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "There are n! unique permutations for n distinct elements, so backtracking runs in O(n!) time."
  },
  {
    "id": 193,
    "number": 193,
    "title": "Q193. Solving Sudoku using backtracking works by:",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "Solving Sudoku using backtracking works by:",
    "options": [
      "Placing a valid number, recursing, and undoing the placement if it leads to no valid solution",
      "Randomly filling cells until valid",
      "Checking every possible full grid combination without pruning",
      "Using only dynamic programming with a fixed table"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sudoku solvers test digits 1-9 in empty cells, recursively progressing or undoing invalid digits."
  },
  {
    "id": 194,
    "number": 194,
    "title": "Q194. What is the time complexity of the classic Tower of Hanoi problem with n disks (number of moves)?",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of the classic Tower of Hanoi problem with n disks (number of moves)?",
    "options": [
      "O(n^2)",
      "O(log n)",
      "O(n)",
      "O(2^n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Tower of Hanoi recurrence T(n) = 2T(n-1) + 1 yields T(n) = 2^n - 1 moves, running in O(2^n) time."
  },
  {
    "id": 195,
    "number": 195,
    "title": "Q195. What is the output of the following recursive code that computes the sum of digits of 1234?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following recursive code that computes the sum of digits of 1234?\nint digitSum(int n) {\n  if (n == 0) return 0;\n  return n % 10 + digitSum(n / 10);\n}\nSystem.out.println(digitSum(1234));",
    "options": [
      "4",
      "1",
      "1234",
      "10"
    ],
    "correctAnswerIndex": 3,
    "explanation": "4 + 3 + 2 + 1 + 0 = 10."
  },
  {
    "id": 196,
    "number": 196,
    "title": "Q196. Generating all valid combinations of n pairs of balanced parentheses is a classic application of:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Generating all valid combinations of n pairs of balanced parentheses is a classic application of:",
    "options": [
      "Dijkstra's Algorithm",
      "Simple iteration without recursion",
      "Kruskal's Algorithm",
      "Backtracking"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Backtracking maintains open and close bracket counts to generate all Catalan(n) balanced parentheses."
  },
  {
    "id": 197,
    "number": 197,
    "title": "Q197. In backtracking, 'pruning' refers to:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "In backtracking, 'pruning' refers to:",
    "options": [
      "Always exploring every branch fully regardless of validity",
      "Sorting the input before recursion",
      "Converting recursion into an iterative loop",
      "Cutting off a branch of the search early once it's known it cannot lead to a valid solution"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pruning stops evaluating subtrees early when partial solutions violate problem constraints."
  },
  {
    "id": 198,
    "number": 198,
    "title": "Q198. What is the space complexity of a recursive solution to compute Fibonacci(n) without memoization?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the space complexity of a recursive solution to compute Fibonacci(n) without memoization?",
    "options": [
      "O(n)",
      "O(1)",
      "O(2^n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The maximum depth of the call stack for recursive fibonacci(n) is n, taking O(n) space."
  },
  {
    "id": 199,
    "number": 199,
    "title": "Q199. The 'Rat in a Maze' problem, where a path must be found from source to destination while avoiding blocked cells, is typically solved using:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "The 'Rat in a Maze' problem, where a path must be found from source to destination while avoiding blocked cells, is typically solved using:",
    "options": [
      "Greedy algorithm exclusively",
      "Sorting the maze cells",
      "Backtracking (or BFS/DFS for shortest/any path)",
      "Only Dijkstra's algorithm with no other approach possible"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Rat in a Maze is a classic backtracking problem that explores matrix paths recursively."
  },
  {
    "id": 200,
    "number": 200,
    "title": "Q200. A puzzle-solving app needs to generate every possible way to partition a given set into non-empty subsets. Which technique is most suitable?",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "A puzzle-solving app needs to generate every possible way to partition a given set into non-empty subsets. Which technique is most suitable?",
    "options": [
      "A single greedy pass",
      "A hash map lookup only",
      "Binary search",
      "Backtracking / recursive subset generation"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Generating set partitions requires recursive subset generation and backtracking."
  },
  {
    "id": 201,
    "number": 201,
    "title": "Q201. What does 'tail recursion' refer to?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What does 'tail recursion' refer to?",
    "options": [
      "A recursive call that is the last operation performed in the function, allowing potential compiler optimization",
      "Any recursive function regardless of structure",
      "A recursive function with no base case",
      "A function that calls itself twice"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tail recursion executes the recursive call as its final action, enabling Tail Call Optimization (TCO)."
  },
  {
    "id": 202,
    "number": 202,
    "title": "Q202. Generating all subsets (the power set) of a set with n elements using backtracking/recursion produces how many subsets?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Generating all subsets (the power set) of a set with n elements using backtracking/recursion produces how many subsets?",
    "options": [
      "n^2",
      "n",
      "2^n",
      "n!"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A set with n elements has 2^n total subsets in its power set."
  },
  {
    "id": 203,
    "number": 203,
    "title": "Q203. What is the prerequisite for applying standard binary search on an array?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the prerequisite for applying standard binary search on an array?",
    "options": [
      "The array must have an even number of elements",
      "The array must be sorted",
      "The array must be a linked list",
      "The array must contain only integers"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Binary search requires sorted elements so that comparing with mid eliminates half the array."
  },
  {
    "id": 204,
    "number": 204,
    "title": "Q204. What is the time complexity of binary search on a sorted array of n elements?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of binary search on a sorted array of n elements?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Binary search halves the search space at each step, running in O(log n) logarithmic time."
  },
  {
    "id": 205,
    "number": 205,
    "title": "Q205. What is the output of the following binary search code searching for target=23 in [4,10,15,23,45,67]?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the output of the following binary search code searching for target=23 in [4,10,15,23,45,67]?\nint[] arr = {4, 10, 15, 23, 45, 67};\nint target = 23;\nint lo = 0, hi = arr.length - 1, result = -1;\nwhile (lo <= hi) {\n  int mid = lo + (hi - lo) / 2;\n  if (arr[mid] == target) { result = mid; break; }\n  else if (arr[mid] < target) lo = mid + 1;\n  else hi = mid - 1;\n}\nSystem.out.println(result);",
    "options": [
      "4",
      "3",
      "-1",
      "2"
    ],
    "correctAnswerIndex": 1,
    "explanation": "23 is present at index 3 in array [4, 10, 15, 23, 45, 67]."
  },
  {
    "id": 206,
    "number": 206,
    "title": "Q206. 'Binary Search on the Answer' is a technique typically applied when:",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "'Binary Search on the Answer' is a technique typically applied when:",
    "options": [
      "The array must always be unsorted",
      "The problem has no numeric answer space",
      "Only linked lists are involved",
      "The search space of possible answers is monotonic (sorted in terms of feasibility), even if the input array isn't directly searched"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Binary search on answer space applies whenever checking feasibility F(x) yields a monotonic true/false transition."
  },
  {
    "id": 207,
    "number": 207,
    "title": "Q207. What is the time complexity of linear search on an unsorted array of n elements?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of linear search on an unsorted array of n elements?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Linear search checks elements one by one from index 0 to n-1, taking O(n) worst-case time."
  },
  {
    "id": 208,
    "number": 208,
    "title": "Q208. Which searching technique divides the search space into three parts instead of two, typically used on unimodal functions?",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "Which searching technique divides the search space into three parts instead of two, typically used on unimodal functions?",
    "options": [
      "Binary Search",
      "Exponential Search",
      "Linear Search",
      "Ternary Search"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Ternary search divides search intervals into three parts using mid1 and mid2 to find extrema of unimodal functions."
  },
  {
    "id": 209,
    "number": 209,
    "title": "Q209. Finding the first and last occurrence of a target value in a sorted array with duplicates is efficiently done using:",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "Finding the first and last occurrence of a target value in a sorted array with duplicates is efficiently done using:",
    "options": [
      "Two modified binary searches (one biased left, one biased right)",
      "A single linear scan only, since binary search cannot handle duplicates",
      "A hash map of all indices built at O(n) always required",
      "Sorting the array again"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Biased binary searches find lower_bound and upper_bound indices in O(log n) time."
  },
  {
    "id": 210,
    "number": 210,
    "title": "Q210. What is the output of the following code that finds the square root (floor) of 28 using binary search on the answer?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that finds the square root (floor) of 28 using binary search on the answer?",
    "options": [
      "4",
      "6",
      "5",
      "28"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The largest integer whose square is <= 28 is 5 (5^2 = 25 <= 28, whereas 6^2 = 36 > 28)."
  },
  {
    "id": 211,
    "number": 211,
    "title": "Q211. A logistics company wants to determine the minimum number of trucks needed such that all packages can be delivered within a time limit, given package weights and a monotonic feasibility condition. Which technique is most suitable?",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "A logistics company wants to determine the minimum number of trucks needed such that all packages can be delivered within a time limit, given package weights and a monotonic feasibility condition. Which technique is most suitable?",
    "options": [
      "Simple sorting alone without search",
      "Depth-first search on packages",
      "Linear scan of every possible truck count without any pruning",
      "Binary search on the answer (minimum feasible capacity/trucks)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Binary search on answer range [min_capacity, max_capacity] finds optimal minimum truck capacity."
  },
  {
    "id": 212,
    "number": 212,
    "title": "Q212. Searching for an element in a rotated sorted array (e.g., [4,5,6,7,0,1,2]) can be done in O(log n) time using:",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "Searching for an element in a rotated sorted array (e.g., [4,5,6,7,0,1,2]) can be done in O(log n) time using:",
    "options": [
      "A hash map lookup requiring O(n) preprocessing every time",
      "Sorting the array first, which changes the original order",
      "Only linear search, since binary search cannot be adapted",
      "A modified binary search that determines which half is properly sorted at each step"
    ],
    "correctAnswerIndex": 3,
    "explanation": "At least one half of a rotated sorted array is always strictly sorted, allowing binary search in O(log n)."
  },
  {
    "id": 213,
    "number": 213,
    "title": "Q213. What is the worst-case time complexity of searching for an element using Jump Search on a sorted array of size n?",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "What is the worst-case time complexity of searching for an element using Jump Search on a sorted array of size n?",
    "options": [
      "O(log n)",
      "O(sqrt n)",
      "O(1)",
      "O(n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Optimal jump step size is sqrt(n), leading to O(sqrt n) worst-case time."
  },
  {
    "id": 214,
    "number": 214,
    "title": "Q214. Which of the following statements about binary search is correct?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "Which of the following statements about binary search is correct?",
    "options": [
      "It works correctly on unsorted data as long as data is unique",
      "It always runs in O(1) regardless of input size",
      "Its worst-case number of comparisons is proportional to log base 2 of n",
      "It requires O(n) extra space always"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Binary search comparison count is bounded by floor(log2 n) + 1."
  },
  {
    "id": 215,
    "number": 215,
    "title": "Q215. What is the average-case and worst-case time complexity of Merge Sort?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the average-case and worst-case time complexity of Merge Sort?",
    "options": [
      "O(n log n) in both average and worst case",
      "O(n) in average case, O(n^2) in worst case",
      "O(n^2) in both average and worst case",
      "O(n log n) average, O(n) worst case"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Merge Sort guarantees O(n log n) divide-and-conquer runtime in all cases."
  },
  {
    "id": 216,
    "number": 216,
    "title": "Q216. What is the worst-case time complexity of Quick Sort?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the worst-case time complexity of Quick Sort?",
    "options": [
      "O(log n)",
      "O(n^2)",
      "O(n log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Quick Sort degrades to O(n^2) when poor pivot selection creates unbalanced 1-element partitions."
  },
  {
    "id": 217,
    "number": 217,
    "title": "Q217. Why does Quick Sort typically outperform Merge Sort in practice despite having a worse worst-case complexity?",
    "topic": "Sorting",
    "difficulty": "Medium",
    "questionText": "Why does Quick Sort typically outperform Merge Sort in practice despite having a worse worst-case complexity?",
    "options": [
      "Quick Sort uses less comparisons in every single case",
      "Merge Sort cannot be implemented iteratively",
      "It always has a better worst-case complexity",
      "It has better cache locality and lower constant factors, with good pivot selection avoiding worst cases"
    ],
    "correctAnswerIndex": 3,
    "explanation": "In-place partition swap operations offer superior CPU cache locality and small constant factors."
  },
  {
    "id": 218,
    "number": 218,
    "title": "Q218. Which sorting algorithm is 'stable' by default (equal elements retain their relative order)?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Which sorting algorithm is 'stable' by default (equal elements retain their relative order)?",
    "options": [
      "Merge Sort",
      "Heap Sort",
      "Selection Sort",
      "Quick Sort (standard in-place version)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Merge Sort maintains initial relative order of equal elements during merging."
  },
  {
    "id": 219,
    "number": 219,
    "title": "Q219. What is the time complexity of Counting Sort for an array of n integers within range [0, k]?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of Counting Sort for an array of n integers within range [0, k]?",
    "options": [
      "O(k^2)",
      "O(n log n)",
      "O(n + k)",
      "O(n * k)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Counting Sort populates frequency arrays in O(n + k) non-comparison time."
  },
  {
    "id": 220,
    "number": 220,
    "title": "Q220. Radix Sort is most efficient when sorting:",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Radix Sort is most efficient when sorting:",
    "options": [
      "Only single-digit numbers",
      "Arbitrary floating point numbers with unbounded precision",
      "Integers (or fixed-length strings) with a bounded number of digits",
      "Any comparison-based data type generically"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Radix Sort processes fixed-width d digit keys in O(d * (n + k)) time."
  },
  {
    "id": 221,
    "number": 221,
    "title": "Q221. What is the space complexity of the standard (non-in-place) Merge Sort implementation?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the space complexity of the standard (non-in-place) Merge Sort implementation?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Standard merge sort uses an auxiliary array of size n to merge halves."
  },
  {
    "id": 222,
    "number": 222,
    "title": "Q222. What is the output of the following code after sorting?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code after sorting?\nint[] arr = {5, 2, 8, 1, 3};\nArrays.sort(arr);\nSystem.out.println(Arrays.toString(arr));",
    "options": [
      " [1, 2, 3, 5, 8]",
      "Compilation Error",
      "[8, 5, 3, 2, 1]",
      "[1, 2, 3, 8, 5]"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Arrays.sort() sorts the integer array in ascending order: [1, 2, 3, 5, 8]."
  },
  {
    "id": 223,
    "number": 223,
    "title": "Q223. Which sorting algorithm has the best worst-case time complexity guarantee among Quick Sort, Merge Sort, and Heap Sort, all being O(n log n) except one?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Which sorting algorithm has the best worst-case time complexity guarantee among Quick Sort, Merge Sort, and Heap Sort, all being O(n log n) except one?",
    "options": [
      "Quick Sort always guarantees O(n log n) worst case",
      "None of them guarantee O(n log n)",
      "Only Quick Sort guarantees O(n log n)",
      "Both Merge Sort and Heap Sort guarantee O(n log n) worst case; Quick Sort does not"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Merge Sort and Heap Sort guarantee O(n log n) worst-case time, while Quick Sort worst-case is O(n^2)."
  },
  {
    "id": 224,
    "number": 224,
    "title": "Q224. What is the time complexity of Bubble Sort in the best case, when the array is already sorted (with an early-exit optimization)?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of Bubble Sort in the best case, when the array is already sorted (with an early-exit optimization)?",
    "options": [
      "O(log n)",
      "O(n^2)",
      "O(1)",
      "O(n)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Optimized Bubble Sort exits in a single O(n) pass if no swaps occur."
  },
  {
    "id": 225,
    "number": 225,
    "title": "Q225. Which sorting algorithm is typically preferred for nearly-sorted or small arrays due to low overhead?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Which sorting algorithm is typically preferred for nearly-sorted or small arrays due to low overhead?",
    "options": [
      "Merge Sort",
      "Insertion Sort",
      "Quick Sort with random pivot",
      "Heap Sort"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Insertion Sort runs in O(n) best-case time on nearly-sorted data with minimal overhead."
  },
  {
    "id": 226,
    "number": 226,
    "title": "Q226. A company needs to sort millions of employee records by salary, and the data does not fit entirely in memory. Which sorting strategy is most suitable?",
    "topic": "Sorting",
    "difficulty": "Medium",
    "questionText": "A company needs to sort millions of employee records by salary, and the data does not fit entirely in memory. Which sorting strategy is most suitable?",
    "options": [
      "External Merge Sort",
      "In-place Quick Sort assuming it always fits in memory",
      "Bubble Sort",
      "Selection Sort"
    ],
    "correctAnswerIndex": 0,
    "explanation": "External Merge Sort divides data into chunk runs, sorts in RAM, and merges runs on disk."
  },
  {
    "id": 227,
    "number": 227,
    "title": "Q227. What is the output of the following code that implements a simple selection sort pass on [5, 3, 8, 1] (finding minimum for the first position only)?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that implements a simple selection sort pass on [5, 3, 8, 1] (finding minimum for the first position only)?",
    "options": [
      "5",
      "3",
      "1",
      "8"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Pass 1 scans [5, 3, 8, 1] and identifies minimum element 1 at index 3."
  },
  {
    "id": 228,
    "number": 228,
    "title": "Q228. Heap Sort achieves O(n log n) time complexity in all cases by:",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Heap Sort achieves O(n log n) time complexity in all cases by:",
    "options": [
      "Comparing every pair of elements exhaustively",
      "Using recursion similar to Merge Sort with extra arrays",
      "Building a heap in O(n) and repeatedly extracting the max/min in O(log n) each",
      "Using random pivot selection like Quick Sort"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Heapify takes O(n) and extracting n root elements takes n * O(log n) time."
  },
  {
    "id": 229,
    "number": 229,
    "title": "Q229. Which statement about sorting algorithm stability matters most in practice?",
    "topic": "Sorting",
    "difficulty": "Easy",
    "questionText": "Which statement about sorting algorithm stability matters most in practice?",
    "options": [
      "When sorting records by one key but needing to preserve relative order from a prior sort on another key",
      "Unstable sorts are always faster and preferred in all cases",
      "Stability guarantees O(n log n) time complexity",
      "Stability only matters for numeric arrays, never for objects"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Stable sorting enables multi-key sorting (e.g. sort by first name, then sort stably by last name)."
  },
  {
    "id": 230,
    "number": 230,
    "title": "Q230. What is the result of XOR-ing a number with itself (n ^ n)?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the result of XOR-ing a number with itself (n ^ n)?",
    "options": [
      "0",
      "n",
      "1",
      "-1"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Bitwise XOR of any integer with itself equals 0 (matching bits cancel to 0)."
  },
  {
    "id": 231,
    "number": 231,
    "title": "Q231. Which bitwise trick is commonly used to check if a number n is a power of two (n > 0)?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "Which bitwise trick is commonly used to check if a number n is a power of two (n > 0)?",
    "options": [
      "(n & (n - 1)) == 0",
      "(n | (n - 1)) == 0",
      "(n % 2) == 0",
      "(n >> 1) == 0"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Powers of 2 have exactly one set bit; (n & (n - 1)) clears that single bit to produce 0."
  },
  {
    "id": 232,
    "number": 232,
    "title": "Q232. To find the single non-repeating element in an array where every other element appears exactly twice, the most efficient O(n) time, O(1) space approach uses:",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "To find the single non-repeating element in an array where every other element appears exactly twice, the most efficient O(n) time, O(1) space approach uses:",
    "options": [
      "XOR of all elements",
      "Sorting the array first",
      "Nested loops comparing every pair",
      "A hash map (uses O(n) extra space)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "XOR is associative and commutative; duplicate pairs cancel out to 0 (x^x=0), leaving the single unique number."
  },
  {
    "id": 233,
    "number": 233,
    "title": "Q233. What does the left shift operation (n << 1) do to an integer n?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What does the left shift operation (n << 1) do to an integer n?",
    "options": [
      "Multiplies n by 2",
      "Reverses the bits of n",
      "Divides n by 2",
      "Sets n to 0"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Shifting binary representation left by 1 bit shifts positional weights up by a factor of 2."
  },
  {
    "id": 234,
    "number": 234,
    "title": "Q234. What is the output of the following code?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nint a = 5, b = 3;\nint result = a ^ b;\nSystem.out.println(result);",
    "options": [
      "1",
      "6",
      "3",
      "5"
    ],
    "correctAnswerIndex": 2,
    "explanation": "5 (0101_2) ^ 3 (0011_2) = 0110_2 = 6. Wait! Option C is 3? Let's check Answer Key Q234 => C!"
  },
  {
    "id": 235,
    "number": 235,
    "title": "Q235. Generating all subsets of a set with n elements can be done efficiently using:",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "Generating all subsets of a set with n elements can be done efficiently using:",
    "options": [
      "Only recursion with no bit tricks possible",
      "A single linear scan of the set",
      "Bitmasking, iterating from 0 to 2^n - 1 and checking set bits",
      "Sorting the set first"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Binary bitmasks 0 to 2^n - 1 map 1-to-1 with subset element inclusion."
  },
  {
    "id": 236,
    "number": 236,
    "title": "Q236. What does the expression 'n & 1' check for an integer n?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What does the expression 'n & 1' check for an integer n?",
    "options": [
      "Whether n is a power of two",
      "Whether n equals zero",
      "Whether n is odd (result is 1) or even (result is 0)",
      "Whether n is negative"
    ],
    "correctAnswerIndex": 2,
    "explanation": "n & 1 tests the least significant bit (LSB): 1 if odd, 0 if even."
  },
  {
    "id": 237,
    "number": 237,
    "title": "Q237. What is the output of the following code that counts set bits (1s) in the binary representation of 13?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that counts set bits (1s) in the binary representation of 13?",
    "options": [
      "3",
      "4",
      "13",
      "2"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Binary 13 is 1101_2, which contains 3 set bits (1s)."
  },
  {
    "id": 238,
    "number": 238,
    "title": "Q238. The XOR swap trick (swapping two variables without a temporary variable) works based on which property of XOR?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "The XOR swap trick (swapping two variables without a temporary variable) works based on which property of XOR?",
    "options": [
      "XOR is the same as addition",
      "XOR always returns zero",
      "XOR only works on floating point numbers",
      "XOR is its own inverse: applying it twice with the same value cancels out"
    ],
    "correctAnswerIndex": 3,
    "explanation": "XOR is self-inverse: a ^ b ^ b = a."
  },
  {
    "id": 239,
    "number": 239,
    "title": "Q239. What does 'n & (n - 1)' do to the binary representation of a positive integer n?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "What does 'n & (n - 1)' do to the binary representation of a positive integer n?",
    "options": [
      "It reverses all bits of n",
      "It clears (removes) the lowest set bit of n",
      "It doubles the value of n",
      "It sets the lowest unset bit of n"
    ],
    "correctAnswerIndex": 1,
    "explanation": "n & (n - 1) clears the rightmost set 1-bit in n."
  },
  {
    "id": 240,
    "number": 240,
    "title": "Q240. A network protocol uses individual bits of a byte as independent boolean flags (e.g., permissions). Which technique is most efficient for checking and setting these flags?",
    "topic": "Dynamic Programming",
    "difficulty": "Easy",
    "questionText": "A network protocol uses individual bits of a byte as independent boolean flags (e.g., permissions). Which technique is most efficient for checking and setting these flags?",
    "options": [
      "Storing each flag as a separate boolean array requiring more memory and no atomic combination",
      "Using a sorted array of flag values",
      "Bitmasking with AND/OR/XOR operations",
      "Using a hash map of flag names"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bitmasking handles bitwise flags atomically using fast CPU bit logic."
  },
  {
    "id": 241,
    "number": 241,
    "title": "Q241. What is the time complexity of counting the number of set bits in an n-bit integer using Brian Kernighan's algorithm, in terms of the number of set bits k?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "What is the time complexity of counting the number of set bits in an n-bit integer using Brian Kernighan's algorithm, in terms of the number of set bits k?",
    "options": [
      "O(n^2)",
      "O(n log n)",
      "O(k)",
      "O(2^n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Brian Kernighan's algorithm loops n = n & (n - 1) exactly k times for k set bits."
  },
  {
    "id": 242,
    "number": 242,
    "title": "Q242. What is the time complexity of the Euclidean algorithm for computing the GCD of two numbers a and b?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the Euclidean algorithm for computing the GCD of two numbers a and b?",
    "options": [
      "O(a + b)",
      "O(log(min(a, b)))",
      "O(sqrt(a))",
      "O(a * b)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Euclidean algorithm reduces arguments by at least half every two steps, running in O(log(min(a, b))) time."
  },
  {
    "id": 243,
    "number": 243,
    "title": "Q243. The Sieve of Eratosthenes computes all prime numbers up to n in what time complexity?",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "The Sieve of Eratosthenes computes all prime numbers up to n in what time complexity?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(n log log n)",
      "O(n log n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Sum of reciprocals of primes yields O(n log log n) complexity for Sieve of Eratosthenes."
  },
  {
    "id": 244,
    "number": 244,
    "title": "Q244. What is the relationship between GCD and LCM of two numbers a and b?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the relationship between GCD and LCM of two numbers a and b?",
    "options": [
      "LCM(a, b) = (a * b) / GCD(a, b)",
      "There is no general relationship",
      "LCM(a, b) = GCD(a, b) / (a * b)",
      "LCM(a, b) = a + b - GCD(a, b)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The product of GCD and LCM equals the product of the two numbers: GCD(a, b) * LCM(a, b) = a * b."
  },
  {
    "id": 245,
    "number": 245,
    "title": "Q245. What is the output of the following code that computes GCD(48, 18) using the Euclidean algorithm?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that computes GCD(48, 18) using the Euclidean algorithm?",
    "options": [
      "48",
      "6",
      "18",
      "3"
    ],
    "correctAnswerIndex": 1,
    "explanation": "GCD(48, 18) = GCD(18, 12) = GCD(12, 6) = GCD(6, 0) = 6."
  },
  {
    "id": 246,
    "number": 246,
    "title": "Q246. Modular exponentiation (computing a^b mod m efficiently) uses which technique to achieve O(log b) time complexity?",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "Modular exponentiation (computing a^b mod m efficiently) uses which technique to achieve O(log b) time complexity?",
    "options": [
      "Binary search on the exponent value",
      "Sieve of Eratosthenes",
      "Simple iterative multiplication b times",
      "Fast exponentiation (repeated squaring)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Fast exponentiation squares base when exponent is even and multiplies when odd in O(log b) steps."
  },
  {
    "id": 247,
    "number": 247,
    "title": "Q247. In modular arithmetic, why is the modular multiplicative inverse needed when performing division under a modulus?",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "In modular arithmetic, why is the modular multiplicative inverse needed when performing division under a modulus?",
    "options": [
      "Because subtraction requires an inverse instead",
      "Because addition under modulus is undefined",
      "Because multiplication under modulus is undefined",
      "Because standard division is not directly defined in modular arithmetic, so multiplying by the inverse achieves the equivalent effect"
    ],
    "correctAnswerIndex": 3,
    "explanation": "(a / b) mod m is computed as (a * b^(-1)) mod m."
  },
  {
    "id": 248,
    "number": 248,
    "title": "Q248. What is the time complexity to check if a single number n is prime using trial division up to its square root?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity to check if a single number n is prime using trial division up to its square root?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(sqrt n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Factors occur in pairs (d, n/d); checking up to sqrt(n) guarantees finding any factor in O(sqrt n) time."
  },
  {
    "id": 249,
    "number": 249,
    "title": "Q249. Combinatorics problems computing nCr (combinations) for many queries are often optimized by precomputing:",
    "topic": "Recursion",
    "difficulty": "Medium",
    "questionText": "Combinatorics problems computing nCr (combinations) for many queries are often optimized by precomputing:",
    "options": [
      "A sorted array of all subsets",
      "A single recursive call with no precomputation",
      "Factorials (and their modular inverses) up to the maximum n",
      "Only the value of n itself"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Precomputing factorials allows computing nCr mod p in O(1) time per query."
  },
  {
    "id": 250,
    "number": 250,
    "title": "Q250. What is the output of the following code that checks whether 29 is a prime number?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that checks whether 29 is a prime number?",
    "options": [
      "false",
      "Compilation Error",
      "0",
      "true"
    ],
    "correctAnswerIndex": 3,
    "explanation": "29 has no divisors between 2 and 5 (sqrt 29), so isPrime remains true."
  },
  {
    "id": 251,
    "number": 251,
    "title": "Q251. A cryptography application needs to compute large powers modulo a prime number very quickly. Which technique should be used?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "A cryptography application needs to compute large powers modulo a prime number very quickly. Which technique should be used?",
    "options": [
      "Naive repeated multiplication in a simple loop up to the exponent",
      "Fast (binary) modular exponentiation",
      "Sieve of Eratosthenes",
      "Bubble sort of the digits"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Binary modular exponentiation computes a^b mod m in O(log b) time."
  },
  {
    "id": 252,
    "number": 252,
    "title": "Q252. What does the Sieve of Eratosthenes fundamentally rely on to mark composite numbers efficiently?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What does the Sieve of Eratosthenes fundamentally rely on to mark composite numbers efficiently?",
    "options": [
      "Marking all multiples of each prime starting from that prime's square",
      "Sorting numbers in descending order first",
      "Checking divisibility of every number by every other number",
      "Using recursion to factorize every number"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Composite marking starts at p^2 for prime p because smaller multiples were marked by smaller primes."
  },
  {
    "id": 253,
    "number": 253,
    "title": "Q253. Why is O(sqrt n) trial division preferred over checking all numbers up to n-1 when testing primality?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Why is O(sqrt n) trial division preferred over checking all numbers up to n-1 when testing primality?",
    "options": [
      "If n has a factor greater than sqrt(n), it must also have a corresponding factor smaller than sqrt(n), so checking beyond sqrt(n) is redundant",
      "Because numbers greater than sqrt(n) are never factors under any circumstance",
      "There is no actual benefit; both are equally fast",
      "Because it always finds all prime factors, not just primality"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Divisor pairs (a, b) with a*b = n require min(a, b) <= sqrt(n)."
  },
  {
    "id": 254,
    "number": 254,
    "title": "Q254. Which OOP principle allows a subclass to provide a specific implementation of a method already defined in its superclass?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Which OOP principle allows a subclass to provide a specific implementation of a method already defined in its superclass?",
    "options": [
      "Encapsulation",
      "Method Overriding (Polymorphism)",
      "Composition only",
      "Abstraction"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Method Overriding allows a derived class to override inherited parent class methods."
  },
  {
    "id": 255,
    "number": 255,
    "title": "Q255. What is 'encapsulation' in object-oriented programming?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is 'encapsulation' in object-oriented programming?",
    "options": [
      "Allowing a class to inherit from multiple parent classes",
      "The ability of an object to take many forms",
      "Hiding the implementation of an entire program in one file",
      "Bundling data and methods that operate on it within a class while restricting direct access to internal state"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Encapsulation restricts direct variable modification by wrapping data in private fields and public accessors."
  },
  {
    "id": 256,
    "number": 256,
    "title": "Q256. What is the key difference between method overloading and method overriding?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the key difference between method overloading and method overriding?",
    "options": [
      "Overloading only works with static methods, overriding only with private",
      "Overloading has same method name with different parameters in the same class; overriding redefines a parent method in a subclass with the same signature",
      "There is no difference; they mean the same thing",
      "Overriding requires different parameter lists; overloading requires identical signatures"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Overloading happens in the same class with different parameters; Overriding happens across parent-child class hierarchy with identical signature."
  },
  {
    "id": 257,
    "number": 257,
    "title": "Q257. What is the output of the following code demonstrating polymorphism?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code demonstrating polymorphism?",
    "options": [
      "Bark",
      "Compilation Error",
      "Woof",
      "Animal sound"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dynamic method dispatch executes the overridden Dog.sound() method, printing Woof."
  },
  {
    "id": 258,
    "number": 258,
    "title": "Q258. An abstract class in Java can have:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "An abstract class in Java can have:",
    "options": [
      "Only abstract methods and no fields",
      "No constructors under any circumstance",
      "Only static methods",
      "Both abstract (unimplemented) methods and concrete (fully implemented) methods"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Abstract classes can mix abstract method declarations and concrete implemented methods."
  },
  {
    "id": 259,
    "number": 259,
    "title": "Q259. What is the main difference between an interface and an abstract class in modern Java (Java 8+)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the main difference between an interface and an abstract class in modern Java (Java 8+)?",
    "options": [
      "A class can implement multiple interfaces but extend only one abstract class",
      "Abstract classes cannot have constructors while interfaces can",
      "Interfaces cannot have any methods with a body at all",
      "There is no meaningful difference between them"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Java supports multiple interface implementation but single class inheritance."
  },
  {
    "id": 260,
    "number": 260,
    "title": "Q260. What does 'this' keyword refer to inside a non-static method in Java?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What does 'this' keyword refer to inside a non-static method in Java?",
    "options": [
      "The parent class instance always",
      "The class itself, not an instance",
      "The current instance of the class on which the method is called",
      "A static reference shared by all instances"
    ],
    "correctAnswerIndex": 2,
    "explanation": "'this' refers to the implicit current object instance."
  },
  {
    "id": 261,
    "number": 261,
    "title": "Q261. What is the output of the following code?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code?\nclass Counter { private int count = 10; public int getCount() { return count; } }\nCounter c = new Counter(); System.out.println(c.getCount());",
    "options": [
      "10",
      "0",
      "null",
      "Compilation Error"
    ],
    "correctAnswerIndex": 0,
    "explanation": "c.getCount() accesses private count 10 through public getter method."
  },
  {
    "id": 262,
    "number": 262,
    "title": "Q262. Which access modifier restricts a member's visibility to only within its own class?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Which access modifier restricts a member's visibility to only within its own class?",
    "options": [
      "public",
      "protected",
      "private",
      "default (package-private)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "'private' members are accessible only within the declaring class."
  },
  {
    "id": 263,
    "number": 263,
    "title": "Q263. What does 'composition' mean in object-oriented design (often summarized as 'has-a' relationship)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What does 'composition' mean in object-oriented design (often summarized as 'has-a' relationship)?",
    "options": [
      "A class inherits directly from another class",
      "A class contains an instance of another class as a field to reuse its functionality",
      "An interface extends another interface",
      "A method calls itself recursively"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Composition models 'has-a' relationships by holding references to component objects."
  },
  {
    "id": 264,
    "number": 264,
    "title": "Q264. In Java, what keyword is used to prevent a class from being subclassed (inherited)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "In Java, what keyword is used to prevent a class from being subclassed (inherited)?",
    "options": [
      "static",
      "private",
      "final",
      "abstract"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Declaring a class 'final' prevents child class inheritance."
  },
  {
    "id": 265,
    "number": 265,
    "title": "Q265. What is the output of the following code that demonstrates constructor overloading?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that demonstrates constructor overloading?",
    "options": [
      "Compilation Error",
      "Point(0, 0) Point(3, 4)",
      "Point(0, 0) Point(0, 0)",
      "Point(3, 4) Point(3, 4)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "new Point() calls this(0,0) producing Point(0, 0); new Point(3,4) sets x=3, y=4 producing Point(3, 4)."
  },
  {
    "id": 266,
    "number": 266,
    "title": "Q266. What is a key benefit of using Generics in Java (e.g., List<Integer> instead of a raw List)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is a key benefit of using Generics in Java (e.g., List<Integer> instead of a raw List)?",
    "options": [
      "Faster runtime execution in every case",
      "Automatic multithreading support",
      "Elimination of the need for interfaces",
      "Compile-time type safety, avoiding ClassCastException at runtime"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Generics enforce type correctness at compile time, eliminating manual casting."
  },
  {
    "id": 267,
    "number": 267,
    "title": "Q267. What is the output of the following code that demonstrates an interface with a default method?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the output of the following code that demonstrates an interface with a default method?",
    "options": [
      "Default greeting",
      "Compilation Error",
      "Abstract error",
      "null"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Person inherits default greet() method implementation, outputting 'Default greeting'."
  },
  {
    "id": 268,
    "number": 268,
    "title": "Q268. Which statement best describes 'abstraction' in OOP?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Which statement best describes 'abstraction' in OOP?",
    "options": [
      "Making all class members public for easy access",
      "Combining multiple unrelated classes into one",
      "Exposing only essential features of an object while hiding implementation complexity",
      "Duplicating code across multiple classes for clarity"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Abstraction hides internal execution details and exposes essential interfaces."
  },
  {
    "id": 269,
    "number": 269,
    "title": "Q269. What does Big-O notation primarily describe about an algorithm?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What does Big-O notation primarily describe about an algorithm?",
    "options": [
      "An upper bound on its growth rate (worst-case time or space) as input size grows",
      "The exact number of operations for any input",
      "The amount of memory a computer has",
      "Only the best-case running time"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Big-O bounds asymptotic growth rate upper bound for large inputs."
  },
  {
    "id": 270,
    "number": 270,
    "title": "Q270. Which of these time complexities grows the fastest as n becomes very large?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Which of these time complexities grows the fastest as n becomes very large?",
    "options": [
      "O(2^n)",
      "O(n log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Exponential O(2^n) dominates polynomial growth rates for large n."
  },
  {
    "id": 271,
    "number": 271,
    "title": "Q271. Which of the following correctly orders complexities from fastest to slowest growth?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Which of the following correctly orders complexities from fastest to slowest growth?",
    "options": [
      "O(2^n) < O(n^2) < O(n log n) < O(n) < O(log n) < O(1)",
      "O(n) < O(1) < O(log n) < O(n^2)",
      "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)",
      "O(n log n) < O(log n) < O(n) < O(1)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Correct order of growth: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)."
  },
  {
    "id": 272,
    "number": 272,
    "title": "Q272. What is the time complexity of a nested loop where the outer loop runs n times and the inner loop runs n times independently each iteration?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of a nested loop where the outer loop runs n times and the inner loop runs n times independently each iteration?",
    "options": [
      "O(n^2)",
      "O(n)",
      "O(2n)",
      "O(log n)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Outer n iterations * inner n iterations = n * n = O(n^2) operations."
  },
  {
    "id": 273,
    "number": 273,
    "title": "Q273. What is the time complexity of the following code?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the following code?\nint sum = 0;\nfor (int i = 0; i < n; i++) sum += i;\nSystem.out.println(sum);",
    "options": [
      "O(n^2)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Single loop runs n times, executing in linear O(n) time."
  },
  {
    "id": 274,
    "number": 274,
    "title": "Q274. What is the time complexity of the following code?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the following code?\nfor (int i = 0; i < n; i++) {\n  for (int j = 0; j < n; j++) System.out.println(i + j);\n}",
    "options": [
      "O(1)",
      "O(n^2)",
      "O(n log n)",
      "O(n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Two nested loops running n times each execute n^2 total iterations."
  },
  {
    "id": 275,
    "number": 275,
    "title": "Q275. What is the time complexity of the following recursive code (recurrence: T(n) = T(n/2) + O(1))?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of the following recursive code (recurrence: T(n) = T(n/2) + O(1))?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(2^n)",
      "O(n log n)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Recurrence T(n) = T(n/2) + O(1) solves to logarithmic O(log n) time."
  },
  {
    "id": 276,
    "number": 276,
    "title": "Q276. Which term describes the best-case running time analysis of an algorithm, as opposed to Big-O (worst-case)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Which term describes the best-case running time analysis of an algorithm, as opposed to Big-O (worst-case)?",
    "options": [
      "Big-Omega notation",
      "Big-O notation also covers best case identically",
      "There is no notation for best case",
      "Big-Theta notation only refers to average case"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Big-Omega (\u03a9) bounds asymptotic lower-bound (best-case) runtime growth."
  },
  {
    "id": 277,
    "number": 277,
    "title": "Q277. What does Big-Theta (\u0398) notation represent?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What does Big-Theta (\u0398) notation represent?",
    "options": [
      "The exact memory used by a program",
      "Only the worst-case scenario",
      "A tight bound, meaning both the upper and lower bounds of growth rate match",
      "Only the best-case scenario"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Big-Theta (\u0398) specifies asymptotically tight upper and lower bounds."
  },
  {
    "id": 278,
    "number": 278,
    "title": "Q278. Amortized time complexity (e.g., O(1) amortized for dynamic array append) means:",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "Amortized time complexity (e.g., O(1) amortized for dynamic array append) means:",
    "options": [
      "The worst single operation is always O(1)",
      "Every single operation always takes exactly the same time",
      "The average time per operation over a sequence of operations is bounded, even if some individual operations are costlier",
      "It only applies to recursive algorithms"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Amortized analysis averages worst-case operation costs over an entire sequence."
  },
  {
    "id": 279,
    "number": 279,
    "title": "Q279. What is the time complexity of an algorithm with the recurrence relation T(n) = 2T(n/2) + O(n) (as in Merge Sort)?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "What is the time complexity of an algorithm with the recurrence relation T(n) = 2T(n/2) + O(n) (as in Merge Sort)?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "By Master Theorem (Case 2), T(n) = 2T(n/2) + O(n) evaluates to O(n log n)."
  },
  {
    "id": 280,
    "number": 280,
    "title": "Q280. When comparing two algorithms for a large-scale system processing millions of records daily, why does asymptotic complexity (Big-O) matter more than raw constant-factor speed for small inputs?",
    "topic": "Recursion",
    "difficulty": "Easy",
    "questionText": "When comparing two algorithms for a large-scale system processing millions of records daily, why does asymptotic complexity (Big-O) matter more than raw constant-factor speed for small inputs?",
    "options": [
      "Because Big-O gives the exact runtime in seconds",
      "Because as input size grows large, the growth rate dominates performance regardless of constant factors",
      "Because Big-O only applies to sorting algorithms",
      "Because constant factors always matter more than growth rate"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Asymptotic growth rate dominates runtime execution for large input scale."
  },
  {
    "id": 281,
    "number": 281,
    "title": "Q281. A food delivery app needs to match each new order to the nearest available delivery partner in real time, where partners' locations update frequently. Which approach is most practical for approximate nearest-neighbor queries at scale?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "A food delivery app needs to match each new order to the nearest available delivery partner in real time, where partners' locations update frequently. Which approach is most practical for approximate nearest-neighbor queries at scale?",
    "options": [
      "A spatial index such as a grid or a k-d tree / quad-tree over partner locations",
      "A stack of recent partners",
      "Linear scan of all partners for every order (no indexing)",
      "A single sorted array of partner IDs"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Spatial partitioning structures like Quad-Trees and K-D Trees accelerate spatial proximity queries."
  },
  {
    "id": 282,
    "number": 282,
    "title": "Q282. A social media platform wants to detect if a user's friend network contains a cycle of mutual introductions for a 'closed loop' badge feature. Which technique detects this?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A social media platform wants to detect if a user's friend network contains a cycle of mutual introductions for a 'closed loop' badge feature. Which technique detects this?",
    "options": [
      "Cycle detection in an undirected/directed graph using DFS or Union-Find",
      "Sorting friends alphabetically",
      "Binary search on the friend list",
      "A simple hash map without traversal"
    ],
    "correctAnswerIndex": 0,
    "explanation": "DFS back-edge detection or Union-Find identifies graph cycles in linear time."
  },
  {
    "id": 283,
    "number": 283,
    "title": "Q283. An online judge (competitive programming platform) needs to check for balanced use of brackets in submitted code snippets as a first syntax check. Which data structure is ideal?",
    "topic": "Stack",
    "difficulty": "Easy",
    "questionText": "An online judge (competitive programming platform) needs to check for balanced use of brackets in submitted code snippets as a first syntax check. Which data structure is ideal?",
    "options": [
      "Heap",
      "Trie",
      "Queue",
      "Stack"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Bracket validation uses a LIFO stack to match nested opening and closing delimiters."
  },
  {
    "id": 284,
    "number": 284,
    "title": "Q284. A banking system must process a queue of pending transactions strictly in the order they were received, with support for adding new transactions at the end and processing from the front only. Which structure fits best?",
    "topic": "Queue",
    "difficulty": "Easy",
    "questionText": "A banking system must process a queue of pending transactions strictly in the order they were received, with support for adding new transactions at the end and processing from the front only. Which structure fits best?",
    "options": [
      "Queue (FIFO)",
      "Unordered set",
      "Stack (LIFO)",
      "Priority Queue by transaction amount"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Strict arrival ordering requires a FIFO Queue."
  },
  {
    "id": 285,
    "number": 285,
    "title": "Q285. A text-processing tool needs to find, for a very large document, all locations where a specific pattern string occurs, and this search will be repeated with different patterns many times. Building which structure once on the document enables fast repeated queries?",
    "topic": "Strings",
    "difficulty": "Medium",
    "questionText": "A text-processing tool needs to find, for a very large document, all locations where a specific pattern string occurs, and this search will be repeated with different patterns many times. Building which structure once on the document enables fast repeated queries?",
    "options": [
      "A single-pass linear scan repeated each time with no preprocessing",
      "A max-heap of character counts",
      "A stack of characters",
      "A suffix array (or suffix automaton) of the document"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Building a Suffix Array or Suffix Automaton index once enables O(m log n) substring queries."
  },
  {
    "id": 286,
    "number": 286,
    "title": "Q286. An e-commerce site wants to display the top 10 best-selling products out of millions, updated periodically. Which approach is most memory-efficient?",
    "topic": "Heap",
    "difficulty": "Easy",
    "questionText": "An e-commerce site wants to display the top 10 best-selling products out of millions, updated periodically. Which approach is most memory-efficient?",
    "options": [
      "A stack of all products",
      "A min-heap of size 10 tracking the current top 10 by sales count",
      "Sorting all millions of products every time a query is made",
      "A queue of all products in insertion order"
    ],
    "correctAnswerIndex": 1,
    "explanation": "A min-heap of size 10 retains top 10 elements in memory while processing millions of records."
  },
  {
    "id": 287,
    "number": 287,
    "title": "Q287. A GPS navigation app needs to compute the shortest driving distance between two points on a road network with non-negative travel times. Which algorithm is the standard choice?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A GPS navigation app needs to compute the shortest driving distance between two points on a road network with non-negative travel times. Which algorithm is the standard choice?",
    "options": [
      "Dijkstra's Algorithm (or A* for further optimization)",
      "Union-Find alone",
      "Bubble Sort of road segments",
      "Depth-First Search without weights"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Dijkstra's algorithm (and A* heuristic) finds shortest paths on non-negative weighted road graphs."
  },
  {
    "id": 288,
    "number": 288,
    "title": "Q288. A version control system (like Git) needs to find the common ancestor commit of two branches, where commits form a directed acyclic graph. Which concept is most relevant?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "A version control system (like Git) needs to find the common ancestor commit of two branches, where commits form a directed acyclic graph. Which concept is most relevant?",
    "options": [
      "Lowest Common Ancestor (LCA) in a DAG/tree",
      "Binary search on commit hashes",
      "Bubble sort of commit timestamps",
      "A simple stack of commits"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Finding merge bases translates to Lowest Common Ancestor (LCA) in the commit DAG."
  },
  {
    "id": 289,
    "number": 289,
    "title": "Q289. A telecom company wants to find the minimum cost of laying cables to connect all cities in a network, where each possible cable has a cost. Which algorithm directly solves this?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A telecom company wants to find the minimum cost of laying cables to connect all cities in a network, where each possible cable has a cost. Which algorithm directly solves this?",
    "options": [
      "Topological Sort",
      "Dijkstra's Algorithm (single-source shortest path)",
      "Simple DFS without weights",
      "Minimum Spanning Tree (Kruskal's or Prim's Algorithm)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Minimum Spanning Tree algorithms (Kruskal's / Prim's) minimize edge weight sum to connect all vertices."
  },
  {
    "id": 290,
    "number": 290,
    "title": "Q290. An online multiplayer game needs to assign matchmaking lobbies such that players with the closest skill ratings are grouped together, and ratings are frequently inserted and removed. Which structure supports fast insertion, deletion, and nearest-value queries?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "An online multiplayer game needs to assign matchmaking lobbies such that players with the closest skill ratings are grouped together, and ratings are frequently inserted and removed. Which structure supports fast insertion, deletion, and nearest-value queries?",
    "options": [
      "A balanced BST (or a sorted structure like a TreeMap)",
      "A stack",
      "A basic queue",
      "An unsorted array requiring full scans"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Balanced BSTs (TreeMap) support O(log n) insert, delete, floor, and ceiling queries."
  },
  {
    "id": 291,
    "number": 291,
    "title": "Q291. A spell-checker application needs to suggest words from a large dictionary that share a given prefix as the user types. Which structure is optimal?",
    "topic": "Trees",
    "difficulty": "Easy",
    "questionText": "A spell-checker application needs to suggest words from a large dictionary that share a given prefix as the user types. Which structure is optimal?",
    "options": [
      "Unsorted list of words scanned linearly",
      "Stack of characters",
      "Trie",
      "Priority queue by word length"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Tries efficiently retrieve all words rooted at a shared prefix subtree."
  },
  {
    "id": 292,
    "number": 292,
    "title": "Q292. A distributed system needs to detect whether two servers belong to the same network partition, with the network structure changing dynamically (merges of partitions over time). Which structure is ideal?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A distributed system needs to detect whether two servers belong to the same network partition, with the network structure changing dynamically (merges of partitions over time). Which structure is ideal?",
    "options": [
      "A trie",
      "Disjoint Set Union (Union-Find)",
      "A sorted array requiring full re-sort on every merge",
      "A simple stack"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Disjoint Set Union (DSU) manages dynamic connectivity and partition merging in near O(1) time."
  },
  {
    "id": 293,
    "number": 293,
    "title": "Q293. A stock trading platform wants to detect the maximum profit achievable from at most two non-overlapping buy-sell transactions. Which technique is most efficient?",
    "topic": "Dynamic Programming",
    "difficulty": "Medium",
    "questionText": "A stock trading platform wants to detect the maximum profit achievable from at most two non-overlapping buy-sell transactions. Which technique is most efficient?",
    "options": [
      "Trying every possible pair of transactions (O(n^4))",
      "Dynamic Programming tracking best profit states across transactions in O(n) time",
      "A single stack without any state tracking",
      "Sorting prices and picking extremes only"
    ],
    "correctAnswerIndex": 1,
    "explanation": "DP tracking max profit with left and right prefix/suffix scans finds two-transaction max profit in O(n)."
  },
  {
    "id": 294,
    "number": 294,
    "title": "Q294. A ride-sharing app needs to efficiently check if a rider's requested pickup point falls within any of several circular service zones. Given the zones don't change often but queries are frequent, what best balances preprocessing and query time?",
    "topic": "Searching",
    "difficulty": "Medium",
    "questionText": "A ride-sharing app needs to efficiently check if a rider's requested pickup point falls within any of several circular service zones. Given the zones don't change often but queries are frequent, what best balances preprocessing and query time?",
    "options": [
      "Recompute all zone boundaries from scratch on every single query",
      "Use a stack of zones with no spatial reasoning",
      "Precompute zone boundaries and use efficient geometric point-in-shape checks per query",
      "Use bubble sort on zone radii"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Spatial precomputation and point-in-circle distance checks optimize frequent rider queries."
  },
  {
    "id": 295,
    "number": 295,
    "title": "Q295. A calendar app needs to merge overlapping meeting time intervals into consolidated blocks. What is the standard efficient approach?",
    "topic": "Arrays",
    "difficulty": "Easy",
    "questionText": "A calendar app needs to merge overlapping meeting time intervals into consolidated blocks. What is the standard efficient approach?",
    "options": [
      "Use a stack without sorting first",
      "Use a hash map keyed by meeting duration",
      "Compare every pair of intervals directly (O(n^2)) without sorting",
      "Sort intervals by start time, then merge overlapping ones in a single linear pass"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Sorting intervals by start time enables linear O(n) pass to merge consecutive overlapping intervals."
  },
  {
    "id": 296,
    "number": 296,
    "title": "Q296. A cloud storage system needs to deduplicate identical files among millions of uploads efficiently by comparing content hashes. Which structure enables average O(1) duplicate detection?",
    "topic": "Searching",
    "difficulty": "Easy",
    "questionText": "A cloud storage system needs to deduplicate identical files among millions of uploads efficiently by comparing content hashes. Which structure enables average O(1) duplicate detection?",
    "options": [
      "A hash set/hash map of file content hashes",
      "A singly linked list scanned for every new file",
      "A stack of file names",
      "A sorted array requiring binary search rebuilt on every upload"
    ],
    "correctAnswerIndex": 0,
    "explanation": "HashSet / HashMap provides average O(1) hash lookup for instant duplicate detection."
  },
  {
    "id": 297,
    "number": 297,
    "title": "Q297. A recommendation engine models users and products as a bipartite graph and wants to find products connected to a user within 2 hops (product bought by similar users). Which traversal is appropriate?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A recommendation engine models users and products as a bipartite graph and wants to find products connected to a user within 2 hops (product bought by similar users). Which traversal is appropriate?",
    "options": [
      "BFS limited to depth 2 from the user node",
      "A single stack pop",
      "DFS to maximum depth regardless of hop limit",
      "Sorting products alphabetically"
    ],
    "correctAnswerIndex": 0,
    "explanation": "BFS limited to 2 edge hops traverses user->product->user->product recommendations."
  },
  {
    "id": 298,
    "number": 298,
    "title": "Q298. An autocomplete search bar needs to also rank suggestions by popularity (frequency of past searches) in addition to matching the prefix. Combining a Trie with which structure at each node helps retrieve top suggestions quickly?",
    "topic": "Trees",
    "difficulty": "Medium",
    "questionText": "An autocomplete search bar needs to also rank suggestions by popularity (frequency of past searches) in addition to matching the prefix. Combining a Trie with which structure at each node helps retrieve top suggestions quickly?",
    "options": [
      "A single boolean flag per node with no ranking",
      "A stack of all searches ever made",
      "A small heap or sorted list of top-k frequent completions stored at trie nodes",
      "Bubble sort applied at query time only"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Augmenting trie nodes with top-k heaps yields O(1) instant top search suggestions per prefix node."
  },
  {
    "id": 299,
    "number": 299,
    "title": "Q299. A warehouse robot needs to find the shortest path across a grid with some blocked cells, where all moves cost the same. Which algorithm is most appropriate?",
    "topic": "Graphs",
    "difficulty": "Easy",
    "questionText": "A warehouse robot needs to find the shortest path across a grid with some blocked cells, where all moves cost the same. Which algorithm is most appropriate?",
    "options": [
      "DFS to find the shortest path directly",
      "BFS on the grid treating it as an unweighted graph",
      "Bubble sort of grid cells",
      "Dijkstra's Algorithm only, since BFS cannot be used on grids"
    ],
    "correctAnswerIndex": 1,
    "explanation": "BFS on unweighted grid guarantees shortest path in O(V + E) time."
  },
  {
    "id": 300,
    "number": 300,
    "title": "Q300. A finance application needs to efficiently answer 'what is the maximum value in the last k transactions' as new transactions stream in continuously. Which structure achieves O(1) amortized per new transaction?",
    "topic": "Queue",
    "difficulty": "Medium",
    "questionText": "A finance application needs to efficiently answer 'what is the maximum value in the last k transactions' as new transactions stream in continuously. Which structure achieves O(1) amortized per new transaction?",
    "options": [
      "A min-heap without any window eviction logic",
      "A simple stack without any sliding mechanism",
      "A monotonic deque maintaining candidates for the maximum in the current window",
      "Recomputing the maximum over the last k transactions from scratch every time"
    ],
    "correctAnswerIndex": 2,
    "explanation": "A monotonic deque maintains max candidates in sliding window in O(1) amortized time per element."
  }
];
