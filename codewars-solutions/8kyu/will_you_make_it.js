function zeroFuel(distanceToPump, milesPerGallon, gallonsLeft) {
  const maxDistancePossible = milesPerGallon * gallonsLeft;
  return maxDistancePossible >= distanceToPump;
}