$( document ).ready(function() {
  var like = "<img src='/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/extras/like.gif'/>";
  var user = 0;
  var itemDeck = 0;
  var supportDeck = 1;
  var hero = [];
  var item = [];
  var support = [];
  // Hero JS
  var spongegar = {name: 'SpongeGar', hp: 130, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/spongegar.png', m1: 'React', m1_energy: 1, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, during your opponents next turn, prevent all damage done to spongegar.', m2: 'Savage', m2_energy: 2, m2_dmg: 60, m2_effect: ''};
  var datboi = {name: 'Dat Boi', hp: 120, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/datboi.png', m1: 'Ohh Shit', m1_energy: 2, m1_dmg: 30, m1_effect: 'Waddup now does +10 more damage(stacks)', m2: 'Waddup', m2_energy: 4, m2_dmg: 60, m2_effect: ''};
  var pepe = {name: 'Pepe', hp: 130, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/pepe.png', m1: 'Feels Bad Man', m1_energy: 1, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, this attack does +20 damage. <br> Tails, this attack does nothing.', m2: 'Evolve: Final Form Pepe', m2_energy: 4, m2_dmg: 60, m2_effect: ''};
  var finalFormPepe = {name: 'Final Form Pepe', hp: 160, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/finalFormPepe.png', m1: 'You Fool', m1_energy: 2, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, this attack does +30 damage. <br> Tails, this attack does nothing.', m2: 'True Power', m2_energy: 4, m2_dmg: 60, m2_effect: ''};
  hero[0] = spongegar; hero[1] = datboi; hero[2] = pepe; hero[3] = finalFormPepe;
  user = 2;
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
    if (user == 2 || user == 3) {
      $('#move2b-cost').prepend(like);
      $('#move2-cost').hide();
    }
    else {
      $('#move2-cost').prepend(like);
    }
  }
  $('#move2-dmg').text(hero[user].m2_dmg);
  $('#move2-effect').text(hero[user].m2_effect);

  // Item JS
  var dealWithIt = {name: 'Deal With It', img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/dealWithIt.png', effect: 'Heal +20 HP <br> Attached: +1 Like'};
  var scumBagSteveHat = {name: 'Scumbag Steve Hat', img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/ScumBagSteveHat.png', effect: 'Opponent losses 1 Like <br> Attached: +10 armor'};
  item[0] = dealWithIt; item[1] = scumBagSteveHat;
  itemDeck = 0;
  $('#item-name').text(item[itemDeck].name);
  $("#item-img").attr("src", item[itemDeck].img);
  $('#item-effect').html(item[itemDeck].effect);

  // Support JS
  var meGusta = {name: 'Me Gusta', hp: 40, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/megusta.png', effect: '+10 Damage<br>+10 HP'};
  var ifYouKnowWhatIMean = {name: 'If You know What I Mean', hp: 30, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/ifyouknowhatimean.png', effect: '+10 Armor <br> Summon a second Support'}
  support[0] = meGusta; support[1] = ifYouKnowWhatIMean;
  $('#support-name').text(support[supportDeck].name);
  $('#support-hp').text(support[supportDeck].hp);
  $("#support-img").attr("src", support[supportDeck].img);
  $('#support-effect').html(support[supportDeck].effect);
  console.log(spongegar.name);
});
