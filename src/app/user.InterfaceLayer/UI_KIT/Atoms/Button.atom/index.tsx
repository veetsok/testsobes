import React from "react";

import * as ST from "./styled/styled";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import { ButtonStyleProps, ButtonType } from "./type";

const Button: React.FC<ButtonType & ButtonStyleProps> = (props) => {
  const { children, onClick, active, type, isLoading, ...otherProps } = props;
  if (isLoading) return <>Loading</>;
  switch (type) {
    case ButtonEnum.enum_defaultButton: {
      return (
        <ST.DefaultButton
          onClick={onClick}
          isLoading={isLoading}
          active={active}
          {...otherProps}
        >
          {children}
        </ST.DefaultButton>
      );
    }
    case ButtonEnum.enum_filterButton: {
      return (
        <ST.FilterButton
          onClick={onClick}
          isLoading={isLoading}
          active={active}
          {...otherProps}
        >
          {children}
        </ST.FilterButton>
      );
    }
    case ButtonEnum.enum_equipmentButton: {
      return (
        <ST.EquipmentButton
          onClick={onClick}
          isLoading={isLoading}
          active={active}
          {...otherProps}
        >
          {children}
        </ST.EquipmentButton>
      );
    }
    default: {
      return <ST.Button>Ошибка</ST.Button>;
    }
  }
};

Button.defaultProps = IButtonPropsDefault;
export default React.memo(Button);
