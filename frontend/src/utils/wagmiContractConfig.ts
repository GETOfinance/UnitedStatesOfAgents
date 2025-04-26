import NetworkState from "./NetworkState.json"
import USA from "./USA.json"

export const networkStateContractConfig = {
    address: '0x930C594144D4b20471FCe94b2ba69336492Fd4e3',
    abi: NetworkState.abi,
} as const

export const tokenContractConfig = {
    address: '0xf879432b14B4635fC1aDEfa0C0555B9db60936C6',
    abi: USA.abi,
} as const