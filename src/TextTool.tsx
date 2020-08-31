import React from 'react';
import Tool, { ToolOption, Position, TextSize, strokeColor } from './enums/Tool';
import { IntlShape, } from 'react-intl';
import { RefObject, MouseEvent as ReactMouseEvent } from 'react';
import { mapClientToCanvas } from './utils';
import { Icon } from 'antd';
import './TextTool.less';

let currentText = '';
let currentColor = '';
let currentSize = TextSize.Default;

const textSize = [TextSize.Small, TextSize.Default, TextSize.Large];

export interface Text {
  size: TextSize,
  color: string,
  text: string,
}

export const onTextMouseDown = (e: {
  clientX: number,
  clientY: number,
}, toolOption: ToolOption, scale: number, refInput: RefObject<HTMLInputElement>, refCanvas: RefObject<HTMLCanvasElement>, intl: IntlShape) => {
  if (!currentText && refInput.current && refCanvas.current) {
    const textarea = refInput.current;
    const canvas = refCanvas.current;

    const { top, left } = canvas.getBoundingClientRect();

    let x = e.clientX - left;
    let y = e.clientY - top;

    textarea.style.display = 'block';
    textarea.style.left = x + canvas.offsetLeft + 'px';
    textarea.style.top = y + canvas.offsetTop + 'px';
    textarea.style.fontSize = (toolOption.textSize as number) * scale + 'px';
    textarea.style.lineHeight = (toolOption.textSize as number) * scale + 'px';
    textarea.style.height = (toolOption.textSize as number) * scale + 'px';
    textarea.style.color = toolOption.textColor;
    textarea.value = typeof toolOption.defaultText === 'string' ? toolOption.defaultText : intl.formatMessage(toolOption.defaultText);
    textarea.defaultValue = typeof toolOption.defaultText === 'string' ? toolOption.defaultText : intl.formatMessage(toolOption.defaultText);
    textarea.autofocus = true;

    setInterval(() => {
      // textarea.select && textarea.select();
      textarea.autofocus = true;
      textarea.click && textarea.click();
      textarea.focus();
    }, 1000);

    currentText = typeof toolOption.defaultText === 'string' ? toolOption.defaultText : intl.formatMessage(toolOption.defaultText);
    currentColor = toolOption.textColor;
    currentSize = toolOption.textSize;
  }
}

export const onTextComplete = (refInput: RefObject<HTMLInputElement>, refCanvas: RefObject<HTMLCanvasElement>, viewMatrix: number[], scale: number, handleCompleteOperation: (tool?: Tool, data?: Text, pos?: Position) => void, setCurrentTool: (tool: Tool) => void) => {
  if (currentText && refInput.current && refCanvas.current) {
    const textarea = refInput.current;
    const text = textarea.value;
    let { top, left, width, height } = textarea.getBoundingClientRect();
    width = 1 / scale * width;
    height = 1 / scale * height;

    const currentPos = mapClientToCanvas({
      clientX: left,
      clientY: top,
    } as ReactMouseEvent<HTMLCanvasElement>, refCanvas.current, viewMatrix);

    textarea.style.display = 'none';

    const pos: Position = {
      x: currentPos[0],
      y: currentPos[1],
      w: width,
      h: height,
    };

    handleCompleteOperation(Tool.Text, { text, color: currentColor, size: currentSize }, pos);
    setCurrentTool(Tool.Select);
    currentText = '';
  }
}

export const font = `"PingFang SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif, "localant"`;

export const drawText = (item: Text, context: CanvasRenderingContext2D, pos: Position) => {
  context.globalCompositeOperation = 'source-over';
  context.font = `${item.size}px ${font}`;
  context.fillStyle = item.color || '#4a4a4a';
  context.textBaseline = 'top';

  const lines = item.text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    context.fillText(lines[i], pos.x, pos.y + (i * item.size));
  }
}

export const useTextDropdown = (currentToolOption: ToolOption, setCurrentToolOption: (option: ToolOption) => void, setCurrentTool: (tool: Tool) => void, intl: IntlShape, prefixCls: string) => {
  prefixCls += '-textTool';

  return (
    <div className={`${prefixCls}-strokeMenu`}>
      <div className={`${prefixCls}-colorAndSize`}>
        <div className={`${prefixCls}-textSizeSelector`}>
          {textSize.map(size => {
            return (
              <div
                key={size}
                onTouchStart={(evt) => {
                  evt.stopPropagation();
                  setCurrentToolOption({ ...currentToolOption, textSize: size });
                  setCurrentTool && setCurrentTool(Tool.Stroke);
                }}
                onClick={(evt) => {
                  evt.stopPropagation();
                  setCurrentToolOption({ ...currentToolOption, textSize: size });
                  setCurrentTool && setCurrentTool(Tool.Stroke);
                }}
                style={{ color: size === currentToolOption.textSize ? '#666' : '#ccc' }}
              >
                {size === TextSize.Small ? intl.formatMessage({ id: 'umi.block.sketch.text.size.small' }) : size === TextSize.Default ? intl.formatMessage({ id: 'umi.block.sketch.text.size.default' }) : intl.formatMessage({ id: 'umi.block.sketch.text.size.large' })}
              </div>
            )
          })}
        </div>
        <div className={`${prefixCls}-split`}></div>
        <div className={`${prefixCls}-palette`}>
          {strokeColor.map(color => {
            return <div className={`${prefixCls}-color`} key={color}
              onClick={(evt) => {
                evt.stopPropagation();
                setCurrentToolOption({ ...currentToolOption, textColor: color });
                setCurrentTool && setCurrentTool(Tool.Stroke);
              }}
              onTouchStart={(evt) => {
                evt.stopPropagation();
                setCurrentToolOption({ ...currentToolOption, textColor: color });
                setCurrentTool && setCurrentTool(Tool.Stroke);
              }}
            >
              <div className={`${prefixCls}-fill`} style={{ background: color }}></div>
              {currentToolOption.textColor === color ? <Icon type="check" style={color === '#ffffff' ? { color: '#979797' } : {}} /> : null}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}