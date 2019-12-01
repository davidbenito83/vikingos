Ejercicio de vikingos

## Introdución

En este ejercicio tendremos que hacer uso de las clases para programar una reconstrucción de una batalla vikinga


## Requisitos

- Haz fork de este repositorio.
- Clona este repositorio

### Test, test, test!

Para comenzar a familiarizarnos con los test, vamos a utilizar jasmin para llevar a cabo este ejercicio. Por ahora, simplemente ve a la carpeta starter-code/test y abre el archivo VikingSpec.js. 

Ve descomentando los distintos test (cada it()) parair realizando los ejercicios por orden. 

## Exercise

### Soldier

Modifica la clase Soldier y añádele dos métodos: attack y receiveDamage

#### class

- Debe recibir dos argumentos (health y strength)

#### `attack()` 

- Debe devolver la propiedad strength del soldado. 

#### `receiveDamage()` 

- Debe recibir `damage` como argumento.
- Si al soldado le hacen daño, deberá perder salud no?

---

### Viking

El Vikingo es un soldado con una propiedad adicional: su nombre. 

Su forma de recibir daño es distinta por lo que deberemos modificar el métodos. 

Además, los vikingos tienen su grito de guerra, por lo que deberá de tener un metodo adicional. `battleCry`

Modifica la clase Viking para que hereder de los métodos de Soldier y reimplementa el método receiveDamage y añade el método battleCry()

#### `attack()`
El método attack debe ser heredado del Vikingo

#### `receiveDamage()` 


- Igual que en el Soldier, recibirá 1 argumento 'damage'.
- Deberá restar su saludo con respecto al daño
- Deberá devolver "NAME has received DAMAGE points of damage"
- Si el vikingo muere, deberá devolver "[NAME] has died in act of combat"

#### Método`battleCry()`

- Debe devolver __"Odin Owns You All!"__

---

### Saxon

Los soldados sajones ( `Saxon` ) son un tipo de `Soldier` más débil. A diferencia de un Vikingo, un soldado sajón no tiene nombre. Su método `receiveDamage()` también será diferente.

Modifica la clase para que herede sus propiedades de `Soldier` e implemente de nuevo el método receiveDamage()

#### `attack()`

Este método será heredado de `Soldier` y deberá devolver la fuerza del `Saxon`

#### `receiveDamage()`

Al igual que los dos anteriores, el `Saxon` deberá restar la salud respecto al daño recibido. 

- __Si el Saxon está todavía vivo__, deberá devolver ___"A Saxon has received [DAMAGE] points of damage"___
- __Si el Saxon muere__, deberá devolver ___"A Saxon has died in combat"___

---

### BONUS: War

¡Es hora de la guerra!

Esta clase deberá permitirno tener una armada de vikingos y de sajones que luchen los unos contra los otros.  

Modifica la clase War y añade los siguientes métodos. 

- `addViking()`
- `addSaxon()`
- `vikingAttack()`
- `saxonAttack()`
- `showStatus()`

#### class

Cuando creamos la clase `War`, las armadas deberán estar vacías. Añadiremos los soldados a las armadas más adelante.

- Este método no recibe argumentos
- Deberá asignar un array vacio a la propiedad __`vikingArmy`__
- Deberá asignar un array vacio a la propiedad __`saxonArmy`__

#### `addViking()` 

Añade un vikingo a la armada vikinga (`vikingArmy`). Para añadir 10 vikingos, por ejemplo, deberás llamar a este método 10 veces

- debe recibir como argumento un ojeto `Viking`.
- Debe añadir el objeto `Viking`a la armada de vikingos
- No devuelve nada. 

#### `addSaxon()` method

Es la versión sajona del método  `addViking()`, por lo que será muy similar. 

#### `vikingAttack()` method

Un sajon (`Saxon`) elegido aleatoriamente 
A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

- should be a function
- should receive __0 arguments__
- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return __result of calling `receiveDamage()` of a `Saxon`__ with the `strength` of a `Viking`

#### `saxonAttack()` method

The `Saxon` version of `vikingAttack()`. A `Viking` receives the damage equal to the `strength` of a `Saxon`.

- should be a function
- should receive __0 arguments__
- should make a `Viking` `receiveDamage()` equal to the `strength` of a `Saxon`
- should remove dead vikings from the army
- should return __result of calling `receiveDamage()` of a `Viking`__ with the `strength` of a `Saxon`

#### SUPER BONUS

Since there is a lot of repetitive code in the previous two iterations, _vikingAttack()_ and _saxonAttack()_ try to create one _generic_ method and call it in the case of _vikingAttack_ and in the case of _saxonAttack_ instead of using almost the same code for both methods. (This iteration doesn't have test, so ask your TAs and your instructor to give you feedback on the quality of your code after the refactor.)

#### `showStatus()` method

Returns the current status of the `War` based on the size of the armies.

- should be a function
- should receive __0 arguments__
- __if the `Saxon` array is empty__, should return ___"Vikings have won the war of the century!"___
- __if the `Viking` array is empty__, should return ___"Saxons have fought for their lives and survived another day..."___
- __if there are at least 1 `Viking` and 1 `Saxon`__, should return ___"Vikings and Saxons are still in the thick of battle."___

---

__Happy Coding!__ 💙

![Vikings picture](https://i.imgur.com/fHHEoEj.jpg)
