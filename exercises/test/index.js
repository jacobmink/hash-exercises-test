const expect = require('chai').expect;
const { HashTable } = require('../HashTable');

describe('hash table', ()=>{
    it('should initialize with a given table size', ()=>{
        let hashTable = new HashTable(5);
        expect(hashTable.table.length).to.equal(5);
    });
    it('should intialize a table full of null values', ()=>{
        let hashTable = new HashTable(3);
        hashTable.table.forEach((tableIndex)=>{
            expect(tableIndex).to.be.null;
        })
    });
    it('should return an integer key from hashing', ()=>{
        let hashTable = new HashTable(7);
        let hashResult = hashTable.hash("marmalade");
        expect(typeof hashResult).to.equal("number");
    });
    it("should create Linked Lists for inserting elements", ()=>{
        let hashTable = new HashTable(3);
        hashTable.insert("hashing time");
        hashTable.table.forEach((tableEntry)=>{
            if(tableEntry){
                expect(tableEntry.head.data).to.equal("hashing time");
            }else{
                expect(tableEntry).to.be.null;
            }
        });
    });
    it("should be able to successfully search for inserted elements", ()=>{
        let hashTable = new HashTable(3);
        hashTable.insert("hashing time");
        const foundNode = hashTable.search("hashing time");
        expect(foundNode.data).to.equal("hashing time");
    });
    it("should return false on unfound elements with search", ()=>{
        let hashTable = new HashTable(3);
        hashTable.insert("hashing time");
        const missingNode = hashTable.search("hash the planet");
        expect(missingNode).to.be.false;
    });
    it("should successfully delete and return elements", ()=>{
        let hashTable = new HashTable(3);
        hashTable.insert("hashing time");
        hashTable.insert("red shirt");
        const casualty = hashTable.delete("red shirt");
        expect(casualty.data).to.equal("red shirt");
        expect(hashTable.search("red shirt")).to.be.false;
    });
    it("should return false when attempting to delete  non-existent elements", ()=>{
        let hashTable = new HashTable(3);
        hashTable.insert("a safe node");
        expect(hashTable.delete("a doomed node")).to.be.false;
    });
})