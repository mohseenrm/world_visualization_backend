/**
 * Created by Nagarchith Balaji on 4/1/2017.
 */

var obj = new Object();
obj.year = 1970;
obj.filter = "FSI";

var obj1 = new Object();
obj1.year = 1970;
obj1.filter = "FSI"
obj1.countrycode = "US";

var c_id,
    c_val;
var country_id;
var countries = [];

var graph2 = {
    countrycode: 'US',
    year: 2000,
    filter: 'POP'
}

var country_list={"GE":"Georgia","KN":"St. Kitts and Nevis","PT":"Portugal","MT":"Malta","CZ":"Czech Republic","GQ":"Equatorial Guinea",
                  "FI":"Finland","GD":"Grenada","RS":"Serbia","BE":"Belgium","GR":"Greece","DE":"Germany","AT":"Austria","PL":"Poland",
                  "HU":"Hungary","BB":"Barbados","GB":"United Kingdom","SK":"Slovak Republic","LU":"Luxembourg","IS":"Iceland","UY":"Uruguay",
                  "IT":"Italy","HR":"Croatia","RU":"Russian Federation","AW":"Aruba","MC":"Monaco","SI":"Slovenia","BG":"Bulgaria","LV":"Latvia",
                  "CH":"Switzerland","UA":"Ukraine","NO":"Norway","DK":"Denmark","FR":"France","IE":"Ireland","TT":"Trinidad and Tobago",
                  "ME":"Montenegro","SE":"Sweden","LT":"Lithuania","VC":"St. Vincent and the Grenadines","TC":"Turks and Caicos Islands",
                  "EE":"Estonia","ES":"Spain","JP":"Japan","GY":"Guyana","TV":"Tuvalu","BA":"Bosnia and Herzegovina","US":"United States",
                  "S3":"Caribbean small states","SR":"Suriname","RO":"Romania","DM":"Dominica","CY":"Cyprus","NL":"Netherlands","PR":"Puerto Rico",
                  "JM":"Jamaica","GN":"Guinea","MK":"Macedonia, FYR","NZ":"New Zealand","LC":"St. Lucia","MD":"Moldova","CA":"Canada","ML":"Mali",
                  "AR":"Argentina","SG":"Singapore","KZ":"Kazakhstan","AG":"Antigua and Barbuda","SL":"Sierra Leone","MU":"Mauritius",
                  "KH":"Cambodia","BF":"Burkina Faso","SO":"Somalia","CU":"Cuba","TO":"Tonga","YE":"Yemen, Rep.","GW":"Guinea-Bissau",
                  "BM":"Bermuda","HT":"Haiti","BI":"Burundi","TN":"Tunisia","CL":"Chile","AU":"Australia","AO":"Angola","CV":"Cabo Verde",
                  "NP":"Nepal","CF":"Central African Republic","LS":"Lesotho","GA":"Gabon","LB":"Lebanon","BO":"Bolivia","1W":"World","TD":"Chad",
                  "FJ":"Fiji","LK":"Sri Lanka","BJ":"Benin","KM":"Comoros","ZA":"South Africa","KR":"Korea, Rep.","AZ":"Azerbaijan","IN":"India",
                  "MA":"Morocco","TL":"Timor-Leste","MZ":"Mozambique","KG":"Kyrgyz Republic","EG":"Egypt, Arab Rep.","VN":"Vietnam","NG":"Nigeria",
                  "SS":"South Sudan","SC":"Seychelles","TR":"Turkey","GH":"Ghana","LI":"Liechtenstein","BZ":"Belize","HK":"Hong Kong SAR, China",
                  "MM":"Myanmar","AF":"Afghanistan","MY":"Malaysia","AM":"Armenia","PY":"Paraguay","BR":"Brazil","BD":"Bangladesh","CM":"Cameroon",
                  "AL":"Albania","LA":"Lao PDR","LR":"Liberia","GM":"Gambia, The","CO":"Colombia","MW":"Malawi","ER":"Eritrea",
                  "PG":"Papua New Guinea","SV":"El Salvador","IR":"Iran, Islamic Rep.","ID":"Indonesia","HN":"Honduras","PK":"Pakistan",
                  "MG":"Madagascar","ET":"Ethiopia","PE":"Peru","MV":"Maldives","NE":"Niger","SZ":"Swaziland","CN":"China","CR":"Costa Rica",
                  "GT":"Guatemala","CD":"Congo, Dem. Rep.","DZ":"Algeria","PA":"Panama","DO":"Dominican Republic","TM":"Turkmenistan",
                  "PH":"Philippines","EC":"Ecuador","MN":"Mongolia","VU":"Vanuatu","TH":"Thailand","MR":"Mauritania","CG":"Congo, Rep.",
                  "SN":"Senegal","UG":"Uganda","NI":"Nicaragua","BS":"Bahamas, The","RW":"Rwanda","VE":"Venezuela, RB","TZ":"Tanzania",
                  "TJ":"Tajikistan","MX":"Mexico","UZ":"Uzbekistan","BW":"Botswana","SD":"Sudan","BT":"Bhutan","OM":"Oman","GL":"Greenland",
                  "IL":"Israel","ZW":"Zimbabwe","PF":"French Polynesia","ZM":"Zambia","SY":"Syrian Arab Republic","SB":"Solomon Islands",
                  "IQ":"Iraq","KE":"Kenya","TG":"Togo","SA":"Saudi Arabia","LY":"Libya","BN":"Brunei Darussalam","JO":"Jordan","AD":"Andorra",
                  "DJ":"Djibouti","VI":"Virgin Islands (U.S.)","NC":"New Caledonia","KW":"Kuwait","QA":"Qatar","AE":"United Arab Emirates"};

