import "./App.css"
import "./styles/home.css"
import Header from "./components/Header"
import Hometop from "./components/Hometop"
import Nftpanel from "./components/Nftpanel"

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { mainnet, polygon, optimism, arbitrum, polygonMumbai, goerli} from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai, goerli],
  [
    alchemyProvider({ apiKey: "M6wTJ_1DsrJkSUE0qusDZO96oASJC8xS" }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: "RainbowKit Test",
  chains
})

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          <Header />
          <Hometop />
          <Nftpanel />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
