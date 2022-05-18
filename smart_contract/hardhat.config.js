// https://eth-ropsten.alchemyapi.io/v2/MmYfJ7-6meyaOHmpEy-AGyDqq5ZuxVib

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/MmYfJ7-6meyaOHmpEy-AGyDqq5ZuxVib',
      accounts: [ '5acfce8b4b01bc144a9a3eab8273b62b43dff96154b9cfb069fa411bc53857fe' ]
    }
  }
}