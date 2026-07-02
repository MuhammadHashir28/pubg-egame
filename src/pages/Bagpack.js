import { NavLink } from "react-router-dom";
//import { useForm } from "react-hook-form";
import { useState } from "react";
import useForm from '../hooks/useForm';



function Bagpack() {
 

  return (
    <>

{/* Breadcrumb Start */}
<div className="flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold mb-4 secondaryColor uppercase">Bag Pack</h2>
      <div className="flex items-center">
        <span className="text-white text-base ">Home</span>
        <div className="h-2 w-2 rounded-full secondaryBg mx-2"></div>
        <span className="text-white text-base">Bag Pack</span>
      </div>
    </div>
 {/* Breadcrumb End */}

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 bagpack px-24 py-28 bagpack-bg">
      {/* First Column */}
      <div className="col-span-2">
        <div className="flex flex-col w-full mb-2">
          <div className=" bg-gray-800 text-center">
            <img src={require('../images/akm-rifle.png')} alt="phone" className="item-align-center my-6" />
            <h3 className="text-center flex flex-col text-white text-lg pb-2">AKM Assault Rifle</h3>

            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4 text-lg text-white pt-2">Weight: 0.38</span>
             </div>
          </div>
        </div>


        <div className="flex mb-2 gap-2 p-0">
          <div className=" bg-gray-800 text-center w-full">
            <img src={require('../images/energy-drink.png')} alt=" " className="item-align-center  my-2" />
            <h3 className="text-center mt-2 text-lg pb-4">Energy Drin</h3>
            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4 text-lg text-white">Weight: 0.4</span>
             </div>
            
          </div>

          <div className=" bg-gray-800 text-center w-full">
            <img src={require('../images/painkiller.png')} alt=" " className="item-align-center  my-2" />
            <h3 className="text-center text-lg mt-1 pb-4">Painkiller</h3>

            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4 f text-lg text-white">Weight: 4mm</span>
             </div>
          </div>
          
        </div>


        <div className="flex justify-evenly  mb-2 gap-2">
          <div className=" bg-gray-800 text-center w-full">
            <img src={require('../images/bandages.png')} alt="phone" className="item-align-center my-2" />
            <h3 className="text-center mt-2 text-lg pb-2">Bandages</h3>

            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4 text-lg text-white">Weight: 4mm</span>
             </div>
          </div>

          <div className=" bg-gray-800 text-center w-full flex flex-col">
            <div className="h-20 text-center"><img src={require('../images/bullet.png')} alt="phone" className="item-align-center pt-4 my-2" />
          </div>

            <h3 className="text-center text-lg mb-2">5.56mm</h3>

            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4  text-lg text-white">Weight: 05</span>
             </div>
          </div>

          <div className=" bg-gray-800 text-center w-full">
            <img src={require('../images/scope.png')} alt="phone" className="item-align-center my-2" />
            <h3 className="text-center mt-2 text-lg pb-4">4x Scope</h3>

            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4 text-lg text-white">Weight: 0.04  </span>
             </div>
          </div>
          
        </div>


        <div className="flex justify-evenly gap-2 mb-2">
          <div className=" bg-gray-800  text-center w-full flex flex-col ">
            <div>
            <img src={require('../images/helmet.png')} alt="phone" className="item-align-center pt-4" />
            </div>
            <h3 className="text-center mt-auto text-lg">Three Level Helmet</h3>
            <div className="supportBgColor h-8 mt-auto"><img src={require('../images/weight-icon.png')} alt="weight" className="item-align-center my-1" />
              <span className="pl-4 font-bold text-lg text-white">Weight: 4mm</span>
             </div>
          </div>

         <div className="fex flex-col justify-evenly">
         <div className=" bg-gray-800 text-center mb-2">
            <img src={require('../images/gloves.png')} alt="phone" className="item-align-center" />
            <h3 className="text-center mt-2 text-lg">Gloves</h3>
            
          </div>

          <div className=" bg-gray-800 text-center flex-2 ">
            <img src={require('../images/joger.png')} alt="phone" className="item-align-center" />
            <h3 className="text-center mt-2 text-lg">Shoes</h3>

           </div>
          

         </div>
        </div>

        
        {/* Add more tiles as needed */}
      </div>

     
      {/* Third Column */}
      <div className="col-span-1 ">
        <div className="bg-gray-800 p-4 ">
          <div className="flex items-center">

            <div className="w-10"><img src={require('../images/bgpack-icon.png')} alt="" className="w-full" /> </div>
            <div className="pl-2">
              <h2 className="text-lg font-bold "> Backpack: </h2>            
              <div className="text-sm">400/<span>450</span></div>
            </div> 
          </div>
          
        </div>
        <div className="bg-gray-800 ">
          {/* Bagpack item */}
          
          <div className="flex w-full items-center backpack-items mb-2">
              <div className="item-icon-bg text-center">
                <img src={require('../images/first-aid.png')} alt="first-aid" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">Fisrt Aid Kit</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}

          {/* Bagpack item */}
          
          <div className="flex w-full items-center backpack-items mb-2">
              <div className="item-icon-bg text-center">
                <img src={require('../images/bandages-icon.png')} alt="Bandages" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">Bandages</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}



            {/* Bagpack item */}
          
            <div className="flex w-full items-center backpack-items mb-2">
              <div className="item-icon-bg text-center">
                <img src={require('../images/painkiller-icon.png')} alt="Painkiller" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">Painkiller</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}


            {/* Bagpack item */}
          
            <div className="flex w-full items-center backpack-items mb-2">
              <div className="item-icon-bg text-center">
                <img src={require('../images/enerdrink-icon.png')} alt="Energy Drink" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">Energy Drink</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}


            {/* Bagpack item */}
          
            <div className="flex w-full items-center backpack-items mb-2">
              <div className="item-icon-bg text-center">
                <img src={require('../images/bullet-iconpng.png')} alt="5.56mm" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">5.56mm</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}



            {/* Bagpack item */}
          
            <div className="flex w-full items-center backpack-items mb-2">
              <div className="item-icon-bg text-center">
                <img src={require('../images/scope-icon.png')} alt="4x Soope" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">4x Soope</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}


            {/* Bagpack item */}
          
            <div className="flex w-full items-center backpack-items">
              <div className="item-icon-bg text-center">
                <img src={require('../images/gloves-icon.png')} alt="Gloves" className=" mt-4 pt-2" />
              </div>
              <div className="w-full">
                    <div div className="flex flex-col">
                      <h3 className="ml-2 pl-4">Gloves</h3>
                      <div className="mt-auto text-right pr-4 text-lg font-bold">2</div>
                    </div>
              </div>
          </div>
          {/* End of repeated div */}


          

          
        </div>
      </div>

      {/* Fourth Column */}
      <div className="col-span-1 flex w-125">
        <div className="bg-gray-800 p-4 flex flex-col mb-2 justify-evenly">
          <div className="relative"><img src={require('../images/pistal-icon.png')} alt="weapon" /></div>
          <div className="relative"><img src={require('../images/jacket-icon.png')} alt="jacket" /></div>
          <div className="relative"><img src={require('../images/weapon-icon.png')} alt="weapon" /></div>
          <div className="relative"><img src={require('../images/bullet-round.png')} alt="bullet" /> <div className="weapon-circle absolute rounded-lg h-4 w-4 bg-red-600"></div></div>
          <div className="relative"><img src={require('../images/weapon-icon.png')} alt="weapon" /><div className="weapon-circle absolute rounded-lg h-4 w-4 bg-red-600"></div></div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Bagpack;
