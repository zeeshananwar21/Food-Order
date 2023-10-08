const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating,area}) => {
    return (
      <div className='card'>
        <img alt ="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{area}</h4>
  
      </div>
    );
  };

  export default RestaurantCard;