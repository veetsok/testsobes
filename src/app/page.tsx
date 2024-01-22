import Image from "next/image";
import HeaderBar from "./user.InterfaceLayer/Components/HeaderBar/HeaderBar";
import SubMain from "./user.InterfaceLayer/Components/SubMain/SubMain";
import FooterBar from "./user.InterfaceLayer/Components/FooterBar/FooterBar";

export default function Home() {
  return (
    <main>
      <HeaderBar />
      <SubMain />
      <FooterBar />
    </main>
  );
}
