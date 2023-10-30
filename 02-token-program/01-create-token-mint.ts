import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("BpD19DD33Wxg721hNk4yueCn5ruP4MK3jKrk5kPw3W6h")
const decoded = base58.decode('3dYUMGzAHzTVLRqR9Us5WDJ2HiMDCMRc8BohxeQvCZZdwAtPYm3QJHTWAoCQSv6KjMk8shvvFL9nF5ivpNb3K7N5')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();