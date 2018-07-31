
var formAddition;
var itemRequestsOption, generalOption, feedbackOption;
var formAdditionStatus;

function goHome()
{
    location.href = 'index.html';
}

function testdis()
{
    alert('s');
}

function openStore()
{
    alert("store");
}

/* FINISH THIS FUNCTION */
function checkFirstLoad()
{
    if(localStorage.getItem("openedBefore") != "yes")
    {
        var myvar = '<div id = "mailing-list-panel" class = "col col-12 mailing-list-panel text-center animated fadeInDown">'+
'          '+
'        <span id = "closeButton" class = "close" onClick = "closeMailingList()" on-tap="closeMailingList()">x</span>'+
'          <div class = "inline-block">'+
'            <span class = "mailing-list-header">SIGN UP FOR 10% OFF AND UPDATES</span>'+
'            <div class = "hidden-md-up margin-bottom"></div>'+
'                <span class="input input--hideo">'+
'                <form action="https://formspree.io/brockwaystreet@gmail.com" method="POST">'+
'                    <input placeholder="Enter Email Here" class="input__field input__field--hideo" name = "User Email" type="email" id="input-42" />'+
'                    <label class="input__label input__label--hideo" for="input-42">'+
'                        <button type="submit" style="background:none; border:none;padding:0"><i class="fa fa-fw fa fa-envelope icon icon--hideo"></i></button>'+
'                        <span class="input__label-content input__label-content--hideo">Email</span>'+
'                    </label>'+
'                </form>'+
'                </span>'+
'            </div>'+
'        '+
'        </div>';
	
document.getElementById("mailing-list").innerHTML = myvar;
        localStorage.setItem("openedBefore", "yes");
    }
    else
    {

        //document.getElementById("mailing-list-panel").style.display = "none";
    }
}

