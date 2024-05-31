import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const token = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const CrowdFundModule = buildModule("CrowdFundModule", (m) => {
  const crowdFund = m.contract("CrowdFund", [token]);
  return { crowdFund };
});

export default CrowdFundModule;
