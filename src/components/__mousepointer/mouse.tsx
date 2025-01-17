import { Suspense, useRef } from "react";
import { useFollowPointer } from "./useFollowPointer";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const Drag = ()=>{
    const ref = useRef<HTMLSpanElement>(null);
  useFollowPointer(ref);
    return(
        
            
          <Html wrapperClass="!transform-none" prepend>
          <div className="w-screen h-screen fixed inset-0 pointer-events-none z-[5000000]">
            <span
              ref={ref}
              className="size-10 border-[1px] backdrop-blur-md scale border-black border-dotted bg-black/20 invert mix-blend-difference duration-100 rounded-full block absolute left-0 top-0 pointer-events-none"
              />
          </div>
          </Html>
    )
}
export default function Mouse() {
  
  

  return (
    <div className="w-screen h-screen fixed inset-0 z-50 pointer-events-none canvas">
        <Canvas >
      <Suspense fallback={null}>
        <Drag/>
      </Suspense>
    </Canvas>
    </div>
    
  );
}
