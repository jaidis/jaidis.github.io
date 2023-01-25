# Docker Compose

## Container templates (almost all raspberry compatible)

##### Adguard

```yaml
---
version: "3.0"
services:
  adguardhome:
    image: adguard/adguardhome:armhf-latest
    container_name: adguardhome
    network_mode: bridge
    ports:
      - 53:53/tcp
      - 53:53/udp
      - 67:67/tcp
      - 67:67/udp
      - 853:853/tcp
      - 3000:3000/tcp
    volumes:
      - /home/pi/docker-config/adguardhome:/opt/adguardhome/conf
      - /home/pi/docker-data/adguardhome:/opt/adguardhome/work
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    restart: unless-stopped
```

##### dashmachine

```yaml
---
version: "3.0"
services:
  adguardhome:
    image: adguard/adguardhome:armhf-latest
    container_name: adguardhome
    network_mode: bridge
    ports:
      - 53:53/tcp
      - 53:53/udp
      - 67:67/tcp
      - 67:67/udp
      - 853:853/tcp
      - 3000:3000/tcp
    volumes:
      - /home/pi/docker-config/adguardhome:/opt/adguardhome/conf
      - /home/pi/docker-data/adguardhome:/opt/adguardhome/work
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    restart: unless-stopped
```

##### deemix

```yaml
---
version: "3.0"
services:
  adguardhome:
    image: registry.gitlab.com/bockiii/deemix-docker
    container_name: deemix
    network_mode: bridge
    ports:
      - 6595:6595/tcp
    volumes:
      - /home/pi/docker-config/deemix:/config
      - /home/pi/docker-data/deemix:/downloads
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - UMASK_SET=022
      - ARL=29c8ccd9c159a446d3715261fec17fd2c5cb63946342a678aa788023940ff9d2fc7e82ec55f176e60a5545bc997b712663e7e19a8f410d2e7fa282e67ced66ffb669d3bdc66bcae9cd457d3071a47aca9a79f35075808c9416669cc9ff71132e #Put your ARL cookie code here
    restart: unless-stopped
```

##### dillinger

```yaml
---
version: "3.0"
services:
  dillinger:
    image: linuxserver/dillinger:arm32v7-latest
    container_name: dillinger
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    volumes:
      - /home/pi/docker-config/dillinger:/config
    ports:
      - 8080:8080
    restart: unless-stopped
```

##### FileBrowser

```yaml
---
version: "3.0"
services:
  filebrowser:
    # image: filebrowser/filebrowser:v2.21.1-armv7
    image: filebrowser/filebrowser:v2.21.1-arm64
    container_name: filebrowser
    volumes:
      - /home/pi/docker-config/filebrowser/database.db:/database.db
      - /home/pi:/srv
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    ports:
      - 8888:80
    restart: unless-stopped
```

##### gitea

```yaml
---
version: "3.0"
services:
  codimd:
    image: kunde21/gitea-arm:v1.14.2-armv7
    container_name: gitea
    environment:
      - TZ=Europe/Madrid
      - PUID=1000
      - PGID=1000
    volumes:
      - /home/pi/docker-config/gitea:/data
    ports:
      - 3333:3000
      - 3334:22
    restart: unless-stopped
```

##### heimdall

```yaml
---
version: "3.0"
services:
  heimdall:
    image: linuxserver/heimdall
    container_name: heimdall
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    volumes:
      - /home/pi/docker-config/heimdall:/config
    ports:
      - 5005:80
    restart: unless-stopped
```

##### Jellyfin

```yaml
---
version: "3.0"
services:
  jellyfin:
    # image: linuxserver/jellyfin:arm32v7-bionic-10.6.4-1-ls3
    # image: linuxserver/jellyfin:arm32v7-bionic
    # image: ghcr.io/linuxserver/jellyfin:arm32v7-latest
    image: ghcr.io/linuxserver/jellyfin:arm64v8-latest
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      #- UMASK_SET=022 #optional
      - UMASK=022 #optional
    volumes:
      - /home/pi/docker-config/jellyfin:/config
      - /home/pi/docker-data/music/Classical:/data/classical
      - /home/pi/docker-data/music/Chillout:/data/chillout
      - /home/pi/docker-data/music/Electronic:/data/electronic
      - /home/pi/docker-data/music/Funk:/data/funk
      - /home/pi/docker-data/music/HipHop:/data/hiphop
      - /home/pi/docker-data/music/Jazz:/data/jazz
      - /home/pi/docker-data/music/Others:/data/others
      - /home/pi/docker-data/music/Pop:/data/pop
      - /home/pi/docker-data/music/Reggae:/data/reggae
      - /home/pi/docker-data/music/Rock:/data/rock
      - /home/pi/docker-data/music/Soul:/data/soul
      - /home/pi/docker-data/music/Spanish:/data/spanish
      - /home/pi/docker-data/music/Swing:/data/swing
      # - /home/pi/docker-data/music/Playlists:/data/playlists
      - /opt/vc/lib:/opt/vc/lib
    ports:
      - 8096:8096
      - 8920:8920
    #devices:
    #  - /dev/vcsm:/dev/vcsm
    restart: unless-stopped
```

