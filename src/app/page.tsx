import Image from "next/image";
import SubMain from "./user.InterfaceLayer/Components/SubMain/SubMain";
import CardsBlock from "./user.InterfaceLayer/Components/CardsBlock/CardsBlock";

export default function Home() {
  return (
    <main>
      <SubMain />
      <CardsBlock />
    </main>
  );
}
