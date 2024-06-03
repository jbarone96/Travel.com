import React from "react";
import "../HomePage/Home.css";

const Home = () => {
  const featuredStays = [
    {
      rating: "9.5/10",
      reviews: "10",
      name: "Hilton San Diego Bayfront",
      city: "San Diego, CA",
      price: "$340",
      image: "Images/hiltondiego.jpg",
    },

    {
      rating: "8.9/10",
      reviews: "29",
      name: "Hilton New York Times Square",
      city: "New York, NY",
      price: "$237",
      image: "Images/hiltontimessquare.jpg",
    },
    {
      rating: "9.1/10",
      reviews: "18",
      name: "Novotel Miami Brickell",
      city: "Miami, FL",
      price: "$140",
      image: "Images/novotelmiami.jpg",
    },
    {
      rating: "9.9/10",
      reviews: "20",
      name: "Three Bear Lodge",
      city: "West Yellowstone, MT",
      price: "$198",
      image: "Images/threebearlodge.png",
    },
  ];

  return (
    <>
      <div className="card w-75 p-2 mt-5 m-auto">
        <div className="container-fluid">
          <button className="btn btn-outline-primary mt-2 mx-2 m-auto">
            <div className="nav-item">Flights</div>
          </button>
          <button className="btn btn-outline-primary mt-2 mx-2 m-auto">
            <div className="nav-item">Hotels</div>
          </button>
          <button className="btn btn-outline-primary mt-2 mx-2 m-auto">
            <div className="nav-item">Rental Cars</div>
          </button>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div class="form-group col-md-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Going to"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputZip">Travelers</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          fontSize: "36px",
          textAlign: "left",
          marginLeft: "90px",
          padding: "10px",
          textDecoration: "underline",
        }}
      >
        Explore these Featured Stays
      </div>
      <div className="hotels">
        {featuredStays.map((hotel) => (
          <div className="card p-3 mt-2 mx-2 m-auto d-inline-flex">
            <div>
              <img src={hotel.image} alt="Hotel" className="hotel-image mb-2" />
              <div className="hotel-text">
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "-15px",
                  }}
                >
                  {hotel.name}
                </div>
                <br />
                {hotel.rating} ({hotel.reviews} reviews)
                <br />
                {hotel.city}
                <br />
                {hotel.price} per night
              </div>
              <button className="btn btn-primary mt-3">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="card w-75 p-3 mt-5 m-auto">
        <div style={{ fontSize: "24px" }}>
          <img className="app-image" src="Images/beach.jpg" alt="" />
          <div style={{ fontWeight: "600" }}>
            Bring your travel search with you on the Travel.com app!
          </div>
          <div style={{ fontSize: "12px" }}>
            Save on select hotels and travel with our Travel.com rewards program
            when you book through our mobile app! Our deals help you manage your
            travel and save at the same time. So what are you waiting for?
          </div>
          <div style={{ fontWeight: "500" }}>Scan the QR code now!</div>
        </div>
      </div>
      <div className="vacation-set">
        <div className="vacation-image">
          <div>
            <img
              src="Images/stockvacation.jpg"
              alt=""
              className="vacation-image"
            />
            <div
              style={{
                fontWeight: "200",
                fontSize: "14px",
              }}
            >
              Unlock rewards by booking with Travel.com
            </div>
          </div>
        </div>
        <div className="vacation-image">
          <div>
            <img
              src="Images/stockvacation2.jpg"
              alt=""
              className="vacation-image"
            />
            <div style={{ fontWeight: "200", fontSize: "14px" }}>
              A special trip for a special person
            </div>
          </div>
        </div>
        <div className="vacation-image">
          <div>
            <img
              src="Images/stockvacation3.jpg"
              alt=""
              className="vacation-image"
            />

            <div style={{ fontWeight: "200", fontSize: "14px" }}>
              Save big when you book your flight and stay with us
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
