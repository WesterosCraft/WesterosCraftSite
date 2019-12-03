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

    BABYLON.SceneLoader.Append('/', 'scene.glb', scene, meshes => {
      const model = scene.getMeshByName('__root__');

      model.rotate(BABYLON.Axis.Y, -195, BABYLON.Space.WORLD);
      // scene.createDefaultEnvironment({
      //   createSkybox: false,
      //   createGround: false,
      // });
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
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      >
        <Scene onSceneMount={this.onSceneMount} />
      </Box>
    );
  }
}
