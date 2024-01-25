import React from "react";
import * as ST from "./styled/styled";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface FilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onFilterChange }) => {
  return (
    <ST.Filter>
      <ButtonAtom
        type={ButtonEnum.enum_filterButton}
        margin="0 5px 0 0"
        onClick={() => onFilterChange("all")} // Handle "All" click
        active={selectedFilter === "all"} // Ensure "All" button is active
      >
        <TextAtom
          type={TextEnum.enum_Text_H6}
          fontSize="12px"
          fontWeight="400"
          color={Colors.GRAY}
        >
          Все
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_filterButton}
        margin="0 5px 0 0"
        onClick={() => onFilterChange("hits")}
        active={selectedFilter === "hits"}
      >
        <TextAtom
          type={TextEnum.enum_Text_H6}
          fontSize="12px"
          fontWeight="400"
          color={Colors.GRAY}
        >
          Хиты продаж
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_filterButton}
        margin="0 5px 0 0"
        onClick={() => onFilterChange("city")}
        active={selectedFilter === "city"}
      >
        <TextAtom
          type={TextEnum.enum_Text_H6}
          fontSize="12px"
          fontWeight="400"
          color={Colors.GRAY}
        >
          Для города
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_filterButton}
        margin="0 5px 0 0"
        onClick={() => onFilterChange("adults")}
        active={selectedFilter === "adults"}
      >
        <TextAtom
          type={TextEnum.enum_Text_H6}
          fontSize="12px"
          fontWeight="400"
          color={Colors.GRAY}
        >
          Для взрослых
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_filterButton}
        onClick={() => onFilterChange("children")}
        active={selectedFilter === "children"}
      >
        <TextAtom
          type={TextEnum.enum_Text_H6}
          fontSize="12px"
          fontWeight="400"
          color={Colors.GRAY}
        >
          Для детей
        </TextAtom>
      </ButtonAtom>
    </ST.Filter>
  );
};
export default Filter;
