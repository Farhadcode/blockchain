const value = require("crypto-js/sha224");
class Block {
    constructor(timestamp, data, previousHash = "") {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return value(
            this.timestamp + JSON.stringify(this.data) + this.previousHash
        ).toString();
    }
}

class BalockChine {
    constructor() {
        this.chain = [this.generateGenesisBlock()];
    }

    generateGenesisBlock() {
        return new Block("2019-01-01", "GENESIS", "000000");

    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }


    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    //validation chaceing

    // isBlockchinValid() {
    //     for (let i = 0; i < this.chain.length; i++) {
    //         const currentBlock = this.chain[i];
    //         const previousBlock = this.chain[i - 1];


    //         if (currentBlock.hash !== currentBlock.calculateHash()) {
    //             return false;
    //         }
    //         if (currentBlock.previousHash !== previousBlock.hash) {
    //             return false
    //         }

    //     }

    //     return true;
    // }
}






const fcoin = new BalockChine();
const block = new Block("2019-01-01", { number: 6 });


fcoin.addBlock(block);
console.log(fcoin);

fcoin.chain[1].data = "farhd";
console.log(fcoin);