export function Ship(length) {
  const ship = {
    length,
    hits: 0,
    hit: () => {
      if (!this.isSunk()) {
        this.hits += 1;
      }
    },
    isSunk: () => this.hits === this.length,
  };

  return ship;
}

export function Gameboard() {
  const boardSize = 10;
  const ships = [];
  const missedAttacks = [];

  function isValidCoordinates(x, y) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }

  function isCellEmpty(x, y) {
    return !ships.some((ship) => ship.coordinates.some((coord) => coord.x === x && coord.y === y));
  }

  const placeShip = (ship, x, y, isVertical) => {
    if (!isValidCoordinates(x, y)) {
      throw new Error("Invalid coordinates. Ships cannot be placed outside the board.");
    }

    const newShip = Ship(ship.length);
    newShip.coordinates = [];

    for (let i = 0; i < ship.length; i += 1) {
      const newX = isVertical ? x : x + i;
      const newY = isVertical ? y + i : y;

      if (!isValidCoordinates(newX, newY) || !isCellEmpty(newX, newY)) {
        throw new Error("Invalid coordinates. Ships cannot overlap.");
      }

      newShip.coordinates.push({ x: newX, y: newY });
    }

    ships.push(newShip);
  };

  const receiveAttack = (x, y) => {
    if (!isValidCoordinates(x, y)) {
      throw new Error("Invalid coordinates. Attacks must be within the board.");
    }

    const attackedShip = ships.find((ship) => ship.coordinates.some((coord) => coord.x === x && coord.y === y));

    if (attackedShip) {
      attackedShip.hit();
    } else {
      missedAttacks.push({ x, y });
    }
  };

  const allShipsSunk = () => ships.every((ship) => ship.isSunk());

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}

export function Player(name, isComputer) {
  const player = {
    name,
    isComputer,
    gameboard: Gameboard(),
    attackedCoordinates: new Set(),
    attack: (x, y) => {
      if (!this.isComputer) {
        this.gameboard.receiveAttack(x, y);
      }
    },
    computerPlay: () => {
      if (this.isComputer) {
        let x;
        let y;
        do {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        } while (this.attackedCoordinates.has(`${x},${y}`));

        this.attackedCoordinates.add(`${x},${y}`);
      }
      return { x, y };
    },
  };

  return player;
}

export const Game = (() => {
  let player1;
  let player2;
  let currentPlayer;

  function setupNewGame() {
    player1 = Player("John", false);
    player2 = Player("Rock", true);

    console.log(player1.name);

    // Populate each gameboard with predetermined coordinates.
    // You can implement a system for allowing players to place their ships later.
    player1.gameboard.placeShip(Ship(4), 0, 0, false);
    player1.gameboard.placeShip(Ship(3), 2, 3, true);
    // ...

    player2.gameboard.placeShip(Ship(4), 5, 5, false);
    player2.gameboard.placeShip(Ship(3), 7, 1, true);
    // ...

    currentPlayer = player1;
  }

  function updateUI() {
    // TODO: Implement rendering the game boards using DOM manipulation.
  }

  function renderGameboard(gameboard, containerId) {
    // TODO: Implement rendering the gameboard in the specified container using DOM manipulation.
  }

  function renderEnemyGameboard(enemyGameboard, containerId) {
    // TODO: Implement rendering the enemy gameboard in the specified container using DOM manipulation.
    // Add event listeners to each cell to handle player attacks when they click on the enemy gameboard.
  }

  function handleAttack(x, y) {
    if (!currentPlayer.isComputer) {
      currentPlayer.attack(x, y);

      if (currentPlayer.gameboard.allShipsSunk()) {
        alert(`${currentPlayer.name} wins!`);
        return;
      }
    }

    currentPlayer = currentPlayer === player1 ? player2 : player1;

    if (currentPlayer.isComputer) {
      setTimeout(computerTurn, 1000);
    }
  }

  function computerTurn() {
    const { x, y } = player2.computerPlay();
    handleAttack(x, y);
  }

  return {
    start: () => {
      setupNewGame();
      updateUI();
    },
  };
})();
