function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  
  if ( score >= 90 && score <= 100) {
    return 'A';

  } else if ( score >= 80 && score < 90) {
    return 'B';

  } else if ( score >= 7 && score < 80) {
    return 'C';

  } else if ( score >= 60 && score < 70) {
    return 'D';

  } else if (score > 0 && score <60) {
    return 'F';

  }else {
    return 'Invalid score';
  }
}