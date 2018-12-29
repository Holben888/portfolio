'use strict';

const escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function escape(html) {
	return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, assign, fn) {
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(assign(items[i], i));
	}
	return str;
}

function validateSsrComponent(component, name) {
	if (!component || !component._render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
	}

	return component;
}

function data() {
	return {
  backgroundCss: {
    image: "",
    size: "",
    position: ""
  },
  gradientIndex: 0
};
}

var Color_bar = {};

Color_bar.filename = "/Users/benholmes/Sandbox/portfolio_ssr/src/components/color-bar.svelte";

Color_bar.data = function() {
	return data();
};

Color_bar.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Color_bar._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
};

Color_bar._render = function(__result, ctx, options) {
	__result.addComponent(Color_bar);

	ctx = Object.assign(data(), ctx);

	return `<div class="bar svelte-1xj7hd9" style="background-image: ${escape(ctx.backgroundCss.image)}; background-size: ${escape(ctx.backgroundCss.size)}; background-position: ${escape(ctx.backgroundCss.position)}"></div>`;
};

Color_bar.css = {
	code: ".bar.svelte-1xj7hd9{width:100%;height:inherit;background-attachment:fixed;transition:background-position 2s ease-in-out}",
	map: "{\"version\":3,\"file\":\"color-bar.svelte\",\"sources\":[\"color-bar.svelte\"],\"sourcesContent\":[\"<div class=\\\"bar\\\" style=\\\"background-image: {backgroundCss.image}; background-size: {backgroundCss.size}; background-position: {backgroundCss.position}\\\"></div>\\n\\n<style>\\n  .bar {\\n    width: 100%;\\n    height: inherit;\\n    background-attachment: fixed;\\n    transition: background-position 2s ease-in-out;\\n  }\\n</style>\\n\\n<script>\\n  import GRADIENTS from \\\"../res/gradients\\\";\\n  export default {\\n    onupdate({ changed, current }) {\\n      if (changed.gradientIndex && current.gradientIndex != null) {\\n        const { backgroundCss } = this.get();\\n        this.set({\\n          backgroundCss: {\\n            ...backgroundCss,\\n            position: `${(100 / (GRADIENTS.length - 1)) * current.gradientIndex}%`\\n          }\\n        });\\n      }\\n    },\\n    oncreate() {\\n      const imageCss =\\n        GRADIENTS.reduce(\\n          (cssString, gradient) =>\\n            `${cssString}, ${gradient[0]}, ${gradient[gradient.length - 1]}`,\\n          \\\"linear-gradient(90deg\\\"\\n        ) + \\\")\\\";\\n      this.set({\\n        backgroundCss: {\\n          image: imageCss,\\n          size: `${GRADIENTS.length * 200}% 100%`,\\n          position: \\\"0%\\\"\\n        }\\n      });\\n    },\\n    data: () => ({\\n      backgroundCss: {\\n        image: \\\"\\\",\\n        size: \\\"\\\",\\n        position: \\\"\\\"\\n      },\\n      gradientIndex: 0\\n    })\\n  };\\n</script>\"],\"names\":[],\"mappings\":\"AAGE,IAAI,eAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,qBAAqB,CAAE,KAAK,CAC5B,UAAU,CAAE,mBAAmB,CAAC,EAAE,CAAC,WAAW,AAChD,CAAC\"}"
};

function data$1() {
	return {
  index: -1,
  textShadowCssString: "",
  textShadowList: ["transparent", "transparent", "transparent", "transparent"]
};
}

var Gradient_manager = {};

Gradient_manager.filename = "/Users/benholmes/Sandbox/portfolio_ssr/src/components/gradient-manager.svelte";

Gradient_manager.data = function() {
	return data$1();
};

Gradient_manager.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Gradient_manager._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
};

Gradient_manager._render = function(__result, ctx, options) {
	__result.addComponent(Gradient_manager);

	ctx = Object.assign(data$1(), ctx);

	return ``;
};

