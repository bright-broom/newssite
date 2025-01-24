import Button from "../UI/Button";

const HeroSection = () => (
  <header className="container px-4 pt-24 pb-16 mx-auto text-center">
    <h1 className="mb-8 text-5xl font-bold md:text-7xl font-outfit">
      <span className="bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] text-transparent bg-clip-text drop-shadow-lg">
        TechNews
      </span>
      <br />
      <span className="block mt-4 text-4xl md:text-5xl font-noto-sans-jp">
        最新のテクノロジーニュース
      </span>
    </h1>
    <p className="mb-12 text-xl font-light text-gray-300 font-noto-sans-jp">
      AI、ビジネス、健康、エンタメの最新情報をお届け
    </p>
  </header>
);

export default HeroSection;
