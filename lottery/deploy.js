const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile'); // only one dot

const provider = new HDWalletProvider(
    'imitate menu carry ramp trick immense shoe require devote grant media need',
    'https://rinkeby.infura.io/cjg6wcwpcP06njVXemrR'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attemping to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};
deploy();

// $ node deploy.js
// Attemping to deploy from account 0xA6B65cbD25950243c71933BDE92568831297b375
// Contract deployed to  0xbAf778E30A7b31b67d936A5c26196469e8c454b2