export default function HomeAboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Us Text */}
          <div>
            <p className="text-nexia-primary font-semibold text-sm uppercase tracking-wide mb-4">
              About Us
            </p>
            <p className="text-nexia-primary text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary">
              Audit.
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary">
              Tax.
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary">
              Advisory.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}