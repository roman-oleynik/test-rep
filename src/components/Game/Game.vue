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
      clicksAtRound: 0,
      isGameOver: false,
    };
  },
  methods: {
    // Main methods --------------------------------------------
    beginGame() {
      this.resetNumberOfRound();
      this.setIsGameOver(false);
      this.initNumberOfRound();
      this.initHighlightsModel();
      this.initSpeedRegulationInputs(this.getSpeedRegulationInputs());
      this.runHighlighting();
    },
    runHighlighting() {
      setTimeout(() => {
        this.highlights.forEach((element, index) => {
          setTimeout(() => {
            this.playSound(this.$refs[`sound-${element.color}`]);
            this.highlightAndFadeoutSector(index);
          }, this.intervalOfHighlights * index);
        });
      }, 500);
    },
    startNextRound() {
      this.resetClicksAtRound();
      this.addHighlightToModel();
      this.incrementNumberOfRound();
      this.removeClickListenersFromSectors();
      this.runHighlighting();
    },
    onSectorPressed(color) {
      this.stopSound(this.$refs[`sound-${color}`]);
      this.playSound(this.$refs[`sound-${color}`]);
      if (this.isPressedCorrectly(color)) {
        this.incrementClicksAtRound();
        if (this.isRoundPassedWell()) {
          this.startNextRound();
        }
      } else {
        this.setIsGameOver(true);
        this.resetGameParameters();
        this.removeClickListenersFromSectors();
      }
    },
    isSectorHighlighted(color) {
      const { highlights, indexOfHighlightedSector } = this;
      try {
        return highlights.length > 0
        && highlights[indexOfHighlightedSector].color === color
        && highlights[indexOfHighlightedSector].isHighlighted;
      } catch {
        return false; // debug if there will be a minute tomorrow
      }
    },
    // Auxiliary methods ------------------------------------------
    setIsGameOver(value) {
      this.isGameOver = value;
    },
    playSound(sound) {
      sound.play();
    },
    stopSound(sound) {
      sound.pause(); // eslint-disable-next-line
      sound.currentTime = 0;
    },
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
    isPressedCorrectly(color) {
      return color === this.highlights[this.clicksAtRound].color;
    },
    isRoundPassedWell() {
      return this.clicksAtRound === this.highlights.length;
    },
    getRandomColor() {
      return colors[Math.floor(Math.random() * 4)];
    },
    clearHighlightsModel() {
      this.highlights = [
        {
          color: this.getRandomColor(),
          isHighlighted: false,
        },
      ];
    },
    incrementClicksAtRound() {
      this.clicksAtRound += 1;
    },
    resetClicksAtRound() {
      this.clicksAtRound = 0;
    },
    addHighlightToModel() {
      this.highlights.push(
        {
          color: this.getRandomColor(),
          isHighlighted: false,
        },
      );
    },
    resetNumberOfRound() {
      this.round = 0;
    },
    incrementNumberOfRound() {
      this.round += 1;
    },
    initNumberOfRound() {
      this.resetNumberOfRound();
      this.incrementNumberOfRound();
    },
    initHighlightsModel() {
      this.clearHighlightsModel();
      // this.addHighlightToModel();
    },
    resetGameParameters() {
      this.resetClicksAtRound();
      this.clearHighlightsModel();
    },
    addClickListenersToSectors() {
      colors.forEach((color) => {
        this.$refs[color].onclick = () => {
          this.onSectorPressed(color);
        };
      });
    },
    removeClickListenersFromSectors() {
      colors.forEach((color) => {
        this.$refs[color].onclick = null;
      });
    },
    setIndexOfHighlightedSector(value) {
      this.indexOfHighlightedSector = value;
    },
    highlightSector(indexOfHighlightedSector) {
      this.setIndexOfHighlightedSector(indexOfHighlightedSector);
      if (this.highlights.length) {
        this.highlights[indexOfHighlightedSector].isHighlighted = true;
      }
    },
    stopToHighlightSector(indexOfHighlightedSector) {
      if (this.highlights) {
        this.highlights[indexOfHighlightedSector].isHighlighted = false;
      }
    },
    enableSectorsAtLastHighlight(index) {
      if (index === this.highlights.length - 1) {
        this.addClickListenersToSectors();
      }
    },
    makeDelayBeforeFadeout(func) {
      setTimeout(func, 300);
    },
    highlightAndFadeoutSector(indexOfSector) {
      this.highlightSector(indexOfSector);
      this.makeDelayBeforeFadeout(() => {
        this.stopToHighlightSector(indexOfSector);
        this.enableSectorsAtLastHighlight(indexOfSector);
      });
    },
  },
};
</script>
