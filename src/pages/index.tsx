import DataFetching from "../components/productsData/dataFetching.js";
import Image from "next/image.js";
export default function Home() {
  return (
    <div>
      <div id="homepage-body">
        <Image src="/images/pngwing.png" width={350} height={420} alt="image" className="home-page-image" />
        <div>
          <p>Like it, Want it, Grab it.</p>
          <p>Biggest shopping store across the World !</p>
        </div>
      </div>
      <DataFetching />
    </div>
  );
}
