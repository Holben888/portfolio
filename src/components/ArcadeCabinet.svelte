<div ref:cabinet>
	<div class="body banner">
		<div class="inner">
			<div class="content"></div>
		</div>
	</div>
	<div class="body banner-inset rot-margin"></div>
	<div class="body screen-back">
		<div class="screen">
			<img src="{image}" alt="Gameplay preview" />
			<div class="scan-line"></div>
		</div>
	</div>
	<div class="body controls rot-margin">

		<div class="inner">
			<div class="stripes">
				<div class="yellow"></div>
				<div class="orange"></div>
				<div class="red"></div>
			</div>
			<div class="joystick">
				<div class="base"></div>
				<div class="stick">
					<div class="stalk"></div>
					<div class="head"></div>
				</div>
			</div>
			<div class="buttons">
				<div class="button-black">
					<div class="button-head"></div>
					<div class="button-body"></div>
					<div class="button-base"></div>
					<div class="button-body-base"></div>
				</div>
				<div class="button-black">
					<div class="button-head"></div>
					<div class="button-body"></div>
					<div class="button-base"></div>
					<div class="button-body-base"></div>
				</div>
				<div class="button-red">
					<div class="button-head"></div>
					<div class="button-body"></div>
					<div class="button-base"></div>
					<div class="button-body-base"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="body controls-face">
		<div class="inner">
			<div class="stripes">
				<div class="yellow"></div>
				<div class="orange"></div>
				<div class="red"></div>
			</div>
		</div>
	</div>
	<div class="body controls-inset rot-margin">
	</div>
	<div class="body base">
		<div class="spacing"></div>
		<div class="coin-door-outer">
			<div class="coin-door-inner">
				<div class="insert-coin-border">
					<div class="slot"></div>
					<div class="refund"></div>
				</div>
				<div class="keyhole"></div>
			</div>
		</div>
	</div>
</div>

