autor:  david garcia balarezo
email:  victordad0117@gmail.com
web:    http://keikenapps.web.app/


1. Login: con, Content-Type: application/x-www-form-urlencoded
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=1victordad0117%40gmail.com&pass=1234567890" http://localhost:8080/login

2.Registrar usuario:  con, Content-Type: application/x-www-form-urlencoded
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=4victordad0117%40gmail.com&pass=1234567890&username=2victordad0117&name=victor" http://localhost:8080/register

3. Empleados, registrar nuevo empleado: con, Content-Type: application/x-www-form-urlencoded
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "id=2&employee_name=Garrett+Winters&employee_salary=170750&employee_age=62&profile_image=none" http://localhost:8080/empleados


4. Todos los empleados:
 curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8080/empleados
