//baratheon = houses/15
//lannister = houses/229
//stark = houses/362
//targaryen = houses/378
//http://anapioficeandfire.com/api/

var index = {
    baratheon : '15',
    lannister : '229',
    stark : '362',
    targaryen : '378'
};

//takes in fam name spits out url
function houseURL(fam, index) {
    var house = index[fam];
    return "https://anapioficeandfire.com/api/houses/" + house;
}


$(document).ready(function(){
    $('img').click(function (){
        var fam = $(this).attr('id');
        console.log(fam);
        $.get(houseURL(fam, index),function(house){
        //$.get("http://anapioficeandfire.com/api/houses?name=Lannister",function(house){
            console.log(house);
            var name = "Name: " + house.name;
            var words = "Words: " + house.words;
            var titles = "Titles: " + house.titles;
            $('#name').text(name);
            $('#words').text(words);
            $('#titles').text(titles);
        }, "json");
    });
});