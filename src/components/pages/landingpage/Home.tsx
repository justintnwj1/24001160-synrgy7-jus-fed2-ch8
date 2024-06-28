
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
                    <a href="https://convincing-mab-justinganteng-781d7896.koyeb.app/getcars">Mulai Sewa Mobil</a>
                </button>
            </div>
            <div className="carImage">
                <img src= {carImage}/>
            </div>
        </div>
  );
}

