export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype = {
  damage(points) {
    if (points) {
      const causeDamage = points * (1 - this.defence / 100);
      this.health -= causeDamage;
      if (this.health < 0) {
        this.health = 0;
      }
    } else {
      this.health = 100;
    }
  },
};

Character.prototype.damage(20);
