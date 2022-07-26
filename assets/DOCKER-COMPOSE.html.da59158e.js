import{_ as n,o as s,c as a,e}from"./app.7b59e2c1.js";const t={},p=e(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h1><h2 id="container-templates-almost-all-raspberry-compatible" tabindex="-1"><a class="header-anchor" href="#container-templates-almost-all-raspberry-compatible" aria-hidden="true">#</a> Container templates (almost all raspberry compatible)</h2><h5 id="adguard" tabindex="-1"><a class="header-anchor" href="#adguard" aria-hidden="true">#</a> Adguard</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> adguard/adguardhome<span class="token punctuation">:</span>armhf<span class="token punctuation">-</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> adguardhome
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/tcp
      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/udp
      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/tcp
      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/udp
      <span class="token punctuation">-</span> 853<span class="token punctuation">:</span>853/tcp
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span>3000/tcp
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/conf
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/work
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dashmachine" tabindex="-1"><a class="header-anchor" href="#dashmachine" aria-hidden="true">#</a> dashmachine</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> adguard/adguardhome<span class="token punctuation">:</span>armhf<span class="token punctuation">-</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> adguardhome
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/tcp
      <span class="token punctuation">-</span> 53<span class="token punctuation">:</span>53/udp
      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/tcp
      <span class="token punctuation">-</span> 67<span class="token punctuation">:</span>67/udp
      <span class="token punctuation">-</span> 853<span class="token punctuation">:</span>853/tcp
      <span class="token punctuation">-</span> 3000<span class="token punctuation">:</span>3000/tcp
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/conf
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/adguardhome<span class="token punctuation">:</span>/opt/adguardhome/work
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="deemix" tabindex="-1"><a class="header-anchor" href="#deemix" aria-hidden="true">#</a> deemix</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.gitlab.com/bockiii/deemix<span class="token punctuation">-</span>docker
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> deemix
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6595<span class="token punctuation">:</span>6595/tcp
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/deemix<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/deemix<span class="token punctuation">:</span>/downloads
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token punctuation">-</span> UMASK_SET=022
      <span class="token punctuation">-</span> ARL=29c8ccd9c159a446d3715261fec17fd2c5cb63946342a678aa788023940ff9d2fc7e82ec55f176e60a5545bc997b712663e7e19a8f410d2e7fa282e67ced66ffb669d3bdc66bcae9cd457d3071a47aca9a79f35075808c9416669cc9ff71132e <span class="token comment">#Put your ARL cookie code here</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="dillinger" tabindex="-1"><a class="header-anchor" href="#dillinger" aria-hidden="true">#</a> dillinger</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">dillinger</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/dillinger<span class="token punctuation">:</span>arm32v7<span class="token punctuation">-</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> dillinger
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/dillinger<span class="token punctuation">:</span>/config
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="filebrowser" tabindex="-1"><a class="header-anchor" href="#filebrowser" aria-hidden="true">#</a> FileBrowser</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">filebrowser</span><span class="token punctuation">:</span>
    <span class="token comment"># image: filebrowser/filebrowser:v2.21.1-armv7</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> filebrowser/filebrowser<span class="token punctuation">:</span>v2.21.1<span class="token punctuation">-</span>arm64
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> filebrowser
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/filebrowser/database.db<span class="token punctuation">:</span>/database.db
      <span class="token punctuation">-</span> /home/pi<span class="token punctuation">:</span>/srv
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8888<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="gitea" tabindex="-1"><a class="header-anchor" href="#gitea" aria-hidden="true">#</a> gitea</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">codimd</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> kunde21/gitea<span class="token punctuation">-</span>arm<span class="token punctuation">:</span>v1.14.2<span class="token punctuation">-</span>armv7
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitea
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/gitea<span class="token punctuation">:</span>/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3333<span class="token punctuation">:</span><span class="token number">3000</span>
      <span class="token punctuation">-</span> 3334<span class="token punctuation">:</span><span class="token number">22</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="heimdall" tabindex="-1"><a class="header-anchor" href="#heimdall" aria-hidden="true">#</a> heimdall</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">heimdall</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/heimdall
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> heimdall
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/heimdall<span class="token punctuation">:</span>/config
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5005<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="jellyfin" tabindex="-1"><a class="header-anchor" href="#jellyfin" aria-hidden="true">#</a> Jellyfin</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">jellyfin</span><span class="token punctuation">:</span>
    <span class="token comment"># image: linuxserver/jellyfin:arm32v7-bionic-10.6.4-1-ls3</span>
    <span class="token comment"># image: linuxserver/jellyfin:arm32v7-bionic</span>
    <span class="token comment"># image: ghcr.io/linuxserver/jellyfin:arm32v7-latest</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/linuxserver/jellyfin<span class="token punctuation">:</span>arm64v8<span class="token punctuation">-</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jellyfin
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token comment">#- UMASK_SET=022 #optional</span>
      <span class="token punctuation">-</span> UMASK=022 <span class="token comment">#optional</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/jellyfin<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Classical<span class="token punctuation">:</span>/data/classical
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Chillout<span class="token punctuation">:</span>/data/chillout
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Electronic<span class="token punctuation">:</span>/data/electronic
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Funk<span class="token punctuation">:</span>/data/funk
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/HipHop<span class="token punctuation">:</span>/data/hiphop
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Jazz<span class="token punctuation">:</span>/data/jazz
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Others<span class="token punctuation">:</span>/data/others
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Pop<span class="token punctuation">:</span>/data/pop
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Reggae<span class="token punctuation">:</span>/data/reggae
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Rock<span class="token punctuation">:</span>/data/rock
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Soul<span class="token punctuation">:</span>/data/soul
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Spanish<span class="token punctuation">:</span>/data/spanish
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/music/Swing<span class="token punctuation">:</span>/data/swing
      <span class="token comment"># - /home/pi/docker-data/music/Playlists:/data/playlists</span>
      <span class="token punctuation">-</span> /opt/vc/lib<span class="token punctuation">:</span>/opt/vc/lib
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span>
      <span class="token punctuation">-</span> 8920<span class="token punctuation">:</span><span class="token number">8920</span>
    <span class="token comment">#devices:</span>
    <span class="token comment">#  - /dev/vcsm:/dev/vcsm</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="jsondiff" tabindex="-1"><a class="header-anchor" href="#jsondiff" aria-hidden="true">#</a> jsondiff</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">adguardhome</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jaidis/jsondiff<span class="token punctuation">-</span>arm
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jsondiff
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8890<span class="token punctuation">:</span>80/tcp
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="lidarr" tabindex="-1"><a class="header-anchor" href="#lidarr" aria-hidden="true">#</a> lidarr</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lidarr</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/linuxserver/lidarr<span class="token punctuation">:</span>arm32v7<span class="token punctuation">-</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> lidarr
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8686<span class="token punctuation">:</span><span class="token number">8686</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/lidarr<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/lidarr<span class="token punctuation">:</span>/music <span class="token comment">#optional</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/lidarr<span class="token punctuation">:</span>/downloads <span class="token comment">#optional</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token punctuation">-</span> UMASK=000 <span class="token comment">#optional</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mariadb" tabindex="-1"><a class="header-anchor" href="#mariadb" aria-hidden="true">#</a> mariadb</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mariadb</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/mariadb
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mariadb
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=$PASSWORD$
      <span class="token punctuation">-</span> MYSQL_USER=pi
      <span class="token punctuation">-</span> MYSQL_PASSWORD=$PASSWORD$
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/mariadb<span class="token punctuation">:</span>/config
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="netdata" tabindex="-1"><a class="header-anchor" href="#netdata" aria-hidden="true">#</a> netdata</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">netdata</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> netdata/netdata
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> netdata
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9001<span class="token punctuation">:</span><span class="token number">19999</span>
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SYS_PTRACE
    <span class="token key atrule">security_opt</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> apparmor<span class="token punctuation">:</span>unconfined
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /proc<span class="token punctuation">:</span>/host/proc<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /sys<span class="token punctuation">:</span>/host/sys<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock<span class="token punctuation">:</span>ro
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="phpmyadmin" tabindex="-1"><a class="header-anchor" href="#phpmyadmin" aria-hidden="true">#</a> phpmyadmin</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">phpmyadmin</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> biarms/phpmyadmin
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> phpmyadmin
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token punctuation">-</span> PMA_ARBITRARY=1
      <span class="token punctuation">-</span> PMA_HOST=mariadb
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/phpmyadmin<span class="token punctuation">:</span>/sessions
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8081<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token comment">#restart: always</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">external_links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="qbittorrent" tabindex="-1"><a class="header-anchor" href="#qbittorrent" aria-hidden="true">#</a> qbittorrent</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">qbittorrent</span><span class="token punctuation">:</span>
    <span class="token comment"># image: linuxserver/qbittorrent:arm32v7-latest</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/linuxserver/qbittorrent<span class="token punctuation">:</span>arm32v7<span class="token punctuation">-</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> qbittorrent
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token comment">#- UMASK_SET=022</span>
      <span class="token punctuation">-</span> WEBUI_PORT=8112
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/qbittorrent<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/qbittorrent<span class="token punctuation">:</span>/downloads
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6881<span class="token punctuation">:</span><span class="token number">6881</span>
      <span class="token punctuation">-</span> 6881<span class="token punctuation">:</span>6881/udp
      <span class="token punctuation">-</span> 8112<span class="token punctuation">:</span><span class="token number">8112</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="stackedit" tabindex="-1"><a class="header-anchor" href="#stackedit" aria-hidden="true">#</a> stackedit</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">stackedit</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jaidis/stackedit<span class="token punctuation">-</span>arm
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> stackedit
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> LISTENING_PORT=8008
      <span class="token punctuation">-</span> ROOT_URL=/
      <span class="token punctuation">-</span> NODE_ENV=production
      <span class="token punctuation">-</span> USER_BUCKET_NAME=stackedit<span class="token punctuation">-</span>users
      <span class="token punctuation">-</span> PAYPAL_RECEIVER_EMAIL=
      <span class="token punctuation">-</span> DROPBOX_APP_KEY=
      <span class="token punctuation">-</span> DROPBOX_APP_KEY_FULL=
      <span class="token punctuation">-</span> GITHUB_CLIENT_ID=
      <span class="token punctuation">-</span> GITHUB_CLIENT_SECRET=
      <span class="token punctuation">-</span> GOOGLE_CLIENT_ID=
      <span class="token punctuation">-</span> GOOGLE_API_KEY=
      <span class="token punctuation">-</span> WORDPRESS_CLIENT_ID=
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8008<span class="token punctuation">:</span>8008/tcp
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="taisun" tabindex="-1"><a class="header-anchor" href="#taisun" aria-hidden="true">#</a> taisun</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">taisun</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/taisun
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> taisun
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 4000<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">code-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> linuxserver/code<span class="token punctuation">-</span>server
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> code<span class="token punctuation">-</span>server
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8448<span class="token punctuation">:</span><span class="token number">8443</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>config/vscode<span class="token punctuation">:</span>/config
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/home/pi/docker
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
      <span class="token punctuation">-</span> PASSWORD=$PASSWORD$
      <span class="token punctuation">-</span> SUDO_PASSWORD=$PASSWORD$
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress" aria-hidden="true">#</a> wordpress</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> mariadb
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> root
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> $PASSWORD$
      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> wp
      <span class="token key atrule">PUID</span><span class="token punctuation">:</span> <span class="token number">1000</span>
      <span class="token key atrule">PGID</span><span class="token punctuation">:</span> <span class="token number">1000</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Europe/Madrid
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/wordpress<span class="token punctuation">:</span>/var/www/html
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8899<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">external_links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mariadb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="yayserver" tabindex="-1"><a class="header-anchor" href="#yayserver" aria-hidden="true">#</a> yayserver</h5><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">yayserver</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jaidis/php<span class="token punctuation">-</span>7.4.29<span class="token punctuation">-</span>apache2<span class="token punctuation">-</span>pdo<span class="token punctuation">-</span>mysqli<span class="token punctuation">:</span>bullseye<span class="token punctuation">-</span>arm64v8
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> yayserver
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/pi/docker<span class="token punctuation">-</span>data/yayserver<span class="token punctuation">:</span>/var/www/html
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1000
      <span class="token punctuation">-</span> PGID=1000
      <span class="token punctuation">-</span> TZ=Europe/Madrid
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8900<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">external_links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mariadb
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> linked

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">linked</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),i=[p];function l(c,u){return s(),a("div",null,i)}var d=n(t,[["render",l],["__file","DOCKER-COMPOSE.html.vue"]]);export{d as default};
