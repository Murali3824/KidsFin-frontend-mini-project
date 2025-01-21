import React, { useState } from "react";
import { Book, PlayCircle, Target, ChevronRight } from "lucide-react";

const Phase2 = () => {
  const [activeCategory, setActiveCategory] = useState("learn");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    {
      id: "learn",
      title: "What You'll Learn",
      icon: <Book className="w-5 h-5" />,
      items: [
        "What is money?",
        "Different types of coins and notes",
        "Understanding needs vs wants"
      ]
    },
    {
      id: "activities",
      title: "Activities",
      icon: <PlayCircle className="w-5 h-5" />,
      items: [
        "Coin matching games",
        "Virtual piggy bank saving",
        "Money counting exercises",
        "Needs vs wants sorting game"
      ]
    },
    {
      id: "outcomes",
      title: "Learning Outcomes",
      icon: <Target className="w-5 h-5" />,
      items: [
        "Summary of phase",
      ]
    }
  ];

  const content = {
    learn: {
      title: "Understanding Money Basics",
      description: {
        "What is money?": `<p>Money is a <strong>medium of exchange</strong> that allows people to trade goods and services.</p>
                          <p>Without money, it would be very difficult to buy the things we need or want.</p>
                          <video controls class="w-full h-auto mb-4">
                            <source src="https://media-hosting.imagekit.io//52403ee3970c4222/what%20is%20money.mp4?Expires=1732428853&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AtHY9PT8Didk~eoynAuLrHuT-F-BOFxp5Z-fxtr0XyGS9DKaqu70HSAPPdoDoSbeEtp3PyVkIc7sp7VYSsOGbX1zqK-PTeE4K60MGdWvJQNfrdCnj3Nv8nB~~mm~7mNdm9WDnUjRkmWK9bG3XIZ6Lzu-Pey~4MK0YBwMlKaQ8eOgKnU7jJoFTe7NFk2qJAnU3jiqcHe4fxjwnTIFzorB09eiNqMMfQaPPeqGlhf0aXhmMupdjpj1GMZtWWJRl9q6AMKWdwrw1KWX1QUN97X-c4~9VqRolfG3N~VAMg0KX6-cUbzVIKFBCyrsYwXxktlh5OZLwQQrXqsBmMxdulmFaA__" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>`,
        "Different types of coins and notes": `<p>Coins and notes come in different denominations and values, each serving <em>unique purposes</em>.</p>
                                              <p>Understanding these types helps in day-to-day transactions.</p>
                                              <video controls class="w-full h-auto mb-4">
                                                <source src="https://example.com/video2.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                              </video>`,
        "Understanding needs vs wants": `<p><strong>Needs</strong> are essential for survival, while <em>wants</em> are items that enhance comfort and luxury.</p>
                                          <p>Learning the difference will help you make better choices when spending money.</p>
                                          <video controls class="w-full h-auto mb-4">
                                            <source src="https://media-hosting.imagekit.io//8105781667f14616/NEEDS%20VS%20WNATS.mp4?Expires=1732425483&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1twjt8xrUn3NSBAC5V~uPWaNRauYrTatJSSVUQ73Ne12nbK6oAg7yPp870rIft5UBhn-RoX25vpNtix6aTD2K321KLikJSrSQbAQxkaTHeICbWaC-gbaXz0UFIqu-ErcBAaIiNl~ikNVQbFxBswBVu1ySpyQPjNnSa~kBGl7jiZGV0sbiAd0ucV6R5YZrbI3VtQXju9~yXSUhgvrznLnAmOhLPpJy3rAOos0jkcUFs2C43cqoqbIDxZGn30Bnw~FczqNof49uAa4eSw~IOh7-kJar6Fz0NjRl4PWs-rj9FxeqKLGaWkrg74EvpYB8emtVSpiEtw7FJXUDMKkVfQsFA__" type="video/mp4" />
                                            Your browser does not support the video tag.
                                          </video>`
      }
    },
    activities: {
      title: "Fun Money Activities",
      description: {
        "Coin matching games": `<p>A game where you match coins of the same denomination to <strong>learn their values</strong>.</p>
                                <p>This will help you understand the relative values of different coins.</p>`,
        "Virtual piggy bank saving": `<p>A simulation to teach the <strong>importance of saving</strong> for future goals.</p>
                                      <p>Learn to deposit and withdraw from a virtual piggy bank.</p>`,
        
        "Money counting exercises": `<p>Activities to develop skills in <strong>counting money accurately</strong>.</p>
                                    <p>Through these exercises, you'll become quicker and more accurate at handling money.</p>`,
        "Needs vs wants sorting game": `<p>A game to categorize items into <strong>needs</strong> and <em>wants</em>, enhancing decision-making skills.</p>
                                      <p>This game will improve your understanding of how to spend wisely.</p>`
      }
    },
    outcomes: {
      title: "Your Learning Journey",
      description: {
        "Summary of phase": `<p>The learning outcomes for children aged 4-8 focus on developing essential financial skills. Children will learn to recognize different forms of money, such as coins and notes, and practice counting basic amounts. They will also understand the concept of distinguishing between needs and wants, helping them make better spending decisions. The curriculum encourages the development of saving habits, teaching children the value of saving small amounts regularly. Finally, children will gain an understanding of how money is used in everyday life and its role in future planning, laying the groundwork for sound financial habits in the future.</p>`,

      }
    }
  };

  const getContent = () => {
    if (selectedItem) {
      return content[activeCategory].description[selectedItem];
    }
    return `<h3>${content[activeCategory].title}</h3>`;
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto bg-[#292929] rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Sidebar */}
          <div className="bg-[#1C1C1C] border-r border-[#C6A55C]/40 p-6">
            <h1 className="text-3xl font-bold text-[#C6A55C] mb-8">
              Phase 2 (Ages 9-12)
            </h1>
            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSelectedItem(null);
                    }}
                    className={`w-full text-left ${
                      activeCategory === category.id
                        ? "text-[#C6A55C]"
                        : "text-gray-400 hover:text-[#C6A55C]"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-3 rounded-lg ${
                          activeCategory === category.id
                            ? "bg-[#C6A55C]/20"
                            : "bg-[#292929]"
                        }`}
                      >
                        {category.icon}
                      </div>
                      <span>{category.title}</span>
                    </div>
                  </button>
                  {activeCategory === category.id && (
                    <div className="space-y-2 mt-4">
                      {category.items.map((item, index) => (
                        <div key={index}>
                          <button
                            onClick={() => setSelectedItem(item)}
                            className="text-left w-full text-gray-300 hover:text-[#C6A55C] text-lg"
                          >
                            <div className="flex items-center gap-3">
                              <ChevronRight className="w-5 h-5" />
                              <span>{item}</span>
                            </div>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="col-span-2 p-8 space-y-8">
            <div
              className="text-[#C6A55C] text-lg mb-4"
              dangerouslySetInnerHTML={{ __html: getContent() }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase2;
