import React, { FC } from 'react';

const PanIcon: FC = (props) => {
  return (
    <svg
      fill="#000000"
      height="800px"
      width="800px"
      version="1.1"
      viewBox="-15 -15 600 600"
      {...props}
    >
      <g>
        <path
          d="M382.5,69.429c-7.441,0-14.5,1.646-20.852,4.573c-4.309-23.218-24.7-40.859-49.148-40.859
		c-7.68,0-14.958,1.744-21.467,4.852C285.641,16.205,265.932,0,242.5,0c-23.432,0-43.141,16.206-48.533,37.995
		c-6.508-3.107-13.787-4.852-21.467-4.852c-27.57,0-50,22.43-50,50v122.222c-6.129-2.686-12.891-4.187-20-4.187
		c-27.57,0-50,22.43-50,50V354c0,72.233,58.766,131,131,131h118c72.233,0,131-58.767,131-131V119.429
		C432.5,91.858,410.07,69.429,382.5,69.429z M402.5,354c0,55.691-45.309,101-101,101h-118c-55.691,0-101-45.309-101-101V251.178
		c0-11.028,8.972-20,20-20s20,8.972,20,20v80h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30V50
		c0-11.028,8.972-20,20-20c11.028,0,20,8.972,20,20v191.178h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30v-121.75
		c0-11.028,8.972-20,20-20s20,8.972,20,20V354z"
        ></path>
      </g>
    </svg>
  );
};

export default PanIcon;
