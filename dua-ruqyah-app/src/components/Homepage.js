'use client';
import { useState } from 'react';
import VerticalMenu from '@/components/VerticalMenu';
import Categories from '@/components/Categories';
import ContentSection from '@/components/ContentSection';
import SettingsSection from '@/components/SettingsSection';

export default function HomePage() {
  const [selectedSubcatId, setSelectedSubcatId] = useState(null);

  return (
    <div className="flex">
      <VerticalMenu />
      <Categories onSubcategoryClick={setSelectedSubcatId} />
      <ContentSection selectedSubcatId={selectedSubcatId} />
      <SettingsSection />
    </div>
  );
}
