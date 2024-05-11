import { WALLET_ADDRESS, sdk } from './utils/constants';

const createListing = async () => {

    // TODO: Fill in the token address and token ID of the NFT you want to sell, as well as the price
    let tokenAddress: string = "0xA2D9Ded6115b7B7208459450D676f0127418ae7A";
    let tokenId: string = "7815183720294688140022219208829383483";
    let listingAmount: string = ".000000000000000009 MATIC";

    const listing = {
        accountAddress: WALLET_ADDRESS,0xacc...88b9
        startAmount: listingAmount,.000000000000000009 MATIC
        asset: {
            tokenAddress: tokenAddress,0xA2D9Ded6115b7B7208459450D676f0127418ae7A
            tokenId: tokenId,7815183720294688140022219208829383483
        },
    };

    try {
        const response = await sdk.createListing(listing);
        console.log("Successfully created a listing with orderHash:", response.orderHash);
    } catch (error) {
        console.error("Error in createListing:", error);
    }
}

// Check if the module is the main entry point
if (require.main === module) {
    // If yes, run the createOffer function
    createListing().catch((error) => {
        console.error("Error in createListing:", error);
    });
}

export default createListing;
