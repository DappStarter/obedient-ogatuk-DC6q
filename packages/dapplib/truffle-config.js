require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember undo gesture photo food ghost'; 
let testAccounts = [
"0x7ab4b3987410d3b15dee8da224b7f5ecc4c59001c66ecaeaffc3acee8328fc4f",
"0xb46a3310a3971122deff1e63646cf1c69d64bddbf1a5f04e2ff82740a9fc6c76",
"0xb20816212debeaf8d1b98b7930d481f53dc1fc7cb7f5a1d5bc2f62fd8988bae5",
"0x150f5d234d07940aa0646282bdad88bfce41ce27716309e0624847ee2bbae8dd",
"0xfe8e2c0cda772f456632343f1c8340b2055fabe08c66e08b365df206d444490e",
"0x84834aaf558de557f6dd29ac9eee955c08b29e728461cdbfd13f1bdca33b4d36",
"0x4c77910033cfa7999f76d902d0a506c3611d07620d557114a73b3cb4e4495093",
"0x74a327c8f66456b0c3d2a633666f5dfe6298ac4d69de40d85f6abdcaf051782e",
"0x4384e0f692c26678bd6d0d73c265c6818844cfdc9d26a548253764e54b4cf144",
"0xbbe7767f6ec79b37b5199aa8bb09648813783f3b68e243527b11f5113302bbe2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


