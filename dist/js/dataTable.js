"use strict";

$(document).ready(function () {
  $('#sql-table').DataTable({
    paging: false,
    ordering: false,
    searching: false,
    autoWidth: true,
    info: false
  });
});