Gradient_manager.css = {
	code: '',
	map: null
};

function data$2() {
	return {
  size: "1rem",
  name: "education"
};
}

var Icon = {};

Icon.filename = "/Users/benholmes/Sandbox/portfolio_ssr/src/components/icon.svelte";

Icon.data = function() {
	return data$2();
};

Icon.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Icon._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
};

Icon._render = function(__result, ctx, options) {
	__result.addComponent(Icon);

	ctx = Object.assign(data$2(), ctx);

	return `<a href="" style="--size: ${escape(ctx.size)}rem" class="svelte-18r0cz7">
	<div class="icon icon__${escape(ctx.name)} svelte-18r0cz7">
	</div>
</a>`;
};

Icon.css = {
	code: "a.svelte-18r0cz7{--size:0;width:100%;display:flex;justify-content:center}.icon.svelte-18r0cz7{height:var(--size);width:var(--size);background-repeat:no-repeat;opacity:0.5;transition:opacity 0.2s}a.svelte-18r0cz7:hover .icon.svelte-18r0cz7{opacity:1}",
	map: "{\"version\":3,\"file\":\"icon.svelte\",\"sources\":[\"icon.svelte\"],\"sourcesContent\":[\"<a href=\\\"\\\" style=\\\"--size: {size}rem\\\">\\n\\t<div class=\\\"icon icon__{name}\\\">\\n\\t</div>\\n</a>\\n\\n<style>\\n  a {\\n    --size: 0;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n  }\\n  .icon {\\n    height: var(--size);\\n    width: var(--size);\\n    background-repeat: no-repeat;\\n    opacity: 0.5;\\n    transition: opacity 0.2s;\\n  }\\n\\n  a:hover .icon {\\n    opacity: 1;\\n  }\\n</style>\\n\\n<script>\\n  export default {\\n    data: () => ({\\n      size: \\\"1rem\\\",\\n      name: \\\"education\\\"\\n    })\\n  };\\n</script>\"],\"names\":[],\"mappings\":\"AAME,CAAC,eAAC,CAAC,AACD,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,AACzB,CAAC,AACD,KAAK,eAAC,CAAC,AACL,MAAM,CAAE,IAAI,MAAM,CAAC,CACnB,KAAK,CAAE,IAAI,MAAM,CAAC,CAClB,iBAAiB,CAAE,SAAS,CAC5B,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,OAAO,CAAC,IAAI,AAC1B,CAAC,AAED,gBAAC,MAAM,CAAC,KAAK,eAAC,CAAC,AACb,OAAO,CAAE,CAAC,AACZ,CAAC\"}"
};

function data$3() {
	return {
  icons: ["education", "projects", "game-shelf", "about"],
  iconSize: 3
};
}

var Nav = {};

Nav.filename = "/Users/benholmes/Sandbox/portfolio_ssr/src/components/nav.svelte";

Nav.data = function() {
	return data$3();
};

Nav.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Nav._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
};

Nav._render = function(__result, ctx, options) {
	__result.addComponent(Nav);

	ctx = Object.assign(data$3(), ctx);

	return `<div class="nav svelte-116baiu">
	${ each(ctx.icons, item => Object.assign({}, ctx, { icon: item }), ctx => `${validateSsrComponent(Icon, 'Icon')._render(__result, { name: ctx.icon, size: ctx.iconSize }, { store: options.store })}`)}
</div>`;
};