function filterItems(itemType)
{
    //document.getElementById("filter-items").className = "animated fadeIn";
    if(itemType == "watches")
    {
        var itemHeader="";
    itemHeader += "<div class = \"animated fadeIn\"><div class = \"about-business-header store-header\">Our Watches<\/div></div>";

    document.getElementById("item-type-header").innerHTML = itemHeader;

        var watches="";
        watches += "<div class = \"animated fadeIn\"><div class = \"row container max-items-width eliminate-padding\">";
        watches += "          ";
        watches += "          ";
        watches += "                  <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
        watches += "                        <a href = \"obsidianbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
        watches += "                            <div class = \"store-item-image blackblackwatch-image-one\"><\/div>";
        watches += "                            <br \/>";
        watches += "                            <span class = \"store-item-header\">Obsidian Brockway Watch<\/span>";
        watches += "                            <span class = \"underline-sale-item\"><\/span>";
        watches += "                            <div class = \"store-item-price\">$34.99<\/div>";
        watches += "                            <a href=\"javascript:sraddtocheckout(120956);\" class=\"sr-add kill-link-style\">";
        watches += "                                    <div class = \"store-item-button\">Add to Cart<\/div>";
        watches += "                                    <\/a>";
        watches += "                                    <a href=\"obsidianbrockwaywatch.html\">";
        watches += "                                    <div class = \"store-item-button\">More Info<\/div>";
        watches += "                                    <\/a>";
        watches += "                        <\/a>";
        watches += "                      <\/div>";
        watches += "                      <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
        watches += "                            <a href = \"classicbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
        watches += "                                <div class = \"store-item-image blackwhitewatch-image-one\"><\/div>";
        watches += "                                <br \/>";
        watches += "                                <span class = \"store-item-header\">Classic Brockway Watch<\/span>";
        watches += "                                <span class = \"underline-sale-item\"><\/span>";
        watches += "                                <div class = \"store-item-price\">$34.99<\/div>";
        watches += "                                <a href=\"javascript:sraddtocheckout(120967);\" class=\"sr-add kill-link-style\">";
        watches += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
        watches += "                                        <\/a>";
        watches += "                                        <a href=\"classicbrockwaywatch.html\">";
        watches += "                                        <div class = \"store-item-button\">More Info<\/div>";
        watches += "                                        <\/a>";
        watches += "                            <\/a>";
        watches += "                          <\/div>";
        watches += "                          <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
        watches += "                                <a href = \"chestnutbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
        watches += "                                    <div class = \"store-item-image brownwhitewatch-image-four\"><\/div>";
        watches += "                                    <br \/>";
        watches += "                                    <span class = \"store-item-header\">Chestnut Brockway Watch<\/span>";
        watches += "                                    <span class = \"underline-sale-item\"><\/span>";
        watches += "                                    <div class = \"store-item-price\">$34.99<\/div>";
        watches += "                                    <a href=\"javascript:sraddtocheckout(120972);\" class=\"sr-add kill-link-style\">";
        watches += "                                            <div class = \"store-item-button\">Add to Cart<\/div>";
        watches += "                                            <\/a>";
        watches += "                                            <a href=\"chestnutbrockwaywatch.html\">";
        watches += "                                            <div class = \"store-item-button\">More Info<\/div>";
        watches += "                                            <\/a>";
        watches += "                                <\/a>";
        watches += "                              <\/div>";
        watches += "";
        watches += "                              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
        watches += "                                    <a href = \"lilacbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
        watches += "                                        <div class = \"store-item-image pinkwhitewatch-image-three\"><\/div>";
        watches += "                                        <br \/>";
        watches += "                                        <span class = \"store-item-header\">Lilac Brockway Watch<\/span>";
        watches += "                                        <span class = \"underline-sale-item\"><\/span>";
        watches += "                                        <div class = \"store-item-price\">$34.99<\/div>";
        watches += "                                        <a href=\"javascript:sraddtocheckout(121012);\" class=\"sr-add kill-link-style\">";
        watches += "                                                <div class = \"store-item-button\">Add to Cart<\/div>";
        watches += "                                                <\/a>";
        watches += "                                                <a href=\"lilacbrockwaywatch.html\">";
        watches += "                                                <div class = \"store-item-button\">More Info<\/div>";
        watches += "                                                <\/a>";
        watches += "                                    <\/a>";
        watches += "                                  <\/div>";
        watches += "";
        watches += "        <\/div>";
        watches += "        <div class = \"row container max-items-width eliminate-padding\">";
        watches += "                ";
        watches += "                      ";
        watches += "                      ";
        watches += "                          ";
        watches += "                              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
        watches += "                                    <a href = \"rosegoldbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
        watches += "                                        <div class = \"store-item-image pinkgoldwatch-image-two\"><\/div>";
        watches += "                                        <br \/>";
        watches += "                                        <span class = \"store-item-header\">Rose Gold Brockway Watch<\/span>";
        watches += "                                        <span class = \"underline-sale-item\"><\/span>";
        watches += "                                        <div class = \"store-item-price\">$34.99<\/div>";
        watches += "                                        <a href=\"javascript:sraddtocheckout(121013);\" class=\"sr-add kill-link-style\">";
        watches += "                                                <div class = \"store-item-button\">Add to Cart<\/div>";
        watches += "                                                <\/a>";
        watches += "                                                <a href=\"rosegoldbrockwaywatch.html\">";
        watches += "                                                <div class = \"store-item-button\">More Info<\/div>";
        watches += "                                                <\/a>";
        watches += "                                    <\/a>";
        watches += "                                  <\/div>";
        watches += "      ";
        watches += "              <\/div></div>";

        document.getElementById("filter-items").innerHTML = watches;
       
    }
    else if(itemType == "sunglasses")
    {
        var itemHeader="";
    itemHeader += "<div class = \"animated fadeIn\"><div class = \"about-business-header store-header\">Our Sunglasses<\/div></div>";

    document.getElementById("item-type-header").innerHTML = itemHeader;

        var shades="";
shades += "<div class = \"animated fadeIn\"><div class = \"row container max-items-width eliminate-padding\">";
shades += "                    <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shades += "                            <a href = \"caramelbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
shades += "                                <div class = \"store-item-image caramel-image-three\"><\/div>";
shades += "                                <br \/>";
shades += "                                <span class = \"store-item-header\">Caramel Brockway Sunglasses<\/span>";
shades += "                                <span class = \"underline-sale-item\"><\/span>";
shades += "                                <div class = \"store-item-price\">$24.99<\/div>";
shades += "                                <a href=\"javascript:sraddtocheckout(121197);\" class=\"sr-add kill-link-style\">";
shades += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
shades += "                                        <\/a>";
shades += "                                        <a href=\"caramelbrockwaysunglasses.html\">";
shades += "                                        <div class = \"store-item-button\">More Info<\/div>";
shades += "                                        <\/a>";
shades += "                            <\/a>";
shades += "                          <\/div>";
shades += "                    <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shades += "                            <a href = \"classicbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
shades += "                                <div class = \"store-item-image classic-image-three\"><\/div>";
shades += "                                <br \/>";
shades += "                                <span class = \"store-item-header\">Classic Brockway Sunglasses<\/span>";
shades += "                                <span class = \"underline-sale-item\"><\/span>";
shades += "                                <div class = \"store-item-price\">$24.99<\/div>";
shades += "                                <a href=\"javascript:sraddtocheckout(121198);\" class=\"sr-add kill-link-style\">";
shades += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
shades += "                                        <\/a>";
shades += "                                        <a href=\"classicbrockwaysunglasses.html\">";
shades += "                                        <div class = \"store-item-button\">More Info<\/div>";
shades += "                                        <\/a>";
shades += "                            <\/a>";
shades += "                          <\/div>";
shades += "                          ";
shades += "                              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shades += "                                    <a href = \"aquabrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
shades += "                                        <div class = \"store-item-image aqua-image-three\"><\/div>";
shades += "                                        <br \/>";
shades += "                                        <span class = \"store-item-header\">Aqua Brockway Sunglasses<\/span>";
shades += "                                        <span class = \"underline-sale-item\"><\/span>";
shades += "                                        <div class = \"store-item-price\">$24.99<\/div>";
shades += "                                        <a href=\"javascript:sraddtocheckout(121196);\" class=\"sr-add kill-link-style\">";
shades += "                                                <div class = \"store-item-button\">Add to Cart<\/div>";
shades += "                                                <\/a>";
shades += "                                                <a href=\"aquabrockwaysunglasses.html\">";
shades += "                                                <div class = \"store-item-button\">More Info<\/div>";
shades += "                                                <\/a>";
shades += "                                    <\/a>";
shades += "                                  <\/div>";
shades += "                                  <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shades += "                                        <a href = \"seafoambrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
shades += "                                            <div class = \"store-item-image seafoam-image-three\"><\/div>";
shades += "                                            <br \/>";
shades += "                                            <span class = \"store-item-header\">Seafoam Brockway Sunglasses<\/span>";
shades += "                                            <span class = \"underline-sale-item\"><\/span>";
shades += "                                            <div class = \"store-item-price\">$24.99<\/div>";
shades += "                                            <a href=\"javascript:sraddtocheckout(121199);\" class=\"sr-add kill-link-style\">";
shades += "                                                    <div class = \"store-item-button\">Add to Cart<\/div>";
shades += "                                                    <\/a>";
shades += "                                                    <a href=\"seafoambrockwaysunglasses.html\">";
shades += "                                                    <div class = \"store-item-button\">More Info<\/div>";
shades += "                                                    <\/a>";
shades += "                                        <\/a>";
shades += "                                      <\/div>";
shades += "";
shades += "                                      <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shades += "                                            <a href = \"leopardbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
shades += "                                                <div class = \"store-item-image leopard-image-five\"><\/div>";
shades += "                                                <br \/>";
shades += "                                                <span class = \"store-item-header\">Leopard Brockway Sunglasses<\/span>";
shades += "                                                <span class = \"underline-sale-item\"><\/span>";
shades += "                                                <div class = \"store-item-price\">$24.99<\/div>";
shades += "                                                <a href=\"javascript:sraddtocheckout(121200);\" class=\"sr-add kill-link-style\">";
shades += "                                                        <div class = \"store-item-button\">Add to Cart<\/div>";
shades += "                                                        <\/a>";
shades += "                                                        <a href=\"leopardbrockwaysunglasses.html\">";
shades += "                                                        <div class = \"store-item-button\">More Info<\/div>";
shades += "                                                        <\/a>";
shades += "                                            <\/a>";
shades += "                                          <\/div>";
shades += "";
shades += "                                          <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shades += "                                                <a href = \"prismbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
shades += "                                                    <div class = \"store-item-image prism-image-one\"><\/div>";
shades += "                                                    <br \/>";
shades += "                                                    <span class = \"store-item-header\">Prism Brockway Sunglasses<\/span>";
shades += "                                                    <span class = \"underline-sale-item\"><\/span>";
shades += "                                                    <div class = \"store-item-price\">$24.99<\/div>";
shades += "                                                    <a href=\"javascript:sraddtocheckout(121235);\" class=\"sr-add kill-link-style\">";
shades += "                                                            <div class = \"store-item-button\">Add to Cart<\/div>";
shades += "                                                            <\/a>";
shades += "                                                            <a href=\"prismbrockwaysunglasses.html\">";
shades += "                                                            <div class = \"store-item-button\">More Info<\/div>";
shades += "                                                            <\/a>";
shades += "                                                <\/a>";
shades += "                                              <\/div>";
shades += "          ";
shades += "                  <\/div></div>";
document.getElementById("filter-items").innerHTML = shades;
    }
    else if(itemType == "all")
    {
        var itemHeader="";
    itemHeader += "<div class = \"animated fadeIn\"><div class = \"about-business-header store-header\">All Items<\/div></div>";

    document.getElementById("item-type-header").innerHTML = itemHeader;


        var allItems="";
allItems += "<div class = \"animated fadeIn\"><div class = \"row container max-items-width eliminate-padding\">";
allItems += "          <div class = \"col col-12 col-sm-6 col-md-3 text-center margin-top\">";
allItems += "            <a href = \"stripedbrockwayshirt.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                <div class = \"store-item-image whiteshirt-focus-two\"><\/div>";
allItems += "                <br \/>";
allItems += "                <span class = \"store-item-header\">Striped Brockway Tee<\/span>";
allItems += "                <span class = \"underline-sale-item\"><\/span>";
allItems += "                <div class = \"store-item-price\">$19.99<\/div>";
allItems += "                        <a href=\"javascript:sraddtocheckout(120955);\" class=\"sr-add kill-link-style\">";
allItems += "                        <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                        <\/a>";
allItems += "                        <a href=\"stripedbrockwayshirt.html\">";
allItems += "                        <div class = \"store-item-button\">More Info<\/div>";
allItems += "                        <\/a>";
allItems += "            <\/a>";
allItems += "          <\/div>";
allItems += "          <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 text-center margin-top\">";
allItems += "                <a href = \"skylinebrockwayshirt.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                    <div class = \"store-item-image blackshirt-image-five\"><\/div>";
allItems += "                    <br \/>";
allItems += "                    <span class = \"store-item-header\">Skyline Brockway Tee<\/span>";
allItems += "                    <span class = \"underline-sale-item\"><\/span>";
allItems += "                    <div class = \"store-item-price\">$19.99<\/div>";
allItems += "                    <a href=\"javascript:sraddtocheckout(120957);\" class=\"sr-add kill-link-style\">";
allItems += "                            <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                            <\/a>";
allItems += "                            <a href=\"skylinebrockwayshirt.html\">";
allItems += "                            <div class = \"store-item-button\">More Info<\/div>";
allItems += "                            <\/a>";
allItems += "                <\/a>";
allItems += "              <\/div>";
allItems += "              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                    <a href = \"natureboytee.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                        <div class = \"store-item-image natureboy-image-four\"><\/div>";
allItems += "                        <br \/>";
allItems += "                        <span class = \"store-item-header\">Nature Boy Tee<\/span>";
allItems += "                        <span class = \"underline-sale-item\"><\/span>";
allItems += "                        <div class = \"store-item-price\">$19.99<\/div>";
allItems += "                        <a href=\"javascript:sraddtocheckout(120966);\" class=\"sr-add kill-link-style\">";
allItems += "                                <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                <\/a>";
allItems += "                                <a href=\"natureboytee.html\">";
allItems += "                                <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                <\/a>";
allItems += "                    <\/a>";
allItems += "                  <\/div>";
allItems += "                  <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                        <a href = \"obsidianbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                            <div class = \"store-item-image blackblackwatch-image-one\"><\/div>";
allItems += "                            <br \/>";
allItems += "                            <span class = \"store-item-header\">Obsidian Brockway Watch<\/span>";
allItems += "                            <span class = \"underline-sale-item\"><\/span>";
allItems += "                            <div class = \"store-item-price\">$34.99<\/div>";
allItems += "                            <a href=\"javascript:sraddtocheckout(120956);\" class=\"sr-add kill-link-style\">";
allItems += "                                    <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                    <\/a>";
allItems += "                                    <a href=\"obsidianbrockwaywatch.html\">";
allItems += "                                    <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                    <\/a>";
allItems += "                        <\/a>";
allItems += "                      <\/div>";
allItems += "";
allItems += "        <\/div>";
allItems += "        <div class = \"row container max-items-width eliminate-padding\">";
allItems += "                <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                        <a href = \"classicbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                            <div class = \"store-item-image blackwhitewatch-image-one\"><\/div>";
allItems += "                            <br \/>";
allItems += "                            <span class = \"store-item-header\">Classic Brockway Watch<\/span>";
allItems += "                            <span class = \"underline-sale-item\"><\/span>";
allItems += "                            <div class = \"store-item-price\">$34.99<\/div>";
allItems += "                            <a href=\"javascript:sraddtocheckout(120967);\" class=\"sr-add kill-link-style\">";
allItems += "                                    <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                    <\/a>";
allItems += "                                    <a href=\"classicbrockwaywatch.html\">";
allItems += "                                    <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                    <\/a>";
allItems += "                        <\/a>";
allItems += "                      <\/div>";
allItems += "                      <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                            <a href = \"chestnutbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                <div class = \"store-item-image brownwhitewatch-image-four\"><\/div>";
allItems += "                                <br \/>";
allItems += "                                <span class = \"store-item-header\">Chestnut Brockway Watch<\/span>";
allItems += "                                <span class = \"underline-sale-item\"><\/span>";
allItems += "                                <div class = \"store-item-price\">$34.99<\/div>";
allItems += "                                <a href=\"javascript:sraddtocheckout(120972);\" class=\"sr-add kill-link-style\">";
allItems += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                        <\/a>";
allItems += "                                        <a href=\"chestnutbrockwaywatch.html\">";
allItems += "                                        <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                        <\/a>";
allItems += "                            <\/a>";
allItems += "                          <\/div>";
allItems += "                      <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                            <a href = \"lilacbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                <div class = \"store-item-image pinkwhitewatch-image-three\"><\/div>";
allItems += "                                <br \/>";
allItems += "                                <span class = \"store-item-header\">Lilac Brockway Watch<\/span>";
allItems += "                                <span class = \"underline-sale-item\"><\/span>";
allItems += "                                <div class = \"store-item-price\">$34.99<\/div>";
allItems += "                                <a href=\"javascript:sraddtocheckout(121012);\" class=\"sr-add kill-link-style\">";
allItems += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                        <\/a>";
allItems += "                                        <a href=\"lilacbrockwaywatch.html\">";
allItems += "                                        <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                        <\/a>";
allItems += "                            <\/a>";
allItems += "                          <\/div>";
allItems += "                          ";
allItems += "                              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                                    <a href = \"rosegoldbrockwaywatch.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                        <div class = \"store-item-image pinkgoldwatch-image-two\"><\/div>";
allItems += "                                        <br \/>";
allItems += "                                        <span class = \"store-item-header\">Rose Gold Brockway Watch<\/span>";
allItems += "                                        <span class = \"underline-sale-item\"><\/span>";
allItems += "                                        <div class = \"store-item-price\">$34.99<\/div>";
allItems += "                                        <a href=\"javascript:sraddtocheckout(121013);\" class=\"sr-add kill-link-style\">";
allItems += "                                                <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                                <\/a>";
allItems += "                                                <a href=\"rosegoldbrockwaywatch.html\">";
allItems += "                                                <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                                <\/a>";
allItems += "                                    <\/a>";
allItems += "                                  <\/div>";
allItems += "      ";
allItems += "              <\/div>";
allItems += "";
allItems += "              <div class = \"row container max-items-width eliminate-padding\">";
allItems += "                    <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                            <a href = \"caramelbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                <div class = \"store-item-image caramel-image-three\"><\/div>";
allItems += "                                <br \/>";
allItems += "                                <span class = \"store-item-header\">Caramel Brockway Sunglasses<\/span>";
allItems += "                                <span class = \"underline-sale-item\"><\/span>";
allItems += "                                <div class = \"store-item-price\">$24.99<\/div>";
allItems += "                                <a href=\"javascript:sraddtocheckout(121197);\" class=\"sr-add kill-link-style\">";
allItems += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                        <\/a>";
allItems += "                                        <a href=\"caramelbrockwaysunglasses.html\">";
allItems += "                                        <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                        <\/a>";
allItems += "                            <\/a>";
allItems += "                          <\/div>";
allItems += "                    <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                            <a href = \"classicbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                <div class = \"store-item-image classic-image-three\"><\/div>";
allItems += "                                <br \/>";
allItems += "                                <span class = \"store-item-header\">Classic Brockway Sunglasses<\/span>";
allItems += "                                <span class = \"underline-sale-item\"><\/span>";
allItems += "                                <div class = \"store-item-price\">$24.99<\/div>";
allItems += "                                <a href=\"javascript:sraddtocheckout(121198);\" class=\"sr-add kill-link-style\">";
allItems += "                                        <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                        <\/a>";
allItems += "                                        <a href=\"classicbrockwaysunglasses.html\">";
allItems += "                                        <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                        <\/a>";
allItems += "                            <\/a>";
allItems += "                          <\/div>";
allItems += "                          ";
allItems += "                              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                                    <a href = \"aquabrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                        <div class = \"store-item-image aqua-image-three\"><\/div>";
allItems += "                                        <br \/>";
allItems += "                                        <span class = \"store-item-header\">Aqua Brockway Sunglasses<\/span>";
allItems += "                                        <span class = \"underline-sale-item\"><\/span>";
allItems += "                                        <div class = \"store-item-price\">$24.99<\/div>";
allItems += "                                        <a href=\"javascript:sraddtocheckout(121196);\" class=\"sr-add kill-link-style\">";
allItems += "                                                <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                                <\/a>";
allItems += "                                                <a href=\"aquabrockwaysunglasses.html\">";
allItems += "                                                <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                                <\/a>";
allItems += "                                    <\/a>";
allItems += "                                  <\/div>";
allItems += "                                  <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                                        <a href = \"seafoambrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                            <div class = \"store-item-image seafoam-image-three\"><\/div>";
allItems += "                                            <br \/>";
allItems += "                                            <span class = \"store-item-header\">Seafoam Brockway Sunglasses<\/span>";
allItems += "                                            <span class = \"underline-sale-item\"><\/span>";
allItems += "                                            <div class = \"store-item-price\">$24.99<\/div>";
allItems += "                                            <a href=\"javascript:sraddtocheckout(121199);\" class=\"sr-add kill-link-style\">";
allItems += "                                                    <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                                    <\/a>";
allItems += "                                                    <a href=\"seafoambrockwaysunglasses.html\">";
allItems += "                                                    <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                                    <\/a>";
allItems += "                                        <\/a>";
allItems += "                                      <\/div>";
allItems += "";
allItems += "                                      <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                                            <a href = \"leopardbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                                <div class = \"store-item-image leopard-image-five\"><\/div>";
allItems += "                                                <br \/>";
allItems += "                                                <span class = \"store-item-header\">Leopard Brockway Sunglasses<\/span>";
allItems += "                                                <span class = \"underline-sale-item\"><\/span>";
allItems += "                                                <div class = \"store-item-price\">$24.99<\/div>";
allItems += "                                                <a href=\"javascript:sraddtocheckout(121200);\" class=\"sr-add kill-link-style\">";
allItems += "                                                        <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                                        <\/a>";
allItems += "                                                        <a href=\"leopardbrockwaysunglasses.html\">";
allItems += "                                                        <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                                        <\/a>";
allItems += "                                            <\/a>";
allItems += "                                          <\/div>";
allItems += "";
allItems += "                                          <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
allItems += "                                                <a href = \"prismbrockwaysunglasses.html\" class = \"kill-link-style kill-link-style-mod\">";
allItems += "                                                    <div class = \"store-item-image prism-image-one\"><\/div>";
allItems += "                                                    <br \/>";
allItems += "                                                    <span class = \"store-item-header\">Prism Brockway Sunglasses<\/span>";
allItems += "                                                    <span class = \"underline-sale-item\"><\/span>";
allItems += "                                                    <div class = \"store-item-price\">$24.99<\/div>";
allItems += "                                                    <a href=\"javascript:sraddtocheckout(121235);\" class=\"sr-add kill-link-style\">";
allItems += "                                                            <div class = \"store-item-button\">Add to Cart<\/div>";
allItems += "                                                            <\/a>";
allItems += "                                                            <a href=\"prismbrockwaysunglasses.html\">";
allItems += "                                                            <div class = \"store-item-button\">More Info<\/div>";
allItems += "                                                            <\/a>";
allItems += "                                                <\/a>";
allItems += "                                              <\/div>";
allItems += "          ";
allItems += "                  <\/div></div>";
document.getElementById("filter-items").innerHTML = allItems;    
}
else if(itemType = "shirts")
{
    var itemHeader="";
    itemHeader += "<div class = \"animated fadeIn\"><div class = \"about-business-header store-header\">Our Shirts<\/div></div>";

    document.getElementById("item-type-header").innerHTML = itemHeader;
    var shirts="";
shirts += "<div class = \"animated fadeIn\"><div class = \"row container max-items-width eliminate-padding\">";
shirts += "          <div class = \"col col-12 col-sm-6 col-md-3 text-center margin-top\">";
shirts += "            <a href = \"stripedbrockwayshirt.html\" class = \"kill-link-style kill-link-style-mod\">";
shirts += "                <div class = \"store-item-image whiteshirt-focus-two\"><\/div>";
shirts += "                <br \/>";
shirts += "                <span class = \"store-item-header\">Striped Brockway Tee<\/span>";
shirts += "                <span class = \"underline-sale-item\"><\/span>";
shirts += "                <div class = \"store-item-price\">$19.99<\/div>";
shirts += "                        <a href=\"javascript:sraddtocheckout(120955);\" class=\"sr-add kill-link-style\">";
shirts += "                        <div class = \"store-item-button\">Add to Cart<\/div>";
shirts += "                        <\/a>";
shirts += "                        <a href=\"stripedbrockwayshirt.html\">";
shirts += "                        <div class = \"store-item-button\">More Info<\/div>";
shirts += "                        <\/a>";
shirts += "            <\/a>";
shirts += "          <\/div>";
shirts += "          <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 text-center margin-top\">";
shirts += "                <a href = \"skylinebrockwayshirt.html\" class = \"kill-link-style kill-link-style-mod\">";
shirts += "                    <div class = \"store-item-image blackshirt-image-five\"><\/div>";
shirts += "                    <br \/>";
shirts += "                    <span class = \"store-item-header\">Skyline Brockway Tee<\/span>";
shirts += "                    <span class = \"underline-sale-item\"><\/span>";
shirts += "                    <div class = \"store-item-price\">$19.99<\/div>";
shirts += "                    <a href=\"javascript:sraddtocheckout(120957);\" class=\"sr-add kill-link-style\">";
shirts += "                            <div class = \"store-item-button\">Add to Cart<\/div>";
shirts += "                            <\/a>";
shirts += "                            <a href=\"skylinebrockwayshirt.html\">";
shirts += "                            <div class = \"store-item-button\">More Info<\/div>";
shirts += "                            <\/a>";
shirts += "                <\/a>";
shirts += "              <\/div>";
shirts += "              <div class = \"col col-12 col-sm-6 col-md-3 col-md-3 margin-top text-center\">";
shirts += "                    <a href = \"natureboytee.html\" class = \"kill-link-style kill-link-style-mod\">";
shirts += "                        <div class = \"store-item-image natureboy-image-four\"><\/div>";
shirts += "                        <br \/>";
shirts += "                        <span class = \"store-item-header\">Nature Boy Tee<\/span>";
shirts += "                        <span class = \"underline-sale-item\"><\/span>";
shirts += "                        <div class = \"store-item-price\">$19.99<\/div>";
shirts += "                        <a href=\"javascript:sraddtocheckout(120966);\" class=\"sr-add kill-link-style\">";
shirts += "                                <div class = \"store-item-button\">Add to Cart<\/div>";
shirts += "                                <\/a>";
shirts += "                                <a href=\"natureboytee.html\">";
shirts += "                                <div class = \"store-item-button\">More Info<\/div>";
shirts += "                                <\/a>";
shirts += "                    <\/a>";
shirts += "                  <\/div></div>";
shirts += "                  ";
shirts += "";
shirts += "        <\/div>";
document.getElementById("filter-items").innerHTML = shirts;
}
    
}

