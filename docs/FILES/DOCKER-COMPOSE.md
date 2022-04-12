# Docker Compose

##### Limpiar archivos no necesarios de anteriores contenedores. Nota: todos los contenedores han de estar activos, si están parados también borrara la información de dichos contenedores

```bash
df -h && docker system prune --all --force && sudo find /var/lib/docker/containers/ -type f -name “\*.log” -delete && df -h && sudo shutdown -r now
```

## Portainer

**[Portainer](https://www.portainer.io/) es una imagen de docker que nos ofrece una UI que podemos utilizar desde el navegador web**

##### Creamos la primera vez un volume para que lo pueda utilizar el contenedor y posteriormente arrancamos la imagen de `portainer-ce`

```bash
docker volume create portainer_data && docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

##### Actualizar contenedor de `portainer-ce` en una sola línea (sin borrar el volume)

```bash
docker container stop portainer && docker container rm -f portainer && docker image rm -f portainer/portainer-ce:latest && docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

##### Borrar toda la información asociada a `portainer-ce`

```bash
docker container stop portainer && docker container rm -f portainer && docker volume rm -f portainer_data && docker image rm -f portainer/portainer-ce:latest
```

## Contenedores creados con docker-compose (la mayoría en la Raspberry)

##### Jellyfin

```yaml
---
version: "2.1"
services:
  jellyfin:
    image: linuxserver/jellyfin:arm32v7-bionic
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
      - /opt/vc/lib:/opt/vc/lib
    ports:
      - 8096:8096
      - 8920:8920
    #devices:
    #  - /dev/vcsm:/dev/vcsm
    restart: unless-stopped
```

##### File Browser

```yaml
---
version: "2.1"
services:
  dashmachine:
    image: filebrowser/filebrowser:v2.16.0-armv7
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
