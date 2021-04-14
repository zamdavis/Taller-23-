# Taller de JavaScript: Funciones

![Resultado](/images/result.png)

Autor: Eduardo Oviedo Blanco

Para usar este taller efectivamente, clone el código en su ambiente local.
```
git clone https://github.com/edWAR6/JS-return-workshop.git
```
Si desea subir el taller en su repositorio personal.
Cree un repositorio en su perfil, luego:
```
git remote set-url origin https://github.com/<tu usuario>/JS-return-workshop.git
```

> El nombre del repositorio puede cambiar. Siga las instrucciones y guarde sus cambios.

## Propósito

Este básico taller demuestra el retorno de variables en funciones de JavaScript.

## Instrucciones

1. Inicie agregando una función para elevar un número al cuadrado.
```javascript
function squared(num) {
  return num * num;
}
```
2. Cree una función para elevar al cubo.
```javascript
function cubed(num) {
  return num * num * num;
}
```
3. Cree una función para calcular un factorial.
```javascript
function factorial(num) {
  if (num < 0) return undefined;
  if (num == 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}
```
4. Agregue una función anónima que reaccionará cada vez que se detecte un cambio en el *input*.
```javascript
input.onchange = function() {
  const num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '.';
  }
}
```
5. Observe el resultado ejecutando su proyecto e ingresando un número en el input. Para que se ejecute el evento, el *focus* debe de salir del campo.


## Conclusión

JavaScript nos permite retornar valores para así sacar más provecho a la reusabilidad de las funciones.
