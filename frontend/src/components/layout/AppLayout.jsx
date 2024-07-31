import { Layout, Spin } from "antd";
import AppHeader from "./AppHeader";
import AppSideer from "./AppSider";
import AppContent from "./AppContent";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-сontext";

export default function AppLayout(){
    const {loading} = useContext(CryptoContext)
    if (loading) {
        return <Spin fullscreen />;
      }

    return(
        <Layout>
        <AppHeader />
        <Layout>
          <AppSideer />
          <AppContent />
        </Layout>
      </Layout>
    )
}