var year_data = new Object();
year_data = {
    "2008": "In September, Wall Street experiences what many experts label as the biggest eco" +
            "nomic disaster since the Great Depression. It\'s fueled by an ongoing, multi-bil" +
            "lion-dollar mortgage crisis. Lehman Brothers collapses. AIG, American Internatio" +
            "nal Group, the country\'s largest insurance company, files for bankruptcy despit" +
            "e a $85 billion bailout. Washington Mutual is sold to JP Morgan Chase. In Octobe" +
            "r, President Bush signs a $700 billion rescue plan for the banks.<\/p><p> In Dec" +
            "ember, Bush signs a $17.4 billion rescue package for ailing auto makers General " +
            "Motors and Chrysler. The Big Three CEOs blame their problems on the growing glob" +
            "al economic crisis, but critics charge they were too slow to produce fuel-effici" +
            "ent cars.<\/p>",
    '1970': 'U.S. President Richard Nixon orders an invasion of Cambodia, widening the war in' +
            ' Vietnam. In protest, millions march across the U.S. University campuses are shu' +
            't down by student strikes. Four protestors at Kent State University in Ohio are ' +
            'killed by National Guard troops. The U.S. Senate repeals the Gulf of Tonkin reso' +
            'lution that had given Presidents Johnson and Nixon sweeping powers in the Vietna' +
            'm War. The Beatles break up. Egyptian president Gamal Abdel-Nassar dies. Anwar S' +
            'adat becomes president.',
    '1973': 'The 1973 oil crisis began in October 1973 when the members of the Organization o' +
            'f Arab Petroleum Exporting Countries proclaimed an oil embargo. The embargo occu' +
            'rred in response to United States\' support for Israel during the Yom Kippur War' +
            '. By the end of the embargo in March 1974, the price of oil had risen from US $3' +
            ' per barrel to nearly $12 globally; US prices were significantly higher. The emb' +
            'argo caused an oil crisis, or "shock", with many short- and long-term effects on' +
            ' global politics and the global economy.[3]It was later called the "first oil sh' +
            'ock", followed by the 1979 oil crisis, termed the "second oil shock."',
    '1987': 'In finance, Black Monday refers to Monday, October 19, 1987, when stock markets ' +
            'around the world crashed, shedding a huge value in a very short time. The crash ' +
            'began in Hong Kong and spread west to Europe, hitting the United States after ot' +
            'her markets had already declined by a significant margin. The Dow Jones Industri' +
            'al Average (DJIA) fell exactly 508 points to 1,738.74 (22.61%).In Australia and ' +
            'New Zealand, the 1987 crash is also referred to as "Black Tuesday" because of th' +
            'e time zone difference.',
    '1991': 'By 1985, India had started having balance of payments problems. By the end of 19' +
            '90, it was in a serious economic crisis. The government was close to default, it' +
            's central bank had refused new credit and foreign exchange reserves had been red' +
            'uced to such a point that India could barely finance three weeks’ worth of impor' +
            'ts which led the Indian government to airlift national gold reserves as a pledge' +
            ' to the International Monetary Fund (IMF) in exchange for a loan to cover balanc' +
            'e of payment debts'
};

// To assign color
const getColumn = (field) => {
    switch (field) {
        case 'GDP':
            return 'gdp_us';
        case 'FSI':
            return 'fsi';
        case 'INF':
            return 'inflation';
        case 'POP':
            return 'populationgrowth';
        case 'EMP':
            return 'employmentratio';
        case 'RES':
            return 'reserves';
        case 'FDI':
            return 'fdi';
        case 'TRA':
            return 'trade';
        default:
            return 'fsi';
    };
}

