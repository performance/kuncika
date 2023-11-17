// източник: https://pythonturtle.academy/tutorial-drawing-egg-shape-with-python-turtle/

овална = (x, y, размер, наклон) => {
  четката_нагоре();
  позицията_промени(x, y);
  четката_надолу();
  посоката_промени(270 + наклон);
  цвят_промени(4); // червено
  надясно_кликни(размер, 180);
  цвят_промени(1); // синьо
  надясно_кликни(2 * размер, 45);
  цвят_промени("зелено");
  надясно_кликни(0.586 * размер, 90);
  цвят_промени(1); // синьо
  надясно_кликни(2 * размер, 45);
};

показване = () => {
  начално_състояние();
  четката_скрий();
  овална(90, 90, 40, 0);
  овална(0, 0, 90, 45);
};