Nav.css = {
	code: ".nav.svelte-116baiu{padding:1rem;height:100%;display:flex;flex-direction:column;justify-content:space-around}",
	map: "{\"version\":3,\"file\":\"nav.svelte\",\"sources\":[\"nav.svelte\"],\"sourcesContent\":[\"<div class=\\\"nav\\\">\\n\\t{#each icons as icon}\\n\\t<Icon name=\\\"{icon}\\\" size=\\\"{iconSize}\\\" /> {/each}\\n</div>\\n\\n<style>\\n  .nav {\\n    padding: 1rem;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n  }\\n</style>\\n\\n<script>\\n  import Icon from \\\"./icon.svelte\\\";\\n  export default {\\n    data: () => ({\\n      icons: [\\\"education\\\", \\\"projects\\\", \\\"game-shelf\\\", \\\"about\\\"],\\n      iconSize: 3\\n    }),\\n    components: {\\n      Icon\\n    }\\n  };\\n</script>\"],\"names\":[],\"mappings\":\"AAME,IAAI,eAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,YAAY,AAC/B,CAAC\"}"
};

function data$4() {
	return {
  textShadowCss: "",
  words: "",
  size: 1
};
}

var Popout_text = {};

Popout_text.filename = "/Users/benholmes/Sandbox/portfolio_ssr/src/components/popout-text.svelte";

Popout_text.data = function() {
	return data$4();
};

Popout_text.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = Popout_text._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
};

Popout_text._render = function(__result, ctx, options) {
	__result.addComponent(Popout_text);

	ctx = Object.assign(data$4(), ctx);

	return `<p style="text-shadow: ${escape(ctx.textShadowCss || " ")}; --size: ${escape(ctx.size)}rem" class="svelte-107yxp8">
	${ each(ctx.words.split(""), item => Object.assign({}, ctx, { character: item }), ctx => `<span class="svelte-107yxp8">${escape(ctx.character)}</span>`)}
</p>`;
};

Popout_text.css = {
	code: "p.svelte-107yxp8{--size:0;color:transparent;font-family:\"Avenir-Black\";font-size:var(--size);margin:0;padding-bottom:1rem;transition:text-shadow 0.5s ease-out}span.svelte-107yxp8{padding:calc(var(--size) * 0.08);position:relative}",
	map: "{\"version\":3,\"file\":\"popout-text.svelte\",\"sources\":[\"popout-text.svelte\"],\"sourcesContent\":[\"<p style=\\\"text-shadow: {textShadowCss || \\\" \\\"}; --size: {size}rem\\\">\\n\\t{#each words.split(\\\"\\\") as character}\\n\\t<span>{character}</span>\\n\\t{/each}\\n</p>\\n\\n<style>\\n  p {\\n    --size: 0;\\n    color: transparent;\\n    font-family: \\\"Avenir-Black\\\";\\n    font-size: var(--size);\\n    margin: 0;\\n    padding-bottom: 1rem;\\n    transition: text-shadow 0.5s ease-out;\\n  }\\n\\n  span {\\n    padding: calc(var(--size) * 0.08);\\n    position: relative;\\n  }\\n</style>\\n\\n<script>\\n  export default {\\n    data: () => ({\\n      textShadowCss: \\\"\\\",\\n      words: \\\"\\\",\\n      size: 1\\n    })\\n  };\\n</script>\"],\"names\":[],\"mappings\":\"AAOE,CAAC,eAAC,CAAC,AACD,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,WAAW,CAClB,WAAW,CAAE,cAAc,CAC3B,SAAS,CAAE,IAAI,MAAM,CAAC,CACtB,MAAM,CAAE,CAAC,CACT,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,WAAW,CAAC,IAAI,CAAC,QAAQ,AACvC,CAAC,AAED,IAAI,eAAC,CAAC,AACJ,OAAO,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjC,QAAQ,CAAE,QAAQ,AACpB,CAAC\"}"
};

const ColorBar = Color_bar;
const GradientManager = Gradient_manager;
const Nav$1 = Nav;
const PopoutText = Popout_text;

function data$5() {
	return {
  sharedGradient: {},
  headerSize: 5
};
}

var App = {};

App.filename = "/Users/benholmes/Sandbox/portfolio_ssr/src/App.svelte";

App.data = function() {
	return data$5();
};

