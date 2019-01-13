<div ref:cabinet>
	<div class="body banner">
		<div class="inner">
			<div class="content"></div>
		</div>
	</div>
	<div class="body banner-inset rot-margin"></div>
	<div class="body screen-back">
		<div class="screen">
			<p>Press start</p>
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
    perspective: 15rem;
    perspective-origin: var(--perspectiveX) var(--perspectiveY);
    --body-inset: 0.4rem;
    --screen-inset: -1.5rem;
  }

  .body {
    background: #333;
    width: 20rem;
    transform-style: preserve-3d;
  }

  .banner {
    height: 7rem;
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
    background-size: 26rem;
    box-shadow: #ae0eff 0 0 15px;
    animation: banner-pulse 4s ease-in-out infinite;
  }

  @keyframes banner-pulse {
    0% {
      box-shadow: #ae0eff 0 0 0;
    }
    25% {
      box-shadow: #ae0eff 0 0 15px;
    }
    75% {
      box-shadow: #ae0eff 0 0 15px;
    }
    100% {
      box-shadow: #ae0eff 0 0 0;
    }
  }

  .banner-inset {
    --angle-translate: -0.95rem;
    --angle: 40;
    height: 3rem;
    transform-origin: center;
    transform: translateZ(calc(var(--angle-translate) + var(--body-inset)))
      rotateX(-40deg);
    background: linear-gradient(#444444, #222222);
  }

  .screen-back {
    height: 14rem;
    transform: translateZ(var(--screen-inset));
    margin-bottom: -1.4rem;
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
    border-radius: 0.5rem;
    position: relative;
  }

  .screen p {
    font-family: "Share Tech Mono", monospace;
    text-align: center;
    animation: blink-start 1.5s infinite step-end;
  }

  .screen .scan-line {
    width: 100%;
    height: 1px;
    background: #888;
    position: absolute;
    bottom: 0.5rem;
    animation: scan 4s linear infinite;
  }

  @keyframes scan {
    0% {
      transform: translateY(0);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-10rem);
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
    --angle-translate: -1.3rem;
    --angle: 90;
    height: 2.6rem;
    transform: translateZ(calc(var(--screen-inset) - var(--angle-translate)))
      rotateX(89.9deg);
  }
  .controls .inner {
    --shift-down: 0.4rem;
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
    top: 0.7rem;
    right: 2.5rem;
  }

  .controls .inner .joystick .base {
    width: 3rem;
    height: 0.8rem;
    border-radius: 50%;
    background: linear-gradient(-40deg, #444, #222);
    transform: translateY(0);
  }
  .controls .inner .joystick .stick {
    transform-origin: top;
    transform: rotateX(90deg) translateZ(0.4rem);
  }
  .controls .inner .joystick .stalk {
    margin: auto;
    height: 1.5rem;
    width: 0.5rem;
    background: #333333;
  }
  .controls .inner .joystick .head {
    margin: auto;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: linear-gradient(-70deg, #ff2f2f, #801818);
    transform: translateY(-0.5rem);
  }
  .inner .stripes {
    height: 100%;
    width: 3.8rem;
    position: absolute;
    padding: 0 2rem;
    top: 0;
    right: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .controls .inner .stripes > * {
    --tilt: 50deg;
    width: 0.7rem;
    height: 200%;
    transform: rotateZ(var(--tilt)) translateZ(0.1rem);
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
    width: 6rem;
    position: absolute;
    top: 0;
    left: 3rem;
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
    width: 1.7rem;
    height: 0.6rem;
    background: radial-gradient(var(--base-dark) 25%, var(--base-light));
    border-radius: 50%;
  }

  .controls .buttons .button-body,
  .button-body-base {
    background: linear-gradient(90deg, var(--base-dark), var(--base-light));
  }
  .controls .buttons .button-body {
    width: 0.8rem;
    height: 0.5rem;
    position: absolute;
    left: 25%;
    transform-origin: bottom;
    transform: rotateX(-89.9deg) translateZ(-0.3rem);
  }
  .controls .buttons .button-body-base {
    width: 1rem;
    height: 0.4rem;
    margin: auto;
    border-radius: 50%;
    margin-top: -0.6rem;
  }
  .controls .buttons .button-head {
    width: 1rem;
    height: 0.5rem;
    border-radius: 50%;
    margin: auto;
    background: radial-gradient(var(--head-light) 10%, var(--head-dark));
    transform: translateY(0.5rem) translateZ(0.5rem);
  }

  .controls-face {
    height: 3rem;
    transform: translateZ(1.1rem);
    margin-bottom: -0.15rem;
  }

  .controls-face .inner {
    width: 92%;
    height: 100%;
    margin: auto;
    background: #f0ecdb;
  }

  .controls-face .stripes {
    width: 4.1rem;
    right: 2.2rem;
  }

  .controls-face .stripes > * {
    width: 1rem;
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
    --angle-translate: 0.75rem;
    --angle: 10;
    height: 4rem;
    transform-origin: center;
    transform: translateZ(var(--angle-translate)) rotateX(-10deg);
    background: linear-gradient(#444444, #222222);
  }

  .base {
    height: 13rem;
    margin-top: -0.15rem;
    transform: translateZ(var(--body-inset));
  }

  .base .spacing {
    height: 1.5rem;
  }

  .base .coin-door-outer {
    margin: auto;
    width: 5rem;
    height: 7rem;
    border: 2px solid #222222;
    border-radius: 0.2rem;
    background: linear-gradient(40deg, #232323, #444);
  }
  .base .coin-door-inner {
    margin: auto;
    width: 4rem;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.75rem;
    border: 2px solid #222222;
    box-sizing: border-box;
    border-radius: 0.8rem;
  }
  .base .insert-coin-border {
    margin: 0 auto;
    margin-top: 1rem;
    width: 1.5rem;
    height: 1.2rem;
    border: 1px solid #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .base .insert-coin-border .slot {
    margin-left: 10%;
    height: 80%;
    width: 0.3rem;
    background: #111;
  }
  .base .insert-coin-border .refund {
    margin-right: 10%;
    height: 80%;
    width: 0.6rem;
    background: linear-gradient(#620b0b, #9a0404, #790c0c);
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
  }
  .base .keyhole {
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.1rem;
    margin-right: 0.2rem;
    align-self: flex-end;
    border-radius: 50%;
    background: #cccccc;
    border: 1px solid #777;
    transform: translateZ(0.1rem);
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