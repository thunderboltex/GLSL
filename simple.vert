#version 120

// simple.vert
varying float addxy;

void main(void)
{
  // ���_�ʒu
  gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

  //���_�F
  gl_FrontColor = gl_Color;

  addxy = ( ( gl_Position.x + gl_Position.y ) + 2.0 ) / 2.0;
}
