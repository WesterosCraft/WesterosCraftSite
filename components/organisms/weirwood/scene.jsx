import * as BABYLON from 'babylonjs';
import React from 'react';

export default class Scene extends React.Component {
  componentDidMount() {
    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
      this.props.engineOptions,
      this.props.adaptToDeviceRatio
    );

    const scene = new BABYLON.Scene(this.engine);
    this.scene = scene;

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas,
      });
    } else {
      console.error('onSceneMount function not available');
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  };

  onCanvasLoaded = c => {
    if (c !== null) {
      this.canvas = c;
    }
  };

  render() {
    const { width, height, ...rest } = this.props;

    let opts;

    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
    }

    return (
      <canvas
        id="renderCanvas"
        {...opts}
        ref={this.onCanvasLoaded}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}
