import baseRelationConfig from '../../relations';

export default {
  ...baseRelationConfig,
  // USDC / USD price feed
  '0x683Ae71AFB633385e64a7968435210d1aadbe29D': {
    artifact: 'contracts/IPriceFeed.sol:IPriceFeed'
  },
  // WBTC / USD price feed
  '0x5EF17889992f6d9daCEb03db9822AA5b6fDd6713': {
    artifact: 'contracts/IPriceFeed.sol:IPriceFeed'
  },
  // WETH / USD price feed
  '0x132e2459498CFfb3f767d508066bf1dF0549D59C': {
    artifact: 'contracts/IPriceFeed.sol:IPriceFeed'
  },
  fxRoot: {
    relations: {
      stateSender: {
        field: async fxRoot => fxRoot.stateSender()
      }
    }
  },
  arbitrumInbox: {
    delegates: {
      field: {
        slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
      }
    },
    relations: {
      arbitrumBridge: {
        field: async inbox => inbox.bridge()
      }
    }
  },
  arbitrumL1GatewayRouter: {
    delegates: {
      field: {
        slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
      }
    }
  },
  baseL1CrossDomainMessenger: {
    delegates: {
      // Not great, but this address shouldn't change and is very difficult to grab on-chain (private methods)
      field: async () => '0xa042e16781484716c1Ef448c919af7BCd9607467'
    }
  },
  baseL1StandardBridge: {
    delegates: {
      field: {
        slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
      }
    }
  },
  lineaMessageService: {
    artifact: 'contracts/bridges/linea/IMessageService.sol:IMessageService',
    // delegates: {
    //   field: {
    //     slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
    //   }
    // }
  },
  lineaL1TokenBridge: {
    delegates: {
      field: {
        slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
      }
    }
  },
  lineaL1usdcBridge: {
    delegates: {
      field: {
        slot: '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
      }
    }
  }
};
