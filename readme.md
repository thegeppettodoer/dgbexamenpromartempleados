autor:  david garcia balarezo   </br>
email:  victordad0117@gmail.com   </br>
web:    http://keikenapps.web.app/    </br>
github: https://github.com/thegeppettodoer/dgbexamenpromartempleados   </br>
docket hub: https://hub.docker.com/r/victordad0117/nodepromartdgbempleadosdocker  </br>

</hr>
<h2>Pasos</h2></br>
<li>1. Login:</li> 
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=1victordad0117%40gmail.com&pass=1234567890" http://localhost:8080/login

<li>2.Registrar usuario:</li>  
curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "email=4victordad0117%40gmail.com&pass=1234567890&username=2victordad0117&name=victor" http://localhost:8080/register

<li>3. Empleados registrar nuevo empleado:  </li>

curl -i -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "id=2&employee_name=Garrett+Winters&employee_salary=170750&employee_age=62&profile_image=none" http://localhost:4000/empleados


<li>4. Ver todos los empleados registrado:</li>
 curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:8080/empleados




<h2>Docker:</h2></br>
</hr>

<li>0. Build: </li>
docker build -t nodepromartdgbempleadosdocker .


<li>1. Ejecutar imagen</li>
docker run -it -p 4000:8080 nodepromartdgbempleadosdocker 


<li>2. Ejecutar </li>
docker run -d -p 4000:8080 victordad0117/nodepromartdgbempleadosdocker


<li>3. Detener obtener id de docker images</li>
docker stop <id3>


<li>4. rename docker images, para poder hacer el push</li>
docker tag 6fb6d145825a victordad0117/nodepromartdgbempleadosdocker:latest


<li>5. Subiendo a docker hub: docker login -u victordad0117</li>
sudo docker push victordad0117/nodepromartdgbempleadosdocker





<h2>Aplicacion consola:</h2></br>
</hr>
<li>1.  Ejecutar:</li>
node appconsole

<li>2. Para copiar los datos del empleado jalado de http://dummy.restapiexample.com/api/v1/employees , debemos Ingresar el ID del empleado, y se copiara en la base de datos firebase realtime de google.</li>
</br>
[Para salir presione en miniscula: "q"]</br>
[Para ver todos los empleado,escribir en miniscula: "ver"]</br>
Ingresar Id de empleado:5</br>
Datos del empleado con id: 5</br>
 
Agregando empleado: Airi Satou {</br>
  status: 200,</br>
  message: 'hello...post empleados email,password> {"error":0,"id":"5","employee_name":"Airi Satou","username":null}'</br>
}</br>
</br>




 
