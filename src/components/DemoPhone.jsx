import React, { useEffect, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoPhone = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/phone.glb");

  const txt = useVideoTexture(
      props.texture ? props.texture : "/textures/project/phone1.mp4"
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

      gsap.from(group.current.position, {
        y: -0.3,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [txt]);

  return (
      <group ref={group} {...props} dispose={null}>
        <group position={[0, 1.485, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <group position={[0.322, -0.133, -1.317]} scale={0.069}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials.BackCam_Light}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials.Glass}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_23.geometry}
                material={materials.Light}
            />
          </group>

          <group position={[0, 0, -0.191]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_37.geometry}
                material={materials.Back}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_38.geometry}
                material={materials.Speaker}
            />
          </group>

          <group position={[0, 0, -0.191]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_40.geometry}
                material={materials.Display}
            >
              <meshBasicMaterial map={txt} toneMapped={false} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_41.geometry}
                material={materials.backcam}
            />
          </group>

          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.material_0}
              position={[0.322, -0.151, -1.067]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1.049}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.Back}
              position={[0.631, -0.08, -0.858]}
              rotation={[-1.375, 0, -Math.PI / 2]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Back}
              position={[0.631, -0.08, -0.49]}
              rotation={[-1.375, 0, -Math.PI / 2]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.Back}
              position={[-0.613, -0.081, 0.255]}
              rotation={[-1.375, 0, -Math.PI / 2]}
              scale={0.885}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Cport}
              position={[-0.041, -0.098, 1.094]}
              rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials["backcam.001"]}
              position={[0.438, -0.098, -1.19]}
              scale={0.067}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.Back}
              position={[0.631, -0.082, 0.254]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={[0.839, 0.839, 0.869]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials["backcam.001"]}
              position={[0.205, -0.098, -1.19]}
              scale={0.067}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.metal}
              position={[-0.007, -0.089, 0.539]}
              rotation={[Math.PI, -1.424, Math.PI]}
              scale={0.069}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.metal}
              position={[-0.007, -0.089, 0.539]}
              rotation={[Math.PI, -1.424, Math.PI]}
              scale={0.069}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials["Glass.001"]}
              position={[-0.472, -0.006, -1.35]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.02, 0.02, 0.008]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials["Glass.001"]}
              position={[0.438, -0.133, -1.189]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.036}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials["Glass.001"]}
              position={[0.205, -0.128, -1.189]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.042}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.FrontGlass}
              position={[0, 0.002, -0.191]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials.Front}
              position={[0, 0, -0.191]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials.Glass}
              position={[0, 0, -0.191]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials.Front}
              position={[0.32, -0.156, -1.193]}
          />
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.backcam}
              position={[0.32, -0.153, -1.193]}
              scale={0.231}
          />
        </group>
      </group>
  );
};

useGLTF.preload("/models/phone.glb");

export default DemoPhone;