'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSettings } from './SettingsContext';

const Categories = ({ onSubcategoryClick }) => {
  const [categories, setCategories] = useState([]);
  const [expandedCatId, setExpandedCatId] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  const { language, fontFamily, theme } = useSettings();

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
      .then(async (res) => {
        const cats = res.data;
        setCategories(cats);
        if (cats.length > 0) {
          const firstCatId = cats[0].cat_id;
          setExpandedCatId(firstCatId);
          const subRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/subcategories/${firstCatId}`);
          const subs = subRes.data;
          setSubcategories(subs);

          if (subs.length > 0) {
            onSubcategoryClick(subs[0].subcat_id);
          }
        }
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const handleCategoryClick = async (catId) => {
    const newCatId = catId === expandedCatId ? null : catId;
    setExpandedCatId(newCatId);

    if (newCatId) {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/subcategories/${newCatId}`);
      const subs = res.data;
      setSubcategories(subs);

      if (subs.length > 0) {
        onSubcategoryClick(subs[0].subcat_id);
      }
    } else {
      setSubcategories([]);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className="absolute top-[133px] left-[170px] w-[429px]">
  <div className={`${isDark ? 'bg-[#333]' : 'bg-white'}  border-[#E2E2E2] rounded-t-[10px] rounded-b-none`}>
    <div className="bg-[#1FA45B] text-white text-center py-3 rounded-t-[10px]">
      <p className="text-xl font-bold" style={{ fontFamily }}>Categories</p>
    </div>
    <div className="p-3" >
      <input type="text" placeholder="Search..." className="w-full p-2 border border-[#E2E2E2] rounded-[5px]" />
    </div>
  </div>

  <div className={`${isDark ? 'bg-[#222] text-white' : 'bg-white'} border border-[#E2E2E2] border-t-0 rounded-b-[10px] p-4 h-[685px] overflow-y-auto`}>
    {categories.map(cat => (
      <div key={cat.cat_id} className="mb-4">
        <div
          className="flex items-center p-4 rounded-lg cursor-pointer bg-[#E8F0F5]"
          onClick={() => handleCategoryClick(cat.cat_id)}
        >
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <img src={`/images/005-fever.png`} alt="Category Icon" className="w-[40px] h-[40px] bg-[#CFE0E5] rounded-[5px] p-2" />
          </div>
          <div className="ml-4 flex-1">
            <h3 className={`text-lg font-semibold ${expandedCatId === cat.cat_id ? 'text-[#1FA45B]' : isDark ? 'text-white' : 'text-black'}`} style={{ fontFamily }}>
              {language === 'bn' ? cat.cat_name_bn : cat.cat_name_en}
            </h3>
            <p className="text-sm text-[#6A6A6A]" style={{ fontFamily }}>Subcategory: {cat.no_of_subcat}</p>
          </div>
          <div className="text-[#1FA45B] text-lg font-semibold">{cat.no_of_dua}</div>
        </div>

        {expandedCatId === cat.cat_id && (
          <div className="ml-12 mt-2 space-y-2">
            {subcategories.map(sub => (
              <p
                key={sub.subcat_id}
                className="cursor-pointer text-sm hover:text-[#1FA45B]"
                style={{ fontFamily, color: isDark ? '#ccc' : '#333' }}
                onClick={() => onSubcategoryClick(sub.subcat_id)}
              >
                ↳ {language === 'bn' ? sub.subcat_name_bn : sub.subcat_name_en}
              </p>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

  );
};

export default Categories;
