// Hexapentakis Truncated Icosahedron half -- half model for glue up
/*
This draws a model for half a hexapentakis truncated icosahedron
Print two of these on card stock. When cutting out, leave glue tabs
where appropriate, as they are not shown.
More at Wikipedia.com
*/


//Global constants
_సర్వత్ర_    centralPentaAngle = 70.72
_సర్వత్ర_    basePentaAngle = 90 - centralPentaAngle/2
_సర్వత్ర_    centralHexaAngle = 58.58
_సర్వత్ర_    baseHexaAngle = 90 - centralHexaAngle/2


_విధానము_     penta (side, faceColor) {
  //assume pointing in direction of base and center is above
  // move around point CW
  _సర్వత్ర_   pentaSide = .8639 * side

  for( i=0; i<5; i++) {
    ఆకారము_ప్రారంభించు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)
    ముందుకు_జరుగు( pentaSide)
    కుడి_వైపు_తిరుగు( 180-centralPentaAngle)
    ముందుకు_జరుగు( pentaSide)
    కుడి_వైపు_తిరుగు( 180-basePentaAngle)
    ఆకారము_ముగించు(faceColor)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-(2*basePentaAngle))
  }
}

_విధానము_     hexa (side, faceColor) {
  //assume pointing in direction of base and center is above
  // move around point CW
  _సర్వత్ర_   hexaSide = 1.022 * side

  for( _సర్వత్ర_   i=0; i<6; i++) {
    ఆకారము_ప్రారంభించు()
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)
    ముందుకు_జరుగు( hexaSide)
    కుడి_వైపు_తిరుగు( 180-centralHexaAngle)
    ముందుకు_జరుగు( hexaSide)
    కుడి_వైపు_తిరుగు( 180-baseHexaAngle)
    ఆకారము_ముగించు(faceColor)
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-(2*baseHexaAngle))
  }
}

px = 0
py = 0
pangle = 0

_విధానము_     savePos () {
  px = కుంచిక.స్థానము.x
  py = కుంచిక.స్థానము.y
  pangle = కుంచిక.కోణము
}

_విధానము_     restorePos() {
  కుంచిక.స్థానము.x = px
  కుంచిక.స్థానము.y = py
  కుంచిక.కోణము = pangle
}

p2x = 0
p2y = 0
p2angle = 0

_విధానము_     savePos2 () {
  p2x = కుంచిక.స్థానము.x
  p2y = కుంచిక.స్థానము.y
  p2angle = కుంచిక.కోణము
}

_విధానము_     restorePos2() {
  కుంచిక.స్థానము.x = p2x
  కుంచిక.స్థానము.y = p2y
  కుంచిక.కోణము = p2angle
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  కుంచికను_దాచు()
  side = .23 * Math.min(గరిష్ఠX(), గరిష్ఠY())
  స్థానము_మార్చు(-.6* side, -.5* side)
  కుడి_వైపు_తిరుగు(18)
  penta (side, "green")
  కుడి_వైపు_తిరుగు( (2*basePentaAngle))
  for (_సర్వత్ర_   i=0; i<5; i++) {
    savePos()
    // start with the base opposite of where you are now
    కుడి_వైపు_తిరుగు(2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(180)

    // draw another hexa out from where the first will be
    savePos2()
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు(180-2*baseHexaAngle)
    ముందుకు_జరుగు(side)
    కుడి_వైపు_తిరుగు(180)
    hexa (side, "red")

    restorePos2()

    // draw a penta on the free face one away
    ముందుకు_జరుగు( side)
    కుడి_వైపు_తిరుగు( 180-2*baseHexaAngle)
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180-2*basePentaAngle)
    ముందుకు_జరుగు(side)
    ఎడమ_వైపు_తిరుగు( 180)
    penta(side, "green")
    restorePos2()

    hexa (side, "blue")
    restorePos()
    ముందుకు_జరుగు( side)
    ఎడమ_వైపు_తిరుగు(180-(2*basePentaAngle))
  }
}
