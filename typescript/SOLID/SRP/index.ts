// Mauvaise pratique : la classe User gère à la fois les données utilisateur et la persistance.
class BadUser {
  private nom: string;
  private email: string;

  constructor(nom: string, email: string) {
    this.nom = nom;
    this.email = email;
  }

  enregistrer(): void {
    // Logique pour enregistrer l'utilisateur dans la base de données
    console.log(
      `Enregistrement de l'utilisateur ${this.nom} dans la base de données...`,
    );
  }

  envoyerEmail(message: string): void {
    // Logique pour envoyer un email à l'utilisateur
    console.log(`Envoi d'un email à ${this.email} : ${message}`);
  }
}

// Bonne pratique : séparation des responsabilités
class User {
  private nom: string;
  private email: string;

  constructor(nom: string, email: string) {
    this.nom = nom;
    this.email = email;
  }

  getNom(): string {
    return this.nom;
  }

  getEmail(): string {
    return this.email;
  }
}

class UserRepository {
  enregistrer(user: User): void {
    // Logique pour enregistrer l'utilisateur dans la base de données
    console.log(
      `Enregistrement de l'utilisateur ${user.getNom()} dans la base de données...`,
    );
  }
}

class EmailService {
  envoyerEmail(user: User, message: string): void {
    // Logique pour envoyer un email à l'utilisateur
    console.log(`Envoi d'un email à ${user.getEmail()} : ${message}`);
  }
}