function requestItems()
{
    localStorage.setItem("contactType", "requestItems");
}

function enterSlider(page)
{
    if(page == "home")
    {
        document.getElementById("left-swiper-arrow").className = "swiper-button-prev swiper-button-switch swiper-button-switch-solid";
        document.getElementById("right-swiper-arrow").className = "swiper-button-next swiper-button-switch swiper-button-switch-solid";
    }
}

function exitSlider(page)
{
    if(page == "home")
    {
        document.getElementById("left-swiper-arrow").className = "swiper-button-prev swiper-button-switch";
        document.getElementById("right-swiper-arrow").className = "swiper-button-next swiper-button-switch";
    }
}

function enterFocusCategory(focusType)
{
    if(focusType == "watches")
    {
        document.getElementById("focus-title-watches").className = "focus-title focus-title-hovered";
        document.getElementById("focus-button-watches").className = "col-centered focus-button-placement focus-button-hidden animated fadeInUp";
        document.getElementById("watches-dark").className = "row dark real-dark";
    }
    else if(focusType == "sunglasses")
    {
        document.getElementById("focus-title-sunglasses").className = "focus-title focus-title-hovered";
        document.getElementById("focus-button-sunglasses").className = "col-centered focus-button-placement focus-button-hidden animated fadeInUp";
        document.getElementById("sunglasses-dark").className = "row dark real-dark";
    }
}

