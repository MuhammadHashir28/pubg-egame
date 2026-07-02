import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import "./FAQs.css";

const faqData = [
  {
    question: "How do I start using the interactive map?",
    answer: "Getting started is easy! Simply navigate to the Maps section from the header, select your preferred map (Erangel, Miramar, Sanhok, or Vikendi), and start marking locations. You can draw circles, rectangles, lines, and place markers. Your annotations are automatically saved for your next visit.",
    link: "/Map",
    category: "Maps",
  },
  {
    question: "Can I share my map annotations with my squad?",
    answer: "Yes! We support squad sharing. Once you've created your annotations, use the share button to generate a link that your squad members can use to view or collaborate on the same map.",
    link: "/Map",
    category: "Maps",
  },
  {
    question: "What maps are supported?",
    answer: "We currently support all four official PUBG maps: Erangel, Miramar, Sanhok, and Vikendi. Each map includes detailed terrain information and popular drop locations.",
    link: "/Map",
    category: "Maps",
  },
  {
    question: "How does the loadout builder work?",
    answer: "Our loadout builder helps you optimize your inventory for every situation. Select your vest and backpack levels, then add items from our comprehensive database. The system tracks your total capacity and warns you when you're overloaded.",
    link: "/Bagpack",
    category: "Loadout",
  },
  {
    question: "How accurate is the scorecard tracker?",
    answer: "Our scorecard tracker supports multiple scoring systems including the official 2023 point system. Simply upload your match results or enter them manually, and our system will calculate your total score and track your progress over time.",
    link: "/ScoreCard",
    category: "Loadout",
  },
  {
    question: "Is eGame free to use?",
    answer: "Yes, all core features of eGame are completely free to use. We believe in empowering every player to improve their gameplay regardless of their budget.",
    category: "General",
  },
  {
    question: "How can I report a bug or suggest a feature?",
    answer: "We love feedback! You can use our contact form to report bugs, suggest features, or just say hi. Our team reviews all submissions and works to implement the best suggestions.",
    link: "/Contact",
    category: "Account",
  },
  {
    question: "Do you have a mobile app?",
    answer: "Currently, eGame is optimized for desktop browsers. However, our responsive design ensures you can access all features from your mobile device's browser. We're exploring native app options for the future.",
    category: "General",
  },
];

const categories = ["All", "General", "Maps", "Loadout", "Account"];

/* Smooth accordion item */
function AccordionItem({ faq, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "expanded" : ""}`}>
      <button className="faq-question" onClick={onToggle}>
        <span className="faq-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="faq-title">{faq.question}</span>
        <span className={`faq-icon ${isOpen ? "rotated" : ""}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div className="faq-answer-wrapper" style={{ height: `${height}px` }}>
        <div className="faq-answer-content" ref={contentRef}>
          <p>{faq.answer}</p>
          {faq.link && (
            <Link to={faq.link} className="faq-link">
              Learn more
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function FAQs() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(0);

  // Filter FAQs
  const filtered = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      search === "" ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (cat) => {
    if (cat === "All") return faqData.length;
    return faqData.filter((f) => f.category === cat).length;
  };

  return (
    <div className="faqs-page">
      {/* ─── HERO ─── */}
      <section className="faqs-hero">
        <div className="faqs-hero-bg">
          <div className="faqs-orb FAQs-orb-1"></div>
          <div className="faqs-orb FAQs-orb-2"></div>
          <div className="faqs-grid-overlay"></div>
        </div>
        <div className="container">
          <div className="faqs-hero-content">
            <span className="page-badge animate-slide-up">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Help Center
            </span>
            <h1 className="page-title animate-slide-up animate-slide-up-delay-1">
              Frequently Asked{" "}
              <span className="title-gradient">Questions</span>
            </h1>
            <p className="page-description animate-slide-up animate-slide-up-delay-2">
              Can't find what you're looking for? Our team is here to help.
            </p>

            {/* Live Search */}
            <div className="search-box animate-slide-up animate-slide-up-delay-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search for answers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY TABS ─── */}
      <section className="faq-categories">
        <div className="container">
          <div className="categories-scroll">
            {categories.map((cat) => (
              <button
                className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
                <span className="category-count">{getCategoryCount(cat)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ LIST ─── */}
      <section className="faq-content-section">
        <div className="container">
          {filtered.length === 0 ? (
            <ScrollReveal>
              <div className="faq-empty">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <h3>No results found</h3>
                <p>
                  Try a different search term or browse all categories.
                </p>
                <button
                  className="btn-ghost-sm"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <>
              {search && (
                <div className="faq-results-count">
                  Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                  {search ? ` for "${search}"` : ""}
                </div>
              )}
              <div className="faq-list">
                {filtered.map((faq, i) => (
                  <AccordionItem
                    key={`${faq.question}-${i}`}
                    faq={faq}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={() =>
                      setOpenIndex((prev) => (prev === i ? -1 : i))
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="faq-contact">
        <div className="container">
          <ScrollReveal>
            <div className="contact-card">
              <div className="contact-card-glow"></div>
              <div className="contact-card-content">
                <div className="contact-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Still have questions?</h3>
                  <p>
                    Can't find the answer you're looking for? Reach out to our
                    team.
                  </p>
                </div>
              </div>
              <Link to="/Contact" className="btn-warm btn-sm">
                Contact Support
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default FAQs;
