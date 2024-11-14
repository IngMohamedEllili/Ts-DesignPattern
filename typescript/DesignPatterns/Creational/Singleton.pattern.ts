class Singleton {
  // Propriété statique privée pour stocker l'instance unique
  private static instance: Singleton;
  private static _value: number;

  // Constructeur privé pour empêcher l'instanciation directe de la classe
  private constructor() {}

  // Méthode statique publique pour obtenir l'instance unique
  public static getInstance(): Singleton {
    // Vérifier si une instance existe déjà
    if (!Singleton.instance) {
      // Si aucune instance n'existe, créer une nouvelle instance
      Singleton.instance = new Singleton();
    }
    // Retourner l'instance unique
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.value = 10;
console.log(instance1.value); // 10;
console.log(instance2.value); // 10
console.log(instance1.value === instance2.value); // true

// Example of Logger that we can use only one instance for all the project
class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance(): Logger {
    return !Logger.instance
      ? (Logger.instance = new Logger())
      : Logger.instance;
  }

  public log(message: string): void {
    const timeStamp = new Date();
    console.log(`[${timeStamp.toLocaleString}] - ${message}`);
  }
}

const logger1 = Logger.getInstance();
console.log("👊 ~ file: Singleton.pattern.ts:55 ~ logger1:", logger1);
const logger2 = Logger.getInstance();
console.log("👊 ~ file: Singleton.pattern.ts:55 ~ logger1:", logger2);
