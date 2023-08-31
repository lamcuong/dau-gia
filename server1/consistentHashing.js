
const crypto = require('crypto');
class ConsistentHashing {
    constructor(replicaCount = 3) {
        this.hashRing = new Map();
        this.replicaCount = replicaCount;
    }

    addNode(node) {
        for (let i = 0; i < this.replicaCount; i++) {
            const virtualNode = `${node}-#${i}`;
            const hash = this.getHash(virtualNode);
            this.hashRing.set(hash, node);
        }
    }

    removeNode(node) {
        for (let i = 0; i < this.replicaCount; i++) {
            const virtualNode = `${node}-#${i}`;
            const hash = this.getHash(virtualNode);
            this.hashRing.delete(hash);
        }
    }

    getNode(key) {
        const keyHash = this.getHash(key);
        for (const [hash, value] of this.hashRing.entries()) {
            if (hash >= keyHash) {
                return value;
            }
        }
        return this.hashRing.values().next().value;
    }

    getHash(input) {
        const md5 = crypto.createHash('md5');
        md5.update(input, 'utf8');
        const hashBuffer = md5.digest();
        return hashBuffer.readInt32LE(0);
    }
}
module.exports = ConsistentHashing;

