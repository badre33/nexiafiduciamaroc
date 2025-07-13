import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const insights = [
  {
    image: service1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17 January"
  },
  {
    image: service2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17 January"
  },
  {
    image: service3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "17 January"
  }
];

export default function LatestInsights() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl font-bold text-nexia-primary">
              Latest Insights
            </h3>
            <p className="text-nexia-primary leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/about">Explore more Insights</Link>
            </Button>
            
            {/* Navigation Controls */}
            <div className="flex space-x-2 pt-4">
              <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Right Columns - Insights */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                  <img
                    src={insight.image}
                    alt={`Insight ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-nexia-primary font-semibold mb-2 leading-tight group-hover:text-nexia-secondary transition-colors duration-200">
                  {insight.title}
                </h4>
                <p className="text-nexia-primary/70 text-sm">
                  {insight.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}