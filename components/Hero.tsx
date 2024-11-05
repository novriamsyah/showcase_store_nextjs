import { styles } from "@/app/stylesPage";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" id="home">
      <div
        className={`absolute inset-0 top-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="left bg-dark-200">
          <h2 className="text-white font-black xs:text-[16px] sm:text-[18px] ">
            Bejostror.co
          </h2>
          <p
            className={`pt-3 text-white line-clamp-6 sm:text-[15px] text-[12px] text-secondary tracking-wider`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quasi
            est officiis aut illo aspernatur consequuntur deserunt nam laborum
            molestias tempore inventore facere voluptatum iure, sed quaerat
            sequi a consequatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis reiciendis optio repudiandae quisquam
            quae veniam ad, molestiae ut in similique tenetur soluta est,
            incidunt vel nemo minima laboriosam vitae. Consequuntur!
          </p>
          <div className="flex flex-row gap-3 items-center pt-5">
            <div className="flex flex-row gap-1 items-center">
              <Image
                src={"/icons/liked.svg"}
                alt="liked"
                width={30}
                height={30}
              />
              <p>203</p>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <Image
                src={"/icons/comment.svg"}
                alt="liked"
                width={30}
                height={30}
              />
              <p>31</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="w-full relative">
            <Image
              src={"/images/slider/slider2.jpg"}
              alt="hero"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
