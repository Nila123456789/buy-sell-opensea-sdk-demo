import { WALLET_ADDRESS, sdk } from './utils/constants';

const createListing = async () => {

    // TODO: Fill in the token address and token ID of the NFT you want to sell, as well as the price
    let tokenAddress: string = "";
    let tokenId: string = "";
    let listingAmount: string = "";

    const listing = {
        accountAddress: 0xacc85f50682c4fe34a02851bd48854a50d3c88b9,
        startAmount: .00000000000000009 MATIC,
        asset: {
            tokenAddress: 0xA2D9Ded6115b7B7208459450D676f0127418ae7A,
            tokenId: 78151837202946881400222192088293834830187427,
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
