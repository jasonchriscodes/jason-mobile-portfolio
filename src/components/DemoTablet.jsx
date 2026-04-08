import React, { useEffect, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoTablet = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/tablet.glb");

  const txt = useVideoTexture(
      props.texture ? props.texture : "/textures/project/tablet1.mp4"
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = true;
    }
  }, [txt]);

  useGSAP(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [txt]);

  return (
      <group ref={group} {...props} dispose={null}>
        <group scale={0.01}>
          <group
              position={[-0.95, 97.351, 6.014]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[4.114, 148.686, 97.338]}
          >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material001_0.geometry}
                material={materials["Material.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material006_0.geometry}
                material={materials["Material.006"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material002_0.geometry}
                material={materials["Material.002"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material003_0.geometry}
                material={materials["Material.003"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material005_0.geometry}
                material={materials["Material.005"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material008_0.geometry}
                material={materials["Material.008"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_Material007_0.geometry}
                material={materials["Material.007"]}
            />
          </group>

          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material004_0.geometry}
              position={[-0.925, 97.351, 6.014]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[4.114, 148.686, 97.338]}
          >
            <meshBasicMaterial map={txt} toneMapped={false} />
          </mesh>
        </group>
      </group>
  );
};

useGLTF.preload("/models/tablet.glb");

export default DemoTablet;