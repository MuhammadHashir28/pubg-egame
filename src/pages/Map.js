import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "semantic-ui-react";

function Map() {
  return <>

 {/* Breadcrumb Start */}
  {/* <div className="flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold mb-4 secondaryColor uppercase">MAP</h2>
      <div className="flex items-center">
        <span className="text-white text-base ">Home</span>
        <div className="h-2 w-2 rounded-full secondaryBg mx-2"></div>
        <span className="text-white text-base">Map</span>
      </div>
    </div> */}
 {/* Breadcrumb End */}

    <div className="flex flex-col md:flex-row px-16 mb-36">
      {/* Left Container */}
      <div className="w-full sm:w-1/4 bg-black text-white p-4 justify-center">
        <label htmlFor="location" className="text-lg font-bold">
          Choose Location
        </label>
        <select
          id="location"
          className="block w-full text-black border border-gray-700 rounded mt-2 px-3 py-2"
        >
          <option value="">Select Location</option>
          {/* Add your options here */}
        </select>
        <div className="mt-4">
          <p className="text-lg font-bold">Tools:</p>
          <div className="flex mt-2">
            {/* Icon 1 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-hand.png')} alt="hand" className="w-6 justify-center" />
              Hand
            </div>

            {/* Icon 2 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-location.png')} alt="location" className="w-6 justify-center" />
              Marker
            </div>

            {/* Icon 3 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-circle.png')} alt="Circle" className="w-6 justify-center" />
              Circle
            </div>

            {/* Icon 4 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-rectaagle.png')} alt="React" className="w-6 justify-center" />
              React
            </div>
          </div>


          <div className="flex mt-2">
            {/* Icon 1 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-line.png')} alt="Line" className="w-6 justify-center" />
              Line
            </div>

            {/* Icon 2 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-save.png')} alt="Save" className="w-6 justify-center" />
              Save
            </div>

            {/* Icon 3 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-hash.png')} alt="API" className="w-6 justify-center" />
              API
            </div>

            {/* Icon 4 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-delete.png')} alt="Delete" className="w-6 justify-center" />
              Clear
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold">Filters:</p>
          <div className="flex mt-2">
            {/* Icon 1 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-h-tem.png')} alt="H. Risk" className="w-6 justify-center" />
              H. Risk
            </div>

            {/* Icon 2 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-low-temp.png')} alt="L. Risk" className="w-6 justify-center" />
            M Risk
            </div>

            {/* Icon 3 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-car.png')} alt="L. Risk" className="w-6 justify-center" />
            Cars
            </div>

            {/* Icon 4 */}
            <div className="map-icon-box p-2 mr-2">
            <img src={require('../images/map-boat.png')} alt="L. Risk" className="w-6 justify-center" />
              Boats
            </div>
          </div>


          <div className="flex  mt-2">
            {/* Icon 1 */}
            <div className="map-icon-box p-2 mr-2 flex-1">
            <img src={require('../images/map-star.png')} alt="L. Risk" className="w-6 justify-center" />
              Militray
            </div>

            {/* Icon 2 */}
            <div className="map-icon-box p-2 mr-2 flex-1">
            <img src={require('../images/map-save.png')} alt="L. Risk" className="w-6 justify-center" />
              Save
            </div>

           
            

            {/* Icon 4 */}
            <div className="map-icon-box p-2 mr-2 flex-1">
            <img src={require('../images/map-grid.png')} alt="Grid" className="w-6 justify-center" />
              Grid
            </div>
            <div className="map-icon-box p-2 mr-2 flex-1 opacity-0">
            
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Color</p>
          <div className="bg-7a23c0 rounded mt-4">
            <div className="bg bg-red-500 inline-block w-8 h-8"></div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Share</p>
          <p className="text-blue-500 cursor-pointer mt-2"><Button type="button" className="submit full rounded-md w-full text-lg border-transparent">Click here to share map</Button></p>
        </div>
        <div className="mt-4">
          <label htmlFor="enter" className="text-lg font-bold">
            Enter
          </label>
          <input
            id="enter"
            type="text"
            className="block w-full bg-white text-black border border-gray-700 :hover:bg-blue-900 mt-2 px-3 py-2"
          />
        </div>
      </div>
      {/* Right Container */}
      <div className="w-full md:w-2/2"> <img src={require('../images/map.jpg')} alt="map" className="w-full h-full" /></div>
    </div>

    <div className="clear-both"></div>
</>
    ;
}

export default Map; 