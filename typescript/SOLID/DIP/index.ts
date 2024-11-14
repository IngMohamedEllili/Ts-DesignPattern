// Mauvaise pratique : dépendance directe à une implémentation concrète
class BadLampe {
  private ampoule: AmpouleIncandescente;

  constructor() {
    this.ampoule = new AmpouleIncandescente();
  }

  allumer(): void {
    this.ampoule.allumer();
  }
}

// Bonne pratique : dépendance à une abstraction
interface Ampoule {
  allumer(): void;
  eteindre(): void;
}

class AmpouleIncandescente implements Ampoule {
  // ...
  allumer(): void {}
  eteindre(): void {}
}

class AmpouleLED implements Ampoule {
  // ...
  allumer(): void {}
  eteindre(): void {}
}

class Lampe {
  private ampoule: Ampoule;

  constructor(ampoule: Ampoule) {
    this.ampoule = ampoule;
  }

  allumer(): void {
    this.ampoule.allumer();
  }
}
