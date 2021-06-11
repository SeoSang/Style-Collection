import React, { useEffect, useMemo, useRef } from "react";
import {
  BoxGeometry,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  DirectionalLight,
} from "three";
import { purple } from "../../styles/colors";
import { isClientSide, isValidRef } from "../../utils";
import { WebGL } from "../../utils/WebGL";

type CubeProps = {
  /** 돌아가는 각도 (x,y,z) */
  rotation: [number, number, number];
  /** 큐브의 색상 */
  color: number | string;
};

export const Cube = ({ rotation, color }: CubeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const scene = useMemo(() => {
    return new Scene();
  }, []);

  useEffect(() => {
    if (!isValidRef(ref) || !isClientSide()) {
      return;
    }
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current!.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const { cube } = WebGL.makeInstance(scene, geometry, color, 0);

    // 광원 추가
    const lightColor = 0xffffff;
    const intensity = 1;
    const light = new DirectionalLight(lightColor, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    camera.position.z = 5;

    const [rotation_x, rotation_y, rotation_z] = rotation;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += rotation_x;
      cube.rotation.y += rotation_y;
      cube.rotation.z += rotation_z;

      renderer.render(scene, camera);
    };

    if (WebGL.isWebGLAvailable()) {
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      ref.current!.appendChild(warning);
    }
  }, [scene]);

  return <div ref={ref} />;
};

Cube.defaultProps = {
  rotation: [0.01, 0.01, 0.01],
  color: purple[500],
};
