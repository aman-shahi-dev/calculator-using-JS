const input = document.getElementById('input');

function updateValue(val) {
  input.value += val;

  requestAnimationFrame(() => {
    input.scrollLeft = input.scrollWidth;
  });
}

function finalValue(expression) {
    
  const cleaned = expression.replace(/=/g, "");

  const isSafe = /^[0-9+\-*/().\s]+$/.test(cleaned);

  if (!isSafe) return "Invalid Expression";

  try {
    const result = eval(cleaned);
    return isFinite(result) ? result : "Math Error";
  } catch (e) {
    return "Math Error";
  }
}



document.getElementById('zero').addEventListener('click', () => updateValue('0'));
document.getElementById('one').addEventListener('click', () => updateValue('1'));
document.getElementById('two').addEventListener('click', () => updateValue('2'));
document.getElementById('three').addEventListener('click', () => updateValue('3'));
document.getElementById('four').addEventListener('click', () => updateValue('4'));
document.getElementById('five').addEventListener('click', () => updateValue('5'));
document.getElementById('six').addEventListener('click', () => updateValue('6'));
document.getElementById('seven').addEventListener('click', () => updateValue('7'));
document.getElementById('eight').addEventListener('click', () => updateValue('8'));
document.getElementById('nine').addEventListener('click', () => updateValue('9'));

document.getElementById('add').addEventListener('click', () => {
    updateValue('+')
})
document.getElementById('substract').addEventListener('click', () => {
     updateValue('-')
})
document.getElementById('multiply').addEventListener('click', () => {
     updateValue('x')
})
document.getElementById('divide').addEventListener('click', () => {
     updateValue('/')
})
document.getElementById('equals').addEventListener('click', () => {
    input.value = finalValue(input.value)
})

document.getElementById('acBtn').addEventListener('click', () => {
  input.value = '';
});

