// import React from 'react'

import { useEffect, useRef, useState } from "react";
import GallerItem, { galleryItem } from "../components/Gallery/GallerItem";

const galleryData: galleryItem[] = [
  {
    label: "UI/UX Design",
    title: "E-commerce Platform Redesign",
    description:
      "This project involved a complete overhaul of the user interface and experience for a large-scale online marketplace. The redesign aimed to improve navigation, simplify the checkout process, and create a visually appealing layout that aligns with the brand's identity. Our approach included extensive user research, wireframing, prototyping, and usability testing to ensure a seamless shopping experience. As a result, the platform achieved better user engagement, faster conversion rates, and a 30% increase in customer retention. The project highlighted our ability to create user-centric designs that drive business growth.",
    review: "The new design led to a 30% increase in user retention.",
    referenceLink: "https://example.com/ecommerce-redesign",
    color: "#776860",
    image: "./gallery_image_1.jpeg",
  },
  {
    label: "Web Development",
    title: "Portfolio Website for a Photographer",
    description:
      "We developed a fully responsive and dynamic website for a professional photographer to showcase their portfolio. The site features high-quality galleries, client testimonials, and integrated contact forms, all designed to highlight the artist's work in the best light. Built using modern web technologies, the website ensures fast loading times and cross-device compatibility. Attention to detail was key, as the design needed to reflect the photographer's unique style while maintaining a professional look. This project enhanced the client's online presence and attracted new business opportunities.",
    review:
      "The website received positive feedback for its aesthetics and functionality.",
    referenceLink: "https://example.com/photographer-portfolio",
    color: "#49484c",
    image: "./gallery_image_2.jpeg",
  },
  {
    label: "App Development",
    title: "Fitness Tracking Mobile App",
    description:
      "This cross-platform mobile application was designed for fitness enthusiasts looking to set goals and monitor their progress. The app includes features such as daily activity tracking, workout plans, and integration with wearable devices. The intuitive design and smooth user experience make it easy for users of all fitness levels to navigate the app. It also includes social features, enabling users to share achievements and compete with friends. This project demonstrated our expertise in app development and our ability to deliver user-friendly solutions tailored to specific audience needs.",
    review: "Users appreciated the intuitive design and seamless performance.",
    referenceLink: "https://example.com/fitness-app",
    color: "#e6e9ee",
    image: "./gallery_image_3.jpeg",
  },
  {
    label: "UI/UX Design",
    title: "Educational Platform UI Overhaul",
    description:
      "For this project, we redesigned the user interface of an online educational platform to make it more accessible, engaging, and easy to use. The platform's outdated design was replaced with a modern, clean look, incorporating improved navigation and interactive elements. Key features included streamlined course discovery, personalized dashboards, and responsive design for mobile devices. The overhaul not only enhanced user satisfaction but also contributed to a 25% increase in course completions. This project highlights our ability to transform existing platforms into user-friendly and effective tools.",
    review:
      "The platform saw a 25% increase in course completions post-redesign.",
    referenceLink: "https://example.com/educational-platform",
    color: "#34302f",
    image: "./gallery_image_4.jpeg",
  },
  {
    label: "Web Development",
    title: "Non-Profit Organization Website",
    description:
      "We built a custom website for a non-profit organization to help promote their mission and increase donations. The site features compelling storytelling, detailed project descriptions, and secure donation processing. The design emphasizes clarity and emotional engagement, ensuring that visitors quickly understand the organization’s goals. Accessibility was a key focus, with features such as text resizing and keyboard navigation to accommodate all users. The project was successful in driving more traffic to the site and increasing donor participation, proving the power of effective web design in supporting meaningful causes.",
    review:
      "The site effectively communicated the mission and increased donor engagement.",
    referenceLink: "https://example.com/nonprofit-website",
    color: "#8983a6",
    image: "./gallery_image_5.jpeg",
  },
  {
    label: "App Development",
    title: "Recipe Sharing Mobile App",
    description:
      "We developed a mobile application tailored for cooking enthusiasts who want to discover and share recipes. The app includes a user-friendly interface for browsing, uploading, and saving recipes, as well as social features such as commenting and favoriting. Advanced search filters allow users to find recipes based on ingredients, cuisine, or dietary preferences. The app also supports real-time notifications for new uploads and activity updates. This project successfully fostered a vibrant community of home chefs, demonstrating our capability to create engaging and functional mobile solutions.",
    review:
      "The app fostered a community of cooking enthusiasts and saw rapid user growth.",
    referenceLink: "https://example.com/recipe-app",
    color: "#78b79e",
    image: "./gallery_image_6.jpeg",
  },
];
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
