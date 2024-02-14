import { useLoaderData } from "react-router-dom";
import Banner from "../../Layout/Banner/Banner";
import Items from "../../components/Items/Items";
import { useState } from "react";


const Home = () => {

    const itemsData = useLoaderData();
 const [items ,setItems] =useState(itemsData);
 const handleSearchBtn =(search)=>{
  const searchData = itemsData.filter(card =>card.category.toLowerCase()==search.toLowerCase());
  setItems(searchData);
 }

    return (
        <div>
            <Banner handleSearchBtn={handleSearchBtn}></Banner>
            <Items items={items}></Items>
        </div>
    );
};

export default Home;


// import { useState } from "react";
// import Items from "../../components/Cards/Items";
// import Banner from "../../components/Header/Banner/Banner";
// import { useLoaderData } from "react-router-dom";


// const Home = () => {
//   const itemsData = useLoaderData();
//  const [items ,setItems] =useState(itemsData);
//  const handleSearchBtn =(search)=>{
//   const searchData = itemsData.filter(card =>card.categoryName.toLowerCase()==search.toLowerCase());
//   setItems(searchData);
//  }
//     return (
//         <div>
//             <Banner handleSearchBtn={handleSearchBtn}></Banner>
//            <Items items={items}></Items>
          
//         </div>
//     );
// };

// export default Home;