App.render = function(state, options = {}) {
	var components = new Set();

	function addComponent(component) {
		components.add(component);
	}

	var result = { head: '', addComponent };
	var html = App._render(result, state, options);

	var cssCode = Array.from(components).map(c => c.css && c.css.code).filter(Boolean).join('\n');

	return {
		html,
		head: result.head,
		css: { code: cssCode, map: null },
		toString() {
			return html;
		}
	};
};

App._render = function(__result, ctx, options) {
	__result.addComponent(App);

	ctx = Object.assign(data$5(), ctx);

	return `${validateSsrComponent(GradientManager, 'GradientManager')._render(__result, {  }, { store: options.store })}
<div class="background svelte-sernzh">
	<div class="content-container svelte-sernzh">
		${validateSsrComponent(Nav$1, 'Nav')._render(__result, {  }, { store: options.store })}
		<div class="text-container svelte-sernzh">
			<h1 class="svelte-sernzh">
				${validateSsrComponent(PopoutText, 'PopoutText')._render(__result, { textShadowCss: ctx.sharedGradient.textShadowCssString, words: "BEN", size: ctx.headerSize }, { store: options.store })}
				${validateSsrComponent(PopoutText, 'PopoutText')._render(__result, { textShadowCss: ctx.sharedGradient.textShadowCssString, words: "HOLMES", size: ctx.headerSize }, { store: options.store })}
			</h1>
			<p class="svelte-sernzh">A student developer with a</p>
			<p class="svelte-sernzh">
				<span class="color-bar-underline svelte-sernzh">passion
					<span class="svelte-sernzh">
						${validateSsrComponent(ColorBar, 'ColorBar')._render(__result, { gradientIndex: ctx.sharedGradient.index }, { store: options.store })}
					</span>
				</span> for web dev 👨‍💻
			</p>
		</div>
	</div>
	<div class="footer-container svelte-sernzh">
		${validateSsrComponent(ColorBar, 'ColorBar')._render(__result, { gradientIndex: ctx.sharedGradient.index }, { store: options.store })}
	</div>
</div>`;
};

