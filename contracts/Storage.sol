// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
  string public bankName;
  string public bankAddress;
  mapping(address => uint256) public balances;
  mapping(address => mapping(address => bool)) public approvals;
  uint256 public counter;
  bool public open = false;
  address private immutable admin;

  constructor() {
    bankName = "Stallion Bank";
    bankAddress = "34 Ketu road, Lagos, Nigeria";
    admin = msg.sender;
  }

  function changeBankName(string memory _newName) public {
    bankName = _newName;
  }

  function incrementCounter(uint256 value) public {
    counter += value;
  }
}