import React, { useState } from "react";
import { Book, PlayCircle, Target, ChevronRight } from "lucide-react";

const Phase4 = () => {
  const [activeCategory, setActiveCategory] = useState("learn");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    {
      id: "learn",
      title: "What You'll Learn",
      icon: <Book className="w-5 h-5" />,
      items: [
        "Introduction to Stocks",
        "Starting with financial Planning",
        "Loan parameters",
        "Leasing purchases and assests"
      ]
    },
  
  ];

  const content = {
    learn: {
      title: "Understanding Money Basics",
      description: {
        "Introduction to Stocks": `<p>Stocks, also called shares or equities, represent ownership in a company. When you buy a stock, you own a small part of that company, which makes you a shareholder. Companies sell stocks to raise money for their business operations, such as launching new products, expanding to new locations, or improving technology. Stocks are traded on stock exchanges, like the New York Stock Exchange (NYSE) or India’s National Stock Exchange (NSE), where people buy and sell them.

The value of a stock, called its price, can go up or down depending on how well the company is doing or what investors believe about its future. If the company grows and earns profits, the stock price may increase, and shareholders can sell their stocks for a profit. Some companies also pay dividends, which are regular payments to shareholders as a share of the company’s earnings.

Investing in stocks can be a way to grow your money over time, but it comes with risks. Stock prices can drop if the company struggles or if the economy slows down. That’s why learning about the stock market and diversifying investments is important for managing risk. Stocks are a key part of building wealth and are used by individuals and businesses around the world.</p>
                          <p>Without money, it would be very difficult to buy the things we need or want.</p>
                          <video controls class="w-full h-auto mb-4">
                            <source src="https://media-hosting.imagekit.io//b9d92f3bafa545c6/stocks.mp4?Expires=1732425271&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QUs0Kj8tPMu8yJWI1lM1S8x6goHkyhWVIlLwFmLvxA6SfxrwaYKomMLOXPV7GphWE0-OiRmQe966gQf~yS2T5sVJ1qh1YBJiSzZt9Vr0ZEOk8oBF0JJQeodTm51Zu3mv9bFNyKBf9I7jCKTq5mDeYlgKcI1oju7GNu7Ny4FpR0xZnECgo4VbyKP4FZJYUzG0epTA0sYV8HjLRi5ldt~i-TH7g-TIdYUc4Uu5mTLOSuJE9uMrwQhuVpJmFJFqGGBQ50aNthlKUpLgHUz79rD8~mX8cmRkENYE8cPGwphR0H7t7pi2qXOh2HpMu9kWGhshwp~KCDsHbCrU4GsAVzZz3g__" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>`,
        "Starting with financial Planning": `<p>At the age of sixteen years plus, beginning with financial planning is quite useful especially in managing one’s resources and preparing for future uncertainties. First start with setting specific financial objectives such as college savings, purchasing a vehicle, or even opening a new savings account and factoring in some basic income (such as allowances, part-time jobs, or gifts) and little expenditures (such as food, entertainment, or transport). Get a savings wallet and keep depositing money at regular intervals however little it may be because these amounts will gradually increase. Also learn to differentiate between essential and needless wants and gives priority to essential wants even as she puts aside some money to purchase services or goods that please her. It is also useful to learn some basic financial literacy like interest when still young, in order to make better decisions involving money. Later on try and grow your savings by putting some money into stocks, mutual funds, or something else. If you begin this process, together with thinking of the finish of the analysis, from the very beginning, and looking for the ways to live in a better way, the good practices of financial management will be developed which will make one’s life much easier and enjoyable in the years to come!</em>.</p>
                                              <p>Understanding these types helps in day-to-day transactions.</p>
                                              <video controls class="w-full h-auto mb-4">
                                                <source src="https://media-hosting.imagekit.io//d564667f890d448b/startring%20with%20financial%20palnning.mp4?Expires=1732431044&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=G0uqY7fRYlS-~fYi4NQlqa7DhgdFy9fvORhfvF4coEMPGsrGQdaVgshesS79Np-ZK9gvvwwj8bykfn11Xnq6-JrWbUnSr1RIQKGH7eID-voQMtEMO6eZ6uS-XcvjyaSCcwx72JmNK-wtDMDme77oqd9tDvnY4KEN8qPLWZtvSjFXcvVk-CVOWp47ni71BGhtV8dJREF4bFZSWxsjVf8~MAROWcOotLi-NzWI~civ~nqYbd-1wrVgbuWPOppXPjl4r4J~z5J3iGh0Qqj~R37VrDoPKRkkUHFDF6cmjQlZlXF9Z93RtyBOM8pjQ-YBAbdUWiBpREfOu8ZOuey3r3Bgag__" type="video/mp4" />
                                                Your browser does not support the video tag.
                                              </video>`,
        "Loan parameters": `<p>Coins and notes come in different denominations and values, each serving <em>unique purposes</em>.</p>
                                              <p>Understanding these types helps in day-to-day transactions.</p>
                                              <video controls class="w-full h-auto mb-4">
                                                <source src="https://media-hosting.imagekit.io//46aeace4c29d4eca/Laon%20Parameters.mp4?Expires=1732431478&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KLigAx6xXDuCHTgtJy3090wSHzjcmOA5JTfKrnF3kQByMIFP3yEhBxm-ean~BKEdxvtrN2GLLYjZPCI0Bi3RgAX-V2e1VpXngg81MPipxBm9e7pUoGfq1nCpJ6oktbDopCmoo7ZZ~lVu7mzHIvho9nW~ECgFD0eNuEr7y6RL6ibedwgpq~uwSefGzy91d43Az6dPcCREpSWyROCseVXHeuX3YIvsvvksvqQ8oih7mbGiDmNXM9wOblZA3q-PPlGMaoWCzzE012J4KErxN~irybEYcK9ag9miDSoRn3LrPJULmlEG6hkvZne5kxETd~nAnZzjOH~i6BOPOC2ppQ8LKg__" type="video/mp4" />
                                                Your browser does not support the video tag.
                                              </video>`,                                  
        "Leasing purchases and assests": `<p><strong>Needs</strong> are essential for survival, while <em>wants</em> are items that enhance comfort and luxury.</p>
                                          <p>Learning the difference will help you make better choices when spending money.</p>
                                          <video controls class="w-full h-auto mb-4">
                                            <source src="https://media-hosting.imagekit.io//54022e457b9343cd/Leasing,Purchases%20and%20assests.mp4?Expires=1732431425&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Km118l7khKiObaCnNDoLutvkcC-S5z4sTaxZwMqvprJv1gqBij7J6U3vuGrOSieWWr6MrYNrUImAAbeekRODlrTpBwYeN0OjPFB2XW3TwSOUtr9jantISVUesVwMYy2BSm-BDBqsJInpK0ZXeMcCfcTIQk0GczeKhS8gfbRres-elp1D6O77bJt~aGAPYkQOzuE9lw1FmqdCUdjJLqrLG4yx-RKDHheoqjFTCvb16-mU9QvvChLyHJa4RoOA9tHqpQuaX9pnb8uBibtA99Tec-v44p3ETKhhQvM3wepOUnAENnFwCZ2hDVgXMXIWvHjVRqQmO7H0scY6j4CV-2hDlQ__" type="video/mp4" />
                                            Your browser does not support the video tag.
                                          </video>`
      }
    },
    
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
              Phase 4 (Ages 16+)
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

export default Phase4;
