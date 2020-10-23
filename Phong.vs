//
//  Phong.cpp
//  PhongEffect
//
//  Created by Coral Hernandez on 10/21/20.

//  Create the position and normal vectors
#version 330 core
layout (location = 0) in vec3 aPosition;
layout (location = 1) in vec3 aNormal;

//  Create the out vectors
out vec3 FragPosition;
out vec3 Normal;

//  Create the constant values for how we will see the cube on the window
uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    //  Calculate the fragment and normal positions
    FragPosition = vec3(model * vec4(aPosition, 1.0));
    Normal = mat3(transpose(inverse(model))) * aNormal;
    gl_Position = projection * view * model * vec4(aPosition, 1.0);
}
