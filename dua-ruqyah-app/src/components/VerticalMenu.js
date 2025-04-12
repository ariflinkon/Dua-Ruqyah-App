const VerticalMenu = () => {
  return (
    <div className="relative h-screen"> {/* Parent container with relative positioning */}
      <div className="w-[100px] h-[927px] top-[40px] left-[40px] rounded-[24px] bg-white absolute flex flex-col justify-between"> {/* Flex container for vertical menu */}
        
        {/* Top Section: Logo */}
        <div className="flex justify-center py-4">
          <img src="/images/logo.png" alt="Logo" className="w-[60px] h-[60px]" /> {/* Adjust the logo size */}
        </div>

{/* Middle Section: Categories Icons */}
<div className="flex flex-col justify-center items-center space-y-4">
  {[
    { src: "/images/Home.png", alt: "Category 1" },
    { src: "/images/AllDua.png", alt: "Category 2" },
    { src: "/images/Memorize.png", alt: "Category 3" },
    { src: "/images/Bookmark.png", alt: "Category 4" },
    { src: "/images/Ruqyah.png", alt: "Category 5" },
    { src: "/images/Dua-Q&A.png", alt: "Category 6" },
    { src: "/images/Book.png", alt: "Category 7" },
  ].map((item, index) => (
    <div
      key={index}
      className="relative group w-[40px] h-[40px] flex items-center justify-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Image */}
      <img
        src={item.src}
        alt={item.alt}
        className="w-[20px] h-[20px] relative z-10"
      />
    </div>
  ))}
</div>

        {/* Bottom Section: Support Icon */}
        <div className="flex justify-center py-4">
          <img src="/images/I want to support.png" alt="Support" className="w-[60px] h-[60px]" /> {/* Adjust the support icon size */}
        </div>
      </div>
    </div>
  );
};

export default VerticalMenu;
