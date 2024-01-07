import{_ as a,o as e,c as s,f as n}from"./app-ZOF6ibMC.js";const r={},i=n(`<h1 id="react-native" tabindex="-1"><a class="header-anchor" href="#react-native" aria-hidden="true">#</a> React Native</h1><h2 id="comandos" tabindex="-1"><a class="header-anchor" href="#comandos" aria-hidden="true">#</a> Comandos</h2><p>Para limpiar un proyecto e instalar de nuevo todos las dependencias</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules package-lock.json ios/Podfile.lock ios/Pods/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para mostrar los hashes de las firmas de un proyecto de android (en este caso la KEY de DEBUG)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>keytool <span class="token parameter variable">-list</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-alias</span> androiddebugkey <span class="token parameter variable">-keystore</span> android/app/debug.keystore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="herramientas" tabindex="-1"><a class="header-anchor" href="#herramientas" aria-hidden="true">#</a> Herramientas</h2><p>Si deseamos comprobar el contenido del bundle creado por la aplicación, instalaremos el paquete &quot;react-native-bundle-visualizer&quot;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev react-native-bundle-visualizer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y a continuación generamos el myapp.bundle</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./node_modules/.bin/react-native-bundle-visualizer <span class="token parameter variable">--platform</span> android <span class="token parameter variable">--dev</span> <span class="token boolean">false</span> --bundle-output ./myapp.bundle <span class="token parameter variable">--verbose</span> --reset-cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para visualizar el contenido de bundle, podemos instalar esta herramienta de forma global</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> source-map-explorer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Y a continuación le pasamos como parametro el bundle generado, se genera un archivo HTML con el contenido del bundle</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>source-map-explorer myapp.bundle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),d=[i];function l(o,t){return e(),s("div",null,d)}const p=a(r,[["render",l],["__file","RN.html.vue"]]);export{p as default};