App.css = {
	code: ".background.svelte-sernzh{background:var(--grey-9);display:flex;height:100%;width:100%;justify-content:center;align-items:center;--footer-size:1rem}.content-container.svelte-sernzh{width:100%;max-width:100rem;height:100%;max-height:70rem;padding:2rem;margin-bottom:var(--footer-size);display:flex;flex-direction:row;justify-content:space-between}h1.svelte-sernzh{margin:0;margin-left:-0.5rem}.text-container.svelte-sernzh{max-width:30em;overflow:scroll;padding:2rem 1.5rem;text-align:right}.text-container.svelte-sernzh>.svelte-sernzh{padding-bottom:1rem}.text-container.svelte-sernzh p.svelte-sernzh{color:var(--grey-1);margin:0;font-size:30px;font-family:\"Titillium Web\";font-weight:300}.color-bar-underline.svelte-sernzh{display:inline-block;width:auto}.color-bar-underline.svelte-sernzh>span.svelte-sernzh{width:100%;height:0.3rem}.footer-container.svelte-sernzh{width:100%;height:var(--footer-size);position:absolute;bottom:0;left:0}",
	map: "{\"version\":3,\"file\":\"App.svelte\",\"sources\":[\"App.svelte\"],\"sourcesContent\":[\"<GradientManager on:update=\\\"updateGradients(event)\\\" />\\n<div class=\\\"background\\\">\\n\\t<div class=\\\"content-container\\\">\\n\\t\\t<Nav />\\n\\t\\t<div class=\\\"text-container\\\">\\n\\t\\t\\t<h1>\\n\\t\\t\\t\\t<PopoutText textShadowCss={sharedGradient.textShadowCssString} words=\\\"BEN\\\" size=\\\"{headerSize}\\\" />\\n\\t\\t\\t\\t<PopoutText textShadowCss={sharedGradient.textShadowCssString} words=\\\"HOLMES\\\" size=\\\"{headerSize}\\\" />\\n\\t\\t\\t</h1>\\n\\t\\t\\t<p>A student developer with a</p>\\n\\t\\t\\t<p>\\n\\t\\t\\t\\t<span class=\\\"color-bar-underline\\\">passion\\n\\t\\t\\t\\t\\t<span>\\n\\t\\t\\t\\t\\t\\t<ColorBar gradientIndex={sharedGradient.index} />\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t</span> for web dev 👨‍💻\\n\\t\\t\\t</p>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\\"footer-container\\\">\\n\\t\\t<ColorBar gradientIndex={sharedGradient.index} />\\n\\t</div>\\n</div>\\n\\n<style>\\n  .background {\\n    background: var(--grey-9);\\n    display: flex;\\n    height: 100%;\\n    width: 100%;\\n    justify-content: center;\\n    align-items: center;\\n    --footer-size: 1rem;\\n  }\\n  .content-container {\\n    width: 100%;\\n    max-width: 100rem;\\n    height: 100%;\\n    max-height: 70rem;\\n    padding: 2rem;\\n    margin-bottom: var(--footer-size);\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n  }\\n  h1 {\\n    margin: 0;\\n    margin-left: -0.5rem;\\n  }\\n  .text-container {\\n    max-width: 30em;\\n    overflow: scroll;\\n    padding: 2rem 1.5rem;\\n    text-align: right;\\n  }\\n  .text-container > * {\\n    padding-bottom: 1rem;\\n  }\\n  .text-container p {\\n    color: var(--grey-1);\\n    margin: 0;\\n    font-size: 30px;\\n    font-family: \\\"Titillium Web\\\";\\n    font-weight: 300;\\n  }\\n  .color-bar-underline {\\n    display: inline-block;\\n    width: auto;\\n  }\\n  .color-bar-underline > span {\\n    width: 100%;\\n    height: 0.3rem;\\n  }\\n  .footer-container {\\n    width: 100%;\\n    height: var(--footer-size);\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n  }\\n</style>\\n\\n<script>\\n  import {\\n    ColorBar,\\n    GradientManager,\\n    Nav,\\n    PopoutText\\n  } from \\\"./components/index.js\\\";\\n\\n  export default {\\n    components: {\\n      PopoutText,\\n      ColorBar,\\n      Nav,\\n      GradientManager\\n    },\\n    methods: {\\n      updateGradients(updated) {\\n        this.set({\\n          sharedGradient: updated\\n        });\\n      }\\n    },\\n    data: () => ({\\n      sharedGradient: {},\\n      headerSize: 5\\n    })\\n  };\\n</script>\"],\"names\":[],\"mappings\":\"AAyBE,WAAW,cAAC,CAAC,AACX,UAAU,CAAE,IAAI,QAAQ,CAAC,CACzB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,kBAAkB,cAAC,CAAC,AAClB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,aAAa,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,aAAa,AAChC,CAAC,AACD,EAAE,cAAC,CAAC,AACF,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,OAAO,AACtB,CAAC,AACD,eAAe,cAAC,CAAC,AACf,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CAAC,MAAM,CACpB,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,6BAAe,CAAG,cAAE,CAAC,AACnB,cAAc,CAAE,IAAI,AACtB,CAAC,AACD,6BAAe,CAAC,CAAC,cAAC,CAAC,AACjB,KAAK,CAAE,IAAI,QAAQ,CAAC,CACpB,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,eAAe,CAC5B,WAAW,CAAE,GAAG,AAClB,CAAC,AACD,oBAAoB,cAAC,CAAC,AACpB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,AACb,CAAC,AACD,kCAAoB,CAAG,IAAI,cAAC,CAAC,AAC3B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,MAAM,AAChB,CAAC,AACD,iBAAiB,cAAC,CAAC,AACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,aAAa,CAAC,CAC1B,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,AACT,CAAC\"}"
};

module.exports = App;
