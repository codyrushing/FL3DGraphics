## Editors
* [WebGLStudio](http://webglstudio.org/)
  * [course page here](http://webglstudio.org/mooc/)
* Three.js has its own editor - [http://threejs.org/editor/](http://threejs.org/editor/)
* [Clara.io](https://clara.io/) for asset creation

## Camera
A camera is described by its:
* __eye__ - the physical location of the camera in the scene.
* __center__ - coordinates at which the camera is pointing, has nothing to do with eye
* __field of view__ - the angle of the cone of vision, measured in degrees.  High FOV means wide angle, more "zoomed out" feel.  Small FOV feels like more "zoomed in".  Between 45 - 60 degrees is ideal, beyond that there can be distortion.
* __aspect ratio__ - width/height of what the camera sees.
* __near plane__ - plane in the camera's view where rendering starts.  If near plane is zero, we start rendering what is directly in front of the camera
* __far plane__ - where we stop rendering.  if this is too high, we will get artifacts

## 3D Objects
* Everything is drawn via triangles really.  You start with points, and then you use lines to connect all of those points to their neighbors forming a wireframe

## Lighting and shades
* Types
  * Omnilight - goes in all directions, like a candle
  * Spotlight - points in a direction and has a cone angle, like a camera
  * Directional - all light comes one direction, but parallel.  Think sunlight
  
