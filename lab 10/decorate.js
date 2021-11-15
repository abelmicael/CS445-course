class User {
    constructor(name) {
      this.name = name;
    }
    log() {
      console.log("User: " + this.name);
    }
  }
  
  class DecoratedUser {
    constructor(user, street, city) {
      this.user = user;
      this.name = user.name; // ensures interface stays the same
      this.street = street;
      this.city = city;
    }
    logger() {
      console.log(
        "Decorated User: " + this.name + ", " + this.street + ", " + this.city
      );
    }
  }
  const user = new User("Kelly");
  
  const decorated = new DecoratedUser(user, "Broadway", "New York");
  decorated.logger();