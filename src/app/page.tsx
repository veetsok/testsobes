import SubMain from "./user.InterfaceLayer/Components/SubMain/SubMain";
import CardsBlock from "./user.InterfaceLayer/Components/CardsBlock/CardsBlock";
import Selections from "./user.InterfaceLayer/Components/Selections/Selections";
import DeliveryBlock from "./user.InterfaceLayer/Components/DeliveryBlock/DeliveryBlock";

export default function Home() {
  return (
    <main>
      <SubMain />
      <CardsBlock />
      <Selections />
      <DeliveryBlock />
    </main>
  );
}
