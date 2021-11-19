import React, { CSSProperties, MouseEventHandler, useState } from "react";
import { ToolConfig } from "../enums/Tool";

type Props = {
  tool: ToolConfig;
  key: string;
  overlay: JSX.Element;
  trigger: Array<'click' | 'hover'>;
  isCurrent: boolean;
  children: JSX.Element | Array<JSX.Element>;
};

function Dropdown(props: Props) {
  console.log('DROPDOWN', props);
  const { children, overlay, isCurrent } = props;
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const stopPropagation: MouseEventHandler = (e) => e.stopPropagation();

  const menuStyle: CSSProperties = {
    position: 'absolute',
    top: 56,
  };

  const settingMenu = (
    <div style={menuStyle} onMouseDown={stopPropagation}>
      {overlay}
    </div>
  );

  const wrapperStyle: CSSProperties = { position: 'relative' };

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      {children}
      {isDropdownVisible ? settingMenu : null}
    </div>

  );
}

export { Dropdown };
