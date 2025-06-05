import { useState, useRef, useMemo, } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";


const vertexShader = `
	varying vec2 vUv;
    void main() {
		vUv = uv;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform vec2 iResolution;
    uniform float iTime;

    uint hash(uint x) {
        x *= 0xC2B2AE3Du;
        x = x << 17 | x >> 15;
        x ^= x >> 15;
        x *= 0x85EBCA77u;
        x ^= x >> 13;
        x *= 0x165667B1u;
        x ^= x >> 16;
        return x;
    }

    float fhash2(vec2 xy) {
        return float(hash(uint(1024.0 * xy.x) + hash(uint(1024.0 * xy.y)))) / float(0xFFFFFFFFu);
    }

    float fhash3(vec2 xy, uint z) {
        return float(hash(uint(1024.0 * xy.x) + hash(uint(1024.0 * xy.y) + hash(1024u * z)))) / float(0xFFFFFFFFu);
    }

    vec2 mask_coord(vec2 coord, int shift) {
        uint mask = 0xFFFFu << shift;
        return vec2(float(uint(coord.x) & mask), float(uint(coord.y) & mask));
    }

    float get_sample(vec2 coord, int shift) {
        coord = mask_coord(coord, shift);
        vec2 uv = coord / iResolution.xy;
        
        float offset = 1.2 * (uv.x + uv.y - 1.0);
        float hxy = fhash2(coord);
        float fshift = 6.0 * abs(uv.y - uv.x) + 1.8;
        float tf = 13.0 * iTime / fshift + 1.0 * hxy;
        uint t = uint(tf);
        float h1 = fhash3(coord, t);
        #if 1
        float c = 1.2 * h1 + offset;
        #else
        float h2 = fhash3(coord, t + 1u);
        float f = clamp(1.8 * (tf - float(t)), 0.0, 1.0);
        float c = 1.2 * mix(h1, h2, f) + offset;
        #endif
        c = (c - 0.5) * 2.5 / (1.5 + float(shift)) + 0.5;
        return c;
    }

    float get_sample_t(vec2 coord, uint time) {
        int shift = 0;
        for (int s = 2; s >= 0; s--) {
            vec2 xy = mask_coord(coord, s) / iResolution.xy;
            float factor = 1.0 * abs(xy.y - xy.x) + 1.0;
            if (s < int(factor + 1.0 * fhash3(xy, time))) {
                shift = s;
                break;
            }
        }
        float c1 = get_sample(coord, shift);
        float c2 = get_sample(coord, shift + 1);
        return (1.0 * c1 + c2) / 2.5;
    }

    void mainImage(out vec4 fragColor, vec2 fragCoord) {
        vec2 R = iResolution.xy;
        vec2 u = (fragCoord * 0.5 - R) / R.y;
        
        float a = 1.0;
        float d = 1.0;
        float i = 0.0;
        
        for (; i < 2.0; d += sin(i++ * u.y + a)) 
            a += cos(i - d + 0.15 * iTime - a * u.x);
                
        float value = 0.4 + 0.6 * cos(dot(u, vec2(d, a)));

		vec3 color1 = vec3(0.175, 0.175, 0.175);
        vec3 color2 = vec3(0.15, 0.15, 0.15);
        vec3 color3 = vec3(0.125, 0.125, 0.125);
        float t = step(0.5, value);
        vec3 color = mix(mix(color1, color2, value * 2.0), mix(color2, color3, (value - 0.5) * 5.0), t);

        float noise = get_sample_t(fragCoord, uint(iTime * 10.0));
        color += noise * 0.05;
        
        fragColor = vec4(color, 1.0);
    }

    void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
    }
`;


function Shader() {
	const meshRef = useRef(0);
	const shader = useMemo(() => {
		return new THREE.ShaderMaterial({
			uniforms: {
				iResolution: { value: new THREE.Vector2(1920, 1080) },
				iTime: { value: 0.0 },
			},
			vertexShader,
			fragmentShader,
		})
	}, []);

	const { camera, size } = useThree();
	const z = 0;
	const fov = camera.fov * (Math.PI / 180);
	const height = 2 * Math.tan(fov / 2) * Math.abs(camera.position.z - z);
	const width = height * (size.width / size.height);

	useFrame(({ clock }) => {
		if (shader) {
			shader.uniforms.iTime.value = clock.getElapsedTime();
		}
    });

	return (
		<mesh ref={meshRef} >
			<planeGeometry args={[width, height]}/>
			<primitive object={shader} attach="material" />
		</mesh>
	)
}


export default function CanvasComponent() {
	return (
		<div className="app-background">
			<Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: true, alpha: true, }}>
				<Shader />
				<ambientLight />
			</Canvas>
		</div>
	)
}
