// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.damage = damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super()
        this.name = name
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.damage = damage

        if (this.damage < this.health) {
            this.health - this.damage
            return (`${this.name} has received ${this.damage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }

    battleCry() {
        return ("Odin Owns You All!")
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super()
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.damage = damage
        this.health - this.damage
        if (this.damage < this.health) {
            return (`A Saxon has received ${this.damage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }

}

// War
class War {

    vikingArmy = []
    saxonArmy = []

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        // let oldHealth = saxon.health;
        // let newHealth = oldHealth - this.Viking.strength
    }
}