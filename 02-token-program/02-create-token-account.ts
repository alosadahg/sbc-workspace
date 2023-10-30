import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("BJbpbbsgBrtGLSWmjbNWMeLfF24wV2K2WQi4TgzaiPAj")
const decoded = base58.decode('3dYUMGzAHzTVLRqR9Us5WDJ2HiMDCMRc8BohxeQvCZZdwAtPYm3QJHTWAoCQSv6KjMk8shvvFL9nF5ivpNb3K7N5')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "85QwrFcsDbHKDa3aSe7gJqhFa9hz2VpSomGhAFwRkueZ"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();