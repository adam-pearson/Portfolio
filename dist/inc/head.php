<?php

$uri = $_SERVER['REQUEST_URI'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Conditionals to serve different stylesheets -->

    <link type="text/css" rel="stylesheet" href="dist/css/normalize.css">

    <?php if (strpos($uri, "/index") !== false || $uri == "/" || $uri == "") { ?>
    
        <title>Adam Pearson - Portfolio</title>
        
        <meta name="image" property='og:image' content='/dist/assets/img/imgmeta.jpg'/>
        <meta property='og:title' content='Adam Pearson - Portfolio'/>
        <meta property='og:description' content="Adam Pearson's Web Development Portfolio - this is where I post my best front-end, back-end, and full-stack projects, and also where you can get in touch with me!"/>
        <meta property='og:url' content='https://adampearson.design'/>
        <meta name="twitter:card" content="dist/assets/img/imgmeta.jpg">


        <link type="text/css" rel="stylesheet" href="dist/css/styles.css">

    <?php } elseif (strpos($uri, "/about") !== false) { ?>
    
        <title>Adam Pearson - About Me</title>
        
        <meta name="image" property='og:image' content='/dist/assets/img/imgmeta.jpg'/>
        <meta property='og:title' content='Adam Pearson - Portfolio'/>
        <meta property='og:description' content="Adam Pearson's Web Development Portfolio - this is where I post my best front-end, back-end, and full-stack projects, and also where you can get in touch with me!"/>
        <meta property='og:url' content='https://adampearson.design'/>
        <meta name="twitter:card" content="dist/assets/img/imgmeta.jpg">

        <link type="text/css" rel="stylesheet" href="dist/css/about.css">

    <?php } elseif (strpos($uri, "/coding") !== false) {?>
    
    
        <title>Adam Pearson - Coding Examples</title>
        
        <meta name="image" property='og:image' content='/dist/assets/img/imgmeta.jpg'/>
        <meta property='og:title' content='Adam Pearson - Portfolio'/>
        <meta property='og:description' content="Adam Pearson's Web Development Portfolio - this is where I post my best front-end, back-end, and full-stack projects, and also where you can get in touch with me!"/>
        <meta property='og:url' content='https://adampearson.design'/>
        <meta name="twitter:card" content="dist/assets/img/imgmeta.jpg">

        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="dist/js/prism/prism.css">
        <link type="text/css" rel="stylesheet" href="dist/css/coding.css">

    <?php } elseif (strpos($uri, "/scion") !== false) { ?>
    
        <title>Adam Pearson - Scion Coalition Scheme</title>
        
        <meta name="image" property='og:image' content='/dist/assets/img/imgmeta.jpg'/>
        <meta property='og:title' content='Adam Pearson - Portfolio'/>
        <meta property='og:description' content="Adam Pearson's Web Development Portfolio - this is where I post my best front-end, back-end, and full-stack projects, and also where you can get in touch with me!"/>
        <meta property='og:url' content='https://adampearson.design'/>
        <meta name="twitter:card" content="dist/assets/img/imgmeta.jpg">

        <link type="text/css" rel="stylesheet" href="dist/css/scion.css">

    <?php } ?>
    
    <link type="text/css" rel="shorcut icon" href="dist/assets/img/favicon.ico">
    
    <link type="text/css" rel="stylesheet" href="https://use.typekit.net/idk1wud.css">
    <script src="https://kit.fontawesome.com/9d6ccdf40f.js" crossorigin="anonymous"></script>
</head>

<body>