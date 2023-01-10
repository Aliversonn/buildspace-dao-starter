import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x897328a3B2cf96A6e28699fD5DFC2BF9c8D639ac", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Access Ticket",
        description: "This NFT will give you access to ibsDAO!",
        image: readFileSync("scripts/assets/ticket.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();