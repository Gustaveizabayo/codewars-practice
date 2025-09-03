function rainAmount(mm) {
    if (mm < 40) {
        return  "ypu need to give your plant" +(40 - mm) + "mm of water";
    } else {
        return "your plant has had more than enough water for today!";
    }
}