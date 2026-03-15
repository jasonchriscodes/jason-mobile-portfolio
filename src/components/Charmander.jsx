import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei"
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

const Charmander = (props) => {
    const charmanderRef = useRef();

    const {scene} = useGLTF('/models/charmander.glb')

    useGSAP(() => {
        gsap.to(charmanderRef.current.position, {
            y: charmanderRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        })
    });

    return (
        <mesh {...props} scale={0.8} ref={charmanderRef} rotation={[0, Math.PI / 5, 0]}>
            <primitive object={scene}/>
        </mesh>
    )
}
useGLTF.preload('models/charmander.glb');

export default Charmander

