// Mauvaise pratique : la sous-classe Oiseau ne respecte pas le contrat de la classe Animal
class BadAnimalLSP {
  manger(): void {
    console.log("L'animal mange.");
  }
}

class BadOiseauLSP extends BadAnimalLSP {
  manger(): void {
    throw new Error("Les oiseaux ne mangent pas comme les autres animaux.");
  }
}

// Bonne pratique : la sous-classe Oiseau respecte le contrat de la classe Animal
class AnimalLSP {
  manger(): void {
    console.log("L'animal mange.");
  }
}

class OiseauLSP extends AnimalLSP {
  manger(): void {
    console.log("L'oiseau mange des graines.");
  }
}
