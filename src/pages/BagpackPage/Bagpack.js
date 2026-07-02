import { NavLink } from "react-router-dom";
//import { useForm } from "react-hook-form";
import clickSound from "./Sounds/click-sound.wav";
import { useState, useEffect } from "react";
import "./Bagpack.css";

function Bagpack() {
  const [selectedVestIndex, setSelectedVestIndex] = useState(0);
  const [selectedBagpack, setSelectedBagpack] = useState(0);
  const [selectedLoadData, setLoadData] = useState([]);
  const [selectedItemTotalCapacity, setItemTotalCapacity] = useState(0);
  const [sum, setSum] = useState(150);

  useEffect(() => {

    // // setLoadData([]);
    // // setItemTotalCapacity(0);
    // // Calculate sum whenever either selectedVestIndex or selectedBackpack changes
    // if (selectedVestIndex || selectedBagpack) {
    //   const newSum = sum +
    //     (selectedVestIndex?.capacity ?? 0) + (selectedBagpack?.capacity ?? 0);
    //   setSum(newSum);
    // } else {
      
    //   setSum(150);
    //    setLoadData([]);
    //     setItemTotalCapacity(0);
    // }
  }, [selectedVestIndex, selectedBagpack]);
  // const scrollImage = document.querySelector('.vest-bagpack-selection .vest-backpack-img');
  // const targetDiv = document.getElementsByClassName('detail-add');

  // scrollImage?.addEventListener('click', () => {
  //   debugger;
  // targetDiv.scrollIntoView({ behavior: 'smooth' });
  // scrollImage.classList.add('faded');
  // });


  // Function to handle count update (+/-)
const handleCountUpdate = (index, value) => {
  handleLoadData(index,value);
};

const handleVestClick = (index) => {
  const audio = new Audio(clickSound);
  audio.play();
  debugger;
  if (index.name === selectedVestIndex?.name) {

    const deductedVest = sum - (selectedVestIndex?.capacity ?? 0);
    setSum(deductedVest);
    setSelectedVestIndex(0); // Remove data if already selected
    setLoadData([]);
    setItemTotalCapacity(0);
  } else {
    const newSum = sum +
        (index?.capacity ?? 0) - (selectedVestIndex?.capacity ?? 0);
      setSum(newSum);
    setSelectedVestIndex(index);
    

    // Perform any additional logic or actions when a vest is clicked
  }
};

const handleBagPackClick = (backpack) => {
  const audio = new Audio(clickSound);
  audio.play();

  debugger;

  if (backpack.name === selectedBagpack?.name) {
    const deductedBagpack = sum - (selectedBagpack?.capacity ?? 0);
    setSum(deductedBagpack);
    setSelectedBagpack(0); // Remove data if already selected
    setLoadData([]);
    setItemTotalCapacity(0);
  } else {
    const newSum = sum + ((backpack?.capacity ?? 0)) - (selectedBagpack?.capacity ?? 0);
    setSum(newSum);
    setSelectedBagpack(backpack);
 
  }
};


  const handleLoadData = (data,countval=1) => {
    debugger;
    const audio = new Audio(clickSound);
    audio.play();
  
    const existingItemIndex = selectedLoadData.findIndex(
      (item) => item.name === data.name
    );

    let totalNonexistingItemIndex = 0;

    selectedLoadData.forEach((item) => {

      debugger;
      if (item.name != data.name) {
        const { capacity, count } = item;
        const itemTotalCapacity = capacity * count;
        totalNonexistingItemIndex += itemTotalCapacity;
      }
    });

  
    const itemCapacity = data.capacity;
    const itemCount = existingItemIndex !== -1 ? selectedLoadData[existingItemIndex].count + countval : 1;
    const itemTotalCapacity = (itemCapacity * itemCount)+totalNonexistingItemIndex;
    
    const newSum = selectedVestIndex? selectedVestIndex.capacity : 0 + selectedBagpack?.capacity;
    if (itemTotalCapacity<=sum ) {
      if (existingItemIndex === -1) {
        // Item not found, add it to the array with count = 1
         setLoadData((prevData) => [...prevData, { ...data, count: 1 }]);
         setItemTotalCapacity(itemTotalCapacity);

      } else {
        // Item found, update the count property
        const updatedLoadData = selectedLoadData.map((item, index) => {

          
          if (index === existingItemIndex) {
            const updatedCount = item.count + countval;
            if (updatedCount == 0) {
              return null; // Mark the item for removal
            } else {
              return { ...item, count: updatedCount };
            }
          }
          return item;
        });
    
        const filteredLoadData = updatedLoadData.filter((item) => item !== null);
        setLoadData(filteredLoadData);
        setItemTotalCapacity(itemTotalCapacity);

      }
    }
  };
  

  const Data = {
    backpacks: [
      {
        id: 1,
        image: "level1bagpack.png",
        name: "LEVEL 1 BACKPACK",
        capacity: 150,
      },
      {
        id: 2,
        image: "level2bagpack.png",
        name: "LEVEL 2 BACKPACK",
        capacity: 200,
      },
      {
        id: 3,
        image: "level3bagpack.png",
        name: "LEVEL 3 BACKPACK",
        capacity: 250,
      },
    ],
    vestData: [
      {
        name: "LEVEL 1 VEST",
        image: "level1Vest.png",
        capacity: 50,
      },
      {
        name: "LEVEL 2 VEST",
        image: "level2Vest.png",
        capacity: 50,
      },
      {
        name: "LEVEL 3 VEST",
        image: "level3Vest.png",
        capacity: 50,
      },
    ],
    Load: [
      {
        name: "AMMO 9MM",
        capacity: 3.75,
        image: "ammo_9mm.png",
        group: 1,
      },
      {
        name: "AMMO 45 ACP",
        capacity: 4,
        image: "Item_Ammo_45ACP_C.png",
        group: 1,
      },
      {
        name: "AMMO 5.56MM",
        capacity: 5,
        image: "Item_Ammo_556mm_C.png",
        group: 1,
      },
      {
        name: "AMMO 7.62MM",
        capacity: 6,
        image: "Item_Ammo_762mm_C.png",
        group: 1,
      },
      {
        name: "AMMO 300MAG",
        capacity: 10,
        image: "Item_Ammo_300Magnum_C.png",
        group: 1,
      },
      {
        name: "AMMO 12 GAUGE",
        capacity: 12.5,
        image: "ammo_12guage.png",
        group: 1,
      },
      {
        name: "Frag Grenade",
        capacity: 18,
        image: "frag.png",
        group: 2,
      },
      {
        name: "Stun Grenade",
        capacity: 12,
        image: "stun.png",
        group: 2,
      },
      {
        name: "Smoke Grenade",
        capacity: 14,
        image: "smoke.png",
        group: 2,
      },
      {
        name: "MOLOTOV",
        capacity: 16,
        image: "Item_Weapon_Molotov_C.png",
        group: 2,
      },
      {
        name: "BANDAGES",
        capacity: 2,
        image: "Item_Heal_Bandage_C.png",
        group: 4,
      },
      {
        name: "FIRST AID",
        capacity: 10,
        image: "Item_Heal_FirstAid_C.png",
        group: 4,
      },
      {
        name: "MED KIT",
        capacity: 20,
        image: "Item_Heal_MedKit_C.png",
        group: 4,
      },
      {
        name: "ENERGY DRINK",
        capacity: 4,
        image: "Item_Boost_EnergyDrink_C.png",
        group: 3,
      },
      {
        name: "ADRENALINE",
        capacity: 20,
        image: "Item_Boost_AdrenalineSyringe_C.png",
        group: 3,
      },
      {
        name: "PAINKILLER",
        capacity: 10,
        image: "Item_Boost_PainKiller.png",
        group: 3,
      }
    ],
  };

  const generateItemListHTML = () => {
    let items = Data.Load;
    const sortedItems = items.sort((a, b) => {
      // Sort by group first
      if (a.group !== b.group) {
        return a.group - b.group;
      }
      // If group is the same, sort by capacity
      return a.capacity - b.capacity;
    });

    
    const rows = [];
    let currentGroup = null;
    let currentRow = [];

    sortedItems.forEach((item, index) => {
      if (item.group !== currentGroup) {
        if (currentRow.length > 0) {
          rows.push(
            <div key={currentGroup} className="flex mb-2 gap-2 p-0">
              {currentRow}
            </div>
          );
        }
        currentGroup = item.group;
        currentRow = [];
      }

      currentRow.push(
        <div key={index} className="item-card" onClick={() => handleLoadData(item)}
        >
          <img
            src={require(`./Images/${item.image}`)}
            alt={item.name}
          />
          <span className="item-name">{item.name}</span>
          <span className="item-weight">Weight: {item.capacity}</span>
        </div>
      );

      if (index === sortedItems.length - 1) {
        rows.push(
          <div key={currentGroup} className="flex gap-2 p-0">
            {currentRow}
          </div>
        );
      }
    });

    return <div>{rows}</div>;
  };

  return (
    <>
      {/* Bagpack Hero */}
      <section className="bagpack-hero">
        <div className="bagpack-hero-bg">
          <div className="bagpack-glow"></div>
        </div>
        <div className="container">
          <div className="bagpack-hero-content">
            <span className="page-badge">Loadout Builder</span>
            <h1 className="page-title">
              Build Your <span className="text-gradient">Loadout</span>
            </h1>
            <p className="page-description">
              Select your vest and backpack, then add items to create the perfect loadout for every situation.
            </p>
          </div>
        </div>
      </section>

      <div className="container bagpack-container">
        {/* First Column */}
        <div className="vest-backpack-section">
          <div className="section-header">
            <h3>Vest / Backpack</h3>
          </div>
          <div className="vest-backpack-grid">
                <div className="dual-sections-container">

                <div className="vest-item">
                  {Data.vestData.map((vest, index) => (
                    <div
                      key={index}
                      className={`vest-item ${vest.name === selectedVestIndex?.name ? 'selected' : ''}`}
                      onClick={() => handleVestClick(vest)}
                    >
                      <img
                        src={require(`./Images/${vest.image}`)}
                        alt="vest"
                      />
                      <span className="item-name">{vest.name}</span>
                      <span className="item-capacity">CAP: {vest.capacity}</span>
                    </div>
                  ))}
                </div>
                <div className="backpack-item">
                  {Data.backpacks.map((backpack, index) => (
                    <div
                      key={index}
                      className={`backpack-item ${backpack.name === selectedBagpack?.name ? 'selected' : ''}`}
                      onClick={() => handleBagPackClick(backpack)}
                    >
                      <img
                        src={require(`./Images/${backpack.image}`)}
                        alt="backpack"
                      />
                      <span className="item-name">{backpack.name}</span>
                      <span className="item-capacity">CAP: {backpack.capacity}</span>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            
            </div>
            <div class ="item-align-center bg-gray-800 text-center w-full backpack-block py-3"><h3>Ready to fight!</h3><div> v 1.12</div></div>

          <div className="items-section">
            <div className="section-header">
              <h3>Consumables</h3>
            </div>
            <div className={`items-grid ${sum <= 0 ? 'disabled' : ''}`}>
            
            {generateItemListHTML()}</div>
          </div>

        {/* Third Column */}
        <div className="storage-section">
           <div className="storage-header">
             <div className="storage-icon">
               <i className="fas fa-memory"></i>
             </div>
             <div className="storage-info">
               <h3>Backpack Storage</h3>
               <div className="capacity">
                 <span>{selectedItemTotalCapacity}</span>/{sum} used
               </div>
             </div>
           </div>
<div class="dual-sections-container">
<div className="flex items-center pd11">
          <div className="w-26">
            <img
              src={require("./Images/vest-purple.png")}
              alt=""
              className="w-full"
            />{" "}
          </div>
          <div className="pl-2">
            <div className="text-xs">
              {selectedVestIndex ? selectedVestIndex?.name : "N/A"}
            </div>

            <div className="text-xs">
              {selectedVestIndex ? selectedVestIndex.capacity : 0}
            </div>
          </div>
        </div>
       
        <div className="flex items-center pd11">
          <div className="w-26">
            <img
              src={require("./Images/bgpack-icon.png")}
              alt=""
              className="w-full"
            />{" "}
          </div>
          <div className="pl-2">
            <div className="text-xs">
              {selectedBagpack ? selectedBagpack?.name : "N/A"}
            </div>

            <div className="text-xs">
              {selectedBagpack ? selectedBagpack.capacity : 0}
            </div>
          </div>
        </div>
        </div>
          </div>
          <div className={`equipped-items ${sum <= 0 ? 'disabled' : ''}`}>
            {selectedLoadData.map((item, index) => (
  <div className="equipped-item" key={index}>
    <img
      src={require(`./Images/${item.image}`)}
      alt={item.name}
    />
    <div className="equipped-item-info">
      <span className="name">{item.name}</span>
      <span className="weight">Weight: {item.capacity}</span>
    </div>
    <div className="item-count">
             <button
               className="count-btn"
               onClick={() => handleCountUpdate(item, -1)}
             >
               <i className="fas fa-minus"></i>
             </button>
             <span className="count">{item.count}</span>
             <button
               className="count-btn"
               onClick={() => handleCountUpdate(item, 1)}
             >
               <i className="fas fa-plus"></i>
             </button>
             </div>
  </div>
))}

</div>
          {/* Ready Banner */}
            <div className="ready-banner">
              <span>Ready to fight!</span>
              <span className="version">v 2.0</span>
            </div>
        </div>
    </>
  );
}

export default Bagpack;