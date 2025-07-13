export default function HomeAboutUs() {
  return (
    <section className="nexia-section-padding bg-white max-w-[1050px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* About Us Text - Left Column */}
        <div className="flex flex-col justify-center pr-0 lg:pr-[15%] pt-10 pb-10">
          <p className="bolder text-nexia-primary font-poppins text-lg mb-6">
            About Us
          </p>
          <p className="text-nexia-primary font-poppins text-[28px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Services List - Right Column */}
        <div className="space-y-2">
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight mb-2">
            Audit.
          </h2>
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight mb-2">
            Tax.
          </h2>
          <h2 className="text-[70px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight mb-2">
            Advisory.
          </h2>
        </div>
      </div>
    </section>
  );
}