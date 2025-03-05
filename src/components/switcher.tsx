import IconButton from '@/components/icon-button';
import React from 'react';

export function Switcher(props: {
  activeIndex: number;
  options: React.ReactNode[];
}) {
  const [update, forceUpdate] = React.useState(0); // Dummy state to trigger re-renders
  const activeRef = React.useRef<HTMLLIElement>(null);
  const activeIndicatorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new ResizeObserver(() => forceUpdate((n) => n + 1));
    observer.observe(activeRef.current!);

    return () => observer.disconnect();
  }, []);

  React.useLayoutEffect(() => {
    activeIndicatorRef.current!.style.width =
      activeRef.current!.offsetWidth + 'px';
    activeIndicatorRef.current!.style.height =
      activeRef.current!.offsetHeight + 'px';

    activeIndicatorRef.current!.style.transform = `translateX(${activeRef.current!.offsetLeft}px)`;

    setTimeout(() => {
      activeIndicatorRef.current!.classList.add('transition', 'duration-200');
      activeIndicatorRef.current!.classList.remove('hidden');
    }, 0);
  });

  return (
    <div className='outline-outline fixed top-5 left-5 rounded-full outline-2'>
      <ul className='flex flex-row'>
        {props.options.map((option, i) => (
          <li key={i} ref={i === props.activeIndex ? activeRef : null}>
            {option}
          </li>
        ))}
      </ul>
      <div
        ref={activeIndicatorRef}
        className='outline-outline absolute top-0 -z-999 hidden rounded-full outline-3'
      />
    </div>
  );
}
