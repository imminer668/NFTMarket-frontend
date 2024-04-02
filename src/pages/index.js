import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useWeb3Modal } from "@web3modal/ethers/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { open } = useWeb3Modal();
  return (
    <>
      <img src="/bg.gif" className="background" alt="" />
    </>
  );
}