// Get the modal
var year_modal = document.getElementById('year_modal');
var country_modal = document.getElementById('country_modal');
var modal_country_name=document.getElementById('modal_country_name')
// events for the 2 modals Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var country_close = document.getElementById("country_close");

country_close.onclick = function () {
    country_modal.style.display = "none";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {

    year_modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == year_modal) {
        year_modal.style.display = "none";
    }
    if (event.target == country_modal) {
        country_modal.style.display = "none";
    }
}

var $title = $('.title');

$(".slider").slider({
    min: 1970,
    max: 2014,
    step: 1,
    slide: function (event, ui) {
        //$( "#year_selected" ).val( ui.value);
        obj.year = ui.value;
        $title.text(ui.value);
        switch (ui.value) {
            case 2000:
                var str = '<video  loop autoplay><source src="https://img.buzzfeed.com/buzzfeed-static/stat' +
                        'ic/enhanced/web03/2012/6/15/16/anigif_enhanced-buzz-5196-1339793944-0.gif?output' +
                        '-format=mp4" type="video/mp4"/></video>';
                document
                    .getElementById("year_info")
                    .innerHTML = str;
                year_modal.style.display = "block";
                break;
            case 2008:
                var str = '<video width="100%" loop autoplay><source src="images/event2008.mp4" type="video' +
                        '/mp4"/></video>';
                document
                    .getElementById("year_info")
                    .innerHTML = str;
                year_modal.style.display = "block";
                break;
                //https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/6/15/17/an
                //igif_enhanced-buzz-23421-1339794637-3.gif?output-format=mp4
            case 1970:
                document
                    .getElementById("year_info")
                    .innerHTML = year_data["1970"];
                year_modal.style.display = "block";
                break;
            case 1973:
                document
                    .getElementById("year_info")
                    .innerHTML = year_data["1973"];
                year_modal.style.display = "block";
                break;
            case 1989:
                var str = '<video  loop autoplay><source src="https://img.buzzfeed.com/buzzfeed-static/stat' +
                        'ic/enhanced/web03/2012/6/15/17/anigif_enhanced-buzz-5301-1339794593-7.gif?output' +
                        '-format=mp4" type="video/mp4"/></video>';
                document
                    .getElementById("year_info")
                    .innerHTML = str;
                year_modal.style.display = "block";
                break;
            case 1990:
                var str = '<video  loop autoplay><source src="https://img.buzzfeed.com/buzzfeed-static/stat' +
                        'ic/enhanced/web05/2012/6/15/17/anigif_enhanced-buzz-23421-1339794637-3.gif?outpu' +
                        't-format=mp4" type="video/mp4"/></video>';
                document
                    .getElementById("year_info")
                    .innerHTML = str;
                year_modal.style.display = "block";
                break;
            case 1991:
                document
                    .getElementById("year_info")
                    .innerHTML = year_data["1991"];
                year_modal.style.display = "block";
                break;

        }
        /*if(ui.value==2008){
                document.getElementById("year_info").innerHTML=year_data["2008"];
                modal.style.display="block";
            }*/

        PostData();
        //alert(obj.year);

    }
})
    .slider("pips", {
    rest: "label",
    step: 4
})
    .slider("float");

$('input[type=checkbox]').change(function () {
    clicked = $(this).data('index');
    //alert(clicked)
    if (clicked == 0) {
        obj.filter = "FSI";
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        PostData()
    }
    if (clicked == 1) {
        obj.filter = "GDP";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        document
            .getElementById("Trade")
            .checked = false;
        PostData()
    }
    if (clicked == 2) {
        obj.filter = "INF";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        document
            .getElementById("Trade")
            .checked = false;
        PostData()
    }
    if (clicked == 3) {
        obj.filter = "TRA";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        PostData()
    }
    if (clicked == 4) {
        obj.filter = "POP";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        document
            .getElementById("Trade")
            .checked = false;
        PostData()
    }
    if (clicked == 5) {
        obj.filter = "EMP";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        document
            .getElementById("Trade")
            .checked = false;
        PostData()
    }
    if (clicked == 6) {
        obj.filter = "RES";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("FDI")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("Trade")
            .checked = false;
        PostData()
    }
    if (clicked == 7) {
        obj.filter = "FDI";
        document
            .getElementById("FSI")
            .checked = false;
        document
            .getElementById("GDP")
            .checked = false;
        document
            .getElementById("Reserve")
            .checked = false;
        document
            .getElementById("cheap")
            .checked = false;
        document
            .getElementById("Emp")
            .checked = false;
        document
            .getElementById("Inf")
            .checked = false;
        document
            .getElementById("Trade")
            .checked = false;
        PostData()
    }
});