function exitFocusCategory(focusType)
{
    if(focusType == "watches")
    {
        document.getElementById("focus-title-watches").className = "focus-title";
        document.getElementById("focus-button-watches").className = "col-centered focus-button-placement animated fadeOutDown";
        document.getElementById("watches-dark").className = "row dark";
    }
    else if(focusType == "sunglasses")
    {
        document.getElementById("focus-title-sunglasses").className = "focus-title";
        document.getElementById("focus-button-sunglasses").className = "col-centered focus-button-placement animated fadeOutDown";
        document.getElementById("sunglasses-dark").className = "row dark";
    }
}

function assignFormComponents()
{
    checkFirstLoad();
    formAddition = document.getElementById("form-addition");
    itemRequestsOption = document.getElementById("item-request-option");
    generalOption = document.getElementById("general-option");
    feedbackOption = document.getElementById("feedback-option");

    
}

function updateForm(selection)
{
    if(selection == "itemRequests")
    {
        formAddition.innerHTML = '<label class = "form-header" for="exampleInputEmail1">Item Types Requested</label> <br /><label class="form-check-label">\
        <input name="User Requested Hats" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Hats</span></label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Shirts" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Shirts</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Shorts" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Shorts</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Pants" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Pants</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Watches" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Watches</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Hoodies" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Hoodies</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Sweaters" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Sweaters</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Accessories" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Accessories</span>\</label>\
        <br /><label class="form-check-label">\
        <input name="User Requested Hat" name="User Requested Other" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Other</span>\</label>';

        itemRequestsOption.className = "btn btn-primary outfit-button selected-contact-option cell-button";
        generalOption.className = "btn btn-primary outfit-button cell-button";
        feedbackOption.className = "btn btn-primary outfit-button cell-button";

        document.getElementById("final-form-header").innerText = "Specific Item Requests";
        document.getElementById("final-form-message").placeholder = "Enter request";

        formAdditionStatus = "itemRequests";
    }
    else if(selection == "feedback")
    {
        formAddition.innerHTML = '<label class = "form-header" for="exampleInputEmail1">Feedback Type</label> <br /><label class="form-check-label">\
        <input name="User Selected Website Suggestion" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Website suggestion</span></label>\
        <br /><label class="form-check-label">\
        <input name="User Selected Issue/Bug Report" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Issue/bug report</span></label>\
        <br /><label class="form-check-label">\
        <input name="User Selected Questions" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Questions</span></label>\
        <br /><label class="form-check-label">\
        <input name="User Selected Other" class="form-check-input" type="checkbox" value="">\
        <span class = "no-select form-check-option">Other</span></label>\
        <label class="form-check-label">';

        itemRequestsOption.className = "btn btn-primary outfit-button cell-button";
        generalOption.className = "btn btn-primary outfit-button cell-button";
        feedbackOption.className = "btn btn-primary outfit-button cell-button selected-contact-option";

        document.getElementById("final-form-header").innerText = "Your Feedback";
        document.getElementById("final-form-message").placeholder = "Enter feedback";

        formAdditionStatus = "feedback";
    }
    else if(selection == "general")
    {
        formAddition.innerHTML = '';
        document.getElementById("final-form-header").innerText = "Your Message";
        document.getElementById("final-form-message").placeholder = "Enter message";

        itemRequestsOption.className = "btn btn-primary outfit-button cell-button";
        generalOption.className = "btn btn-primary outfit-button cell-button selected-contact-option";
        feedbackOption.className = "btn btn-primary outfit-button cell-button";

        formAdditionStatus = "general";
    }
}

