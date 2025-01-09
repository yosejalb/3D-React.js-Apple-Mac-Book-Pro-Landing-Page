import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
const App = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="navbar line flex gap-10 absolute pt-10 pb-3 top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "services",
          "ios",
          "mac",
          "products",
          "macBookPro",
          "macBookAir",
          "iMac",
          "macStudio",
          "appleWatch",
          "airPods",
        ].map((e) => (
          <a href="#" className="text-white text-md font-[400] capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">
          Experience unmatched performance and sleek design with <br /> the new
          MacBook Pro, built for professionals and creators alike.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={["./studio.hdr"]} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
