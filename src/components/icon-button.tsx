import { toSlug } from '@/utils/to-slug';
import React from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';

export function IconButton(
  props: {
    tooltip: string;
    tooltipPlacement: PlacesType;
    onClick: () => void;
  } & React.ComponentPropsWithRef<'button'>,
) {
  const id = toSlug(props.tooltip);

  return (
    <>
      <button
        id={id}
        onClick={props.onClick}
        className='hover:bg-on-background/8 active:bg-on-background/15 size-min cursor-pointer rounded-full p-2'
      >
        {props.children}
      </button>
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
    </>
  );
}
