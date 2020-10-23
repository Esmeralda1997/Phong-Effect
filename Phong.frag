//
//  Phong.cpp
//  PhongEffect
//
//  Created by Coral Hernandez on 10/21/20.
//
#version 330 core
out vec4 FragColor;

in vec3 Normal;
in vec3 FragPosition;
  
uniform vec3 lightPosition;
uniform vec3 viewPosition;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // ambient
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor;
    
    // diffuse
    vec3 norm = normalize(Normal);
    vec3 lightDirection = normalize(lightPosition - FragPosition);
    float diff = max(dot(norm, lightDirection), 0.0);
    vec3 diffuse = diff * lightColor;
    
    
    // specular
    float specularStrength = 0.5;
    vec3 viewDirection = normalize(viewPosition - FragPosition);
    vec3 reflectDirection = reflect(-lightDirection, norm);
    float spec = pow(max(dot(viewDirection, reflectDirection), 0.0), 32);
    vec3 specular = specularStrength * spec * lightColor;
    

    //combined
    vec3 result = (ambient + diffuse + specular) * objectColor;
    FragColor = vec4((result), 1.0);
}
