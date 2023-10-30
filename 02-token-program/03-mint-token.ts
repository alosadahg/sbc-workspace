import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'

import base58 from 'bs58';
async function main(){

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const base58DecodedPK = base58.decode('3dYUMGzAHzTVLRqR9Us5WDJ2HiMDCMRc8BohxeQvCZZdwAtPYm3QJHTWAoCQSv6KjMk8shvvFL9nF5ivpNb3K7N5');
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK);

    const mintToken = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('85QwrFcsDbHKDa3aSe7gJqhFa9hz2VpSomGhAFwRkueZ'), //mint 
        new Web3.PublicKey('86V7cCCrf6jC66A5XhuJ5zK6xv6SbtHfrXA6PpwRErzf'), //owner
        new Web3.PublicKey('BpD19DD33Wxg721hNk4yueCn5ruP4MK3jKrk5kPw3W6h'), //authority
        100000000000, //amount
    )
    console.log('mint Token ', mintToken)

}
main()