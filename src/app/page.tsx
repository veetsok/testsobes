import Image from "next/image";
import HeaderBar from "./user.InterfaceLayer/Components/HeaderBar/HeaderBar";
import SubMain from "./user.InterfaceLayer/Components/SubMain/SubMain";

export default function Home() {
  return (
    <main>
      <HeaderBar />
      <SubMain />
    </main>
  );
}
