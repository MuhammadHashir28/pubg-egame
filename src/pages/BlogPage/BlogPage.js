import React, { useState } from "react";
import "./BlogPage.css";
import post1Image from "../../images/post-1.jpg";
import post2Image from "../../images/post-2.jpg";
import author from "../../images/auhtor.png";

function BlogPage() {
  const [comment, setComment] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setComment({ name: "", email: "", message: "" });
  };

  return (
    <div className="blog-page">
      {/* Hero Section — matches BlogMainPage & About hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg">
          <div className="blog-glow blog-glow-1"></div>
          <div className="blog-glow blog-glow-2"></div>
          <div className="blog-glow blog-glow-3"></div>
        </div>
        <div className="container">
          <div className="blog-hero-content">
            <span className="blog-page-badge">Article</span>
            <h1 className="blog-page-title">Featured Post</h1>
            <p className="blog-page-description">
              Deep dives into PUBG strategy, community stories, and the latest game updates — written by players, for players.
            </p>
            <div className="blog-breadcrumb">
              <span className="blog-breadcrumb-item">Home</span>
              <span className="blog-breadcrumb-sep">/</span>
              <span className="blog-breadcrumb-item">Blog</span>
              <span className="blog-breadcrumb-sep">/</span>
              <span className="blog-breadcrumb-item active">Article</span>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-page-body">
        <div className="blog-post-container">
          {/* Post Header Image */}
          <div className="post-hero-image">
            <img src={post1Image} alt="Post" />
          </div>

          {/* Post Content */}
          <article className="post-details">
            <p>
              Financial experts support or help you to find out which way you can raise your funds more.
              Arkit a trusted name for providing assistants. Initially, their main objective was to ensure
              the service they provide these people are loyal to their industry, experienced, and professional.
            </p>
            <p>
              Unless you are the one who really cares about this, it is not terribly important. What all
              matters are how your hybrid mobile application development is going to work in the long run
              as no one will care about how it was built.
            </p>

            {/* Blockquote */}
            <blockquote className="modern-blockquote">
              <i className="fas fa-quote-right"></i>
              <p>
                "There are no secrets to success. It is the result of preparation, hard work, and learning from
                failure."
              </p>
              <span className="quote-author">— Winston Churchill</span>
            </blockquote>

            <p>
              There are some big shifts taking place in the field of construction equipment mathematics.
              Starting with the integration of mathematics devices in vehicles right from the manufacturers,
              to the standardization and integration of mathematics data across various business functions,
              the future of mathematics has never seemed so full of potential for fleet-based businesses.
            </p>

            {/* Gallery */}
            <div className="post-gallery">
              <img src={post2Image} alt="Gallery 1" />
              <img src={post1Image} alt="Gallery 2" />
            </div>

            <h3 className="post-section-title">Creative approach to every project</h3>
            <p>
              Financial experts support or help you to find out which way you can raise your funds more.
              Arkit a trusted name for providing assistants. Initially, their main objective was to ensure
              the service they provide these people are loyal to their industry, experienced, and professional.
            </p>
            <p>
              Another speaker, John Meuse, senior director of heavy equipment at Waste Management Inc.,
              echoed this, citing a cost-saving of $17,000 for the company when it cut idling time of a
              single Caterpillar 966 wheel loader.
            </p>

            {/* Tags */}
            <div className="post-tags">
              <span className="modern-tag">Gaming</span>
              <span className="modern-tag">Strategy</span>
              <span className="modern-tag">Tips</span>
              <span className="modern-tag">Updates</span>
            </div>

            {/* Post Navigation */}
            <div className="post-navigation">
              <a className="post-nav-item prev">
                <span><i className="las la-angle-left"></i> Previous</span>
                <p>How To Start Initiating An Startup In Few Days.</p>
              </a>
              <a className="post-nav-item next">
                <span>Next <i className="las la-angle-right"></i></span>
                <p>Fresh Startup Ideas For Digital Business.</p>
              </a>
            </div>

            {/* Author Box */}
            <div className="author-box glass-card">
              <div className="author-thumb">
                <img src={author} alt="Author" />
              </div>
              <div className="author-info">
                <h3 className="author-name">Elliot Alderson</h3>
                <p className="author-bio">
                  Our versatile team is built of designers, developers, and digital marketers who all
                  bring unique experience.
                </p>
                <ul className="social-icon">
                  <li><a href="#"><i className="lab la-facebook-f"></i></a></li>
                  <li><a href="#"><i className="lab la-twitter"></i></a></li>
                  <li><a href="#"><i className="lab la-instagram"></i></a></li>
                  <li><a href="#"><i className="lab la-behance"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Comments */}
            <div className="comments-section">
              <h3 className="comment-title">Post Comments</h3>
              <ul className="comments-box">
                <li className="comment">
                  <div className="comment-inner">
                    <div className="comment-thumb"><img src={author} alt="img" /></div>
                    <div className="comment-wrap">
                      <div className="comments-meta">
                        <h4>Ashton Porter <span>Jan 01, 2022 at 8:00</span></h4>
                      </div>
                      <div className="comment-area">
                        <p>You guys have put so much work, effort, and time while designing this awesome theme. I can see that passion when I incorporated it into my website.</p>
                        <a className="reply-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                  <ul className="children">
                    <li className="comment">
                      <div className="comment-inner">
                        <div className="comment-thumb"><img src={author} alt="img" /></div>
                        <div className="comment-wrap">
                          <div className="comments-meta">
                            <h4>Melania Trump <span>Jan 01, 2022 at 8:00</span></h4>
                          </div>
                          <div className="comment-area">
                            <p>The only thing I LOVE more than this theme and its incredible options is the support team! They are freaking amazing!</p>
                            <a className="reply-btn">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="comment">
                  <div className="comment-inner">
                    <div className="comment-thumb"><img src={author} alt="img" /></div>
                    <div className="comment-wrap">
                      <div className="comments-meta">
                        <h4>Elliot Alderson <span>Jan 01, 2022 at 8:00</span></h4>
                      </div>
                      <div className="comment-area">
                        <p>Outstanding quality in this theme, brilliant effects and perfectly crafted code. We absolutely love it!</p>
                        <a className="reply-btn">Reply</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Comment Form */}
              <div className="comment-form-section">
                <h3 className="comment-title">Leave a Comment</h3>
                {submitted && (
                  <div className="form-success-msg">
                    <i className="las la-check-circle"></i>
                    Your comment has been submitted successfully!
                  </div>
                )}
                <form className="modern-comment-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Name *"
                        className="modern-input"
                        value={comment.name}
                        onChange={(e) => setComment({ ...comment, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email *"
                        className="modern-input"
                        value={comment.email}
                        onChange={(e) => setComment({ ...comment, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Comment *"
                      className="modern-textarea"
                      rows="5"
                      value={comment.message}
                      onChange={(e) => setComment({ ...comment, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="modern-submit-btn">
                    Submit Comment <i className="las la-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
