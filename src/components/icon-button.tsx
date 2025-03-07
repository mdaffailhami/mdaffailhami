import React from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';
import { cn, toSlug } from '@/utils';

export default function IconButton(
  props: {
    tooltip?: string;
    tooltipPlacement?: PlacesType;
    onClick: () => void;
  } & React.ComponentPropsWithRef<'button'>,
) {
  const id = props.tooltip ? toSlug(props.tooltip) : undefined;

  return (
    <>
      <button
        ref={props.ref}
        id={id}
        onClick={props.onClick}
        className={cn(
          'hover:bg-on-background/8 active:bg-on-background/15 size-min cursor-pointer rounded-full p-2',
          props.className,
        )}
      >
        {props.children}
      </button>
      {props.tooltip && (
        <Tooltip
          anchorSelect={`#${id}`}
          place={props.tooltipPlacement}
          style={{
            backgroundColor: 'var(--on-background-color)',
            color: 'var(--background-color)',
          }}
        >
          {props.tooltip}
        </Tooltip>
      )}
    </>
  );
}
