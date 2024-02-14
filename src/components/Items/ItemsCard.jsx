/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ItemsCard = ({item}) => {
      const {id, img, category, title, text_color, card_bg, text_bg } = item || {}

      const cartBgStyle ={
        backgroundColor: `${card_bg}`
      }

      const textBgStyle ={
        backgroundColor: `${text_bg}`,
        color: `${text_color}`
      }

      const textStyle ={
        color: `${text_color}`
      }

      

    return (
        <div>
            <Link to={`/items/${id}`}>
            <div style={cartBgStyle} className=" relative flex max-w-[24rem] flex-col rounded-xl  bg-wight text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="w-full"
      src={img}
      alt=""
    />
  </div>
  <div style={textBgStyle} className=" mt-4 p-3 py-1 w-24 ml-5  rounded-md">
    <p >{category}</p>
  </div>
  <div className="p-5">
    <h4 style={textStyle} className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {title}
    </h4>
    
  </div>
</div>
            </Link>
        </div>
    );
};

export default ItemsCard;