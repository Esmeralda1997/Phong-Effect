Using OpenGL in a Xcode in MAC OS system I created a cube lighted with using the Phong Effect.

Figuring out how to define the object color, light color, light position and view position was a bit tricky. However, I followed the code provided in the open gl website. The object color is green. The light color is white so we can clearly see the difference when we add the specular light.

I messed around with the camera position so I would be able to see the cube's 3 phases. At the angle that I set it up you can see how the Phong effect changes the 3 sides of the cube. 

I also played around with the light position, and saw how the x coordinate changed the intensity of light on the front side of the cube.

For the phong.vs and phong.frag files I also relied on the same files to create these files. For the vs file, I followed what was on the website. For the phong.frag file, I also relied on the website. The ambient light can be found by just multiplying the light color by some constant. The diffuse light needs to be normalized then multiplied by the light color. The specular light needs to be normalized, then you need to find the dot product of the reflection direction. Finally you also multiply it by the light color. To get the result we add all the ambient, specular, and diffuse light to get the fragment matrix.

RESOURCES:
https://learnopengl.com/Lighting/Basic-Lighting







