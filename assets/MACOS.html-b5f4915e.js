import{_ as a,p as s,q as e,a1 as n}from"./framework-96b046e1.js";const i={},l=n(`<h1 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MACOS</h1><p>Instrucciones para configurar MacOS</p><h3 id="configuracion-global" tabindex="-1"><a class="header-anchor" href="#configuracion-global" aria-hidden="true">#</a> Configuración global</h3><p>Desactivar seguridad para poder instalar Apps de terceros</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> spctl --master-disable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Desactivar hibernación y borrar carpetas asociadas a ello</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pmset hibernatemode <span class="token number">0</span>
<span class="token function">sudo</span> <span class="token function">rm</span> /var/vm/sleepimage <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">mkdir</span> /var/vm/sleepimag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Cambiar el nombre del dispositivo</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> scutil <span class="token parameter variable">--set</span> HostName mini
<span class="token function">sudo</span> scutil <span class="token parameter variable">--set</span> ComputerName mini
<span class="token function">sudo</span> scutil <span class="token parameter variable">--set</span> LocalHostName mini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="herramientas-desarrollo" tabindex="-1"><a class="header-anchor" href="#herramientas-desarrollo" aria-hidden="true">#</a> Herramientas Desarrollo</h3><p>Instalar el paquete mínimo necesario xcode-select</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xcode-select <span class="token parameter variable">--install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Instalar Homebrew</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>Homebrew Cheat Sheet</summary><blockquote></blockquote><p><em>Desactivar las analiticas</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew analytics off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Actualiza el repositorio de brew</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Muestra los paquetes obsoletos</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew outdated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>Actualiza los paquetes instalados</em></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><blockquote></blockquote><p>Instalar Java 8 (en este caso, openjdk 8)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> adoptopenjdk/openjdk/adoptopenjdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Instalar programas usados con frecuencia</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> bat bpytop <span class="token function">htop</span> scrcpy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Instalar cocoapods</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> gem <span class="token function">install</span> cocoapods
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuracion-de-bash-o-zsh" tabindex="-1"><a class="header-anchor" href="#configuracion-de-bash-o-zsh" aria-hidden="true">#</a> Configuración de BASH o ZSH</h3><p>Exportar los SDK de Android y Flutter para que sean accesibles desde el terminal</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ANDROID PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/Library/Android/sdk
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/emulator
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/tools
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/tools/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/platform-tools
<span class="token comment"># FLUTTER PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/Library/FlutterSDK
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$FLUTTER_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react-native-flutter" tabindex="-1"><a class="header-anchor" href="#react-native-flutter" aria-hidden="true">#</a> React Native &amp; Flutter</h3><p>Instalar watchman (react native)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> watchman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Comprobar los SDK instalados por la versión actual de Xcode, forzar a utilizar dicha versión de Xcode para xcode-select</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xcrun <span class="token parameter variable">-k</span> <span class="token parameter variable">--sdk</span> iphoneos --show-sdk-path
<span class="token function">sudo</span> xcode-select <span class="token parameter variable">--switch</span> /Applications/Xcode.app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Aceptar todas las licencias de los SDK de Android Studio</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yes</span> <span class="token operator">|</span> sdkmanager <span class="token parameter variable">--licenses</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Aceptar todas las licencias de Xcode</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> xcodebuild <span class="token parameter variable">-license</span> accept
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="node-npm" tabindex="-1"><a class="header-anchor" href="#node-npm" aria-hidden="true">#</a> Node &amp; Npm</h3><p>Si utilizamos una versión superior a la v7 de Npm, nos saltará un aviso de dependecias incompletas al instalar los paquetes, para evitar el error, se utiliza el modificador --legacy-peer-deps</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --legacy-peer-deps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pods" tabindex="-1"><a class="header-anchor" href="#pods" aria-hidden="true">#</a> Pods</h3><p>Los cocoapods nos permite instalar paquetes para los proyectos de Xcode</p><p>Si se desea iniciar un archivo pod</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pod init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para instalar los pods dentro de un proyecto</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pod <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para comprobar los pods desactualizados</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pod outdated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para forzar que se recargue la base de datos con los información de los pods</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pod repo update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="scrcpy" tabindex="-1"><a class="header-anchor" href="#scrcpy" aria-hidden="true">#</a> Scrcpy</h3><p>Con esta herramienta, nos permite mostrar la pantalla de un dispositivo físico de Android. La configuración recomendada para que se muestre de forma &quot;normal&quot; es la siguiente</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>scrcpy <span class="token parameter variable">-b5M</span> <span class="token parameter variable">-m1024</span> <span class="token parameter variable">-w</span> <span class="token parameter variable">-S</span> <span class="token parameter variable">-t</span> --disable-screensaver
scrcpy <span class="token parameter variable">-b10M</span> <span class="token parameter variable">-m1024</span> <span class="token parameter variable">-w</span> <span class="token parameter variable">-S</span> <span class="token parameter variable">-t</span> --disable-screensaver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Con ello indicamos, que el bitrate no supere los 5M, una resolución de 1024, mantenemos el dispositivo funcionando, apagamos la pantalla del dispositivo, mostramos los toques físicos (puntero) y por último desactivamos el salvapantallas</p>`,51),r=[l];function t(d,o){return s(),e("div",null,r)}const p=a(i,[["render",t],["__file","MACOS.html.vue"]]);export{p as default};