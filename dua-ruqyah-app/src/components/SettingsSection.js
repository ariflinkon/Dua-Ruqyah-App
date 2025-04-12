'use client';

import React, { useState } from 'react';
import { useSettings } from './SettingsContext';

const SettingsSection = () => {
  const {
    language,
    setLanguage,
    fontFamily,
    setFontFamily,
    theme,
    setTheme
  } = useSettings();

  const [expanded, setExpanded] = useState(null);
  const fonts = ['Arial', 'Georgia', 'Courier New', 'Tahoma', 'Roboto'];

  const toggleExpand = (section) => {
    setExpanded(prev => (prev === section ? null : section));
  };

  const boxStyle = "w-[280px] h-[55px] bg-white border border-[#E2E2E2] px-4 py-2 rounded text-black";
  const settingHeaderStyle = "w-[289px] h-[55px] bg-[#F7F8FA] flex items-center space-x-4 cursor-pointer px-4 rounded";

  return (
    <div className={`relative ${theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#333333]'} border border-[#E2E2E2] rounded-[10px] p-[20px] w-[330px] h-[834px] fixed top-[133px] left-[1550px] overflow-auto`}>
      {/* Settings Title */}
      <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily }}>Settings</h2>

      <div className="space-y-4">
        {/* Language Settings */}
        <div>
          <div className={settingHeaderStyle} onClick={() => toggleExpand('language')}>
            <div className="w-[30px] h-[30px] bg-[#E2E2E2] rounded-full flex items-center justify-center">
              <img src="/images/Language.png" alt="Language Icon" className="w-[16px] h-[16px]" />
            </div>
            <p className={`text-base ${expanded === 'language' ? 'text-[#1FA45B]' : ''}`}>Language Settings</p>
          </div>
          {expanded === 'language' && (
            <div className="mt-[6px]" onClick={(e) => e.stopPropagation()}>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={boxStyle}
              >
                <option value="bn">Bangla</option>
                <option value="en">English</option>
              </select>
            </div>
          )}
        </div>

        {/* General Settings */}
        <div>
          <div className={settingHeaderStyle} onClick={() => toggleExpand('general')}>
            <div className="w-[30px] h-[30px] bg-[#E2E2E2] rounded-full flex items-center justify-center">
              <img src="/images/Generalsetting.png" alt="General Settings Icon" className="w-[16px] h-[16px]" />
            </div>
            <p className={`text-base ${expanded === 'general' ? 'text-[#1FA45B]' : ''}`}>General Settings</p>
          </div>
          {expanded === 'general' && (
            <div className={`${boxStyle} mt-[6px] flex items-center text-sm text-gray-500`} onClick={(e) => e.stopPropagation()}>
              No options available
            </div>
          )}
        </div>

        {/* Font Settings */}
        <div>
          <div className={settingHeaderStyle} onClick={() => toggleExpand('font')}>
            <div className="w-[30px] h-[30px] bg-[#E2E2E2] rounded-full flex items-center justify-center">
              <img src="/images/AllDua.png" alt="Font Settings Icon" className="w-[16px] h-[16px]" />
            </div>
            <p className={`text-base ${expanded === 'font' ? 'text-[#1FA45B]' : ''}`}>Font Settings</p>
          </div>
          {expanded === 'font' && (
            <div className="mt-[6px]" onClick={(e) => e.stopPropagation()}>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className={boxStyle}
              >
                {fonts.map(font => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Appearance Settings */}
        <div>
          <div className={settingHeaderStyle} onClick={() => toggleExpand('appearance')}>
            <div className="w-[30px] h-[30px] bg-[#E2E2E2] rounded-full flex items-center justify-center">
              <img src="/images/AllDua.png" alt="Appearance Settings Icon" className="w-[16px] h-[16px]" />
            </div>
            <p className={`text-base ${expanded === 'appearance' ? 'text-[#1FA45B]' : ''}`}>Appearance Settings</p>
          </div>
          {expanded === 'appearance' && (
            <div className={`${boxStyle} mt-[6px] flex items-center justify-between`} onClick={(e) => e.stopPropagation()}>
              <span>Night Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={theme === 'dark'}
                  onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
                <div className="w-[50px] h-[25px] bg-[#E2E2E2] rounded-full peer-checked:bg-[#1FA45B] relative">
                  <div className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-all duration-300 ${theme === 'dark' ? 'left-[28px]' : 'left-[3px]'}`}></div>
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
