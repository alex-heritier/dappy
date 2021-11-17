pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    address private ownerAddress;

    modifier onlyOwner() {
        require(msg.sender == ownerAddress, "Only the owner can mint new tokens");
        _;
    }

    constructor(address _ownerAddress) ERC20("Dappy Token", "DAPPY") {
        ownerAddress = _ownerAddress;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}