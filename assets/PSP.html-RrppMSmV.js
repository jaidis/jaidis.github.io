import{_ as e,r as t,o as i,c as o,a as s,d as l,b as p,f as n}from"./app-ZOF6ibMC.js";const c={},r=n(`<h1 id="psp" tabindex="-1"><a class="header-anchor" href="#psp" aria-hidden="true">#</a> PSP</h1><h2 id="_7z" tabindex="-1"><a class="header-anchor" href="#_7z" aria-hidden="true">#</a> 7z</h2><h3 id="compress" tabindex="-1"><a class="header-anchor" href="#compress" aria-hidden="true">#</a> Compress</h3><details><summary>Show</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;0.1&quot;</span>

<span class="token keyword">function</span> <span class="token function-name function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$SCRIPTNAME</span>: ERROR occured in line <span class="token variable">$1</span>: &quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">7zCompress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">command</span> <span class="token keyword">in</span> 7z<span class="token punctuation">;</span> <span class="token keyword">do</span>
            <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token variable">$command</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
            <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $<span class="token operator">?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                    error <span class="token variable">$LINENO</span> <span class="token string">&quot;<span class="token variable">$command</span> is not installed.&quot;</span>
                    <span class="token builtin class-name">exit</span> <span class="token parameter variable">-4</span>
            <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    7z a <span class="token parameter variable">-mx</span><span class="token operator">=</span><span class="token number">9</span> <span class="token parameter variable">-mmt</span><span class="token operator">=</span>on <span class="token parameter variable">-aoa</span> <span class="token string">&quot;<span class="token variable">\${1<span class="token operator">%</span>.*}</span>.7z&quot;</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> *.iso<span class="token punctuation">;</span> <span class="token keyword">do</span>
    7zCompress <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="descompress" tabindex="-1"><a class="header-anchor" href="#descompress" aria-hidden="true">#</a> Descompress</h3><details><summary>Show</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;0.1&quot;</span>

<span class="token keyword">function</span> <span class="token function-name function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$SCRIPTNAME</span>: ERROR occured in line <span class="token variable">$1</span>: &quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">7zDescompress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">command</span> <span class="token keyword">in</span> 7z<span class="token punctuation">;</span> <span class="token keyword">do</span>
            <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token variable">$command</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
            <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $<span class="token operator">?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                    error <span class="token variable">$LINENO</span> <span class="token string">&quot;<span class="token variable">$command</span> is not installed.&quot;</span>
                    <span class="token builtin class-name">exit</span> <span class="token parameter variable">-4</span>
            <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    7z x <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
<span class="token punctuation">}</span>


<span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> *.7z<span class="token punctuation">;</span> <span class="token keyword">do</span>
    7zDescompress <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h1 id="ciso" tabindex="-1"><a class="header-anchor" href="#ciso" aria-hidden="true">#</a> CISO</h1><h3 id="compress-1" tabindex="-1"><a class="header-anchor" href="#compress-1" aria-hidden="true">#</a> Compress</h3><details><summary>Show</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h3 id="descompress-1" tabindex="-1"><a class="header-anchor" href="#descompress-1" aria-hidden="true">#</a> Descompress</h3><details><summary>Show</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><blockquote></blockquote>`,12),d={href:"https://www.reddit.com/r/RetroPie/comments/k90c4x/comment/gf21rr9/?utm_source=share&utm_medium=web2x&context=3",target:"_blank",rel:"noopener noreferrer"},u=n(`<details><summary>Show</summary><blockquote></blockquote><p>On Ubuntu:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ciso <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>then paste this into a shell script:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">&quot;0.2&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$#</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Usage: <span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $0<span class="token variable">)</span></span> [iso file]&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">fi</span>

<span class="token keyword">function</span> <span class="token function-name function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$SCRIPTNAME</span>: ERROR occured in line <span class="token variable">$1</span>: &quot;</span>
        <span class="token builtin class-name">shift</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">echo</span> <span class="token variable">\${0<span class="token operator">##</span>.\\*}</span> <span class="token variable">$version</span>

<span class="token comment">#Usage Checks</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">command</span> <span class="token keyword">in</span> ciso<span class="token punctuation">;</span> <span class="token keyword">do</span>
<span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token variable">$command</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
        <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> $<span class="token operator">?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                error <span class="token variable">$LINENO</span> <span class="token string">&quot;<span class="token variable">$command</span> is not installed.&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token parameter variable">-4</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>

ciso <span class="token number">9</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${1<span class="token operator">%</span>.\\*}</span>.cso&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>then</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x whateveryourscriptnameis.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>then finally, to batch process a bunch of isos in a directory run</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> <span class="token punctuation">\\</span>*.iso<span class="token punctuation">;</span> <span class="token keyword">do</span> whateveryourscriptnameis.sh <span class="token string">&quot;<span class="token variable">$f</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sit back, get a cup of coffee and let bash do all the work.</p></details>`,1);function k(v,m){const a=t("ExternalLinkIcon");return i(),o("div",null,[r,s("p",null,[s("a",d,[l("Original Source "),p(a)])]),u])}const h=e(c,[["render",k],["__file","PSP.html.vue"]]);export{h as default};