function closeMailingList()
{
    document.getElementById("mailing-list-panel").className = "col col-12 mailing-list-panel text-center animated fadeOutUp";
    document.getElementById("marginPush").className = "animateMarginTop margin-top-push-update";

    //document.getElementById("mailing-list-panel").remove();
}

function selectOwlColor(color)
{
    if(color == "green")
    {
        document.getElementById("owl-title").innerText = "Green Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468280782.png";
        document.getElementById("green-option").className = "color-option green-option active-border";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "yellow")
    {
        document.getElementById("owl-title").innerText = "Yellow Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468280824.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option active-border";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "blue")
    {
        document.getElementById("owl-title").innerText = "Blue Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468285797.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option active-border";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "orange")
    {
        document.getElementById("owl-title").innerText = "Orange Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468280907.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option active-border";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "brown")
    {
        document.getElementById("owl-title").innerText = "Cream/Brown Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/20160708-105925_orig.jpg";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option active-border";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "red")
    {
        document.getElementById("owl-title").innerText = "Red/Pink Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/20160708-122857_orig.jpg";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option active-border";
        document.getElementById("purple-option").className = "color-option purple-option";
    }
    else if(color == "purple")
    {
        document.getElementById("owl-title").innerText = "Purple Owl";
        document.getElementById("owl").src = "http://nomibobi.weebly.com/uploads/5/5/1/8/55181199/1468774373.png";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
        document.getElementById("orange-option").className = "color-option orange-option";
        document.getElementById("brown-option").className = "color-option brown-option";
        document.getElementById("red-option").className = "color-option red-option";
        document.getElementById("purple-option").className = "color-option purple-option active-border";
    }
}
