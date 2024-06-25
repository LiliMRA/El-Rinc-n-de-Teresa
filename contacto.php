<?php

#Enlazamos la base de datos
$servidor = "PMYSQL172.dns-servicio.com";
$bd = "10432118_resenas";
$usuario = "adminrincon";
$contrasenia = "Fvge08!43";

#Realizamos conexión y capturamos posibles errores
try {
    $conexion = new PDO("mysql:host=$servidor; dbname=$bd", $usuario, $contrasenia);
} catch (Exception $ex) {
    echo $ex->getMessage();
}
?>

<?php

#Preparamos el tratamiento de datos del formulario

if ($_POST) {

    # Recogemos los datos del $_POST
    $comentario = (isset($_POST["comentario"]) ? $_POST["comentario"] : "");
    $rate = (isset($_POST["rate"]) ? $_POST["rate"] : "");

    #Preparamos la inserción de los datos
    $sentencia = $conexion->prepare("INSERT INTO resenas (id, comentario, valoracion) VALUES
    (NULL, :comentario, :rate);");

    # Asignamos los valores del $_POST
    $sentencia->bindParam(":comentario", $comentario);
    $sentencia->bindParam(":rate", $rate);

    # Ejecutamos
    $sentencia->execute();
    header("Location:contacto.php");
}

#Mostramos todos los elementos de la tabla de la BBDD
$sentencia = $conexion->prepare("SELECT * FROM resenas");
$sentencia->execute();
$lista_comentarios = $sentencia->fetchAll(PDO::FETCH_ASSOC);
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="manualidades, decoración, organización, handmade">
    <meta name="keywords" content="cajas, manualidades, decoración, cajitas, organización">
    <title>El rincón de Teresa - Blog</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="responsive.css">
    <link rel="stylesheet" type="text/css" href="contacto.css">
    <link rel="icon" href="img/Logotipo3r.png">
</head>

<body>
    <main id="container">

        <!-- INCIO DE CABECERA -->
        <header id="header">
            <div class="wrap">
                <div id="logo">
                    <a href="index.html">
                        <img src="img/logotipo.png" alt="Logotipo">
                    </a>

                    <h1>El Rincón de Teresa</h1>
                </div>

                <!-- INICIO DE MENÚ -->
                <input type="checkbox" id="side-menu" class="side-menu">
                <label for="side-menu" id="side-menu" class="hamb"><span class="hamb-line"></span></label>

                <nav class="nav">
                    <ul id="menu" class="menu">
                        <li>
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="servicios.html">Servicios</a>
                        </li>
                        <li>
                            <a href="products.html">Productos</a>
                        </li>
                        <li>
                            <a href="contacto.php">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <!-- FIN DE MENÚ -->
            </div>

        </header>
        <!-- FIN DE CABECERA -->

        <!-- INICIO SECCIONES -->

        <!--Tarjeta de contacto-->
        <section id="contacto">
            <div id="contact">
                <h2>Contacto</h2>
                <br>
                <h3>Teléfono</h3>
                <p>696094667</p>
                <br>
                <h3>E-mail</h3>
                <p><a href="mailto:elcorreoquequieres@correo.com">info@rincondeteresa.com</a></p>
            </div>

            <!--Mapa-->
            <div id="map">
                <h2>Localización</h2>
                <br>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23262.290475521168!2d-8.709927994835276!3d43.213971179107304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e923fb1bed6f1%3A0x1a468acae59f61e6!2sCarballo%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1714381028989!5m2!1ses!2ses"
                    width="400px" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <p>Encuéntranos por la zona de Carballo, para más información ¡contacta con nosotros!</p>
            </div>

        </section>

        <!-- CAJÓN DE COMENTARIOS -->
        <section>
            <div id="caja">
                <table>
                    <!-- Cabecero de la tabla-->
                    <thead>
                        <tr>
                            <th>Comentario</th>
                            <th>Valoración</th>
                        </tr>
                    </thead>

                    <tbody>
                        <!-- Abrimos bucle para que se recorra la tabla de la base de datos y se muestre cada fila de los registros añadidos-->
                        <?php
                        foreach ($lista_comentarios as $registro) {
                            ?>
                            <tr>
                                <td> <?php echo $registro['comentario']; ?> </td>
                                <td> <?php echo $registro['valoracion']; ?> </td>
                            </tr>

                        <?php } ?>
                    </tbody>
                </table>
            </div>

            <!-- Botón para que se abra la ventana modal y permita comentar-->
            <div class="btnTabla">
                <button id="comentar" type="button" value="Comentar">
                    Comentar
                </button>
            </div>

            <!-- Ventana modal para añadir los comentarios -->
            <div id="modal_container" class="hidden">
                <div class="modal">
                    <form action="" method="post">

                        <h4>Comentario</h4>
                        <input type="text" name="comentario" id="comentario" placeholder="Escribe tu comentario">
                        <br>

                        <h4>Valoración</h4>
                        <div class="stars">
                            <input type="radio" name="rate" id="five" value="¡Me encanta!😍">
                            <label for="five"></label>

                            <input type="radio" name="rate" id="four" value="Me gusta😉">
                            <label for="four"></label>

                            <input type="radio" name="rate" id="three" value="No está mal😀">
                            <label for="three"></label>

                            <input type="radio" name="rate" id="two" value="Podría ser mejor...😕">
                            <label for="two"></label>

                            <input type="radio" name="rate" id="one" value="Pasando✋">
                            <label for="one"></label>

                            <span class="result"></span>
                        </div>



                        <button type="submit" id="añadir"> Añadir </button>

                        <button id="cancelar" class="close" type="button" value="Cancelar">Cancelar</button>

                    </form>

                </div>
            </div>

        </section>

        <!-- FIN CAJÓN DE COMENTARIOS -->

        <!-- FIN SECCIONES -->
    </main>

    <!-- INICIO FOOTER-->
    <footer>
        <div>
            <p> &copy TheLittleCode - El Rincón de Teresa</p>
        </div>

        <div class="icons">
            <a class="icon1" href="#"><img src="img/insta-removebg-preview.png"></a>

            <a class="icon3" href="#"><img src="img/tlf.png"></a>

            <a class="icon2" href="#"><img src="img/mensaje.png"></a>

        </div>
    </footer>
    <!-- FIN FOOTER-->

</body>
<script src="index.js"></script>

<script src="contacto.js"></script>

</html>