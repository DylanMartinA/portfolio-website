import React from 'react'
import { Canvas } from '@react-three/fiber'
import {Float, OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import { Island } from "./HeroModels/Floating_island.jsx"
import HeroLights from "./HeroModels/HeroLights.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas camera={{ position: [0, 5, 20], fov: 45 }}>

            <HeroLights />

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={10}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group
                scale={isMobile ? .009 : .009}
                position={isMobile ? [-1,-5.5,0]: [-.8,-4.5,0]}
                rotation={[0, -Math.PI / 4, 0]}
                >
                <Island />
                </group>
            </Float>
        </Canvas>
    )
}
export default HeroExperience
