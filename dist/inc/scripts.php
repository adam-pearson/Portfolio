<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>


<?php if (strpos($uri, "/index") !== false || $uri == "/" || $uri == "") { ?>

    <script src="/node_modules/typewriter-effect/dist/core.js"></script>
    <script src="dist/js/typewriter.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async=""></script>

<?php }elseif (strpos($uri, "/coding") !== false) { ?>

    <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
    <script src="dist/js/prism/prism.js"></script>
    <script src="dist/js/dataTable.js"></script>

<?php } ?>

<script src="dist/js/main.js"></script>

</body>
</html>