// Render color to map from post request
function Render_Map(data) {
    col = getColumn(obj.filter).concat('_');

    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        var country = undefined;
        var val = data[i];
        //console.log(val.countrycode);
        //console.log(val.countryname);

        //TODO: Error handling
        country = document.getElementById(val.countrycode);

        c_id = Object.keys(val)[1];
        c_val = Object.values(val)[1];
        countries.push({id: val.countrycode});
        countries[i][c_id] = c_val;

        //console.log("key 1 is: " + Object.keys(val)[1]);
        //console.log("value  is: " + Object.values(val)[1]);
        //document.getElementsByTagName("path")[i].setAttribute("class","tooltip");

        if (country === undefined || country === null) 
            continue;
        country.style.fill = val.color;

    }
    //console.log("list is"+JSON.stringify(country_list))
    document
        .getElementById('NA')
        .style
        .fill = val.color;
    document
        .getElementById('CI')
        .style
        .fill = val.color;
    //console.log("countries: "+ JSON.stringify(countries));

}

//for on click on countries

$("#svgContainer")
    .click(function (event) {
        var ip = document.getElementsByTagName(event.target.nodeName);
        //console.log("countries: "+ JSON.stringify(countries));

        for (var i = 0; i < countries.length; i++) {
            document
                .getElementById(event.target.id)
                .setAttribute("class", "tooltip");
            document
                .getElementById(event.target.id)
                .setAttribute("title", "id is" + countries[i].id);

            //console.log("countries: "+ JSON.stringify(countries[i].id));
            if (countries[i].id === event.target.id) {
                obj1.countrycode = event.target.id


                obj1.year = obj.year
                obj1.filter = obj.filter
                PostYear()

                modal_country_name.innerHTML=country_list[event.target.id]
                /*document.getElementById("year_info").innerHTML=Object.keys(countries[i])[1]+": "+Object.values(countries[i])[1];
            modal.style.display="block";*/
                setTimeout( 2000 );

                country_modal.style.display = "block";

                break;
            }

        }
        console.log("clicked:" + event.target.id);
        //console.log(c_id); console.log(c_val);

    });

function PostYear() {
    console.log( 'post year called' );
    //console.log(obj1.year)
    //console.log(obj1.countrycode)
    //filt = obj1.filter.toLowerCase()
    $.ajax({
        type: 'POST',
        url: "https://world-fsi.herokuapp.com/graph",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify( obj1 ),
        success: function ( msg ) {
            //console.log( msg );
            //Change_Array(msg.data);
            var val = msg.data[0];
            destval = [];
            destyear = [];
            filt = Object.keys(val)[0];
            //console.log(msg.data)
            for (i = 0; i < msg.data.length; i++) {
                //console.log(data[i][filt])
                destval[i] = msg.data[i][filt]
                destyear[i]=msg.data[i]['year']
                console.log(destval[i],destyear[i],filt.toUpperCase())
            }

            init(destval,destyear,filt.toUpperCase())

        }
    });
}
function PostData() {
    // $.post("https://localhost:9001/main",JSON.stringify(obj),"","json"); Or this
    // var bad = JSON.stringify(obj) + " 0\r\n"; var x = new XMLHttpRequest();
    // x.open("POST", "http://localhost:6379"); x.send(bad);

    $.ajax({
        type: 'POST',
        url: "https://world-fsi.herokuapp.com/main",
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify( obj ),
        success: function ( msg ) {
            //console.log( msg );
            Render_Map( msg.data );
        }
    });
}

function init(destval,destyear,filter){
    console.log(filter)

    console.log('init')

    var chart = new CanvasJS.Chart("chartContainer",
        {
            theme: "theme2",
            backgroundColor:'#24303A',
            title:{
                text: filter
            },
            animationEnabled: true,
            axisX: {
                valueFormatString: "MMM",
                interval:1,
                intervalType: "year"

            },
            axisY:{
                includeZero: false

            },
            data: [
                {
                    type: "line",
                    //lineThickness: 3,
                    dataPoints: [
                        { x: destyear[0] , y: destval[0] },
                        { x: destyear[1] , y: destval[1] },
                        { x: destyear[3] , y: destval[3] },
                        { x: destyear[4] , y: destval[4] },
                        { x: destyear[5] , y: destval[5] },
                        { x: destyear[6] , y: destval[6] },
                        { x: destyear[7] , y: destval[7] },
                        { x: destyear[8] , y: destval[8] },
                        { x: destyear[9] , y: destval[9] },
                        { x: destyear[10] , y: destval[10] },

                    ]
                }


            ]
        });

    chart.render();

}
