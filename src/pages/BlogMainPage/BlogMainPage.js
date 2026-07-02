import React from "react";
import "./BlogMainPage.css";
import post1Image from "../../images/post-1.jpg";
import post2Image from "../../images/post-2.jpg";
import post3Image from "../../images/post-3.jpg";
import post4Image from "../../images/post-4.jpg";
import postThumb1Image from "../../images/post-thumb-1.jpg";
import postThumb2Image from "../../images/post-thumb-2.jpg";
import postThumb3Image from "../../images/post-thumb-3.jpg";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    image: post1Image,
    category: "Strategy",
    date: "Jan 01 2022",
    author: "Elliot Alderson",
    title: "How to Start Initiating a Startup in Few Days.",
    excerpt: "Financial experts support or help you to find out which way you can raise your funds more...",
  },
  {
    id: 2,
    image: post2Image,
    category: "Tips",
    date: "Jan 01 2022",
    author: "Elliot Alderson",
    title: "Financial Experts Support Help You to Find Out.",
    excerpt: "Financial experts support or help you to find out which way you can raise your funds more...",
  },
  {
    id: 3,
    image: post3Image,
    category: "Gaming",
    date: "Jan 01 2022",
    author: "Elliot Alderson",
    title: "Top 10 PUBG Strategies for Beginners.",
    excerpt: "Master the basics with these essential PUBG tips that every new player needs to know...",
  },
  {
    id: 4,
    image: post4Image,
    category: "Updates",
    date: "Jan 01 2022",
    author: "Elliot Alderson",
    title: "Latest PUBG Patch Notes and What's New.",
    excerpt: "Check out all the new features, weapon balancing changes, and map updates in this patch...",
  },
];

const categories = [
  { name: "Gaming Tips", count: 23 },
  { name: "Strategy", count: 12 },
  { name: "Updates", count: 8 },
  { name: "Community", count: 15 },
  { name: "Tournaments", count: 6 },
];

const recentPosts = [
  {
    id: 1,
    thumb: postThumb1Image,
    title: "How To Go About Initiating A Startup In Few Days.",
    date: "Jan 01 2022",
  },
  {
    id: 2,
    thumb: postThumb2Image,
    title: "Financial Experts Support Help You To Find Out.",
    date: "Jan 01 2022",
  },
  {
    id: 3,
    thumb: postThumb3Image,
    title: "Innovative Helping Business All Over The World.",
    date: "Jan 01 2022",
  },
];

const tags = ["gaming", "strategy", "tips", "updates", "community", "esports"];

const BlogMainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page">
      {/* Hero Section — matches About page hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <div className="blog-glow blog-glow-1"></div>
          <div className="blog-glow blog-glow-2"></div>
          <div className="blog-glow blog-glow-3"></div>
        </div>
        <div className="container">
          <div className="blog-hero-content">
            <span className="blog-page-badge">Our Blog</span>
            <h1 className="blog-page-title">Insights & Guides</h1>
            <p className="blog-page-description">
              Strategy breakdowns, patch analysis, and pro tips from the eGame community. Level up your game with every read.
            </p>
            <div className="blog-breadcrumb">
              <span className="blog-breadcrumb-item">Home</span>
              <span className="blog-breadcrumb-sep">/</span>
              <span className="blog-breadcrumb-item active">Blog</span>
            </div>
          </div>
        </div>
      </section>

      <div className="modern-page-body">
        {/* Blog Grid */}
        <div className="blog-layout">
          <div className="blog-grid-section">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="modern-post-card"
                  onClick={() => navigate("/blog")}
                >
                  <div className="post-card-image">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <span className="post-card-category">{post.category}</span>
                  </div>
                  <div className="post-card-body">
                    <ul className="post-meta">
                      <li><i className="las la-calendar"></i>{post.date}</li>
                      <li><i className="las la-user"></i>{post.author}</li>
                    </ul>
                    <h3 className="post-card-title">{post.title}</h3>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    <span className="post-card-read-more">Read More <i className="las la-arrow-right"></i></span>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="modern-pagination">
              <button className="pagination-btn"><i className="las la-arrow-left"></i></button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <button className="pagination-btn">3</button>
              <button className="pagination-btn"><i className="las la-arrow-right"></i></button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Search */}
            <div className="sidebar-widget glass-card">
              <h4 className="widget-title">Search</h4>
              <div className="modern-search-box">
                <input type="text" placeholder="Search posts..." className="search-input" />
                <button className="search-btn"><i className="las la-search"></i></button>
              </div>
            </div>

            {/* Categories */}
            <div className="sidebar-widget glass-card">
              <h4 className="widget-title">Categories</h4>
              <ul className="category-list">
                {categories.map((cat, idx) => (
                  <li key={idx} className="category-item">
                    <span className="category-name">{cat.name}</span>
                    <span className="category-count">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="sidebar-widget glass-card">
              <h4 className="widget-title">Recent Articles</h4>
              <ul className="thumb-post">
                {recentPosts.map((post) => (
                  <li key={post.id} className="thumb-post-item">
                    <div className="thumb">
                      <img src={post.thumb} alt="thumb" />
                    </div>
                    <div className="thumb-post-info">
                      <h3>{post.title}</h3>
                      <span className="date">{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="sidebar-widget glass-card">
              <h4 className="widget-title">Tags</h4>
              <div className="modern-tags">
                {tags.map((tag, idx) => (
                  <span key={idx} className="modern-tag">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogMainPage;
