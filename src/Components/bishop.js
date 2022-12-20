import React from "react";

export class Bishop {
    constructor(player) {
        this.player = player;
        this.highlight = 0;
        this.possible = 0;
        this.icon =
            player === "w" ? (
                <img alt="piece" src={require('./images/white_bishop.png')} className="piece"></img>
            ) : (
                <img alt="piece" src={require('./images/black_bishop.png')} className="piece"></img>
            );
        this.ascii = player === "w" ? "b" : "B";
    }

    // function that defines piece's valid move shape
    can_move(start, end) {
        var start_row = 8 - Math.floor(start / 8);
        var start_col = (start % 8) + 1;
        var end_row = 8 - Math.floor(end / 8);
        var end_col = (end % 8) + 1;

        var row_diff = end_row - start_row;
        var col_diff = end_col - start_col;

        if (row_diff === col_diff) {
            return true;
        } else if (row_diff === -col_diff) {
            return true;
        }
        return false;
    }
}