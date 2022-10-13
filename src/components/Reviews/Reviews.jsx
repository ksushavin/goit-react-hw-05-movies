import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getReviewById } from "components/ApiService";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (reviews.length>0) {
      return
    }

    const fetchReviews = async () => {
      try {
        const responseReviews = await getReviewById(id);
        setReviews(responseReviews);

      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [id, reviews.length]);

 
  if (reviews.length === 0) {
    return (<p>Reviews are not found.</p>)
  }

  const review = reviews.map(({ author, content }) => {
    return (
      <li key={nanoid()}>
        <h3>{author}:</h3>
        <p>{ content}</p>
      </li>
    )
  })

  return (
    <ul>
      {review}
    </ul>
  )
}

export default Reviews;
