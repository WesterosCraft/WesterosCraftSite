import React from 'react';
import useDarkMode from 'use-dark-mode';
import Switch from 'react-switch';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <Switch
      onColor="#365B41"
      height={22}
      width={36}
      handleDiameter={18}
      checked={darkMode.value}
      onChange={darkMode.toggle}
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};

export default DarkModeToggle;
