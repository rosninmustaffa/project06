# project06
Simple docker compose project written in js <br/> 

**project06/ **<br/>
├── *backend/ *<br/>
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
├── *frontend/ *<br/>
│   ├── Dockerfile
│   ├── index.html
│   ├── success.html
│   ├── failure.html
│   ├── styles.css
│   ├── script.js
├── *db/ *<br/>
│   ├── Dockerfile
│   └── init.sql
├── *phpmyadmin/ *<br/>
│   └── Dockerfile
├── docker-compose.yml <br/>

> [!TIP]
**Usage**:
```
$ git clone https://github.com/rosninmustaffa/project06.git 
$ cd project06
$ docker-compose up -d
```

**Containers:**
Login page http://<host-ip>
phpMyAdmin (database management) http://<host-ip>:8082
