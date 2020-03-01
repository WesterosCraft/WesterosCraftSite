import React from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { Box } from 'rebass';

import Scene from './scene'; // import the component above linking to file we just created.

export default class Weirwood extends React.Component {
  setup = e => {
    const { canvas, scene } = e;

    const camera = new BABYLON.UniversalCamera(
      'UniversalCamera',
      new BABYLON.Vector3(0, 0, -10),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
  };

  run = e => {
    const { scene, engine } = e;
    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  onSceneMount = e => {
    const { scene } = e;

    this.setup(e);

    BABYLON.SceneLoader.ImportMesh('', '', 'dragongtl.glb', scene, meshes => {
      const dragon = meshes[0];

      // dragon.rotationQuaternion = undefined;

      // dragon.rotation.y = Math.PI / 7.5;
      // dragon.rotation.z = -Math.PI / 2.25;

      var axis = new BABYLON.Vector3(1, 1, 1);
      var angle = Math.PI / 8;
      var quaternion = new BABYLON.Quaternion.RotationAxis(axis, angle);
      dragon.rotationQuaternion = quaternion;
      dragon.position = new BABYLON.Vector3(-30, -30, -40);
      // const model = scene.getMeshByName('dragongtl');
      // console.log('model', model);
      // model.position = new BABYLON.Vector3(10, 10, 10);
      // model.translate(new BABYLON.Vector3(5, 0, 0), -180);
      // model.rotate(BABYLON.Axis.X, 0, BABYLON.Space.WORLD);
      // model.rotate(BABYLON.Axis.Y, 0, BABYLON.Space.WORLD);
      // model.rotate(BABYLON.Axis.Z, 0, BABYLON.Space.WORLD);
      // scene.createDefaultCameraOrLight(true, true, true);
    });

    BABYLON.SceneLoader.ImportMesh('', '', 'dragon2gtl.glb', scene, meshes => {
      // const model = scene.getMeshByName('__root__');
      // model.rotate(BABYLON.Axis.Y, -195, BABYLON.Space.WORLD);
      scene.createDefaultCameraOrLight(true, true, true);
    });

    scene.clearColor = BABYLON.Color3.Blue();
    scene.autoClear = false;

    this.run(e);
  };

  render() {
    return (
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
      >
        <Scene onSceneMount={this.onSceneMount} />
      </Box>
    );
  }
}
