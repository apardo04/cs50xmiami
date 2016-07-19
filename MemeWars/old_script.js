$( document ).ready(function() {
  var msg = $('#messages');
  var like = "<img src='/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/extras/like.gif'/>";
  var user = 2;
  var user2 = 1;
  var hero = [];
  var item = [];
  var support = [];

  // -------- Hero JS -------- //
  var spongegar = {name: 'SpongeGar', hp: 130, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/spongegar.png', m1: 'React', m1_energy: 1, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, during your opponents next turn, prevent all damage done to spongegar.', m2: 'Savage', m2_energy: 2, m2_dmg: 60, m2_effect: '', energy: 0};
  var datboi = {name: 'Dat Boi', hp: 120, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/datboi.png', m1: 'Ohh Shit', m1_energy: 2, m1_dmg: 30, m1_effect: 'Waddup now does +10 more damage(stacks)', m2: 'Waddup', m2_energy: 4, m2_dmg: 60, m2_effect: '', energy: 0};
  var pepe = {name: 'Pepe', hp: 130, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/pepe.png', m1: 'Feels Bad Man', m1_energy: 1, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, this attack does +20 damage. <br> Tails, this attack does nothing.', m2: 'Evolve: Final Form Pepe', m2_energy: 4, m2_dmg: 60, m2_effect: '', energy: 0};
  var finalFormPepe = {name: 'Final Form Pepe', hp: 160, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/finalFormPepe.png', m1: 'You Fool', m1_energy: 2, m1_dmg: 20, m1_effect: 'Flip a coin. If heads, this attack does +30 damage. <br> Tails, this attack does nothing.', m2: 'True Power', m2_energy: 4, m2_dmg: 60, m2_effect: '', energy: 0};
  var doge = {name: "Doge", hp: 110, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Heroes/doge.png', m1: 'Such Attack', m1_energy: 2, m1_dmg: 30, m1_effect: '', m2: 'So Wow', m2_energy: 4, m2_dmg: 60, m2_effect: 'If "Such Attack" was used last turn<br>"So Wow" does +20 dmg this turn.', energy: 0};
  hero[0] = spongegar; hero[1] = datboi; hero[2] = pepe; hero[3] = finalFormPepe; hero[4] = doge;
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

  // User2 Hero JS
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

  // -------- Item JS -------- //
  var dealWithIt = {name: 'Deal With It', img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/dealWithIt.png', effect: 'Heal +20 HP <br> Attached: +1 Like'};
  var scumBagSteveHat = {name: 'Scumbag Steve Hat', img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/ScumBagSteveHat.png', effect: 'Opponent losses 1 Like <br> Attached: +10 armor'};
  var nokia = {name: "Nokia Phone", img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/nokia.png', effect: '+20 Armor'}
  var horseHead = {name: "Horse Head", img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/Items/horseMask.png', effect: "When your opponent attacks,<br> they take 10 damage <br> out of confusion."}
  item[0] = dealWithIt; item[1] = scumBagSteveHat; item[2] = nokia; item[3] = horseHead;
  var itemCount = item.length - 1;

  // -------- Support JS -------- //
  var meGusta = {name: 'Me Gusta', hp: 40, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/megusta.png', effect: '+10 Damage<br>+10 HP'};
  var ifYouKnowWhatIMean = {name: 'If You know What I Mean', hp: 30, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/ifyouknowhatimean.png', effect: '+10 Armor <br> Summon a second Support'}
  var steamSale = {name: "Steam Sale", hp: 40, img: '/Users/adrianpardo/Documents/cs50xmiami/MemeWars/img/supports/steamSale.png', effect: 'Your attacks cost 1 less like'}
  support[0] = meGusta; support[1] = ifYouKnowWhatIMean; support[2] = steamSale;
  var supportCount = support.length -1;

  // ------- Local Play -------- ///
  function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0);
  }
  function randomG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  function scroll() {
    msg.animate({scrollTop: msg.prop("scrollHeight")}, 500);
  }
  function datBoi(user) {
    if (userTurn) {
      if (coinFlip()) {
        hero[user].m2_dmg += 10;
        $('#move2-dmg').text(hero[user].m2_dmg);
        msg.append($('<li>').text("Coin flip result: Heads"));
        msg.append($('<li>').text(hero[user].m2 + " now does " + hero[user].m2_dmg + " damage"));
      }
      else {
        msg.append($('<li>').text("Coin flip result: Tails"));
      }
    }
    else {
      if (coinFlip()) {
        hero[user2].m2_dmg += 10;
        $('#move2-dmg2').text(hero[user2].m2_dmg);
        msg.append($('<li>').text("Coin flip result: Heads"));
        msg.append($('<li>').text(hero[user2].m2 + " now does " + hero[user2].m2_dmg + " damage"));
      }
      else {
        msg.append($('<li>').text("Coin flip result: Tails"));
      }
    }
  }

  var userItem = 0;
  var userSupport = 0;
  var user2Support2 = 0;
  var userItemAttached =  0; // How many items are attached
  var userSupportSummoned = 0; // How many supports have been summoned
  var user2Item = 0;
  var user2Support = 0;
  var user2Support2 = 0;
  var user2ItemAttached =  0;
  var user2SupportSummoned = 0;
  var userTurn = true; // true: user1's turn, false: user2
  var game = true;
  msg.append($('<li>').text(hero[user].name + " is Heads."));
  msg.append($('<li>').text(hero[user2].name + " is Tails."));
  if (coinFlip()) {
    msg.append($('<li>').text("Coin flip result: Heads"));
    msg.append($('<li>').text(hero[user].name + " will go first"));
  }
  else {
    msg.append($('<li>').text("Coin flip result: Tails"));
    msg.append($('<li>').text(hero[user2].name + " will go first"));
  }

  if (game) {
    // User JS
    $("#menu-like").click(function() {
      if (userTurn) {
        hero[user].energy += 1;
        $('#hero-energy').prepend(like);
        msg.append($('<li>').text(hero[user].name + " now has " + hero[user].energy + " like(s)"));
        scroll();
        userTurn = false;
      }
    });
    $("#menu-move").click(function() {
      if (userTurn) {
        if (hero[user].energy >= hero[user].m1_energy) {
          hero[user2].hp -= hero[user].m1_dmg;
          $('#hero-hp2').text(hero[user2].hp);
          msg.append($('<li>').text(hero[user].name + " used " + hero[user].m1));
          msg.append($('<li>').text(hero[user2].name + " took " + hero[user].m1_dmg + " damage"));
          // Dat Boi's ohh shit
          if (user == 1)
            datBoi();
          // Pepe's Final Form Evolve
          if (user == 2) {

          }
          scroll();
          userTurn = false;
          if (hero[user2].hp <= 0) {
            game = false;
            msg.append($('<li>').text(hero[user].name + " Wins!"));
            alert(hero[user].name + " Wins!");
          }
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    });
    $("#menu-move2").click(function() {
      if (userTurn) {
        if (hero[user].energy >= hero[user].m2_energy) {
          hero[user2].hp -= hero[user].m2_dmg;
          $('#hero-hp2').text(hero[user2].hp);
          msg.append($('<li>').text(hero[user].name + " used " + hero[user].m2));
          msg.append($('<li>').text(hero[user2].name + " took " + hero[user].m2_dmg + " damage"));
          scroll();
          userTurn = false;
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    });
    $("#menu-item").click(function() {
      if (userTurn) {
        if (userItemAttached == 0) {
          userItem = randomG(0, itemCount);
          console.log("user item = " + userItem);
          msg.append($('<li>').text(hero[user].name + " attached " + item[userItem].name));
          scroll();
          $('#item-name').text(item[userItem].name);
          $("#item-img").attr("src", item[userItem].img);
          $('#item-effect').html(item[userItem].effect);
          userItemAttached++;
          userTurn = false;
        }
        else {
          alert("You can only have one item attached.");
        }
      }
    });
    $("#menu-support").click(function() {
      if (userTurn) {
        if (userSupportSummoned == 0) {
          userSupport = randomG(0, supportCount);
          console.log("user supp = " + userSupport);
          msg.append($('<li>').text(hero[user].name + " summoned " + support[userSupport].name));
          scroll();
          $('#support-name').text(support[userSupport].name);
          $('#support-hp').text(support[userSupport].hp);
          $('#support-img').attr("src", support[userSupport].img);
          $('#support-effect').html(support[userSupport].effect);
          userSupportSummoned++;
          userTurn = false;
        }
        else if (userSupportSummoned == 1){
          do {
            userSupport2 = randomG(0, supportCount);
          } while (userSupport == userSupport2);
          msg.append($('<li>').text(hero[user].name + " summoned " + support[userSupport2].name));
          scroll();
          $('#support2-name').text(support[userSupport2].name);
          $('#support2-hp').text(support[userSupport2].hp);
          $('#support2-img').attr("src", support[userSupport2].img);
          $('#support2-effect').html(support[userSupport2].effect);
          userSupportSummoned++;
          userTurn = false;
        }
        else {
          alert("You can only have 2 supports summoned.")
        }
      }
    });

    // User2 JS
    $("#menu2-like").click(function() {
      if (!userTurn) {
        hero[user2].energy += 1;
        $('#hero-energy2').prepend(like);
        msg.append($('<li>').text(hero[user2].name + " now has " + hero[user2].energy + " like(s)"));
        scroll();
        userTurn = true;
      }
    });
    $("#menu2-move").click(function() {
      if (!userTurn) {
        if (hero[user2].energy >= hero[user2].m1_energy) {
          hero[user].hp -= hero[user2].m1_dmg;
          $('#hero-hp').text(hero[user].hp);
          msg.append($('<li>').text(hero[user2].name + " used " + hero[user2].m1));
          msg.append($('<li>').text(hero[user].name + " took " + hero[user2].m1_dmg + " damage"));
          if (user2 == 1)
            datBoi();
          scroll();
          userTurn = true;
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    });
    $("#menu2-move2").click(function() {
      if (!userTurn) {
        if (hero[user2].energy >= hero[user2].m2_energy) {
          hero[user].hp -= hero[user2].m2_dmg;
          $('#hero-hp').text(hero[user].hp);
          msg.append($('<li>').text(hero[user2].name + " used " + hero[user2].m2));
          msg.append($('<li>').text(hero[user].name + " took " + hero[user2].m2_dmg + " damage"));
          scroll();
          userTurn = true;
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    });
    $("#menu2-item").click(function() {
      if (!userTurn) {
        if (user2ItemAttached == 0) {
          user2Item = randomG(0, itemCount);
          console.log("user2 item = " + user2Item);
          msg.append($('<li>').text(hero[user2].name + " attached " + item[user2Item].name));
          scroll();
          $('#item-name2').text(item[user2Item].name);
          $("#item-img2").attr("src", item[user2Item].img);
          $('#item-effect2').html(item[user2Item].effect);
          user2ItemAttached++;
          userTurn = true;
        }
        else {
          alert("You can only have one item attached.");
        }
      }
    });
    $("#menu2-support").click(function() {
      if (!userTurn) {
        if (user2SupportSummoned == 0) {
          user2Support = randomG(0, supportCount);
          console.log("user2 supp = " + user2Support);
          msg.append($('<li>').text(hero[user2].name + " summoned " + support[user2Support].name));
          scroll();
          $('#support-name2').text(support[user2Support].name);
          $('#support-hp2').text(support[user2Support].hp);
          $('#support-img2').attr("src", support[user2Support].img);
          $('#support-effect2').html(support[user2Support].effect);
          user2SupportSummoned++;
          userTurn = true;
        }
        else if (user2SupportSummoned == 1){
          do {
            user2Support2 = randomG(0, supportCount);
            console.log("user2 supp2 = " + user2Support2);
          } while (userSupport == userSupport2);
          msg.append($('<li>').text(hero[user2].name + " summoned " + support[user2Support2].name));
          scroll();
          $('#support2-name2').text(support[user2Support2].name);
          $('#support2-hp2').text(support[user2Support2].hp);
          $('#support2-img2').attr("src", support[user2Support2].img);
          $('#support2-effect2').html(support[user2Support2].effect);
          user2SupportSummoned++;
          userTurn = true;
        }
        else {
          alert("You can only have 2 supports summoned.")
        }
      }
    });
  }
});
