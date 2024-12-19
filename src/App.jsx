import React from "react";
import Romeo from "./Romeo";
import Prop from "./Prop";

function App() {
  return (
    <>
      <div className="Sam">
        <div>
          <img></img>
        </div>

        <div className="io">MEDICINES</div>
        <div className="io">PRODUCTS</div>
        <div className="io">LAB TESTS</div>
        <div className="io">CONSULT DOCTORS</div>
        <div className="io">AYURVEDA</div>
        <div className="io">CARE PLAN</div>
        <img></img>
        <img></img>
      </div>
      <div className="sa">
        <input className="ipko" placeholder="Search for Medicines and Health Products"></input>
        <button className="poi">Search</button>

      </div>
      <div className="ram">
        <div className="card">Health Resource</div>
        <div className="card"></div>
        <div className="card">Vitamins & Nutrition</div>
        <div className="card"> Diabetes</div>
        <div className="card">Health Devices</div>
        <div className="card">Personal Care</div>
        <div className="card">Ayurvedic Products</div>
      </div>
      <div className="der">
        <div className="jam">
          <div className="nam">
            <p className="lko">Neeed a second option for your surgery?</p>
          </div>
          <div>
            <div className="rom">10% OFF</div>
            <p className="op">
              on <span className="po">General Surgeon Consulation</span>
            </p>
            <div>
              <div className="lo">
                <p className="ty">
                  Use code:<span className="kl">1MGSALE10</span>
                </p>
              </div>
            </div>
          </div>
          <div>

           <Romeo/>
        
          </div>
          <div className="ji">
            <button className="but">Consult Now </button>
            <p className="lop">T&C Apply</p>
          </div>
        </div>
        <div className="ohu">
          <div className="89">
            <p>Your one-stop shop for a healthy monsoon</p>
            <h1>UP TO 60% OFF</h1>
            <p>on MOonsoon Care range</p>
            <button className="oiu">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
