import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// import * as THREE from "three"; // 修正
// import { OrbitControls } from "./jsm/controls/OrbitControls.js";

// /////////////////////////////////////////////////////////////

// (() => {



// })();


console.log("1");

// import * as THREE from "three";



// import * as Three from "three";
// export = Three;



// サイズを指定
// const width = 960;
// const height = 540;

// // レンダラーを作成
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector("#myCanvas"),
// });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(width, height);

// // シーンを作成
// const scene = new THREE.Scene();

// // カメラを作成
// const camera = new THREE.PerspectiveCamera(45, width / height);
// camera.position.set(0, 0, +1000);

// // 箱を作成
// const geometry = new THREE.BoxGeometry(400, 400, 400);
// const material = new THREE.MeshNormalMaterial();
// const box = new THREE.Mesh(geometry, material);
// scene.add(box);

// tick();

// // 毎フレーム時に実行されるループイベントです
// function tick() {
//   box.rotation.y += 0.01;
//   renderer.render(scene, camera); // レンダリング

//   requestAnimationFrame(tick);
// }