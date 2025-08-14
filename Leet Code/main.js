class TrieNode {
  constructor() {
    this.children = {};      // Map of character → TrieNode
    this.isEndOfWord = false; // Marks end of a valid word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    debugger
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    debugger
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    debugger
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}


const trie = new Trie();
trie.insert("hello");
trie.insert("hell");
trie.insert("heaven");
trie.insert("heavy");

console.log(trie.search("hell"));     // true
console.log(trie.search("he"));       // false
console.log(trie.startsWith("he"));   // true
console.log(trie.startsWith("hea"));  // true


function toHash(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash;
}

console.log(toHash("Venky")); 