##### jsondiff

```yaml
---
version: "3.0"
services:
  adguardhome:
    image: jaidis/jsondiff-arm
    container_name: jsondiff
    network_mode: bridge
    ports:
      - 8890:80/tcp
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    restart: unless-stopped
```

##### lidarr

```yaml
---
version: "3.0"
services:
  lidarr:
    image: ghcr.io/linuxserver/lidarr:arm32v7-latest
    container_name: lidarr
    ports:
      - 8686:8686
    volumes:
      - /home/pi/docker-config/lidarr:/config
      - /home/pi/docker-data/lidarr:/music #optional
      - /home/pi/docker-data/lidarr:/downloads #optional
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - UMASK=000 #optional
    restart: unless-stopped
```

##### mariadb

```yaml
---
version: "3.0"
services:
  mariadb:
    image: linuxserver/mariadb
    container_name: mariadb
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - MYSQL_ROOT_PASSWORD=$PASSWORD$
      - MYSQL_USER=pi
      - MYSQL_PASSWORD=$PASSWORD$
    volumes:
      - /home/pi/docker-config/mariadb:/config
    ports:
      - 3306:3306
    restart: unless-stopped
```

##### netdata

```yaml
---
version: "3.0"
services:
  netdata:
    image: netdata/netdata
    container_name: netdata
    ports:
      - 9001:19999
    cap_add:
      - SYS_PTRACE
    security_opt:
      - apparmor:unconfined
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
    restart: unless-stopped
```

##### phpmyadmin

```yaml
---
version: "3.0"
services:
  phpmyadmin:
    image: biarms/phpmyadmin
    container_name: phpmyadmin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - PMA_ARBITRARY=1
      - PMA_HOST=mariadb
    volumes:
      - /home/pi/docker-config/phpmyadmin:/sessions
    ports:
      - 8081:80
    #restart: always
    restart: unless-stopped
    external_links:
      - mariadb
```

##### qbittorrent

```yaml
---
version: "3.0"
services:
  qbittorrent:
    # image: linuxserver/qbittorrent:arm32v7-latest
    image: ghcr.io/linuxserver/qbittorrent:arm32v7-latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      #- UMASK_SET=022
      - WEBUI_PORT=8112
    volumes:
      - /home/pi/docker-config/qbittorrent:/config
      - /home/pi/docker-data/qbittorrent:/downloads
    ports:
      - 6881:6881
      - 6881:6881/udp
      - 8112:8112
    restart: unless-stopped
```

##### stackedit

```yaml
version: "3.0"
services:
  stackedit:
    image: jaidis/stackedit-arm
    container_name: stackedit
    environment:
      - LISTENING_PORT=8008
      - ROOT_URL=/
      - NODE_ENV=production
      - USER_BUCKET_NAME=stackedit-users
      - PAYPAL_RECEIVER_EMAIL=
      - DROPBOX_APP_KEY=
      - DROPBOX_APP_KEY_FULL=
      - GITHUB_CLIENT_ID=
      - GITHUB_CLIENT_SECRET=
      - GOOGLE_CLIENT_ID=
      - GOOGLE_API_KEY=
      - WORDPRESS_CLIENT_ID=
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    ports:
      - 8008:8008/tcp
    network_mode: bridge
    restart: unless-stopped
```

##### taisun

```yaml
---
version: "3.0"
services:
  taisun:
    image: linuxserver/taisun
    container_name: taisun
    network_mode: bridge
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - 4000:3000
    restart: unless-stopped
```

##### vscode

```yaml
---
version: "3.0"
services:
  code-server:
    image: lscr.io/linuxserver/code-server:latest
    container_name: code-server
    ports:
      - 8448:8443
    volumes:
      - /home/pi/docker-config/vscode:/config
      - /home/pi/docker-data:/home/pi/docker
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - PASSWORD=$PASSWORD$
      - SUDO_PASSWORD=$PASSWORD$
    restart: unless-stopped
```

##### wordpress

```yaml
---
version: "3.0"
services:
  wordpress:
    image: wordpress:latest
    container_name: wordpress
    environment:
      WORDPRESS_DB_HOST: mariadb
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: $PASSWORD$
      WORDPRESS_DB_NAME: wp
      PUID: 1000
      PGID: 1000
      TZ: Europe/Madrid
    volumes:
      - /home/pi/docker-data/wordpress:/var/www/html
    ports:
      - 8899:80
    restart: unless-stopped
    external_links:
      - mariadb
```

##### yayserver

```yaml
---
version: "3.0"
services:
  yayserver:
    image: jaidis/php-7.4.29-apache2-pdo-mysqli:bullseye-arm64v8
    container_name: yayserver
    volumes:
      - /home/pi/docker-data/yayserver:/var/www/html
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    ports:
      - 8900:80
    restart: unless-stopped
    external_links:
      - mariadb
    networks:
      - linked

networks:
  linked:
    external: true
```
