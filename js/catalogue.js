$(document).ready(function() {
    fetch('catalogue.json')
        .then(function(response) { return response.json(); })
        .then(function(data) {
            var table = $('#dataTable').DataTable({
                data: data,
                columns: [
                    { data: 'frb' },
                    { data: 'utc' },
                    { data: 'mjd' },
                    { data: 'telescope' },
                    { data: 'ra' },
                    { data: 'ra_error' },
                    { data: 'dec' },
                    { data: 'dec_error' },
                    { data: 'l' },
                    { data: 'b' },
                    { data: 'frequency' },
                    { data: 'dm' },
                    { data: 'dm_error' },
                    { data: 'redshift' },
                    { data: 'redshift_measured' },
                    { data: 'flux' },
                    { data: 'width' },
                    { data: 'fluence' },
                    { data: 'snr' },
                    { data: 'ref', render: function(data){
                        return '<center><a href="'+data+'" target="_blank" title="Verified" class="btn btn-secondary btn-circle btn-sm"><i class="fas fa-scroll"></i></a></center>';
                    }}
                ],
                columnDefs: [
                    { visible: false, targets: [1,2,5,7,8,9,10,12,13,14,16,17,18] }
                ]
            });

            $('a.toggle-vis').on('click', function(e) {
                e.preventDefault();
                var column = table.column($(this).attr('data-column'));
                column.visible(!column.visible());
            });
        });
});
