
class Node {
  constructor() {
    // should have a given data property called "data"
    // should have a reference to the next node called "next", initialized to null
  }
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {
  constructor(){
    // initialize a "head" property to null
  }
  add(key){
    // create a new node with the given key as its value 
    // add it to end of the list
  }
  delete(key){
    // remove the Xth node from the list, considering 0 to be the first node
  }
  search(key){
    // searches the list for a given key
    // if it is found, return the node 
    // if not, return false
  }  
}

class HashTable {
  constructor(size) {
    // initialize table size
    // intialize the table to have "size" number of elements, set to null
  }

  hash(key) {
    // calculate and return an integer value based key, like in the lesson
    // if you are using modulus, it is recommended to use a prime number to avoid clustering
  }

  insert(key, value) {
    // hash the key key to get an integer index
    // if there's no linked list at index, add one
    // add the key to the end of the linked list
    // for the convenience of the user, you might wish to return the node, or you can just return true

    // NOTE: value is optional
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    // if the key is, in fact, in the linked list, delete it and return it
    // if the key wasn't found return false
  }

  search(key) {
    // hash key to get index
    // search the linked list at the index
    // if the key is found, return the Node
    // if not, return false
  }

}


module.exports = {
  Node,
  LinkedList,
  HashTable
}
