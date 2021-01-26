#version 120

// simple.vert
varying float addxy;

void main(void)
{
  // 頂点位置
  gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

  //頂点色
  gl_FrontColor = gl_Color;

  addxy = ( ( gl_Position.x + gl_Position.y ) + 2.0 ) / 2.0;
}
