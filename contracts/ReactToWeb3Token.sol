// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ReactToWeb3Token is ERC20 {
    constructor()
        ERC20("ReactToWeb3Token", "R2W3")
    {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function giveMeMore(address _address) public {
        _mint(_address, 100 * 10 ** decimals());
    }
}
