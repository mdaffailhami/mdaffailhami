type SvgRendererProps = React.ComponentProps<"div"> & {
  svg: string;
};
export function SvgRenderer({ svg, ...props }: SvgRendererProps) {
  // The SVG string should be the complete <svg>...</svg> markup
  return <div dangerouslySetInnerHTML={{ __html: svg }} {...props} />;
}
