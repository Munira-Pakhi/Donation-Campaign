import swal from "sweetalert";

const CardDetails = ({item}) => {

    const {id, img, donating, title, text_color, description } = item || {}

      const buttonStyle ={
        backgroundColor: `${text_color}`
      }

      const handleAddDonation = ()=>{
        
        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            addedDonationArray.push(item)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Good job!", "Your donation has been successful. Thank you for donating.!", "success");

        }
        else{
            const isExistsDonation = donationItems.find(item=> item.id == id)
            if(!isExistsDonation){
            addedDonationArray.push(...donationItems,item)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Good job!", "Your donation has been successful. Thank you for donating.!", "success");
        }
        else{
            swal("Error!", "No duplicate.!", "error");
        }

        }
      }

  return (
    <div>
      <div className=" px-5 md:px-10 lg:px-0 mt-8 mb-40 relative ">
            <div className="">
                
                <img
                src={img}
                alt="image"
                
                className="w-full h-full  " />
              
               <div className="absolute bg-black w-96 md:w-[689px]  lg:w-full bottom-12 opacity-60 h-28"></div>
              
            </div>
            <div  className="absolute text-2xl font-semibold  text-white bottom-20 ml-2 md:ml-14">
               <button onClick={handleAddDonation} style={buttonStyle} className="bg-white px-4 py-2 rounded-sm">Donate ${donating}</button>
               </div>
         <div>
         <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mt-4">
        {title}
        </h4>
    </div>
    <p className="mb-8 pr-5 absolute block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        {description}
        </p>
  
 </div>
    </div>
  );
};

export default CardDetails;
