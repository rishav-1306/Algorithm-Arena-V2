const mongoose = require('mongoose');
const Challenge = require('./models/Challenge');
const Clan = require('./models/Clan');
const User = require('./models/User');

const challenges = [
  {
    title: "Two Sum",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n**Example 1:**\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\n\n**Example 2:**\nInput: nums = [3,2,4], target = 6\nOutput: [1,2]\n\n**Example 3:**\nInput: nums = [3,3], target = 6\nOutput: [0,1]",
    difficulty: "Easy",
    points: 50,
    category: "Arrays",
    functionName: "twoSum",
    codeSnippets: [
      { lang: "JavaScript", langSlug: "javascript", code: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    \n};" },
      { lang: "Python", langSlug: "python", code: "from typing import List\n\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        " },
      { lang: "Java", langSlug: "java", code: "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}" },
      { lang: "C++", langSlug: "cpp", code: "#include <bits/stdc++.h>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};" },
      { lang: "C", langSlug: "c", code: "/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    \n}" }
    ],
    testCases: [
      { label: "Case 1", args: [[2,7,11,15], 9], expected: "[0,1]" },
      { label: "Case 2", args: [[3,2,4], 6], expected: "[1,2]" },
      { label: "Case 3", args: [[3,3], 6], expected: "[0,1]" }
    ]
  },
  {
    title: "Reverse Linked List",
    description: "Given the `head` of a singly linked list, reverse the list, and return the reversed list.\n\nFor this problem, the linked list is represented as an array of values.\n\n**Example 1:**\nInput: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]\n\n**Example 2:**\nInput: head = [1,2]\nOutput: [2,1]\n\n**Example 3:**\nInput: head = []\nOutput: []",
    difficulty: "Easy",
    points: 50,
    category: "Linked Lists",
    functionName: "reverseList",
    codeSnippets: [
      { lang: "JavaScript", langSlug: "javascript", code: "/**\n * @param {number[]} head - list as array\n * @return {number[]}\n */\nvar reverseList = function(head) {\n    \n};" },
      { lang: "Python", langSlug: "python", code: "from typing import List\n\nclass Solution:\n    def reverseList(self, head: List[int]) -> List[int]:\n        " },
      { lang: "Java", langSlug: "java", code: "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] reverseList(int[] head) {\n        \n    }\n}" },
      { lang: "C++", langSlug: "cpp", code: "#include <bits/stdc++.h>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> reverseList(vector<int>& head) {\n        \n    }\n};" },
      { lang: "C", langSlug: "c", code: "int* reverseList(int* head, int headSize, int* returnSize) {\n    \n}" }
    ],
    testCases: [
      { label: "Case 1", args: [[1,2,3,4,5]], expected: "[5,4,3,2,1]" },
      { label: "Case 2", args: [[1,2]], expected: "[2,1]" },
      { label: "Case 3", args: [[]], expected: "[]" }
    ]
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string `s`, find the length of the longest substring without repeating characters.\n\n**Example 1:**\nInput: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\", with the length of 3.\n\n**Example 2:**\nInput: s = \"bbbbb\"\nOutput: 1\n\n**Example 3:**\nInput: s = \"pwwkew\"\nOutput: 3",
    difficulty: "Medium",
    points: 100,
    category: "Strings",
    functionName: "lengthOfLongestSubstring",
    codeSnippets: [
      { lang: "JavaScript", langSlug: "javascript", code: "/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLongestSubstring = function(s) {\n    \n};" },
      { lang: "Python", langSlug: "python", code: "class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        " },
      { lang: "Java", langSlug: "java", code: "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int lengthOfLongestSubstring(String s) {\n        \n    }\n}" },
      { lang: "C++", langSlug: "cpp", code: "#include <bits/stdc++.h>\nusing namespace std;\n\nclass Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        \n    }\n};" },
      { lang: "C", langSlug: "c", code: "int lengthOfLongestSubstring(char* s) {\n    \n}" }
    ],
    testCases: [
      { label: "Case 1", args: ["abcabcbb"], expected: "3" },
      { label: "Case 2", args: ["bbbbb"], expected: "1" },
      { label: "Case 3", args: ["pwwkew"], expected: "3" }
    ]
  },
  {
    title: "Valid Parentheses",
    description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n\n**Example 1:**\nInput: s = \"()\"\nOutput: true\n\n**Example 2:**\nInput: s = \"()[]{}\"\nOutput: true\n\n**Example 3:**\nInput: s = \"(]\"\nOutput: false",
    difficulty: "Easy",
    points: 50,
    category: "Stacks",
    functionName: "isValid",
    codeSnippets: [
      { lang: "JavaScript", langSlug: "javascript", code: "/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function(s) {\n    \n};" },
      { lang: "Python", langSlug: "python", code: "class Solution:\n    def isValid(self, s: str) -> bool:\n        " },
      { lang: "Java", langSlug: "java", code: "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public boolean isValid(String s) {\n        \n    }\n}" },
      { lang: "C++", langSlug: "cpp", code: "#include <bits/stdc++.h>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isValid(string s) {\n        \n    }\n};" },
      { lang: "C", langSlug: "c", code: "bool isValid(char* s) {\n    \n}" }
    ],
    testCases: [
      { label: "Case 1", args: ["()"], expected: "true" },
      { label: "Case 2", args: ["()[]{}"], expected: "true" },
      { label: "Case 3", args: ["(]"], expected: "false" }
    ]
  },
  {
    title: "Merge k Sorted Lists",
    description: "You are given an array of `k` sorted lists, each sorted in ascending order.\n\nMerge all the lists into one sorted list and return it.\n\n**Example 1:**\nInput: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]\n\n**Example 2:**\nInput: lists = []\nOutput: []\n\n**Example 3:**\nInput: lists = [[]]\nOutput: []",
    difficulty: "Hard",
    points: 200,
    category: "Heaps",
    functionName: "mergeKLists",
    codeSnippets: [
      { lang: "JavaScript", langSlug: "javascript", code: "/**\n * @param {number[][]} lists\n * @return {number[]}\n */\nvar mergeKLists = function(lists) {\n    \n};" },
      { lang: "Python", langSlug: "python", code: "from typing import List\n\nclass Solution:\n    def mergeKLists(self, lists: List[List[int]]) -> List[int]:\n        " },
      { lang: "Java", langSlug: "java", code: "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] mergeKLists(int[][] lists) {\n        \n    }\n}" },
      { lang: "C++", langSlug: "cpp", code: "#include <bits/stdc++.h>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> mergeKLists(vector<vector<int>>& lists) {\n        \n    }\n};" },
      { lang: "C", langSlug: "c", code: "int* mergeKLists(int** lists, int listsSize, int* listsSizes, int* returnSize) {\n    \n}" }
    ],
    testCases: [
      { label: "Case 1", args: [[[1,4,5],[1,3,4],[2,6]]], expected: "[1,1,2,3,4,4,5,6]" },
      { label: "Case 2", args: [[]], expected: "[]" },
      { label: "Case 3", args: [[[]]], expected: "[]" }
    ]
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Seeding database...');
    
    // Clear existing challenges
    await Challenge.deleteMany({});
    console.log('🧹 Cleared old challenges...');

    // Insert new ones
    await Challenge.insertMany(challenges);
    console.log('✅ Database Seeded with 5 Pro Challenges!');

    // Seed some initial clans
    await Clan.deleteMany({});
    await Clan.insertMany([
      { name: 'Alpha Coders', tag: 'AC', description: 'The elite squad of algorithm masters.' },
      { name: 'Byte Knights', tag: 'BK', description: 'Honour. Code. Conquer.' },
      { name: 'Stack Overlords', tag: 'SO', description: 'We overflow — with solutions.' }
    ]);
    console.log('✅ Database Seeded with 3 Clans!');

    // Seed a default admin user if it doesn't exist
    const adminEmail = 'devmaster@iter.ac.in';
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      await User.create({
        username: 'devmaster',
        email: adminEmail,
        password: 'admin123',
        role: 'admin'
      });
      console.log('✅ Default Admin User created (devmaster@iter.ac.in / admin123)');
    }
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    throw err;
  }
}

if (require.main === module) {
  require('dotenv').config();
  const dns = require('dns');
  dns.setServers(['8.8.8.8', '8.8.4.4']);

  mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
      console.log('🌱 Connected to MongoDB (via Google DNS)...');
      await seedDatabase();
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}

module.exports = { seedDatabase };
