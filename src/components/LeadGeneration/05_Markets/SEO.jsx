const SEO = ({seoRef,containerRef }) => {
  return (
    <div ref={containerRef} className="absolute w-[30%] left-[2%] md:top-[15%] top-[30%] ">
      <img src="/images/texts/seo_blue_without_letters.svg" />
      <div ref={seoRef} className="absolute w-[55%] top-3 left-8">
        <img src="/images/texts/seo_blue_letters.svg" />
      </div>
    </div>
  );
};

export default SEO;
