require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot custom dash payment upgrade hope civil army genuine'; 
let testAccounts = [
"0x25782e08d0a2d356c5e9f26c52ce2109aa697304852285507902d338b5d74eee",
"0x1970b8ca00ac8c0c7cf6a185744a6e6bb0365a80829959d6cdec9bb18b2a9fd5",
"0xed9fea5299d64e6b26713d6152f720bf75dcf753fb20890a78f3c8f247e0b0c3",
"0xdb2ab6d2dd0706619020925b01c848f611b6b1fd3ef38a0d3608aa98dc8c9fde",
"0xc7f7e131dd99345393af731e8e3d34888fbfa87513940060c361f0b9277946c9",
"0x6db4d33206d64c542ace38486ad8627f3e4daa86b324cbbb66e57992e0fc815e",
"0x022b0fcf366cb570f562f22137a6c41e984ed04ae8aec09db6e18f32fce5d566",
"0xf38227b3376c501cd5277ef183d94dfb66db805e6b55b4f5b01f89c448aeace1",
"0xe2f06351a6470501875a1bbe6a8bf3fd643db5d957cd03bce755c66364cc7022",
"0x61138fca08a52dea0a1a408a7e270ed6ef7364efa674458823f1bd37231baeac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

