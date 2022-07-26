import{_ as i,o,c as l,a as s,b as e,e as t,d as n,r}from"./app.7b59e2c1.js";const c={},p=t(`<h1 id="oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh" aria-hidden="true">#</a> Oh My ZSH!</h1><h2 id="instalacion" tabindex="-1"><a class="header-anchor" href="#instalacion" aria-hidden="true">#</a> Instalaci\xF3n</h2><p>Debemos comprobar que tenemos una versi\xF3n de ZSH igual o superior a la 5.0.8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">zsh</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Para instalar se utiliza el siguiente script</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sh</span> -c <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Por \xFAltimo, es necesario establecer ZSH como el BASH por defecto para el usuario</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> chsh -s /usr/bin/zsh <span class="token environment constant">$USER</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),d={href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH",target:"_blank",rel:"noopener noreferrer"},u=n("More info"),h=s("h2",{id:"configuracion-utilizada",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuracion-utilizada","aria-hidden":"true"},"#"),n(" Configuraci\xF3n utilizada")],-1),m=s("p",null,[n("Archivo de ejemplo "),s("code",null,".zshrc"),n(", para que el tema AGNOSTER se visualice correctamente, es necesario utilizar una tipograf\xEDa distinta, como Fira Code y establecerla por defecto en el terminal")],-1),v={href:"https://github.com/tonsky/FiraCode/releases",target:"_blank",rel:"noopener noreferrer"},b=n("Enlace para descargar la fuente Fira Code "),k=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ZSH</span><span class="token operator">=</span><span class="token string">&quot;/Users/jaidis/.oh-my-zsh&quot;</span>

<span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;agnoster&quot;</span>

<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>flutter <span class="token function">git</span><span class="token punctuation">)</span>

<span class="token builtin class-name">source</span> <span class="token variable">$ZSH</span>/oh-my-zsh.sh

<span class="token comment"># ANDROID PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/Library/Android/sdk
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/emulator
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/tools
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/tools/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ANDROID_HOME</span>/platform-tools
<span class="token comment"># FLUTTER PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/Library/FlutterSDK
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$FLUTTER_HOME</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h2><h3 id="awesome-zsh-plugins" tabindex="-1"><a class="header-anchor" href="#awesome-zsh-plugins" aria-hidden="true">#</a> awesome-zsh-plugins</h3>`,3),g={href:"https://github.com/unixorn/awesome-zsh-plugins",target:"_blank",rel:"noopener noreferrer"},f=n("Repo que contiene ZSH frameworks, plugins, tutoriales y temas. El repo est\xE1 integrado dentro de las listas 'Awesome' \u{1F60E} "),_=t(`<h3 id="zsh-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#zsh-syntax-highlighting" aria-hidden="true">#</a> zsh-syntax-highlighting</h3><p>Este plugin permite resaltar la sintaxis (como <code>echo</code>) en el terminal</p><p>Para instarlar dicho plugin es necesario clonar su repo y habilitarlo en el fichero <code>.zshrc</code>. <strong>Nota: este plugin tiene que ser SIEMPRE el \xFAltimo plugin</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token punctuation">..</span>. zsh-syntax-highlighting<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="temas" tabindex="-1"><a class="header-anchor" href="#temas" aria-hidden="true">#</a> Temas</h2>`,6),H={href:"https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k",target:"_blank",rel:"noopener noreferrer"},x=n("powerlevel10k");function z(E,A){const a=r("ExternalLinkIcon");return o(),l("div",null,[p,s("p",null,[s("a",d,[u,e(a)])]),h,m,s("p",null,[s("a",v,[b,e(a)])]),k,s("p",null,[s("a",g,[f,e(a)])]),_,s("ul",null,[s("li",null,[s("a",H,[x,e(a)])])])])}var y=i(c,[["render",z],["__file","OH-MY-ZSH.html.vue"]]);export{y as default};
