import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ReactToWeb3Token = buildModule("ReactToWeb3Token", (m) => {
  const r2w3 = m.contract("ReactToWeb3Token");
  return { r2w3 };
});

export default ReactToWeb3Token;
