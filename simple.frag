#version 120

// simple.frag
uniform float valFrag;
varying float addxy;

void main (void)
{
  // �t���O�����g�̐F
  //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  //gl_FragColor = gl_Color;

  if( gl_FragCoord.x < valFrag ) {  /* �s�N�Z�����W�l gl_FragCoord �Ɣ�r */
    gl_FragColor = gl_Color * addxy;  /* �� */
  }
  else {
    gl_FragColor = gl_Color * addxy;  /* �� */
  }
}
