import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const token = "0x4b2cc2A34b5d0c82084f4Bb1C6caFEd6b5Bf06d4";

const CrowdFundModule = buildModule("CrowdFundModule", (m) => {
  const crowdFund = m.contract("CrowdFund", [token]);
  return { crowdFund };
});

export default CrowdFundModule;
