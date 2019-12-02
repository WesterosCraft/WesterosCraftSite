import React from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

import Scene from './scene'; // import the component above linking to file we just created.

export default class Tree extends React.Component {
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

    BABYLON.SceneLoader.Append('tree/', 'scene.gltf', scene, function(meshes) {
      const model = scene.getMeshByName('__root__');

      model.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.WORLD);
      scene.createDefaultEnvironment({
        createSkybox: false,
        createGround: false,
      });
      scene.createDefaultCameraOrLight(true, true, true);
    });

    scene.autoClear = false;

    this.run(e);
  };

  render() {
    return (
      <div>
        <Scene onSceneMount={this.onSceneMount} />
      </div>
    );
  }
}
