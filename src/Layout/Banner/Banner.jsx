import { useState } from "react";
import './index.css'

const Banner = ({handleSearchBtn}) => {

  const [search, setSearch] = useState('')

  const handleSearch = e => {
        e.preventDefault();
        handleSearchBtn(e.target.name.value)
        e.target.name.value ='';
       
    
      }

      return (
                <div className=" mt-4">
                   
              <div className="bg-banner mb-16 h-[600px]" >
                <div className="overlay">
                <h2 className=" text-xl md:text-3xl lg:text-5xl font-bold mt-32 md:mt-10  pt-60 ml-12 md:ml-32 lg:ml-[300px]">I Grow By Helping People In Need</h2>
        
                 <div className="">
                 <form  onSubmit={handleSearch}>      
                 <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder="Search here...." className= "  input input-bordered w-60  md:w-full max-w-xs mt-16 ml-10  md:ml-40 lg:ml-[450px] " name="name"/>
        
                <button className="btn bg-[#FF444A]  mt-16 text-white lowercase text-xl px-6" type="submit">Search</button>
                      </form>
                </div>
                 </div>
              
              </div>
                </div>
            );
        
};

export default Banner;


