import "./Chessboard.css";
import Square from "../Square/Square";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const piece: Piece[] = [];

for (let i = 0; i < 8; i++) {
  piece.push({ image: "assets/pawn_b.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  piece.push({ image: "assets/pawn_w.png", x: i, y: 1 });
}

for (let i = 0; i < 2; i++) {
  const type = i === 0 ? "b" : "w";
  const y = i === 0 ? 7 : 0;
  // Rook
  piece.push({ image: `assets/rook_${type}.png`, x: 0, y });
  piece.push({ image: `assets/rook_${type}.png`, x: 7, y });

  // Knight
  piece.push({ image: `assets/knight_${type}.png`, x: 1, y }); // White
  piece.push({ image: `assets/knight_${type}.png`, x: 6, y });

  // Bishop
  piece.push({ image: `assets/bishop_${type}.png`, x: 2, y }); // White
  piece.push({ image: `assets/bishop_${type}.png`, x: 5, y });

  // Queen
  piece.push({ image: `assets/queen_${type}.png`, x: 3, y }); // White

  // King
  piece.push({ image: `assets/king_${type}.png`, x: 4, y }); // White
}

export default function Chessboard() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      let image = undefined;

      piece.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });
      board.push(
        <Square
          key={`${i},${j}`}
          class={` ${(i + j) % 2 == 0 ? "black" : "white"}`}
          image={image}
        />
      );
    }
  }
  return <div id="chessboard">{board}</div>;
}
