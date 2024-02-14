import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noDonation, setNoDonation] = useState(false);
  const [seeMore, setSeeMore] =useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoDonation("no data found");
    }
  }, []);

  const handleRemove = () =>{
    localStorage.clear()
    setDonation([])
    setNoDonation("No Data Here");
  }

  return <div>{noDonation? <p className="h-[80vh] flex justify-center items-center">{noDonation}</p>:
  <div>
    {donation.length > 0 && <button onClick={handleRemove} className="px-3 text-white bg-green-700 block mx-auto rounded-md py-2">Deleted Donation</button>}
    <div className="gird grid-cols-1 md:grid-cols-2 lg:grid gap-10 my-10">
        {
            seeMore? donation.map(item=><DonationCard key={item.id} item={item}></DonationCard>)
            : donation.slice(0,4).map(item=><DonationCard key={item.id} item={item}></DonationCard>)
        }
    </div>
  
    {donation.length > 4 && <button onClick={()=>setSeeMore(!seeMore)}  className="px-3 text-white bg-green-700 block mx-auto rounded-md py-2">{seeMore ?  "See Less" :"See More" }</button>}
  </div>}</div>


};

export default Donation;
