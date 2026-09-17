// Placeholder questions ONLY for UI layout testing.
// Actual question bank will be imported later as requested.

export const PLACEHOLDER_QUESTIONS = [
  {
    id: 1,
    number: 1,
    title: "Placeholder Question 1: Two Sum Array Problem",
    topic: "Arrays",
    difficulty: "Easy",
    questionText: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. Assume each input would have exactly one solution.",
    options: [
      "O(N^2) using nested loops",
      "O(N) using a Hash Map to store complements",
      "O(N log N) using binary search after sorting",
      "O(1) using constant extra memory pointers"
    ],
    correctAnswerIndex: 1,
    explanation: "Using a Hash Map allows us to check for the target complement in O(1) time per element, yielding an optimal O(N) total time complexity."
  },
  {
    id: 2,
    number: 2,
    title: "Placeholder Question 2: Valid Palindrome String",
    topic: "Strings",
    difficulty: "Easy",
    questionText: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Which algorithm approach is optimal?",
    options: [
      "Reverse the string and compare character by character",
      "Two Pointers moving inwards from left and right boundaries",
      "Convert string to a Linked List and check palindrome property",
      "Use Depth First Search traversal"
    ],
    correctAnswerIndex: 1,
    explanation: "The Two Pointers approach uses O(1) auxiliary space by comparing characters from left and right indices simultaneously in O(N) time."
  },
  {
    id: 3,
    number: 3,
    title: "Placeholder Question 3: Reverse Linked List",
    topic: "Linked List",
    difficulty: "Easy",
    questionText: "Given the head of a singly linked list, reverse the list, and return the reversed list. What pointers are maintained during iterative reversal?",
    options: [
      "Head, Tail, and Middle pointers",
      "Previous, Current, and Next pointers",
      "Fast and Slow runner pointers",
      "Top and Bottom stack pointers"
    ],
    correctAnswerIndex: 1,
    explanation: "Iterative linked list reversal uses `prev`, `curr`, and `next` pointers to update node pointers in a single pass of O(N) time and O(1) space."
  },
  {
    id: 4,
    number: 4,
    title: "Placeholder Question 4: Maximum Depth of Binary Tree",
    topic: "Trees",
    difficulty: "Easy",
    questionText: "Given the root of a binary tree, return its maximum depth (number of nodes along the longest path from root to leaf node).",
    options: [
      "Binary Search Tree validation",
      "Recursive Depth First Search (DFS): 1 + max(depth(left), depth(right))",
      "Dijkstra's shortest path algorithm",
      "Kruskal's Minimum Spanning Tree"
    ],
    correctAnswerIndex: 1,
    explanation: "Recursively computing `1 + max(depth(left), depth(right))` visits every node once in O(N) time."
  },
  {
    id: 5,
    number: 5,
    title: "Placeholder Question 5: Climbing Stairs DP",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    questionText: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    options: [
      "Fibonacci recurrence relation: dp[i] = dp[i-1] + dp[i-2]",
      "Greedy selection of maximum step size",
      "Breadth-First Search on a Grid",
      "Brute force permutations with memoization disabled"
    ],
    correctAnswerIndex: 0,
    explanation: "To reach step `i`, you must come from `i-1` or `i-2`. This matches the Fibonacci sequence solvable in O(N) time and O(1) space."
  }
];
