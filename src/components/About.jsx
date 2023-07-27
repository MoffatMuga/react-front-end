
import React, { useState, useEffect } from 'react';
import './About.css';

const AboutUs = () => {
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewContent, setNewReviewContent] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchReviews();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:9292/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:9292/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleAddReview = () => {
    setShowReviewForm(true);
  };

  const handleReviewFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9292/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newReviewTitle,
          content: newReviewContent,
          user_id: 1, 
        }),
      });
      if (!response.ok) {
        throw new Error('Error adding review');
      }
      const newReview = await response.json();

    
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setNewReviewTitle('');
      setNewReviewContent('');
      setShowReviewForm(false);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="container">
      <h2>What Our Customers Say</h2>
      
      {/* Add the round photo */}
      <div className="round-photo">
        <img
          src="photo6.jpg"
          alt="Profile"
          width="100"
          height="100"
        />
      </div>
      

      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <div className="review-title">{review.title}</div>
            <div className="review-content">{review.content}</div>
          </div>
        ))}
      </div>

      {!showReviewForm ? (
        <button className="add-review-button" onClick={handleAddReview}>
          Add Review
        </button>
      ) : (
        <form className="add-review-form" onSubmit={handleReviewFormSubmit}>
          <div>
            <label htmlFor="review-title">Review Title:</label>
            <input
              type="text"
              id="review-title"
              value={newReviewTitle}
              onChange={(e) => setNewReviewTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="review-content">Review Content:</label>
            <textarea
              id="review-content"
              value={newReviewContent}
              onChange={(e) => setNewReviewContent(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit Review</button>
          <button type="button" onClick={() => setShowReviewForm(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default AboutUs;
