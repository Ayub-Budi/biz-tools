import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

interface DynamicIconProps {
  name?: string;
  className?: string;
}

export default function DynamicIcon({ name, className }: DynamicIconProps) {
  const fallbackIcon = Icons.HelpCircle;

  const LucideIcon = name && (Icons[name as IconName] as React.ComponentType<{ className?: string }>);
  const IconToRender = LucideIcon || fallbackIcon;

  return <IconToRender className={className ?? "w-6 h-6"} />;
}
