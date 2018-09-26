<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="img/png" href="img/FavIcon.png" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="font/fuentes.css">
  <link rel="stylesheet" href="css/master.css">
  <title>Vital Fertilizer</title>
</head>

<body class="bodycolor">
<?php require_once ('header.php'); ?>

  <div class="contmaster-contact center mfonts">
    <section class="contmaster-contact__section cont-form1">
      <form class="contmaster-contact__section__form"  method="post" action="send.php">
        <p class="c1">NAME:</p>
        <input type="text" name="name" value="" placeholder="Name" required>
        <p class="c1">E-MAIL:</p>
        <input type="email" name="email" value="" placeholder="E-mail" required>
        <p class="c1">MENSAJE:</p>
        <textarea name="message" rows="8" cols="80" placeholder="Message" required></textarea>
        <input type="submit" name="" value="SEND">
      </form>
    </section>
    <section class="cont-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5943.8422582608855!2d-97.87449591547059!3d22.32703435532882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1531788349033" width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
    </section>
    <div class="cont-wanttobecome">
      <h1>WANT TO BECOME A VITAL RETAILER?</h1>
    </div>

    <section class="contmaster-contact__section cont-form2">
      <form  class="contmaster-contact__section__form form2"  method="post" action="send.php">
        <div class="form2__div form2__div1">
          <p class="c1">COMPANY NAME:</p>
          <input type="text" name="name" value="" placeholder="Name" required>
          <p class="c1">CITY:</p>
          <input type="email" name="email" value="" placeholder="E-mail" required>
          <p class="c1">PHONE:</p>
          <input type="email" name="email" value="" placeholder="E-mail" required>
          <input type="submit" name="" value="SEND">
        </div>

        <div class="form2__div form2__div2">
          <p class="c1">MAILIG ADDRESS:</p>
          <input type="text" name="name" value="" placeholder="Name" required>
          <p class="c1">MAIN E-MAIL:</p>
          <input type="email" name="email" value="" placeholder="E-mail" required>
          <p class="c1">WEBSITES:</p>
          <input type="email" name="email" value="" placeholder="E-mail" required>

        </div>
      </form>
    </section>


    <section class="contmaster-contact__section__section cont-user1">
        <p class="c1">JOSÉ PLACENCIA</p>
        <p>Technical Manager Crop Nutrition</p>
        <p>jose@vitalfertilizers.com</p>
        <p>(956) 581-7961</p>
    </section>
    <section class="contmaster-contact__section__section cont-user2">
        <p class="c1">GERARDO GUTIÉRREZ</p>
        <p>CEO</p>
        <p>gerardo@vitalfertilizers.com</p>
        <p>(956) 605-0685</p>
    </section>
    <section class="contmaster-contact__section__section cont-user3">
      <p class="c1">LUZ MARIA MADRIGAL</p>
      <p>Office Administrator</p>
      <p>luzma@vitalfertilizer.com</p>
      <p>(956) 581-7961</p>
    </section>
    <section class="contmaster-contact__section__section cont-user4">
      <p class="c1">NAME</p>
    </section>
  </div>

<?php require_once ('footer.php'); ?>


<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="js/events.js"></script>
</body>
</html>
