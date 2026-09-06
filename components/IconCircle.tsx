import { LucideIcon } from 'lucide-react';

export default function IconCircle({
  icon: Icon,
  bg = 'bg-coral',
  iconColor = 'text-white',
  size = 'h-14 w-14',
}: {
  icon: LucideIcon;
  bg?: string;
  iconColor?: string;
  size?: string;
}) {
  return (
    <div className={`flex ${size} items-center justify-center rounded-full ${bg}`}>
      <Icon className={`h-1/2 w-1/2 ${iconColor}`} strokeWidth={2.25} />
    </div>
  );
}
