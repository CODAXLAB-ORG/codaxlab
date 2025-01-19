// import React from 'react'

import { useEffect, useRef, useState } from "react";
import GallerItem, { galleryItem } from "../components/Gallery/GallerItem";
import { galleryData } from "../components/Gallery/galleryData";
import { scrollTo } from "../lib/scrollTo";


export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  
  const [currentItem, setCurrentItem] = useState<{
    index: number;
    data: galleryItem;
  }>({
    data: galleryData[0],
    index: 0,
  });
  useEffect(() => {
    const section = ref.current;
    if (section && section.parentElement) {
      section.parentElement.style.padding = "0";
      // section.parentElement.style.paddingRight = "0";
    }
  }, [ref]);

  useEffect(() => {
    scrollTo("#scroll-container",0)
  }, [currentItem])
  

  

  return (
    <section ref={ref} className="flex flex-col">
      <ul className="w-full h-[calc(100vh)] min-h-fit">
        <GallerItem
          controls={{
            next() {
              const next =
                currentItem.index === galleryData.length - 1
                  ? 0
                  : currentItem.index + 1;
              setCurrentItem({
                index: next,
                data: galleryData[next],
              });
              
            },
            previous() {
              const next =
                currentItem.index === 0
                  ? galleryData.length - 1
                  : currentItem.index - 1;
              setCurrentItem({
                index: next,
                data: galleryData[next],
              });
            },
            toIndex(index) {
              setCurrentItem({
                index: index,
                data: galleryData[index],
              });
            },
            position:{
              current: currentItem.index+1,
              last:galleryData.length
            }
          }}
          data={currentItem?.data}
        />
      </ul>
    </section>
  );
}
