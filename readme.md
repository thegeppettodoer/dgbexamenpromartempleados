autor:  david garcia balarezo   </br>
email:  victordad0117@gmail.com   </br>
web:    http://keikenapps.web.app/    </br>
github: https://github.com/thegeppettodoer/dgbexamenpromartempleados   </br>
docket hub: https://hub.docker.com/r/victordad0117/nodepromartdgbempleadosdocker  </br>



1. Login: con, Content-Type: application/x-www-form-urlencoded
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=1victordad0117%40gmail.com&pass=1234567890" http://localhost:8080/login

2.Registrar usuario:  con, Content-Type: application/x-www-form-urlencoded
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=4victordad0117%40gmail.com&pass=1234567890&username=2victordad0117&name=victor" http://localhost:8080/register

3. Empleados, registrar nuevo empleado: con, Content-Type: application/x-www-form-urlencoded
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "id=2&employee_name=Garrett+Winters&employee_salary=170750&employee_age=62&profile_image=none" http://localhost:4000/empleados


4. Todos los empleados:
 curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8080/empleados




Docker:
0. Build: 
docker build -t nodepromartdgbempleadosdocker .


1. Ejecutar imagen
docker run -it -p 4000:8080 nodepromartdgbempleadosdocker 


2. Ejecutar ps
docker run -d -p 4000:8080 nodepromartdgbempleadosdocker


3. Detener obtener id de docker images
docker stop <id3>


4. rename docker images, para poder hacer el push
docker tag 6fb6d145825a victordad0117/nodepromartdgbempleadosdocker:latest


5. Subiendo a docker hub: docker login -u victordad0117
sudo docker push victordad0117/nodepromartdgbempleadosdocker

