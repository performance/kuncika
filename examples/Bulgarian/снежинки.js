

минимална_стойност = Math.min

_метод_     кох_път (дължина, дълбочина) {
  ако_иначе( () => (дълбочина == 0),
   () => {    напред(дължина);  },
   () => {
    //  ఎడమ వైపు బుడిప 
    кох_път (дължина/3, дълбочина-1);
    наляво(60); 
    кох_път (дължина/3, дълбочина-1);
    надясно(120); 
    кох_път (дължина/3, дълбочина-1);
    наляво(60); 
    кох_път (дължина/3, дълбочина-1);
  } )
}


_метод_     кох_химера (дължина, дълбочина) {
  ъгъл (30);
  позицията_промени(-дължина/2,-.3 * дължина);
  кох_път (дължина, дълбочина);
  надясно(120);
  кох_път (дължина, дълбочина);
  надясно(120);
  кох_път (дължина, дълбочина);
  надясно(120);
}
  
химера = ()=> {
  път_цветове.push(произволно_число(15) );
  път_цветове.shift();
  броиш_и_повтаряш (6, ( క ) => {
    цвят_промени( път_цветове [క] );
    кох_химера( дължина * (క+1) * (క+1), క)
  } );
}

_метод_     показване() {
  начално_състояние();
  дължина = .045* минимална_стойност(максимална_X(), максимална_Y())
  път_цветове = [];
  броиш_и_повтаряш (6, ( క ) => {
    път_цветове[క] = произволно_число(6);
  } );

  четката_скрий();
  играй(химера,1)
}
