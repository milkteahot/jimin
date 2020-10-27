class sideNav {
  openNav() {
    document.getElementById("mySideNav").style.width = "150px";
  }
  closeNav() {
    document.getElementById("mySideNav").style.width = "0";
  }
  render() {
    `
        <div id="mySideNav" class="sideNav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
            >&times;</a
          >
          <a href="./day01.html">Day1</a>
          <a href="./day02.html">Day2</a>
          <a href="./day03.html">Day3</a>
          <a href="./day04.html">Day4</a>
          <a href="./day05.html">Day5</a>
          <a href="./day06.html">Day6</a>
          <a href="./day07.html">Day7</a>
          <a href="./day08.html">Day8</a>
          <a href="./day09.html">Day9</a>
          <a href="./day10.html">Day10</a>
          <a href="./day11.html">Day11</a>
          <a href="./day12.html">Day12</a>
          <a href="./day13.html">Day13</a>
          <a href="./day14.html">Day14</a>
          <a href="./day15.html">Day15</a>
          <a href="./day16.html">Day16</a>
          <a href="./day17.html">Day17</a>
          <a href="./day18.html">Day18</a>
          <a href="./day19.html">Day19</a>
          <a href="./day20.html">Day20</a>
          <a href="./day21.html">Day21</a>
          <a href="./day22.html">Day22</a>
          <a href="./day23.html">Day23</a>
          <a href="./day24.html">Day24</a>
          <a href="./day25.html">Day25</a>
          <a href="./day26.html">Day26</a>
          <a href="./day27.html">Day27</a>
          <a href="./day28.html">Day28</a>
          <a href="./day29.html">Day29</a>
          <a href="./day30.html">Day30</a>
        </div>`;
  }
}

export default sideNav;
