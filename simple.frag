#version 120

// simple.frag
uniform float valFrag;
varying float addxy;

void main (void)
{
  // フラグメントの色
  //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  //gl_FragColor = gl_Color;

  if( gl_FragCoord.x < valFrag ) {  /* ピクセル座標値 gl_FragCoord と比較 */
    gl_FragColor = gl_Color * addxy;  /* 黄 */
  }
  else {
    gl_FragColor = gl_Color * addxy;  /* 紫 */
  }
}
