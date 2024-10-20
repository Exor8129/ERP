// Tab.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react'; // Import this if you're using a specific icon type
import "./Tabs.css"

interface TabProps {
  label: string;
  icon: LucideIcon; // Change this based on your icon type
  isActive?: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, icon: Icon, isActive, onClick }) => {
  return (
    <div 
      className={`tab ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      <Icon />
      <span>{label}</span>
      
    </div>
  );
};

export default Tab;
