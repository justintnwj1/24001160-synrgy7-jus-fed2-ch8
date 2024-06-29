
import carImage from "../../../assets/car.svg"

export default function Home() {
  return (
    <div className="home">
            <div className="homeDesc font">
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua.
                </p>
                <button className="carRentButton font">
                    <a href="https://24001160-synrgy7-jus-fed2-ch8.vercel.app/getcars">Mulai Sewa Mobil</a>
                </button>
            </div>
            <div className="carImage">
                <img src= {carImage}/>
            </div>
        </div>
  );
}

