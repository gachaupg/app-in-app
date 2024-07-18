import {
  bitcoin,
  createAccount,
  erc20,
  fxPrimus,
  icmCapital,
  identity,
  perfectMoney,
  startExchanging,
  transferMoney,
  trc20,
} from "../../assets";

export const setupData = [
  {
    id: 1,
    img: createAccount,
    title: "Create account",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: identity,
    title: "verify identity",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: transferMoney,
    title: "Transfer Money",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    img: startExchanging,
    title: "Start Exchanging",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const coinsOffered = [
  {
    id: 1,
    name: "FXPRIMUS",
    img: fxPrimus,
  },
  {
    id: 2,
    name: "Perfect Money",
    img: perfectMoney,
  },
  {
    id: 3,
    name: "USDT Tether(ERC20)",
    img: erc20,
  },
  {
    id: 4,
    name: "Bitcoin",
    img: bitcoin,
  },
  {
    id: 5,
    name: "USDT Tether(TRC20)",
    img: trc20,
  },
  {
    id: 6,
    name: "ICM Capital",
    img: icmCapital,
  },
];
