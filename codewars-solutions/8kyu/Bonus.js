function bonusTime(salary, bonus) {
  const total = bonus ? salary * 10 : salary;
  return '£' + total;
}
