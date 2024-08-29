import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '8cf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '74f'),
    routes: [
      {
        path: '/docs/architecture/arch',
        component: ComponentCreator('/docs/architecture/arch', '85e'),
        exact: true,
        sidebar: "architecture"
      },
      {
        path: '/docs/assets/nfts/BTTC-NFT-Tutorial',
        component: ComponentCreator('/docs/assets/nfts/BTTC-NFT-Tutorial', '6a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/assets/tokens/gastoken-btt',
        component: ComponentCreator('/docs/assets/tokens/gastoken-btt', '830'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/assets/tokens/mappedtokens',
        component: ComponentCreator('/docs/assets/tokens/mappedtokens', '0b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-accounts',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-accounts', '2f0'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-blockchain',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-blockchain', '5f9'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-blockchain-types',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-blockchain-types', 'f32'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-consensus-mechanism',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-consensus-mechanism', '4cf'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-ethereum',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-ethereum', '669'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-gas',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-gas', '72c'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-solidity',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-solidity', 'c23'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/blockchain-basics/basics-transactions',
        component: ComponentCreator('/docs/basics/blockchain-basics/basics-transactions', 'e91'),
        exact: true
      },
      {
        path: '/docs/basics/bttc-basics/bttc-pos-architecture',
        component: ComponentCreator('/docs/basics/bttc-basics/bttc-pos-architecture', '20b'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/bttc-basics/what-is-bttc',
        component: ComponentCreator('/docs/basics/bttc-basics/what-is-bttc', '09c'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/bttc-basics/what-is-proof-of-stake',
        component: ComponentCreator('/docs/basics/bttc-basics/what-is-proof-of-stake', '6b8'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/bttc-basics/who-is-a-delegator',
        component: ComponentCreator('/docs/basics/bttc-basics/who-is-a-delegator', '5e8'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/basics/bttc-basics/who-is-a-validator',
        component: ComponentCreator('/docs/basics/bttc-basics/who-is-a-validator', '067'),
        exact: true,
        sidebar: "basics"
      },
      {
        path: '/docs/bridge/asset-map',
        component: ComponentCreator('/docs/bridge/asset-map', '188'),
        exact: true
      },
      {
        path: '/docs/bridge/assets-mapping',
        component: ComponentCreator('/docs/bridge/assets-mapping', 'a3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/deposit-and-withdraw',
        component: ComponentCreator('/docs/bridge/deposit-and-withdraw', 'beb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/deposit-checkpoint-event-tracking',
        component: ComponentCreator('/docs/bridge/deposit-checkpoint-event-tracking', '136'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/overview',
        component: ComponentCreator('/docs/bridge/overview', 'e7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/',
        component: ComponentCreator('/docs/bridge/relayer/', '757'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/relayerdeploy',
        component: ComponentCreator('/docs/bridge/relayer/relayerdeploy', '4dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/relayerdeposit',
        component: ComponentCreator('/docs/bridge/relayer/relayerdeposit', 'bcf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/relayerguide',
        component: ComponentCreator('/docs/bridge/relayer/relayerguide', '61d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/relayermodifyinfo',
        component: ComponentCreator('/docs/bridge/relayer/relayermodifyinfo', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/relayerreservegasfee',
        component: ComponentCreator('/docs/bridge/relayer/relayerreservegasfee', '816'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/relayer/relayerwithdraw',
        component: ComponentCreator('/docs/bridge/relayer/relayerwithdraw', 'd8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/bridge/state-transfer',
        component: ComponentCreator('/docs/bridge/state-transfer', 'a07'),
        exact: true
      },
      {
        path: '/docs/category/assets',
        component: ComponentCreator('/docs/category/assets', 'f2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/nfts',
        component: ComponentCreator('/docs/category/nfts', '5fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/relayer',
        component: ComponentCreator('/docs/category/relayer', 'ed4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tokens',
        component: ComponentCreator('/docs/category/tokens', '0b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contribute/guidelines',
        component: ComponentCreator('/docs/contribute/guidelines', 'dbf'),
        exact: true,
        sidebar: "contribute"
      },
      {
        path: '/docs/delegator/contract',
        component: ComponentCreator('/docs/delegator/contract', '881'),
        exact: true,
        sidebar: "delegator"
      },
      {
        path: '/docs/delegator/how-to-delegate',
        component: ComponentCreator('/docs/delegator/how-to-delegate', '424'),
        exact: true,
        sidebar: "delegator"
      },
      {
        path: '/docs/faq',
        component: ComponentCreator('/docs/faq', 'e60'),
        exact: true
      },
      {
        path: '/docs/faq/delegate-faq',
        component: ComponentCreator('/docs/faq/delegate-faq', 'cde'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/docs/faq/general-faq',
        component: ComponentCreator('/docs/faq/general-faq', '4c3'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/docs/faq/staking-faq',
        component: ComponentCreator('/docs/faq/staking-faq', 'eb2'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/docs/faq/technical-faq',
        component: ComponentCreator('/docs/faq/technical-faq', '7a9'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/docs/faq/validator-faq',
        component: ComponentCreator('/docs/faq/validator-faq', 'df5'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/docs/governance/govern',
        component: ComponentCreator('/docs/governance/govern', '4af'),
        exact: true,
        sidebar: "governanceSidebar"
      },
      {
        path: '/docs/greeting',
        component: ComponentCreator('/docs/greeting', '59a'),
        exact: true
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'e84'),
        exact: true
      },
      {
        path: '/docs/networks/network',
        component: ComponentCreator('/docs/networks/network', '019'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/node/build-fullnode',
        component: ComponentCreator('/docs/node/build-fullnode', '9eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/node/build-validator-node',
        component: ComponentCreator('/docs/node/build-validator-node', '128'),
        exact: true
      },
      {
        path: '/docs/node/snapshot',
        component: ComponentCreator('/docs/node/snapshot', '7c2'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/oracles/getting-started',
        component: ComponentCreator('/docs/oracles/getting-started', '217'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/quickstart',
        component: ComponentCreator('/docs/quickstart', 'e30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/smartcontract/deploy-contracts',
        component: ComponentCreator('/docs/smartcontract/deploy-contracts', 'a16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/smartcontract/genesis-contracts',
        component: ComponentCreator('/docs/smartcontract/genesis-contracts', '89e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/storage/btfs',
        component: ComponentCreator('/docs/storage/btfs', '073'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/storage/ipfs',
        component: ComponentCreator('/docs/storage/ipfs', 'cf9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'd64'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '16a'),
        exact: true
      },
      {
        path: '/docs/tutorial/build-web3-app',
        component: ComponentCreator('/docs/tutorial/build-web3-app', '401'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/quick-migration-guide-for-ethereum-dApp',
        component: ComponentCreator('/docs/tutorial/quick-migration-guide-for-ethereum-dApp', 'd51'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/validator/build-validator-node',
        component: ComponentCreator('/docs/validator/build-validator-node', '818'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/change-signer-address',
        component: ComponentCreator('/docs/validator/change-signer-address', 'f5d'),
        exact: true
      },
      {
        path: '/docs/validator/core-components/bttc-layer',
        component: ComponentCreator('/docs/validator/core-components/bttc-layer', '6db'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/checkpoint',
        component: ComponentCreator('/docs/validator/core-components/checkpoint', 'd19'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/delivery-layer',
        component: ComponentCreator('/docs/validator/core-components/delivery-layer', '426'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/derivatives',
        component: ComponentCreator('/docs/validator/core-components/derivatives', '921'),
        exact: true
      },
      {
        path: '/docs/validator/core-components/key-management',
        component: ComponentCreator('/docs/validator/core-components/key-management', '9e0'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/proposer-bonus',
        component: ComponentCreator('/docs/validator/core-components/proposer-bonus', 'ae9'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/proposer-producer-selection',
        component: ComponentCreator('/docs/validator/core-components/proposer-producer-selection', 'a4e'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/staking',
        component: ComponentCreator('/docs/validator/core-components/staking', 'a21'),
        exact: true
      },
      {
        path: '/docs/validator/core-components/state-sync-mechanism',
        component: ComponentCreator('/docs/validator/core-components/state-sync-mechanism', '423'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/core-components/transaction-fees',
        component: ComponentCreator('/docs/validator/core-components/transaction-fees', '959'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/getting-started',
        component: ComponentCreator('/docs/validator/getting-started', '92b'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/glossary',
        component: ComponentCreator('/docs/validator/glossary', 'eca'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/overview',
        component: ComponentCreator('/docs/validator/overview', 'e74'),
        exact: true
      },
      {
        path: '/docs/validator/port_management',
        component: ComponentCreator('/docs/validator/port_management', '05b'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/responsibilities',
        component: ComponentCreator('/docs/validator/responsibilities', '8c2'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/rewards',
        component: ComponentCreator('/docs/validator/rewards', '1e2'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/staking',
        component: ComponentCreator('/docs/validator/staking', '619'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/validator/validator-commission-operations',
        component: ComponentCreator('/docs/validator/validator-commission-operations', 'a49'),
        exact: true,
        sidebar: "validatorSidebar"
      },
      {
        path: '/docs/wallet',
        component: ComponentCreator('/docs/wallet', '479'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '878'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
