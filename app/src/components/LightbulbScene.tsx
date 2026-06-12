import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function LightbulbShape() {
  const groupRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const bulbGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 3.5)
    shape.bezierCurveTo(1.8, 3.5, 2.5, 2.0, 2.5, 0.8)
    shape.bezierCurveTo(2.5, -0.5, 1.8, -1.2, 1.3, -1.8)
    shape.lineTo(1.3, -2.3)
    shape.lineTo(-1.3, -2.3)
    shape.lineTo(-1.3, -1.8)
    shape.bezierCurveTo(-1.8, -1.2, -2.5, -0.5, -2.5, 0.8)
    shape.bezierCurveTo(-2.5, 2.0, -1.8, 3.5, 0, 3.5)

    const extrudeSettings = { depth: 0.5, bevelEnabled: false }
    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  const baseGeometry = useMemo(() => {
    return new THREE.BoxGeometry(1.8, 0.9, 0.5)
  }, [])

  const rings = useMemo(() => {
    const ringData = []
    for (let i = 0; i < 3; i++) {
      const y = 2.0 - i * 1.5
      const rx = 1.6 - i * 0.15
      const curve = new THREE.EllipseCurve(0, 0, rx, 0.3, 0, Math.PI * 2, false, 0)
      const points = curve.getPoints(32)
      const geometry = new THREE.BufferGeometry().setFromPoints(
        points.map(p => new THREE.Vector3(p.x, y, p.y))
      )
      ringData.push({ geometry, opacity: 0.3 - i * 0.08 })
    }
    return ringData
  }, [])

  const arcs = useMemo(() => {
    const arcData = []
    const sides = [-1, 1]
    for (const side of sides) {
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 3.0, 0),
        new THREE.Vector3(side * 0.8, 0.5, 0),
        new THREE.Vector3(side * 1.5, -1.5, 0)
      )
      const points = curve.getPoints(20)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      arcData.push(geometry)
    }
    return arcData
  }, [])

  const filamentGeometry = useMemo(() => {
    const points = []
    const segments = 10
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const y = 0.5 + t * 2.0
      const x = Math.sin(t * Math.PI * 4) * 0.3
      points.push(new THREE.Vector3(x, y, 0))
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  const particleRings = useMemo(() => {
    const configs = [
      { radius: 3.5, count: 80, size: 0.03, opacity: 0.6, speed: 0.4 },
      { radius: 4.5, count: 120, size: 0.025, opacity: 0.4, speed: -0.25 },
      { radius: 5.5, count: 160, size: 0.02, opacity: 0.25, speed: 0.15 },
      { radius: 6.5, count: 200, size: 0.015, opacity: 0.15, speed: -0.1 },
    ]
    return configs.map(cfg => {
      const positions = new Float32Array(cfg.count * 3)
      for (let i = 0; i < cfg.count; i++) {
        const angle = (i / cfg.count) * Math.PI * 2
        const r = cfg.radius + (Math.random() - 0.5) * 0.2
        positions[i * 3] = Math.cos(angle) * r
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5
        positions[i * 3 + 2] = Math.sin(angle) * r
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      return { geometry, size: cfg.size, opacity: cfg.opacity, speed: cfg.speed }
    })
  }, [])

  const shards = useMemo(() => {
    const shardData = []
    for (let i = 0; i < 20; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 4 + Math.random() * 4
      const pos = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
      const scale = 0.05 + Math.random() * 0.1
      const rotSpeed = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.5,
      }
      const orbitSpeed = 0.02 + Math.random() * 0.08
      shardData.push({ pos, scale, rotSpeed, orbitSpeed, phase: Math.random() * Math.PI * 2 })
    }
    return shardData
  }, [])

  const shardRefs = useRef<(THREE.Mesh | null)[]>([])
  const particleRingRefs = useRef<any[]>([])

  useFrame((_, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y += delta * 0.15
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseRef.current.y * 0.1,
      0.05
    )
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -mouseRef.current.x * 0.05,
      0.05
    )

    particleRingRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.y += particleRings[i].speed * delta
      }
    })

    shardRefs.current.forEach((shard, i) => {
      if (shard) {
        shard.rotation.x += shards[i].rotSpeed.x * delta
        shard.rotation.y += shards[i].rotSpeed.y * delta
        shard.rotation.z += shards[i].rotSpeed.z * delta
        const time = Date.now() * 0.001
        shard.position.y = shards[i].pos.y + Math.sin(time + shards[i].phase) * 0.3
      }
    })
  })

  const limeColor = new THREE.Color('#CCFF00')

  return (
    <group ref={groupRef} scale={0.5}>
      {/* Main bulb outline */}
      <lineSegments>
        <edgesGeometry args={[bulbGeometry]} />
        <lineBasicMaterial color={limeColor} transparent opacity={0.9} />
      </lineSegments>

      {/* Base */}
      <mesh position={[0, -2.65, 0.25]}>
        <boxGeometry args={[1.8, 0.9, 0.5]} />
        <meshBasicMaterial color={limeColor} wireframe transparent opacity={0.6} />
      </mesh>
      <lineSegments position={[0, -2.65, 0.25]}>
        <edgesGeometry args={[baseGeometry]} />
        <lineBasicMaterial color={limeColor} transparent opacity={0.8} />
      </lineSegments>

      {/* Internal rings */}
      {rings.map((ring, i) => (
        <line key={`ring-${i}`}>
          <bufferGeometry attach="geometry" {...ring.geometry} />
          <lineBasicMaterial color={limeColor} transparent opacity={ring.opacity} />
        </line>
      ))}

      {/* Arcs */}
      {arcs.map((arc, i) => (
        <line key={`arc-${i}`}>
          <bufferGeometry attach="geometry" {...arc} />
          <lineBasicMaterial color={limeColor} transparent opacity={0.3} />
        </line>
      ))}

      {/* Filament */}
      <line>
        <bufferGeometry attach="geometry" {...filamentGeometry} />
        <lineBasicMaterial color={limeColor} transparent opacity={0.8} linewidth={2} />
      </line>

      {/* Particle rings */}
      {particleRings.map((ring, i) => (
        <points
          key={`particles-${i}`}
          ref={el => { particleRingRefs.current[i] = el }}
        >
          <bufferGeometry attach="geometry" {...ring.geometry} />
          <pointsMaterial
            color={limeColor}
            size={ring.size}
            transparent
            opacity={ring.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            sizeAttenuation
          />
        </points>
      ))}

      {/* Floating shards */}
      {shards.map((shard, i) => (
        <mesh
          key={`shard-${i}`}
          ref={el => { shardRefs.current[i] = el }}
          position={[shard.pos.x, shard.pos.y, shard.pos.z]}
          scale={shard.scale}
        >
          {i % 3 === 0 ? (
            <tetrahedronGeometry args={[1, 0]} />
          ) : i % 3 === 1 ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : (
            <octahedronGeometry args={[1, 0]} />
          )}
          <meshBasicMaterial color={limeColor} wireframe transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function GroundReflection() {
  return (
    <group position={[0, -8, 0]} scale={[1, -1, 1]}>
      <LightbulbShape />
    </group>
  )
}

function CameraController() {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouseRef.current.x * 0.3,
      0.05
    )
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouseRef.current.y * 0.2,
      0.05
    )
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function LightbulbScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
      <Canvas
        camera={{ fov: 50, near: 0.1, far: 100, position: [0, 0, 12] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0D0D0D')
        }}
      >
        <CameraController />
        <LightbulbShape />
        <GroundReflection />
        {/* Ambient glow */}
        <pointLight color="#CCFF00" intensity={0.5} distance={10} position={[0, 2, 2]} />
      </Canvas>
    </div>
  )
}
