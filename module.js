export function devolverDatos(pacientes) {
  const datos = {};
  datos.nPatients = pacientes.lenght;
  datos.nAdults = pacientes.filter(
    (paciente) => paciente[patience.age >= 18]
  ).lenght;
  datos.nDiabeticMen = pacientes.filter(
    (paciente) => paciente[patience.age >= 18]
  ).lenght;
  /* datos.totalDaysInHospital =;
datos.averageAgeWomen =; */

  return datos;
}

/* {
    nPatients: (número de pacientes),
    nAdults: (número de pacientes mayores de edad),
    nDiabeticMen: (número de pacientes hombres con dieta para diabetes),
    totalDaysInHospital: (suma de los días de ingreso de todos los pacientes),
    averageAgeWomen: (edad media de las pacientes mujeres)
}
 */
