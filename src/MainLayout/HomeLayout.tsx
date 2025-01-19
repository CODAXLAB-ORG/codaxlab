import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Vector3, Mesh } from "three";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Mouse from "../components/__mousepointer/mouse";
// import Navbar from '../components/navbar/NavBar';

const ShootingStar = ({
  position,
  direction,
  speed,
}: {
  position: Vector3;
  direction: Vector3;
  speed: number;
}) => {
  const starRef = useRef<Mesh>(null);

  // Move the shooting star
  useFrame(() => {
    if (starRef.current) {
      starRef.current.position.add(direction.clone().multiplyScalar(speed));
      // Resets star position when it moves off-screen
      if (
        starRef.current.position.x > 50 ||
        starRef.current.position.y > 50 ||
        starRef.current.position.z > 50
      ) {
        starRef.current.position.set(
          -50,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        ); // Resets to random y and z positions
      }
    }
  });

  return (
    <mesh ref={starRef} position={position}>
      <sphereGeometry args={[0.2, 4, 4]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

export default function MainLayout() {
  const [shootingStars, setShootingStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Creating shooting stars randomly and continuously
    const stars = [];
    for (let i = 0; i < 10; i++) {
      const position = new Vector3(
        Math.random() * 20 - 10,
        Math.random() * 20 - 40,
        Math.random() * 20 - 30
      );
      const direction = new Vector3(
        Math.random(),
        Math.random(),
        Math.random()
      ).normalize();
      const speed = Math.random() * 0.1 + 2;
      stars.push(
        <ShootingStar
          key={i}
          position={position}
          direction={direction}
          speed={speed}
        />
      );
    }
    setShootingStars(stars);

    // Setting an interval to spawn new stars
    const intervalId = setInterval(() => {
      const newPosition = new Vector3(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      const newDirection = new Vector3(
        Math.random(),
        Math.random(),
        Math.random()
      ).normalize();
      const newSpeed = Math.random() * 0.1 + 0.01;
      setShootingStars((prevStars) => [
        ...prevStars,
        <ShootingStar
          key={prevStars.length}
          position={newPosition}
          direction={newDirection}
          speed={newSpeed}
        />,
      ]);
    }, 200); // try Add a new shooting star every second

    // Cleaning up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative w-screen h-screen bg-gradient-to-br from-black to-gray-800 text-white overflow-hidden">
      {/* 3D Canvas */}
      <Canvas>
        {/* Stars Background */}
        <Stars
          radius={100}
          depth={20}
          count={200}
          factor={20}
          saturation={0}
          fade
          speed={2}
        />

        {/* Shooting Stars */}
        {shootingStars}

        {/* Camera Controls */}
        <OrbitControls />
      </Canvas>

      {/* moving ball as cursor follower */}
      <Mouse />

      {/* Overlay Content */}
      <div
        id="scroll-container"
        className="absolute inset-0 flex flex-col md:items-start justify-between text-center md:text-start gap-4 overflow-y-auto w-full no-scrollbar"
      >
        {/* Add header or navbar here */}
        <nav className="text-white fixed top-0 w-full z-[90]">
          <Navbar />
        </nav>

        <div className="w-full px-5 lg:px-20 pb-[1rem] pt-[4rem]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
}
