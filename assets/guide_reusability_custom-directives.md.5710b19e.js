import{c as s,e as n,q as a,a as l,o}from"./chunks/framework.302ed498.js";const e=l('<h1 id="custom-directives" tabindex="-1">Custom Directives <a class="header-anchor" href="#custom-directives" aria-label="Permalink to &quot;Custom Directives {#custom-directives}&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction {#introduction}&quot;">​</a></h2><p>In addition to the default set of directives shipped in core (like <code>v-model</code> or <code>v-show</code>), Vue also allows you to register your own custom directives.</p><p>We have introduced two forms of code reuse in Vue: <a href="/guide/essentials/component-basics.html">components</a> and <a href="./composables.html">composables</a>. Components are the main building blocks, while composables are focused on reusing stateful logic. Custom directives, on the other hand, are mainly intended for reusing logic that involves low-level DOM access on plain elements.</p><p>A custom directive is defined as an object containing lifecycle hooks similar to those of a component. The hooks receive the element the directive is bound to. Here is an example of a directive that focuses an input when the element is inserted into the DOM by Vue:</p><div class="composition-api"><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// enables v-focus in templates</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vFocus </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">mounted</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> el</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-focus</span><span style="color:#89DDFF;"> /&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></div><div class="options-api"><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> focus </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">mounted</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> el</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">directives</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// enables v-focus in template</span></span>\n<span class="line"><span style="color:#A6ACCD;">    focus</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-focus</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div></div>',7),t={class:"demo"},p={placeholder:"This should be focused"},c=l('<p>Assuming you haven&#39;t clicked elsewhere on the page, the input above should be auto-focused. This directive is more useful than the <code>autofocus</code> attribute because it works not just on page load - it also works when the element is dynamically inserted by Vue.</p><div class="composition-api"><p>In <code>&lt;script setup&gt;</code>, any camelCase variable that starts with the <code>v</code> prefix can be used as a custom directive. In the example above, <code>vFocus</code> can be used in the template as <code>v-focus</code>.</p><p>If not using <code>&lt;script setup&gt;</code>, custom directives can be registered using the <code>directives</code> option:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/*...*/</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">directives</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// enables v-focus in template</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">focus</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div><div class="options-api"><p>Similar to components, custom directives must be registered so that they can be used in templates. In the example above, we are using local registration via the <code>directives</code> option.</p></div><p>It is also common to globally register custom directives at the app level:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">// make v-focus usable in all components</span></span>\n<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">directive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">focus</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* ... */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Custom directives should only be used when the desired functionality can only be achieved via direct DOM manipulation. Prefer declarative templating using built-in directives such as <code>v-bind</code> when possible because they are more efficient and server-rendering friendly.</p></div><h2 id="directive-hooks" tabindex="-1">Directive Hooks <a class="header-anchor" href="#directive-hooks" aria-label="Permalink to &quot;Directive Hooks {#directive-hooks}&quot;">​</a></h2><p>A directive definition object can provide several hook functions (all optional):</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> myDirective </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called before bound element&#39;s attributes</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// or event listeners are applied</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// see below for details on arguments</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called right before the element is inserted into the DOM.</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeMount</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called when the bound element&#39;s parent component</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// and all its children are mounted.</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called before the parent component is updated</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeUpdate</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called after the parent component and</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// all of its children have updated</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">updated</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called before the parent component is unmounted</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">beforeUnmount</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// called when the parent component is unmounted</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">unmounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">prevVnode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="hook-arguments" tabindex="-1">Hook Arguments <a class="header-anchor" href="#hook-arguments" aria-label="Permalink to &quot;Hook Arguments {#hook-arguments}&quot;">​</a></h3><p>Directive hooks are passed these arguments:</p><ul><li><p><code>el</code>: the element the directive is bound to. This can be used to directly manipulate the DOM.</p></li><li><p><code>binding</code>: an object containing the following properties.</p><ul><li><code>value</code>: The value passed to the directive. For example in <code>v-my-directive=&quot;1 + 1&quot;</code>, the value would be <code>2</code>.</li><li><code>oldValue</code>: The previous value, only available in <code>beforeUpdate</code> and <code>updated</code>. It is available whether or not the value has changed.</li><li><code>arg</code>: The argument passed to the directive, if any. For example in <code>v-my-directive:foo</code>, the arg would be <code>&quot;foo&quot;</code>.</li><li><code>modifiers</code>: An object containing modifiers, if any. For example in <code>v-my-directive.foo.bar</code>, the modifiers object would be <code>{ foo: true, bar: true }</code>.</li><li><code>instance</code>: The instance of the component where the directive is used.</li><li><code>dir</code>: the directive definition object.</li></ul></li><li><p><code>vnode</code>: the underlying VNode representing the bound element.</p></li><li><p><code>prevNode</code>: the VNode representing the bound element from the previous render. Only available in the <code>beforeUpdate</code> and <code>updated</code> hooks.</p></li></ul><p>As an example, consider the following directive usage:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-example</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">bar</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">baz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>The <code>binding</code> argument would be an object in the shape of:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">modifiers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">bar</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">/* value of `baz` */</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">oldValue</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">/* value of `baz` from previous update */</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Similar to built-in directives, custom directive arguments can be dynamic. For example:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-example:</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">arg</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Here the directive argument will be reactively updated based on <code>arg</code> property in our component state.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Apart from <code>el</code>, you should treat these arguments as read-only and never modify them. If you need to share information across hooks, it is recommended to do so through element&#39;s <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset" target="_blank" rel="noreferrer">dataset</a>.</p></div><h2 id="function-shorthand" tabindex="-1">Function Shorthand <a class="header-anchor" href="#function-shorthand" aria-label="Permalink to &quot;Function Shorthand {#function-shorthand}&quot;">​</a></h2><p>It&#39;s common for a custom directive to have the same behavior for <code>mounted</code> and <code>updated</code>, with no need for the other hooks. In such cases we can define the directive as a function:</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">directive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// this will be called for both `mounted` and `updated`</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="object-literals" tabindex="-1">Object Literals <a class="header-anchor" href="#object-literals" aria-label="Permalink to &quot;Object Literals {#object-literals}&quot;">​</a></h2><p>If your directive needs multiple values, you can also pass in a JavaScript object literal. Remember, directives can take any valid JavaScript expression.</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-demo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{ </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">, </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">directive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">binding</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &quot;white&quot;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">binding</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// =&gt; &quot;hello!&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="usage-on-components" tabindex="-1">Usage on Components <a class="header-anchor" href="#usage-on-components" aria-label="Permalink to &quot;Usage on Components {#usage-on-components}&quot;">​</a></h2><p>When used on components, custom directives will always apply to a component&#39;s root node, similar to <a href="/guide/components/attrs.html">Fallthrough Attributes</a>.</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MyComponent</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-demo</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- template of MyComponent --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">&lt;!-- v-demo directive will be applied here --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">My component content</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Note that components can potentially have more than one root node. When applied to a multi-root component, a directive will be ignored and a warning will be thrown. Unlike attributes, directives can&#39;t be passed to a different element with <code>v-bind=&quot;$attrs&quot;</code>. In general, it is <strong>not</strong> recommended to use custom directives on components.</p>',33),r=JSON.parse('{"title":"Custom Directives","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Directive Hooks","slug":"directive-hooks","link":"#directive-hooks","children":[{"level":3,"title":"Hook Arguments","slug":"hook-arguments","link":"#hook-arguments","children":[]}]},{"level":2,"title":"Function Shorthand","slug":"function-shorthand","link":"#function-shorthand","children":[]},{"level":2,"title":"Object Literals","slug":"object-literals","link":"#object-literals","children":[]},{"level":2,"title":"Usage on Components","slug":"usage-on-components","link":"#usage-on-components","children":[]}],"relativePath":"guide/reusability/custom-directives.md","filePath":"guide/reusability/custom-directives.md"}'),i={name:"guide/reusability/custom-directives.md"},y=Object.assign(i,{setup(l){const r={mounted:s=>{s.focus()}};return(l,i)=>(o(),s("div",null,[e,n("div",t,[a(n("input",p,null,512),[[r]])]),c]))}});export{r as __pageData,y as default};
