import Image from "next/image";

const AboutSectionTwo = () => {
   return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* Left Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">

              {/* Block 1 */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Clean, Secure & Optimized Code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Tymor Tech, we follow industry-standard coding practices, 
                  implement strict quality checks, and ensure every project is 
                  built with secure, scalable, and maintainable code — completely 
                  optimized for performance.
                </p>
              </div>

              {/* Block 2 */}
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dedicated Technical Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our team provides continuous assistance, timely updates, and 
                  complete guidance throughout your project lifecycle to ensure 
                  seamless operations and long-term stability.
                </p>
              </div>

              {/* Block 3 */}
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Expertise in Modern Frameworks
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  From Next.js and Angular to Flutter and Node.js, we use 
                  cutting-edge technologies to deliver fast, secure, and 
                  future-ready digital products tailored to your business needs.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
