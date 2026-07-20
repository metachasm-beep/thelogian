import React from 'react';
import HomeFold from '../components/folds/HomeFold';
import ContentFold from '../components/folds/ContentFold';
import abtsData from '../data/abts_content_clean.json';

export default function Home() {
  return (
    <div>
      <HomeFold />
      <ContentFold 
        id="news"
        title="Latest News" 
        content={abtsData['/news'] || "Content coming soon."} 
      />
      <ContentFold 
        id="ministries"
        title="Our Ministries" 
        content={abtsData['/abts-ministries'] || "Content coming soon."} 
      />
      <ContentFold 
        id="gallery"
        title="Gallery & Pictures" 
        content={abtsData['/abts-indo-burma-border-area-ministries-pictures'] || "Content coming soon."} 
      />
    </div>
  );
}
