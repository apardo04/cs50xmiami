var like = "<img src='/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/extras/like.gif'/>";
var user = 1;
var user2 = 2;
var hero = [];
var item = [];
var support = [];
var support3 = [];

// -------- Hero JS -------- //
var spongegar = {name: 'SpongeGar', hp: 170, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/spongegar.png', m1: 'React', m1_energy: 1, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, during your opponents next turn, prevent all damage done to spongegar.', m2: 'Savage', m2_energy: 2, m2_dmg: 60, m2_effect: '', energy: 0, energy_left: 0};
var datboi = {name: 'Dat Boi', hp: 160, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/datboi.png', m1: 'Ohh Shit', m1_energy: 2, m1_dmg: 30, m1_effect: 'Waddup now does +10 more damage(stacks)', m2: 'Waddup', m2_energy: 4, m2_dmg: 60, m2_effect: '', energy: 0, energy_left: 0};
var pepe = {name: 'Pepe', hp: 120, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/pepe.png', m1: 'Feels Bad Man', m1_energy: 1, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, this attack does +10 damage. <br> Tails, this attack does nothing.', m2: 'Evolve: Final Form Pepe', m2_energy: 4, m2_dmg: 40, m2_effect: '', energy: 0, energy_left: 0};
var finalFormPepe = {name: 'Final Form Pepe', hp: 170, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/finalFormPepe.png', m1: 'You Fool', m1_energy: 2, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, this attack does +20 damage. <br> Tails, this attack does nothing.', m2: 'True Power', m2_energy: 4, m2_dmg: 60, m2_effect: '', energy: 0, energy_left: 0};
var doge = {name: "Doge", hp: 150, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/doge.png', m1: 'Such Attack', m1_energy: 2, m1_dmg: 30, m1_effect: '', m2: 'So Wow', m2_energy: 4, m2_dmg: 60, m2_effect: 'If "Such Attack" was used last turn<br>"So Wow" does +20 dmg this turn.', energy: 0, energy_left: 0};
hero[0] = spongegar; hero[1] = datboi; hero[2] = pepe; hero[3] = finalFormPepe; hero[4] = doge;
function userCardPrint() {
  $('#hero-name').text(hero[user].name);
  $('#hero-hp').text(hero[user].hp);
  $("#hero-img").attr("src", hero[user].img);
  $('#move1-name').text(hero[user].m1);
  for (var i = 0; i < hero[user].m1_energy; i++) {
    $('#move1-cost').prepend(like);
  }
  $('#move1-dmg').text(hero[user].m1_dmg);
  $('#move1-effect').html(hero[user].m1_effect);
  $('#move2-name').text(hero[user].m2);
  for (var i = 0; i < hero[user].m2_energy; i++) {
    if (user == 2) {
      $('#move2b-cost').prepend(like);
      $('#move2-cost').hide();
    }
    else {
      $('#move2-cost').prepend(like);
    }
  }
  $('#move2-dmg').text(hero[user].m2_dmg);
  $('#move2-effect').html(hero[user].m2_effect);

  $('#menu-move').text(hero[user].m1);
  $('#menu-move2').text(hero[user].m2);
}

// User2 Hero JS
function user2CardPrint() {
  $('#hero-name2').text(hero[user2].name);
  $('#hero-hp2').text(hero[user2].hp);
  $("#hero-img2").attr("src", hero[user2].img);
  $('#move1-name2').text(hero[user2].m1);
  for (var i = 0; i < hero[user2].m1_energy; i++) {
    $('#move1-cost2').prepend(like);
  }
  $('#move1-dmg2').text(hero[user2].m1_dmg);
  $('#move1-effect2').html(hero[user2].m1_effect);
  $('#move2-name2').text(hero[user2].m2);
  for (var i = 0; i < hero[user2].m2_energy; i++) {
    if (user2 == 2 || user2 == 3) {
      $('#move2b-cost2').prepend(like);
      $('#move2-cost2').hide();
    }
    else {
      $('#move2-cost2').prepend(like);
    }
  }
  $('#move2-dmg2').text(hero[user2].m2_dmg);
  $('#move2-effect2').html(hero[user2].m2_effect);

  $('#menu2-move').text(hero[user2].m1);
  $('#menu2-move2').text(hero[user2].m2);
}

// -------- Item JS -------- //
var dealWithIt = {name: 'Deal With It', img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/dealWithIt.png', effect: 'Heal +20 HP <br> +1 Like'};
var scumBagSteveHat = {name: 'Scumbag Steve Hat', img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/ScumBagSteveHat.png', effect: 'Opponent losses 1 Like <br> Attached: +10 armor'};
var nokia = {name: "Nokia Phone", img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/nokia.png', effect: '+20 Armor'}
var horseHead = {name: "Horse Head", img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/horseMask.png', effect: "When your opponent attacks,<br> they take 10 damage <br> out of confusion."}
item[0] = dealWithIt; item[1] = scumBagSteveHat; item[2] = nokia; item[3] = horseHead;
var itemCount = item.length - 1;

// -------- 1 Like Support JS -------- //
var meGusta = {name: 'Me Gusta', hp: 40, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/megusta.png', effect: '+10 HP<br>While Active:<br>+10 Damage'};
var foreverAlone = {name: 'Forever Alone', hp: 20,img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/foreverAlone.png', effect: 'If this is your only support:<br>+ 20 damage'};
support[0] = meGusta; support[1] = foreverAlone;
var supportCount = support.length -1;

// -------- 3 Like Support JS -------- //
var ifYouKnowWhatIMean = {name: 'If You know What I Mean', hp: 30, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/ifyouknowhatimean.png', effect: '+10 Armor <br> Summon a second Support'}
var steamSale = {name: "Steam Sale", hp: 40, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/steamSale.png', effect: 'Your attacks cost 1 less like'}
support3[0] = ifYouKnowWhatIMean; support3[1] = steamSale;
var support3Count = support3.length -1;
