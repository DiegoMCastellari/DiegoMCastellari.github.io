var slidesList = [
    {
        "id": 'geomatics1',
        "img": "geomatics1",
        "subject": "geomatics",
        "slide": '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS7Pf2n7iUyLbc5YQMne8s9yfGeiXGYVfuIq4p06PswFkwi9GkDSarlCbpo8Qvj1ju-lP9xNOt72jz_/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1080" height="1109" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
        'categories': 'slideGeoscience',
        "subcategory": ['geomatics']
    },
    {
        "id": 'geomatics2',
        "img": "geomatics2",
        "subject": "geomatics",
        "slide": '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS5A0D0BJ9eBQranJBtwtwn8w5iFziNHpA4DEmsYxlwYWDxZNfmaK3ssFLhfli6MfOWylejCV1rU1l4/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1080" height="1080" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
        'categories': 'slideGeoscience',
        "subcategory": ['geomatics']
    },
    {
        "id": 'geodesy',
        "img": "geodesy",
        "subject": "geodesy",
        "slide": '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSPLvWxHDv1RADM8nuA__D6rZNtYG0kqh7sj5yGBXxh6B_7mAZET3-QBU5Wnd55RWeHu5scJ1d3qk6k/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1080" height="1109" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
        'categories': 'slideGeoscience',
        "subcategory": ['geodesy']
    },
    {
        "id": 'leaflet',
        "img": "leaflet",
        "subject": "webtlibraries",
        "slide": '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQWfpDWDw8H9SB2Lvtrh0hft9a4pI_42yVuNi2KpamFlrxKTFbfDFhvD96ujhPuISro0n9OlEp8bDEv/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1080" height="1109" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
        'categories': 'slideTools',
        "subcategory": ['javascript', 'map']
    }
]

var slidesListSubcategories = []
for ( let i=0; i<slidesList.length; i++){
    for (let s=0; s<slidesList[i].subcategory.length; s++) {
        let subcategory = slidesList[i].subcategory[s]
        if( !slidesListSubcategories.includes(subcategory) ){
            slidesListSubcategories.push(subcategory)
        }
    }
}