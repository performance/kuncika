// Herring Bone Tessellation -- tile a space using a herring bone brick laying pattern

sSide = 15
lSide = 2* sSide 

_విధానము_     vRect( sSide, lSide, fColor) {
  ఆకారము_ప్రారంభించు()
  for (_సర్వత్ర_   i=0; i<2; i++) {
    ముందుకు_జరుగు( sSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( lSide)
    కుడి_వైపు_తిరుగు(90)
  }
  ఆకారము_ముగించు( fColor)
  ముందుకు_జరుగు( sSide)
}

_విధానము_     hRect( sSide, lSide, fColor) {
  ఆకారము_ప్రారంభించు()
  for (_సర్వత్ర_   i=0; i<2; i++) {
    ముందుకు_జరుగు( lSide)
    కుడి_వైపు_తిరుగు(90)
    ముందుకు_జరుగు( sSide)
    కుడి_వైపు_తిరుగు(90)
  }
  ఆకారము_ముగించు( fColor)
  ముందుకు_జరుగు( lSide)
}

_విధానము_     ప్రదర్శన() {
  ఆది_స్థితి()
  count = 0
  yB = గరిష్ఠY() + sSide
  xB = కనిష్ఠX()
   చుట్టొద్దు()
  కుడి_వైపు_తిరుగు( 90)
  రంగు_మార్చు( తెలుపు )

  s = 50
  while( కుంచిక.స్థానము.y > కనిష్ఠY()) {
    స్థానము_మార్చు(xB, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కుంచికను_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కుంచికను_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    స్థానము_మార్చు(xB - lSide/2, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కుంచికను_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కుంచికను_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    స్థానము_మార్చు(xB - lSide, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కుంచికను_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కుంచికను_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide

    స్థానము_మార్చు(xB - 3/2 * lSide, yB)
    while( కుంచిక.స్థానము.x < గరిష్ఠX()) {
      కుంచికను_కింద_పెట్టు()
      hRect(sSide, lSide, "darkred")
      vRect(sSide, lSide, "darkred")
      కుంచికను_పైకి_ఎత్తు()
      ముందుకు_జరుగు( sSide)
    }
    yB = yB - sSide
  }
}
