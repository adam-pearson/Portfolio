<?php

$uri = $_SERVER['REQUEST_URI'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adam Pearson - Portfolio</title>
    <link type="text/css" rel="shorcut icon" href="dist/assets/img/favicon.ico">
    <link type="text/css" rel="stylesheet" href="dist/css/normalize.css">

    <!-- Conditionals to serve different stylesheets -->

    <?php if (strpos($uri, "/index") !== false || $uri == "/" || $uri == "") { ?>

        <link type="text/css" rel="stylesheet" href="dist/css/styles.css">

    <?php } elseif (strpos($uri, "/about") !== false) { ?>

        <link type="text/css" rel="stylesheet" href="dist/css/about.css">

    <?php } elseif (strpos($uri, "/coding") !== false) {?>

        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="dist/js/prism/prism.css">
        <link type="text/css" rel="stylesheet" href="dist/css/coding.css">

    <?php } elseif (strpos($uri, "/scion") !== false) { ?>

        <link type="text/css" rel="stylesheet" href="dist/css/scion.css">

    <?php } ?>
    

    <link type="text/css" rel="stylesheet" href="https://use.typekit.net/idk1wud.css">
    <script src="https://kit.fontawesome.com/9d6ccdf40f.js" crossorigin="anonymous"></script>
</head>

<body>