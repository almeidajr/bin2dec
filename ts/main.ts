window.onload = () => {
  console.log('The application is ready');

  const binaryField = document.getElementById('binary') as HTMLInputElement;
  const decimalField = document.getElementById('decimal');

  const valideInputs = ['0', '1'];

  if (binaryField && decimalField) {
    binaryField.addEventListener('keyup', event => {
      const inputKey = event.key;
      if (valideInputs.indexOf(inputKey) === -1) {
        const value = binaryField.value;

        binaryField.value = value.split(inputKey).join('');
      }

      const binary = binaryField.value;
      const decimal = bin2dec(binary);

      // console.log({binary, decimal});
      decimalField.innerText = decimal.toString();
    });
  } else {
    console.error('Make sure #binary and #decimal exists and is an input field');
  }

  //#region functions
  function bin2dec(binary: string) {
    let decimal = 0;
    const length = binary.length;
    for (let i = 0; i < length; i++) {
      const bit = Number(binary[i]);
      const order = length - i - 1;
      decimal += bit * Math.pow(2, order);
    }
    return decimal;
  }
  //#endregion
};