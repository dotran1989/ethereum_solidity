const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor
const web3 = new Web3(ganache.provider());

/* class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car; // reassign

beforeEach(() => {
    car = new Car();
})

describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    })

    it('can drive', () => {
        assert.equal(car.drive(), "vroom");
    })
}); */

beforeEach(() => {
    // get a list of all accounts
    web3.eth.getAccounts().then(fetchedAccounts => {
        console.log(fetchedAccounts);
    })
});

describe('Inbox', () => {
    it('deploys a contract', () => {})
})