import React from "react";
import { Coins, PiggyBank, TrendingUp, BarChart } from "lucide-react";
import PhaseCard from "./PhaseCard";

const Phases = () => {
  const phasesData = [
    {
      icon: Coins,
      phase: "1",
      title: "Introduction to Money",
      age: "Ages 4-8 years",
      description: "Learn the basics of money through fun animations, games, and stories!",
      items: [
        "Simple storytelling: Magic growing pennies",
        "Interactive games: Match coins, save in a piggy bank",
        "Visual activities: Growing jars game",
      ],
      buttonText: "Play Now",
      buttonLink: "/play-now",
    },
    {
      icon: PiggyBank,
      phase: "2",
      title: "Savings and Spending",
      age: "Ages 9-12 years",
      description: "Learn how to save and spend wisely through cool quizzes and videos.",
      items: [
        "Understand needs vs. wants",
        "Interactive quizzes: Budgeting basics",
        "Fun videos: Save like a superhero!",
      ],
      buttonText: "Start Learning",
      buttonLink: "/start-learning",
    },
    {
      icon: TrendingUp,
      phase: "3",
      title: "Money Growth and Planning",
      age: "Ages 13-16 years",
      description: "Explore money growth through compounding and financial planning!",
      items: [
        "Introduction to compounding",
        "Understanding how banks work",
        "Interactive growth timeline",
      ],
      buttonText: "Learn More",
      buttonLink: "/learn-more",
    },
    {
      icon: BarChart,
      phase: "4",
      title: "Advanced Financial Strategies",
      age: "Ages 16+ years",
      description: "Discover advanced concepts like stock markets, risk management etc..",
      items: [
        "Stock market basics",
        "Investment strategies",
        "Risk management techniques",
      ],
      buttonText: "Start Now",
      buttonLink: "/start-now",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-[#C6A55C] sm:text-4xl mb-4">
          Financial Education Journey
        </h1>
        <p className="text-lg text-gray-300">
          Learn finance step by step at your own pace
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {phasesData.map((phase, index) => (
          <PhaseCard key={index} {...phase} />
        ))}
      </div>
    </div>
  );
};

export default Phases;
