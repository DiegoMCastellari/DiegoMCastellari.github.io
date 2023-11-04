var div_info = document.getElementById('rasterian_sidebar')

text_html = '<a href="./main.html" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"> <img src="../../src/image/icon/rasterian.png" alt="" class="bd-placeholder-img rounded-circle" width="50" height="50"></svg> <span class="fs-5 fw-semibold">Rasterian</span> </a> <ul class="list-unstyled ps-0"></ul>'

var sidebar_sections = Object.keys(rasterian_sidebar)
for (var i = 0; i < sidebar_sections.length; i++){
    var i_key = sidebar_sections[i]

    if (rasterian_sidebar[i_key] == 'bar'){
        text_html +='<div class="border-top my-4"></div>' 
    } else {
        text_html += '<span class="fs-5 fw-semibold" style="color:white">'+ i_key +'</span>'

        var dropdown_keys = Object.keys(rasterian_sidebar[i_key])
        for (var d = 0; d < dropdown_keys.length; d++){
            var d_key = dropdown_keys[d]
            text_html += '<div class="mb-1">'
            text_html += '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#'+ d_key +'-collapse" aria-expanded="false" style="color:lightgrey">'+ d_key +'</button>'

            text_html += '<div class="collapse" id="'+ d_key +'-collapse">'
            text_html += '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'

            for (var c = 0; c < rasterian_sidebar[i_key][d_key].length; c++){
                var item_list = rasterian_sidebar[i_key][d_key][c]
                text_html += '<div><a href="./'+item_list[1]+'" class="link-body-emphasis d-inline-flex text-decoration-none rounded">'+ item_list[0] +'</a></div>'
            }
            text_html +='</ul></div></div>'
        }
    }
}

div_info.innerHTML = text_html