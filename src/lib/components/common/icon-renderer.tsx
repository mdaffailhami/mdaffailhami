import type { IconData } from "@/lib/data/techs";

type IconRendererProps = React.ComponentProps<"div"> & {
  icon: IconData;
};

export function IconRenderer({ icon, ...props }: IconRendererProps) {
  if (icon.type === "component") {
    const Icon = icon.icon;
    return (
      <div {...props}>
        <Icon color="currentColor" size="100%" className="h-full w-full" />
      </div>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: icon.icon }} {...props} />;
}
