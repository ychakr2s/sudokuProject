function generateSudoku() {

    var grid = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ];

    var hGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    shuffle(grid);
    hideTiles(grid, hGrid);

    this.getTileNumber = function(row, col) {
        return hGrid[row][col];
    };

}

function shuffle(grid) {

    var i, j, k, temp, col, col1, col2,
        row1, row2, sub, sub1, sub2, num1, num2;

    //swap the same columns of each subsquare
    for(i = 0; i < 25; i++) {
        col = Math.floor(Math.random()*3);
        sub1 = Math.floor(Math.random()*3);
        sub2 = Math.floor(Math.random()*3);
        for(j = 0; j < grid.length; j++) {
            temp = grid[j][col + sub1*3];
            grid[j][col + sub1*3] = grid[j][col + sub2*3];
            grid[j][col + sub2*3] = temp;
        }
    }

    //swap all columns within each subsquare
    for(i = 0; i < 25; i++) {
        sub = Math.floor(Math.random()*3);
        col1 = Math.floor(Math.random()*3);
        col2 = Math.floor(Math.random()*3);
        while(col1 == col2) col2 = Math.floor(Math.random()*3);
        for(j = 0; j < grid.length; j++) {
            temp = grid[j][sub*3 + col1];
            grid[j][sub*3 + col1] = grid[j][sub*3 + col2];
            grid[j][sub*3 + col2] = temp;
        }
    }

    //swap all rows within each subsquare
    for(i = 0; i < 25; i++) {

        sub = Math.floor(Math.random()*3);
        row1 = Math.floor(Math.random()*3);
        row2 = Math.floor(Math.random()*3);
        while(row1 == row2) row2 = Math.floor(Math.random()*3);
        for(j = 0; j < grid.length; j++) {
            temp = grid[sub*3 + row1][j];
            grid[sub*3 + row1][j] = grid[sub*3 + row2][j];
            grid[sub*3 + row2][j] = temp;
        }
    }

    //swap one number with another
    for(i = 0; i < 25; i++) {
        num1 = Math.floor(Math.random()*9 + 1);
        num2 = Math.floor(Math.random()*9 + 1);
        while(num1 == num2) num2 = Math.floor(Math.random()*9 + 1);
        for(j = 0; j < grid.length; j++) {
            for(k = 0; k < grid[j].length; k++) {
                if(grid[j][k] == num1)
                    grid[j][k] = num2;
                else if(grid[j][k] == num2)
                    grid[j][k] = num1;
            }
        }
    }
}

function hideTiles(aGrid, hiddenGrid) {

    // Randomly hide tiles, no guarantee for a unique solution
    var numTiles, k;

    for(var c = 0; c < 9; c++) {
        for(var d = 0; d < 9; d++) {
            hiddenGrid[c][d] = aGrid[c][d];
        }
    }

    for(var i = 0; i < 4; i++) {
        numTiles = Math.floor(Math.random()*8 + 6);
        while(numTiles > 0) {
            k = Math.floor(Math.random()*9);
            hiddenGrid[i][k] = 0;
            hiddenGrid[8-i][8-k] = 0;
            numTiles--;

        }
    }

    numTiles = Math.floor(Math.random()*4 + 2);
    while(numTiles > 0) {
        k = Math.floor(Math.random()*4);
        hiddenGrid[4][k] = 0;
        hiddenGrid[4][8-k] = 0;
        numTiles--;
    }
}

function generateMyOwn() {

    var hGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    //hideTiles(hGrid, hGrid);

    this.getTileNumber = function(row, col) {
        return hGrid[row][col];
    };
}
