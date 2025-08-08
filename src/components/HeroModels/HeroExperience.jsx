import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import Particles from "./Particles.jsx";


const HeroExperience = () => {
    const isTablet = useMediaQuery({query:'(max-width: 1024px)'});
    const isMobile = useMediaQuery({query:'(max-width: 768px)'});

    return (
        <>
        <Canvas camera={{position: [0, 0, 15], fov: 45}}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <Particles count={100} />
        </Canvas>

            <img
                src="/images/cute-dino.png"
                alt="cute dino"
                className="md:left-150 md:top-25 top-45 opacity-90 md:w-70 absolute xl:top-50 xl:left-75 left-18 xl:w-100 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 active:scale-95 custom-bounce w-60 md:mt-20 sm:w-80"
            />

        </>
    )
}
export default HeroExperience