<style>
  * {
    box-sizing: content-box;
  }

  ref:cabinet {
    --perspectiveX: 50%;
    --perspectiveY: 20%;
    perspective: 15em;
    perspective-origin: var(--perspectiveX) var(--perspectiveY);
    --body-inset: 0.4em;
    --screen-inset: -1.5em;
    font-size: var(--arcade-cabinet-scaling);
  }

  .body {
    background: #333;
    width: 20em;
    transform-style: preserve-3d;
  }

  .banner {
    height: 7em;
    transform: translateZ(var(--body-inset));
  }
  .banner .inner {
    height: 100%;
    width: 92%;
    margin: auto;
    background: linear-gradient(
      #f0ecdb 0%,
      #b9b186 15%,
      #b9b186 85%,
      #f0ecdb 100%
    );
    display: flex;
    align-items: center;
  }
  .banner .content {
    height: 64%;
    width: 100%;
    background: url("https://svgshare.com/i/AU8.svg") no-repeat center;
    background-size: 26em;
    box-shadow: #ae0eff 0 0 1.1em;
    animation: banner-pulse 4s ease-in-out infinite;
  }

  @keyframes banner-pulse {
    0% {
      box-shadow: #ae0eff 0 0 0;
    }
    25% {
      box-shadow: #ae0eff 0 0 1.1em;
    }
    75% {
      box-shadow: #ae0eff 0 0 1.1em;
    }
    100% {
      box-shadow: #ae0eff 0 0 0;
    }
  }

  .banner-inset {
    --angle-translate: -0.95em;
    --angle: 40;
    height: 3em;
    transform-origin: center;
    transform: translateZ(calc(var(--angle-translate) + var(--body-inset)))
      rotateX(-40deg);
    background: linear-gradient(#444444, #222222);
  }

  .screen-back {
    height: 14em;
    transform: translateZ(var(--screen-inset));
    margin-bottom: -1.4em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .screen {
    height: 90%;
    width: 85%;
    background: linear-gradient(#fff, #888) repeat;
    background-size: 100% 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
    position: relative;
    overflow: hidden;
  }

  .screen p {
    text-align: center;
    animation: blink-start 1.5s infinite step-end;
  }

  .screen img {
    width: 100%;
    height: 100%;
  }

  .screen .scan-line {
    width: 100%;
    height: 0.2em;
    background: #888;
    position: absolute;
    bottom: 0.5em;
    animation: scan 4s linear infinite;
  }

  @keyframes scan {
    0% {
      transform: translateY(0);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-10em);
      opacity: 0.1;
    }
  }

  @keyframes blink-start {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  .controls {
    --angle-translate: -1.3em;
    --angle: 90;
    height: 2.6em;
    transform: translateZ(calc(var(--screen-inset) - var(--angle-translate)))
      rotateX(89.9deg);
  }
  .controls .inner {
    --shift-down: 0.4em;
    width: 92%;
    height: calc(100% - var(--shift-down));
    margin: auto;
    background: linear-gradient(#d8d1b2, #b9b186);
    transform: translateY(var(--shift-down));
    position: relative;
    transform-style: inherit;
  }
  .controls .inner .joystick {
    position: absolute;
    top: 0.7em;
    right: 2.5em;
  }

  .controls .inner .joystick .base {
    width: 3em;
    height: 0.8em;
    border-radius: 50%;
    background: linear-gradient(-40deg, #444, #222);
    transform: translateY(0);
  }
  .controls .inner .joystick .stick {
    transform-origin: top;
    transform: rotateX(90deg) translateZ(0.4em);
  }
  .controls .inner .joystick .stalk {
    margin: auto;
    height: 1.5em;
    width: 0.5em;
    background: #333333;
  }
  .controls .inner .joystick .head {
    margin: auto;
    height: 1.5em;
    width: 1.5em;
    border-radius: 50%;
    background: linear-gradient(-70deg, #ff2f2f, #801818);
    transform: translateY(-0.5em);
  }
  .inner .stripes {
    height: 100%;
    width: 3.8em;
    position: absolute;
    padding: 0 2em;
    top: 0;
    right: 0.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .controls .inner .stripes > * {
    --tilt: 50deg;
    width: 0.7em;
    height: 200%;
    transform: rotateZ(var(--tilt)) translateZ(0.1em);
  }

  .controls .inner .stripes .yellow {
    background: linear-gradient(var(--tilt), #d5bc00, #ffe30f);
  }

  .controls .inner .stripes .orange {
    background: linear-gradient(var(--tilt), #c67b03, #ffa30f);
  }

  .controls .inner .stripes .red {
    background: linear-gradient(var(--tilt), #c11d00, #ff340f);
  }

  .buttons {
    height: 100%;
    width: 6em;
    position: absolute;
    top: 0;
    left: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons > * {
    position: relative;
  }

  .buttons .button-black {
    --head-dark: #444;
    --head-light: #3d3d3d;
    --base-dark: #222;
    --base-light: #555;
  }

  .inner .button-red {
    --head-dark: #d32b0c;
    --head-light: #ff2e08;
    --base-dark: #b12d14;
    --base-light: #d32b0c;
  }

  .controls .buttons .button-base {
    width: 1.7em;
    height: 0.6em;
    background: radial-gradient(var(--base-dark) 25%, var(--base-light));
    border-radius: 50%;
  }

  .controls .buttons .button-body,
  .button-body-base {
    background: linear-gradient(90deg, var(--base-dark), var(--base-light));
  }
  .controls .buttons .button-body {
    width: 0.8em;
    height: 0.5em;
    position: absolute;
    left: 25%;
    transform-origin: bottom;
    transform: rotateX(-89.9deg) translateZ(-0.3em);
  }
  .controls .buttons .button-body-base {
    width: 1em;
    height: 0.4em;
    margin: auto;
    border-radius: 50%;
    margin-top: -0.6em;
  }
  .controls .buttons .button-head {
    width: 1em;
    height: 0.5em;
    border-radius: 50%;
    margin: auto;
    background: radial-gradient(var(--head-light) 10%, var(--head-dark));
    transform: translateY(0.5em) translateZ(0.5em);
  }

  .controls-face {
    height: 3em;
    transform: translateZ(1.1em);
    margin-bottom: -0.15em;
  }

  .controls-face .inner {
    width: 92%;
    height: 100%;
    margin: auto;
    background: #f0ecdb;
  }

  .controls-face .stripes {
    width: 4.1em;
    right: 2.2em;
  }

  .controls-face .stripes > * {
    width: 1em;
    height: 100%;
  }

  .controls-face .stripes .yellow {
    background: #ffe30f;
  }

  .controls-face .stripes .orange {
    background: #ffa30f;
  }

  .controls-face .stripes .red {
    background: #ff340f;
  }

  .controls-inset {
    --angle-translate: 0.75em;
    --angle: 10;
    height: 4em;
    transform-origin: center;
    transform: translateZ(var(--angle-translate)) rotateX(-10deg);
    background: linear-gradient(#444444, #222222);
  }

  .base {
    height: 13em;
    margin-top: -0.15em;
    transform: translateZ(var(--body-inset));
  }

  .base .spacing {
    height: 1.5em;
  }

  .base .coin-door-outer {
    margin: auto;
    width: 5em;
    height: 7em;
    border: 0.1em solid #222222;
    border-radius: 0.2em;
    background: linear-gradient(40deg, #232323, #444);
  }
  .base .coin-door-inner {
    margin: auto;
    width: 4em;
    height: 5.5em;
    display: flex;
    flex-direction: column;
    margin-top: 0.75em;
    border: 0.1em solid #222222;
    box-sizing: border-box;
    border-radius: 0.8em;
  }
  .base .insert-coin-border {
    margin: 0 auto;
    margin-top: 1em;
    width: 1.5em;
    height: 1.2em;
    border: 0.1em solid #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .base .insert-coin-border .slot {
    margin-left: 10%;
    height: 80%;
    width: 0.3em;
    background: #111;
  }
  .base .insert-coin-border .refund {
    margin-right: 10%;
    height: 80%;
    width: 0.6em;
    background: linear-gradient(#620b0b, #9a0404, #790c0c);
    border-top: 0.1em solid #111;
    border-bottom: 0.1em solid #111;
  }
  .base .keyhole {
    width: 0.5em;
    height: 0.5em;
    margin-top: 0.1em;
    margin-right: 0.2em;
    align-self: flex-end;
    border-radius: 50%;
    background: #cccccc;
    border: 0.1em solid #777;
    transform: translateZ(0.1em);
  }

  .rot-margin {
    margin-top: calc(var(--angle-translate) * (var(--angle) / 90));
    margin-bottom: calc(var(--angle-translate) * (var(--angle) / 90));
  }
</style>

<script>
  export default {
    oncreate() {
      const viewportWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );

      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );

      const cabinet = this.refs.cabinet;

      document.addEventListener("mousemove", function(event) {
        const perspectiveX = (event.x / viewportWidth) * 100;
        const perspectiveY = (event.y / viewportHeight) * 100 - 20;
        cabinet.style.setProperty("--perspectiveX", `${perspectiveX}%`);
        cabinet.style.setProperty("--perspectiveY", `${perspectiveY}%`);
      });
    }
  };
</script>