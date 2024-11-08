import { useContext } from "react";
import CryptoContext from "./crypto-сontext";

export function useCrypto(){
    return useContext(CryptoContext)
  }