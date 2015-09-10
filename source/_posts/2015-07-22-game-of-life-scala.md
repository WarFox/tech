---
layout: post
title: "Game Of Life (in Scala)"
date: 2015-07-22 21:29:26 +0100
comments: true
categories: scala, algorithms
styles: data-table
---

I recently came across an interesting problem/game called [Game Of Life][1]. A visual version of this is available [here][2]. Also, here is a beginners introduction to Game Of Life, or simply Life, written by Alex Bellos at [Guardian][guardian-gol].

It is a cellular automation problem created by John Horton Conway, a British mathematician in 1970, not a game you play to win or lose. This problem has a few rules that we need to follow.

## Rules
1. A cell in the grid can be dead or alive.
2. A live cell with less than 2 live neighbours will die.
3. A live cell with 2 or 3 live neighbours will stay alive.
4. A live cell with more than 3 live neighbours will die.
5. A dead cell with exactly 3 neighbours will become alive.

These rules are pretty simple. Once we know the _number of live neighbours_ of a given cell, we can determine it's fate in a step. In this post I'm going to dicuss method to find neighbours of a given cell in a matrix.

In Game of Life, we take a seed grid and eventually get another grid as a output, by applying the rules to each cell.

## Game Of Life grid
Game of Life is played in an infinite two dimensional grid. But for the sake of simplicity let us take a 4x4 grid.

|     |  0 | 1  | 2 | 3 |
| --- | ------- | ------- | ------- | ------- |
| 0 | Cell(1) | Cell(1) | Cell(1) | Cell(1) |
| 1 | Cell(1) | Cell(0) | Cell(1) | Cell(0) |
| 2 | Cell(0) | Cell(0) | Cell(0) | Cell(0) |
| 3 | Cell(1) | Cell(0) | Cell(1) | Cell(0) |

*1 is alive and 0 is dead*

A cell can have a maximum of 8 neighbours depending on it's position in the grid, horizontally, vertically, or diagonally adjacent to it.

### After applying rules first step, we will get the following

|     |  0 | 1  | 2 | 3 |
| --- | ------- | ------- | ------- | ------- |
| 0 | Cell(1) | Cell(0) | Cell(1) | Cell(1) |
| 1 | Cell(1) | Cell(0) | Cell(1) | Cell(1) |
| 2 | Cell(1) | Cell(0) | Cell(1) | Cell(1) |
| 3 | Cell(0) | Cell(1) | Cell(0) | Cell(0) |

## Representation in Scala
Let's first represent the above seed grid in Scala.

``` scala
case class Cell(value: Int)

case class Point(row: Int, col: Int) {
  def unapply() = (this.row, this.col)
}

val alive = Cell(0)
val dead = Cell(1)

val row1 = Array(alive, alive, alive, alive)
val row2 = Array(alive, dead, alive, dead)
val row3 = Array(dead, dead, dead, dead)
val row4 = Array(alive, dead, alive, dead)

val board = Array(row1, row2, row3, row4)
```

Now we have a basic Representation of our models required in Game of Life.

## Find neighbours of a given Cell in two dimensional array
Given the co-ordinates of a cell, we should be able to find list of it's live neighbours.

``` scala
def findNeighbours(board: Array[Array[Cell]], point: Point):List[Cell] = ???

def findLiveNeighbours(board: Array[Array[Cell]], point:Point):List[Cell] =
        findNeighbours(board, point).filter(c => c.value == 1)

// one step
def step(board: Array[Array[Cell]]): Array[Array[Cell]] = {
  val rows = board.length
  val cols = board(0).length

  // create a new Matrix of same dimensions
  val output = Array.ofDim[Cell](rows, cols)

  // loop through the array and set value for output cell
  // based on number of live neighbours
  for(i <- 0 until rows) {
    for(j <- 0 until cols) {
      val point = Point(i,j)
      val liveNeighbours = findLiveNeighbours(board, point).length
      // apply rules based on number of live neighbours
      output(i)(j) = deadOrAlive(liveNeighbours)
    }
  }
  output
}

// apply rules based on number of live neighbours
def deadOrAlive(liveNeighbours: Int): Cell = {
      if (liveNeighbours < 2) dead
      else if (liveNeighbours == 2 || liveNeighbours == 3) alive
      else if(liveNeighbours > 3) dead
      else if(liveNeighbours == 3) alive
      else dead
}

```

## Find neighbours

Now this is the important bit.

A neighbour is any cell that is adjacent to a given cell, horizontally, vertically or diagonally. (1,1) is adjacent to (0,0), (0,1), (0,2), (1,0), (1,2), (2,0), (2,1), (2,2).

We will implement `findNeighbours` functions.

``` scala
def findNeighbours(board: Array[Array[Cell]], point(x:Int, y:Int)):List[Cell] = ???
```

### Algorithm
Here is an algorithm, I found on StackOverflow, by [Seb][Seb]

http://stackoverflow.com/questions/652106/finding-neighbours-in-a-two-dimensional-array

```
row_limit = count(array);
if(row_limit > 0){
  column_limit = count(array[0]);
  for(x = max(0, i-1); x <= min(i+1, row_limit); x++){
    for(y = max(0, j-1); y <= min(j+1, column_limit); y++){
      if(x != i || y != j){
        print array[x][y];
      }
    }
  }
}
```

Here is a direct implementation of this algorithm in `Scala`.

``` scala
def findNeighbours(board: Array[Array[Cell]], point: Point): List[Cell] = {
  val (row, col) = point unapply  
  var cells: List[Cell] = List.empty[Cell]
  val rowLimit = board.length - 1
  val columnLimit = board(0).length - 1

  for (x <- math.max(0, i - 1) to math.min(row + 1, rowLimit)) {
    for (y <- math.max(0, j - 1) to math.min(col + 1, columnLimit)) {
      if (x != i || y != j) {
        cells = cells :+ board(x)(y)
      }
    }
  }
  cells
}
```

[1]:https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
[2]:http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/
[guardian-gol]:http://www.theguardian.com/science/alexs-adventures-in-numberland/2014/dec/15/the-game-of-life-a-beginners-guide
[3]: http://stackoverflow.com/questions/652106/finding-neighbours-in-a-two-dimensional-array
[Seb]:http://stackoverflow.com/users/76583/seb

