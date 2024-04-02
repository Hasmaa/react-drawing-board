import React from 'react';
import { Position } from './enums/Tool';
export declare const useBackgroundDropdown: (config: {
    selectBackgroundImage: () => void;
    removeBackgroundImage: () => void;
}) => React.JSX.Element;
export declare const getBackgroundPosition: (context: CanvasRenderingContext2D) => Position;
