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

## Links

- [Communicate outside the container ](https://www.balena.io/docs/learn/develop/runtime/)
- [Connect to MySQL running in Docker container from a local machine](https://towardsdatascience.com/6d996c574e55)
- [docker-compose 中的 external-links ](https://beixiu.net/dev/docker-compose-external-links)
- [Docker Compose file versions and upgrading ](https://docs.docker.com/compose/compose-file/compose-versioning/)
- [The definitive Guide to Docker compose](https://gabrieltanner.org/blog/docker-compose)
