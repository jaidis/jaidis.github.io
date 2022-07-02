# Docker

## Instalar Docker

#### Raspberry PI

<details>
  <summary>Mostrar</summary>

>

_El primer paso es comprobar que no tenemos ningún paquete instalado desde los repos oficiales de debian_

```bash
 sudo apt-get remove docker docker-engine docker.io containerd runc -y
```

_Descargamos el script proporcionado por la propia Docker y lo ejecutamos para instalarlo_

```bash
sudo curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh
```

_Activamos el servicio de Docker_

```bash
sudo systemctl enable docker && sudo systemctl start docker
```

_Añadimos al usuario `pi` al grupo autorizado para ejecutar Docker_

```bash
sudo usermod -aG docker pi
```

**Si deseamos lo servicios de machine(opcional) y compose, es necesario descargar la [ultima versión disponible](https://github.com/docker/machine/releases/), en el caso de Raspberry, no hay release oficial de compose, pero [linuxsever](https://github.com/linuxserver/docker-docker-compose/releases) si proporciona versiones de 32 bits para Raspberry. Una vez descargados, los copiamos en la carpeta de ejecutables y cambiamos sus permisos para poder ejectutarlos**

```bash
sudo cp docker-machine /usr/local/bin/docker-machine && sudo chmod +x /usr/local/bin/docker-machine && sudo ln -s /usr/local/bin/docker-machine /usr/bin/docker-machine
```

```bash
sudo cp docker-compose /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose && sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

#### Compilar Compose

_Si deseamos compilar la versión de compose para Raspberry Pi,el primer paso es clonar el repo oficial y establecer la ultima rama estable_

```bash
git clone https://github.com/docker/compose.git
cd compose
git checkout 1.29.2
```

_Ejecutamos el script para compilar la verión de linux_

```bash
./script/build/linux
```

_Comprobamos en la carpeta `dist` que tenemos la build y comprobamos la versión compilada_

```bash
cd dist
./docker-compose-Linux-armv7l version
```

_Por ultimo, comprobamos las dependecias que incluye dicho ejecutable_

```bash
ldd docker-compose-Linux-armv7l
```

</details>

### Portainer

**[Portainer](https://www.portainer.io/) es una imagen de docker que nos ofrece una UI que podemos utilizar desde el navegador web**

_Creamos la primera vez un volume para que lo pueda utilizar el contenedor y posteriormente arrancamos la imagen de `portainer-ce`_

```bash
docker volume create portainer_data && docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

_Actualizar contenedor de `portainer-ce` en una sola línea (sin borrar el volume)_

```bash
docker container stop portainer && docker container rm -f portainer && docker image rm -f portainer/portainer-ce:latest && docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

_Borrar toda la información asociada a `portainer-ce`_

```bash
docker container stop portainer && docker container rm -f portainer && docker volume rm -f portainer_data && docker image rm -f portainer/portainer-ce:latest
```

### Tips

_Limpiar archivos no necesarios de anteriores contenedores. Nota: todos los contenedores han de estar activos, si están parados también borrara la información de dichos contenedores_

```bash
df -h && docker system prune --all --force && sudo find /var/lib/docker/containers/ -type f -name “\*.log” -delete && df -h && sudo shutdown -r now
```

## Links

- [Communicate outside the container ](https://www.balena.io/docs/learn/develop/runtime/)
- [Connect to MySQL running in Docker container from a local machine](https://towardsdatascience.com/6d996c574e55)
- [docker-compose 中的 external-links ](https://beixiu.net/dev/docker-compose-external-links)
- [Docker Compose file versions and upgrading ](https://docs.docker.com/compose/compose-file/compose-versioning/)
- [The definitive Guide to Docker compose](https://gabrieltanner.org/blog/docker-compose)
