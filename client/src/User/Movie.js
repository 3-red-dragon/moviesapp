import { Link } from "react-router-dom";
const Movie = (props) => {
  const { _id, name, description, image } = props.movie;
  return (
    <div>
      <div className="text-center mb-5" >
        <Link to={`/movies/${_id}`} style={{ textDecoration: "none", color: "black" }}>
          <img src={image} alt='' style={{ width: "320px", height: "400px",borderRadius:"30px" }}/>
          <h4>{name}</h4>
          <p>{description}</p>
        </Link>
      </div>
    </div>
  );
};
export default Movie;
