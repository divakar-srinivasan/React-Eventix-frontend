import React  from "react";
import banner from "../images/banner.jpeg";
import img from "../images/mini.png";
import { useNavigate } from "react-router-dom";


const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full pb-10 bg-black overflow-hidden">
      <div className="flex w-full md:flex-row flex-col md:justify-around">
        <h1 className=" place-content-center text-4xl md:text-7xl px-20 font-bebas text-custom-red">
          EVENTS
        </h1>
        <img src={banner} alt="loading" className=" h-48" />
      </div>
      <div className="flex justify-center md:justify-end md:me-20 flex-col md:flex-row px-10 gap-5 py-5">
        <input className="input" type="text" placeholder="Find Events" />
        <select id="departments" name="departments" className="input-select">
          <option value="" disabled selected>
            Select Department
          </option>
          <option value="cse">Computer Science and Engineering</option>
          <option value="it">Information Technology</option>
          <option value="ece">Electronics and Communication Engineering</option>
          <option value="eee">Electrical and Electronics Engineering</option>
          <option value="mech">Mechanical Engineering</option>
          <option value="civil">Civil Engineering</option>
          <option value="auto">Automobile Engineering</option>
          <option value="chemical">Chemical Engineering</option>
        </select>
        <button className="btn" onClick={()=>navigate("addEvents")}>Add Event</button>
      </div>


      <div className="flex flex-col ps-20 my-5">
      <h1 className="text-white text-3xl font-mono p-5">New</h1>
        <div className="w-full h-auto flex overflow-x-auto space-x-20">

            <div className="card">
              <img src={img} alt="loading" className="w-full h-48" />
              <div className="card-content">
                <h1 className="text-white text-3xl">event 1</h1>
              </div>
            </div>
            
        </div>  
      </div>

      <div className="flex flex-col ps-20 my-5">
      <h1 className="text-white text-3xl font-mono p-5">Trending</h1>
        <div className="w-full h-auto flex overflow-x-auto space-x-20">

            <div className="card">
              <img src={img} alt="loading" className="w-full h-48" />
              <div className="card-content">
                <h1 className="text-white text-3xl">event 1</h1>
              </div>
            </div>
                        
        </div>  
      </div>

      <div className="flex flex-col ps-20 my-5">
        <h1 className="text-white text-3xl font-mono p-5">All</h1>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="card">
            <img src={img} alt="loading" className="w-full h-48" />
            <div className="card-content">
              <h1 className="text-white text-3xl">event 1</h1>
            </div>
          </div> 

        </div>
      </div>

    </div>
  );
};

export default Events;
