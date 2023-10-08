import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../RestaurantList';
import { useEffect, useState } from 'react';

function filterData(text,restaurant){
   return restaurant.filter((restaurant) => 
   restaurant.data.name.includes(text))
}
const Body = () => {
    const[restaurant,setRestaurant] = useState(restaurantList);
    const [text,setText] = useState("");

    useEffect(()=>{
        //API Call
        getRestaurants();

    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //setRestaurant(json?.data.cards[2]?.data?.data?.cards);
        console.log(json);
    }

    console.log("render");
    return (
     <>
        <div className='search'>
            <input type="text" placeholder="Search for restaurant"
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
            />
            <button onClick={()=>{
                const data=filterData(text,restaurant);
                setRestaurant(data);
            }}
            > Search</button>
        </div>  

        <div className='list'>
            
            {
                restaurant.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                } )
            }
        </div>
      </>
    )
  };

  export default Body;