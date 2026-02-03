import React from 'react';
import { UtensilsCrossed, MessageCircle, Gamepad2, LucideIcon } from 'lucide-react';

export type ProgramIconType = 'food' | 'chat' | 'game';

interface ProgramIconProps {
  type: ProgramIconType;
  className?: string;
}

const iconMap: Record<ProgramIconType, LucideIcon> = {
  food: UtensilsCrossed,
  chat: MessageCircle,
  game: Gamepad2
};

export const ProgramIcon: React.FC<ProgramIconProps> = ({ type, className = "w-16 h-16" }) => {
  const Icon = iconMap[type];
  return <Icon className={className} strokeWidth={1.5} />;
};
