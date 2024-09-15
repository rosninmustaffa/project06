# project06
Simple docker compose project written in js <br/> 

**project06/**<br/>
├── *backend/*<br/>
│   ├── Dockerfile <br/>
│   ├── package.json <br/>
│   ├── server.js <br/>
├── *frontend/*<br/>
│   ├── Dockerfile <br/>
│   ├── index.html <br/>
│   ├── success.html <br/>
│   ├── failure.html <br/>
│   ├── styles.css <br/>
│   ├── script.js <br/>
├── *db/*<br/>
│   ├── Dockerfile <br/>
│   └── init.sql <br/>
├── *phpmyadmin/*<br/>
│   └── Dockerfile <br/>
├── docker-compose.yml <br/>

> [!TIP]
**Usage**:
```
$ git clone https://github.com/rosninmustaffa/project06.git 
$ cd project06
$ docker-compose up -d
```

**Containers:** <br/>
Login page http://<host-ip> <br/>
phpMyAdmin (database management) http://<host-ip>:8082 <br/>
