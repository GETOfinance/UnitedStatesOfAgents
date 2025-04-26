import {
    createConfig,
    WagmiProvider,
} from 'wagmi';
import { http } from 'viem';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';

// Define Sei EVM Testnet
const seiTestnet = {
  id: 1328,
  name: 'Sei EVM Testnet (Atlantic-2)',
  network: 'seiTestnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Sei',
    symbol: 'SEI',
  },
  blockExplorers: {
    default: { name: 'SeiTrace', url: 'https://seitrace.com/?chain=atlantic-2' },
  },
  rpcUrls: {
    default: { http: ['https://evm-rpc-testnet.sei-apis.com'] },
    public: { http: ['https://evm-rpc-testnet.sei-apis.com'] },
  },
} as const;

export const config = createConfig({
    chains: [seiTestnet],
    multiInjectedProviderDiscovery: false,
    connectors: [
        injected(),
        metaMask(),
        safe(),
    ],
    transports: {
        [seiTestnet.id]: http("https://evm-rpc-testnet.sei-apis.com"),
    },
});