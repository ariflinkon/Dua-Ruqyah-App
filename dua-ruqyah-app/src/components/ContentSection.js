'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSettings } from './SettingsContext';

const ContentSection = ({ selectedSubcatId }) => {
  const [items, setItems] = useState([]);
  const { language, fontFamily, theme } = useSettings();

  useEffect(() => {
    if (selectedSubcatId) {
      axios.get(`http://localhost:5000/api/duas/${selectedSubcatId}`)
        .then(res => setItems(res.data))
        .catch(err => console.error('Failed to fetch content:', err));
    }
  }, [selectedSubcatId]);

  const isDark = theme === 'dark';

  return (
    <div className={`absolute top-[133px] left-[632px] w-[889px] h-[1123px] ${isDark ? 'bg-[#1a1a1a] text-white' : 'bg-white'} border border-[#E2E2E2] rounded-[10px] p-[15px] overflow-y-auto`}>
      {items.map((item, index) => (
        <div key={item.id || index} className="mb-6" style={{ fontFamily }}>
          <div className="flex items-center mb-4">
            <div className="w-[25px] h-[25px]  rounded-full flex items-center justify-center">
              <img src="/images/iconHeading.png" alt="icon" className="w-[15px] h-[15px]" />
            </div>
            <h3 className="ml-3 text-lg font-semibold text-[#1FA45B]">
              {index + 1}. {language === 'bn' ? item.dua_name_bn : item.dua_name_en}
            </h3>
          </div>

          <p className="text-base mb-4">{item.dua_arabic}</p>

          {language === 'bn' ? item.translation_bn && (
            <>
              <div className="text-sm text-[#1FA45B] font-bold mb-2">অনুবাদ:</div>
              <p className="text-base mb-4">{item.translation_bn}</p>
            </>
          ) : item.translation_en && (
            <>
              <div className="text-sm text-[#1FA45B] font-bold mb-2">Translation:</div>
              <p className="text-base mb-4">{item.translation_en}</p>
            </>
          )}
          <hr className="border-[#E2E2E2] mb-4" />
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
