var planes = [
   "Academy at Tolaria West",
   "Agyrem",
   "Bant",
   "Cliffside Market",
   "Eloren Wilds",
   "Feeding Grounds",
   "Fields of Summer",
   "Glimmervoid Basin",
   "Goldmeadow",
   "Grixis",
   "Immersturm",
   "Isle of Vesuva",
   "Izzet Steam Maze",
   "Krosa",
   "Lethe Lake",
   "Llanowar",
   "Minamo",
   "Murasa",
   "Naar Isle",
   "Naya",
   "Otaria",
   "Panopticon",
   "Pools of Becoming",
   "Raven's Run",
   "Sanctum of Serra",
   "Sea of Sand",
   "Shiv",
   "Skybreen",
   "Sokenzan",
   "Stronghold Furnace",
   "Tazeem",
   "The ©¡ther Flues",
   "The Dark Barony",
   "The Eon Fog",
   "The Fourth Sphere",
   "The Great Forest",
   "The Hippodrome",
   "The Maelstrom",
   "Turri Island",
   "Undercity Reaches",
   "Velis Vel",
   "Akoum",
   "Aretopolis",
   "Astral Arena",
   "Bloodhill Bastion",
   "Edge of Malacol",
   "Furnace Layer",
   "Gavony",
   "Glen Elendra",
   "Grand Ossuary",
   "Grove of the Dreampods",
   "Hedron Fields of Agadeem",
   "Jund",
   "Kessig",
   "Kharasha Foothills",
   "Kilnspire District",
   "Lair of the Ashen Idol",
   "Mount Keralia",
   "Nephalia",
   "Norn's Dominion",
   "Onakke Catacomb",
   "Orochi Colony",
   "Orzhova",
   "Prahv",
   "Quicksilver Sea",
   "Selesnya Loft Gardens",
   "Stairs to Infinity",
   "Stensia",
   "Takenuma",
   "Talon Gates",
   "The Zephyr Maze",
   "Trail of the Mage-Rings",
   "Truga Jungle",
   "Windriddle Palaces"
];


function getNextPlaneUrl() {
    var randidx = Math.floor(Math.random() * planes.length);
    return "http://mtgimage.com/card/" + planes[randidx] + ".jpg";
}

function changePlane() {
    var div = document.getElementById("planeimg");
    if (div.childNodes.length != 0) {
        div.removeChild(div.childNodes.item(0));
    }

    var img = document.createElement("img");
    var url = getNextPlaneUrl();
    img.src = url;
    div.appendChild(img);

    $('.img-container').find('img').each(function(){
        var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    });        
}

