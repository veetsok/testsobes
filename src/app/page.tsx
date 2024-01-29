import SubMain from "./user.InterfaceLayer/Components/SubMain/SubMain";
import CardsBlock from "./user.InterfaceLayer/Components/CardsBlock/CardsBlock";
import Selections from "./user.InterfaceLayer/Components/Selections/Selections";
import DeliveryBlock from "./user.InterfaceLayer/Components/DeliveryBlock/DeliveryBlock";
import Reviews from "./user.InterfaceLayer/Components/Reviews/Reviews";
import SliderBlock from "./user.InterfaceLayer/Components/SliderBlock/SliderBlock";

export default function Home() {
  return (
    <main>
      <SliderBlock />
      <SubMain />
      <CardsBlock />
      <Selections />
      <DeliveryBlock />
      <Reviews />
    </main>
  );
}
