import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';

const Controller = ({position = [0, 0, 0], scale = 0.02}) => {
    const controllerRef = useRef();
    const {scene} = useGLTF('/models/controller.glb');

    useFrame(() => {
        if (controllerRef.current) {
            controllerRef.current.rotation.y += 0.01;
        }
    });

    return (
        <primitive
            ref={controllerRef}
            object={scene}
            position={position}
            scale={scale}
            rotation={[0.2, -0.8, 0]}
        />
    );
};

useGLTF.preload('/models/controller.glb');

export default Controller;