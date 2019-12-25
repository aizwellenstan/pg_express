#postgres create db 
create user nadi with password 'pwd';
drop database historical; 
create database historical; 
grant all privileges on database historical to nadi;
cd server
npx sequelize-cli db:migrate