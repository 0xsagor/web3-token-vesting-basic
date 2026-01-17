import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const vestingAddress = "0xYourVestingContract";
const abi = [];

export async function getVestedAmount() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(vestingAddress, abi, signer);
  return await contract.vestedAmount(signer.address);
}

export async function claimTokens() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(vestingAddress, abi, signer);
  await contract.claim();
}
