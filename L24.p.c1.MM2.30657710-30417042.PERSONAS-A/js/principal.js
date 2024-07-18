class Persona {
    constructor(nombre, sexo) {
      this.nombre = nombre;
      this.sexo = sexo;
    }
  }
  
  const personas = [
    new Persona('Luisa', 'F'),
    new Persona('Ana', 'F'),
    new Persona('José', 'M'),
    new Persona('Carmen', 'F'),
    new Persona('Rosa', 'F'),
    new Persona('José', 'M'),
    new Persona('María', 'F'),
    new Persona('Luz', 'F'),
    new Persona('Rafael', 'M'),
    new Persona('Liz', 'F'),
    new Persona('Marcos', 'M'),
    new Persona('Leo', 'M')
  ];
  
  let mujeresProcesadas = 0;
  let hombresProcesados = 0;
  
  for (let persona of personas) {
    if (persona.sexo === 'F') {
      mujeresProcesadas++;
    } else {
      hombresProcesados++;
    }
  }
  
  const porcentajeMujeresProcesadas = (mujeresProcesadas / personas.length) * 100;
  
  let resultado = 'Porcentaje de mujeres procesadas: ' + porcentajeMujeresProcesadas.toFixed(2) + '%\n <br>';
  
  if (mujeresProcesadas > hombresProcesados) {
    resultado += 'Hay más mujeres';
  } else if (hombresProcesados > mujeresProcesadas) {
    resultado += 'Hay más hombres';
  } else {
    resultado += 'Hay igual cantidad de hombres y mujeres';
  }
  
  let salida = document.getElementById('salida');
  salida.innerHTML = resultado;