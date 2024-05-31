 compare=( a, b ) =>{
    if ( a.nom < b.nom ){
      return -1;
    }
    if ( a.nom > b.nom ){
      return 1;
    }
    return 0;
  }