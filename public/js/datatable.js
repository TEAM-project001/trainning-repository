var data = [
    {
        "name": "Tiger Nixon",
        "position": "System Architect",
        "salary": "$3,120",
        "start_date": "2011/04/25",
        "office": "Edinburgh",
        "extn": "5421"
    },
    {
        "name": "Garrett Winters",
        "position": "Director",
        "salary": "$5,300",
        "start_date": "2011/07/25",
        "office": "Edinburgh",
        "extn": "8422"
    }
]

$('#example').DataTable({
    data: data,
    columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'start_date' },
        { data: 'office' },
        { data: 'extn' }
    ]
});