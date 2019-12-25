#postgres create db 
1. create user nadi with password 'pwd';
2. drop database historical; 
3. create database historical; 
4. grant all privileges on database historical to nadi;
5. cd server
6. npx sequelize-cli db:migrate