import { connectWallet } from "./web3.js";
import { getVestedAmount, claimTokens } from "./vesting.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Wallet connected";
};

document.getElementById("checkBtn").onclick = async () => {
  const amount = await getVestedAmount();
  document.getElementById("status").innerText = "Vested: " + amount;
};

document.getElementById("claimBtn").onclick = async () => {
  await claimTokens();
  alert("Tokens claimed");
};
