import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SvgIconComponent } from '@mui/icons-material'; // Type for Material-UI icons

// Define the type for the tabs prop
interface TabData {
  label: string;
  icon: SvgIconComponent;
}

interface IconLabelTabsProps {
  tabs: TabData[]; // Tabs array to be passed as a prop
}

const IconLabelTabs: React.FC<IconLabelTabsProps> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(`Tab with label '${tabs[newValue].label}' clicked`);
    // Perform any action based on the selected tab
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      {tabs.map((tab, index) => (
        <Tab key={index} icon={<tab.icon />} label={tab.label} />
      ))}
    </Tabs>
  );
};

export default IconLabelTabs;
