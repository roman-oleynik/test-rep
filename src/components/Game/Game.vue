<template>
  <div class="game">
    <audio
      src="@/assets/sounds/1.mp3"
      ref='sound-blue'
      name='blue'
    ></audio>
    <audio
      src="@/assets/sounds/2.mp3"
      ref='sound-red'
      name='red'
    ></audio>
    <audio
      src="@/assets/sounds/3.mp3"
      ref='sound-yellow'
      name='yellow'
    ></audio>
    <audio
      src="@/assets/sounds/4.mp3"
      ref='sound-green'
      name='green'
    ></audio>
    <h1 class="game__title">Benjamin Says</h1>
    <section class="game__field">
      <button
        class="game__button game__button_blue"
        :class="{highlighted: isSectorHighlighted('blue')}"
        ref="blue"
      ></button>
      <button
        class="game__button game__button_red"
        :class="{highlighted: isSectorHighlighted('red')}"
        ref="red"
      ></button>
      <button
        class="game__button game__button_yellow"
        :class="{highlighted: isSectorHighlighted('yellow')}"
        ref="yellow"
      ></button>
      <button
        class="game__button game__button_green"
        :class="{highlighted: isSectorHighlighted('green')}"
        ref="green"
      ></button>
    </section>
    <section class="game__interface">
      <p class="game__round">Round: {{ round }}</p>
      <button
        class="game__beginner"
        @click="beginGame()"
      >Start game</button>
      <p
        v-if="isGameOver"
        class="game__loser-message"
      >
        You have lost at the {{ round }} round.
      </p>
      <div class="speed-choise-bar">
        <h3 class="speed-choise-bar__title">Speed:</h3>
        <label>
          Low
          <input
            type="radio"
            name="speed"
            value="1500"
            ref="low"
            checked
          >
        </label>
        <label>
          Medium
          <input
            type="radio"
            name="speed"
            value="1000"
            ref="medium"
          >
        </label>
        <label>
          Fast
          <input
            type="radio"
            name="speed"
            value="500"
            ref="high"
          >
        </label>
      </div>
    </section>
  </div>
</template>

<script>
import './style.scss';

const colors = ['red', 'blue', 'yellow', 'green'];
export default {
  name: 'Home',
  data() {
    return {
      intervalOfHighlights: 1500,
      highlights: [],
      round: 0,
      indexOfHighlightedSector: 0,
      clickedSectorsAtRound: 0,
      isGameOver: false,
    };
  },
  methods: {
    // Game processes ------------------------------------------
    beginGame() {
      const speedInputRefs = this.getSpeedRegulationInputs();
      this.round = 0;
      this.isGameOver = false;
      this.round += 1;
      this.clearHighlightsModel();
      this.initSpeedRegulationInputs(speedInputRefs);
      this.runHighlighting();
    },
    runHighlighting() {
      const delayBeforeHighlighting = 500;
      setTimeout(() => {
        this.highlights.forEach((element, index) => {
          setTimeout(() => {
            this.wrapFunctionBySound(
              this.$refs[`sound-${element.color}`],
              () => this.highlightAndFadeoutSector(index),
            );
          }, this.intervalOfHighlights * index);
        });
      }, delayBeforeHighlighting);
    },
    highlightAndFadeoutSector(indexOfSector) {
      this.highlightSector(indexOfSector);
      setTimeout(() => {
        this.stopToHighlightSector(indexOfSector);
        this.enableSectorsAtLastHighlight(indexOfSector);
      }, 300);
    },
    highlightSector(indexOfSector) {
      this.indexOfHighlightedSector = indexOfSector;
      if (this.highlights[indexOfSector]) {
        this.highlights[indexOfSector].isHighlighted = true;
      }
    },
    stopToHighlightSector(indexOfSector) {
      if (this.highlights[indexOfSector]) {
        this.highlights[indexOfSector].isHighlighted = false;
      }
    },
    startNextRound() {
      this.clickedSectorsAtRound = 0;
      this.addHighlightToModel();
      this.round += 1;
      this.removeClickListenersFromSectors();
      this.runHighlighting();
    },
    onSectorPressed(color) {
      if (this.isPressedCorrectly(color)) {
        this.clickedSectorsAtRound += 1;
        if (this.isRoundPassedWell()) {
          this.startNextRound();
        }
      } else {
        this.isGameOver = true;
        this.clickedSectorsAtRound = 0;
        this.removeClickListenersFromSectors();
      }
    },
    isPressedCorrectly(color) {
      return color === this.highlights[this.clickedSectorsAtRound].color;
    },
    isRoundPassedWell() {
      return this.clickedSectorsAtRound === this.highlights.length;
    },
    // Auxiliary methods ------------------------------------------
    // intervalOfHighlights interface
    initSpeedRegulationInputs(inputs) {
      inputs.forEach((input) => {
        if (input.checked) {
          this.intervalOfHighlights = +input.value;
        }
      });
    },
    getSpeedRegulationInputs() {
      return [
        this.$refs.low,
        this.$refs.medium,
        this.$refs.high,
      ];
    },
    // Highlights model
    clearHighlightsModel() {
      this.highlights = [
        {
          color: this.getRandomColor(),
          isHighlighted: false,
        },
      ];
    },
    getRandomColor() {
      return colors[Math.floor(Math.random() * 4)];
    },
    addHighlightToModel() {
      this.highlights.push(
        {
          color: this.getRandomColor(),
          isHighlighted: false,
        },
      );
    },
    // Sounds interface
    wrapFunctionBySound(sound, func) {
      this.stopSound(sound);
      sound.play();
      func();
    },
    stopSound(sound) {
      sound.pause(); // eslint-disable-next-line
      sound.currentTime = 0;
    },
    // Event listeners adding
    addClickListenersToSectors() {
      colors.forEach((color) => {
        const sector = this.$refs[color];
        sector.onclick = () => {
          const soundOfSector = this.$refs[`sound-${color}`];
          this.wrapFunctionBySound(
            soundOfSector,
            () => this.onSectorPressed(color),
          );
        };
      });
    },
    removeClickListenersFromSectors() {
      colors.forEach((color) => {
        this.$refs[color].onclick = null;
      });
    },
    enableSectorsAtLastHighlight(index) {
      if (index === this.highlights.length - 1) {
        this.addClickListenersToSectors();
      }
    },
    // The DOM-element of the sector checks by such way
    // when it is needed to add the 'highlighted' CSS-class.
    isSectorHighlighted(color) {
      const { highlights, indexOfHighlightedSector } = this;
      try {
        return highlights.length > 0
        && highlights[indexOfHighlightedSector].color === color
        && highlights[indexOfHighlightedSector].isHighlighted;
      } catch {
        return false;
      }
    },
  },
};
</script>
