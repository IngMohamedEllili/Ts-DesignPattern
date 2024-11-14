// Mauvaise pratique : interface générale avec trop de méthodes
interface Travailleur {
  travailler(): void;
  manger(): void;
  dormir(): void;
}

// Bonne pratique : interfaces spécifiques
interface Travailleur {
  travailler(): void;
}

interface Mangeur {
  manger(): void;
}

interface Dormeur {
  dormir(): void;
}
