initType2()
function initType2() {
    // $.ajax({
    //     url:'http://api.kairy.net/v1/exam_data/report',
    //     method:'POST',
    //     data:{
    //         'student_id':2,
    //         'account_id':1
    //     },
    //     success: function(res) {
    //         console.log(res)
    //     }
    // })
    initHeader(type2Arr.data)
    initTsnpj(type2Arr.data.basic)
    initPh3(type2Arr.data.yidongxing,'ydx_wrap')
    initPh3(type2Arr.data.caozuoxing,'czx_wrap')
    initPh3(type2Arr.data.wendingxing,'wdx_wrap')
}

function initHeader(arr) {
    var _header = `
        <div class="banner_name">${arr.student_name}</div>
        <div class="bannerP banner_sex"><span>性别:</span>${arr.sex}</div>
        <div class="bannerP banner_age"><span>年龄:</span>${arr.age}</div>
        <div class="bannerP banner_height"><span>身高:</span>${arr.height}</div>
        <div class="bannerP banner_weight"><span>体重:</span>${arr.weight}</div>
        <div class="bannerP banner_BMI"><span>BMI:</span>${arr.bmi}<span class='BMIspan'>(肥胖)</span></div>
    `
    $('.banner_right').html(_header)
}

function initTsnpj(arr) {
    var _Tsnpj = ``
    arr.map((item) => {
        _Tsnpj += ph2_section_create(item)
    })
    $(".ph2_section_wrap").html(_Tsnpj)
}
function initPh3(arr,name){
    console.log(arr)
    var _Type2 = ``
    arr.map((item) => {
        _Type2 += ph3_section_create(item)
    })
    $("."+name).html(_Type2)
}
function ph2_section_create(item) {
    var type = null
    if(item.value<25){
        type = 1
    }else if(item.value>=25 && item.value<50){
        type = 2
    }else if(item.value>=50 && item.value<75){
        type = 3
    }else if(item.value>=75){
        type = 4
    }
    switch (type) {
        case 1:
            var _item = `
                <div class="ph2_section">
                    <div class="section_left">
                        <h2>${item.name}</h2>
                        <h3>${item.way}</h3>
                        <h4>${item.intro}</h4>
                    </div>
                    <div class="section_right">
                        <div class="sr_l_font">
                            <p class='sr_l_p_1'>单位/cm</p>
                            <p class='sr_l_p_2'>评价</p>
                        </div>
                        <div class="sr_r">
                            <div class="sr_bg">
                                <div class="sr_bg_font sr_bg_font_1">20</div>
                                <div class="sr_bg_font sr_bg_font_2">30</div>
                                <div class="sr_bg_font sr_bg_font_3">40</div>
                                <div class="sr_bg_tag sr_tag_1">
                                    ${item.value}
                                </div>
                            </div>
                            <div class="sr_bot_icons">
                                <img src="../img/ph_2/c_1.png" alt="">
                                <img src="../img/ph_2/g_1.png" alt="">
                                <img src="../img/ph_2/g_3.png" alt="">
                                <img src="../img/ph_2/g_4.png" alt="">
                            </div>
                            <div class="sr_P">
                                测量结果：${item.value}
                            </div>
                        </div>
                    </div>
                </div> 
            `
            break;
        case 2:
            var _item = `
                <div class="ph2_section">
                    <div class="section_left">
                        <h2>${item.name}</h2>
                        <h3>${item.way}</h3>
                        <h4>${item.intro}</h4>
                    </div>
                    <div class="section_right">
                        <div class="sr_l_font">
                            <p class='sr_l_p_1'>单位/cm</p>
                            <p class='sr_l_p_2'>评价</p>
                        </div>
                        <div class="sr_r">
                            <div class="sr_bg">
                                <div class="sr_bg_font sr_bg_font_1">20</div>
                                <div class="sr_bg_font sr_bg_font_2">30</div>
                                <div class="sr_bg_font sr_bg_font_3">40</div>
                                <div class="sr_bg_tag sr_tag_2">
                                    ${item.value}
                                </div>
                            </div>
                            <div class="sr_bot_icons">
                                <img src="../img/ph_2/g_1.png" alt="">
                                <img src="../img/ph_2/c_2.png" alt="">
                                <img src="../img/ph_2/g_3.png" alt="">
                                <img src="../img/ph_2/g_4.png" alt="">
                            </div>
                            <div class="sr_P">
                                测量结果：${item.value}
                            </div>
                        </div>
                    </div>
                </div> 
            `
            break;
            case 3:
                var _item = `
                    <div class="ph2_section">
                        <div class="section_left">
                            <h2>${item.name}</h2>
                            <h3>${item.way}</h3>
                            <h4>${item.intro}</h4>
                        </div>
                        <div class="section_right">
                            <div class="sr_l_font">
                                <p class='sr_l_p_1'>单位/cm</p>
                                <p class='sr_l_p_2'>评价</p>
                            </div>
                            <div class="sr_r">
                                <div class="sr_bg">
                                    <div class="sr_bg_font sr_bg_font_1">20</div>
                                    <div class="sr_bg_font sr_bg_font_2">30</div>
                                    <div class="sr_bg_font sr_bg_font_3">40</div>
                                    <div class="sr_bg_tag sr_tag_3">
                                        ${item.value}
                                    </div>
                                </div>
                                <div class="sr_bot_icons">
                                    <img src="../img/ph_2/g_1.png" alt="">
                                    <img src="../img/ph_2/g_1.png" alt="">
                                    <img src="../img/ph_2/c_3.png" alt="">
                                    <img src="../img/ph_2/g_4.png" alt="">
                                </div>
                                <div class="sr_P">
                                    测量结果：${item.value}
                                </div>
                            </div>
                        </div>
                    </div> 
                `
            break;
        case 4:
            var _item = `
                <div class="ph2_section">
                    <div class="section_left">
                        <h2>${item.name}</h2>
                        <h3>${item.way}</h3>
                        <h4>${item.intro}</h4>
                    </div>
                    <div class="section_right">
                        <div class="sr_l_font">
                            <p class='sr_l_p_1'>单位/cm</p>
                            <p class='sr_l_p_2'>评价</p>
                        </div>
                        <div class="sr_r">
                            <div class="sr_bg">
                                <div class="sr_bg_font sr_bg_font_1">20</div>
                                <div class="sr_bg_font sr_bg_font_2">30</div>
                                <div class="sr_bg_font sr_bg_font_3">40</div>
                                <div class="sr_bg_tag sr_tag_4">
                                    ${item.value}
                                </div>
                            </div>
                            <div class="sr_bot_icons">
                                <img src="../img/ph_2/g_1.png" alt="">
                                <img src="../img/ph_2/g_1.png" alt="">
                                <img src="../img/ph_2/g_3.png" alt="">
                                <img src="../img/ph_2/c_4.png" alt="">
                            </div>
                            <div class="sr_P">
                                测量结果：${item.value}
                            </div>
                        </div>
                    </div>
                </div> 
            `
            break;
    }

    return _item
}
function ph3_section_create(item){
    var _item = `
        <div class="common_pie">
            <div class="c_pie_top">
                <div class="c_pie_top_title">
                    ${item.name}
                </div>
                <div class="c_pie_num">
                    成熟度:<span>${item.value}</span>
                </div>
            </div>
            <div class="c_pie_font">
                ${item.intro}
            </div>
        </div>
    `
    return _item
}
