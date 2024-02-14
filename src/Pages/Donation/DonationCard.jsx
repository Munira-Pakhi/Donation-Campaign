import { Link } from "react-router-dom";


const DonationCard = ({item}) => {

    const {id, img, category, title, text_color, card_bg, text_bg, donating } = item || {}

    const cartBgStyle ={
        backgroundColor: `${card_bg}`
      }

      const textBgStyle ={
        backgroundColor: `${text_bg}`,
        color: `${text_color}`
      }

      const textStyle ={
        backgroundColor: `${text_color}`
      }
      const donatingStyle ={
        color: `${text_color}`
      }

    return (
        
            <div style={cartBgStyle} className="relative flex   flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt=""
      className=" object-cover h-52"
    />
  </div>
  <div  className="p-6">
    <p style={textBgStyle} className="mb-2 block py-1 font-sans text-sm w-24 text-center rounded-sm">
      {category}
    </p>
    <h4 className="mb-1 block font-sans text-2xl font-semibold   text-black ">
      {title}
    </h4>
    <p style={donatingStyle} >${donating}.00</p>
    <a className="inline-block" href="">
      <Link to={`/items/${id}`}>
      <button style={textStyle}
        className="flex select-none items-center gap-2 rounded-lg mt-5 py-3 px-6 text-center  font-sans text-xs text-white font-bold   "
        type="button"
      >
        View Details
      </button>
      </Link>
    </a>
  </div>
</div>
       
    );

};


export default DonationCard;

