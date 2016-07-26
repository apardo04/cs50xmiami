$( document ).ready(function() {
  var msg = $('#messages');
  var userItem = 0;
  var userSupp = 0;
  var userSupp2 = 0;
  var userItemsAttached =  0; // How many items are attached
  var userSuppsSummoned = 0; // How many supports have been summoned
  var userSuppDmg = 0;
  var user2Item = 0;
  var user2Supp = 0;
  var user2Supp2 = 0;
  var user2ItemsAttached =  0;
  var user2SuppsSummoned = 0;
  var user2SuppDmg = 0;
  var userTurn; // true: user1's turn, false: user2
  var attacked = false; // False: Hasn't attacked this turn
  var extraDmg = 0; // Exrta damage for current turn

  // ------- Local Play Functions-------- ///
  function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0);
  }
  function randomG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function scroll() {
    msg.animate({scrollTop: msg.prop("scrollHeight")}, 500);
  }
  function endTurn() {
    if (userTurn) {
      msg.append($('<li>').text(hero[user2].name + "'s turn"));
      if (hero[user2].energy < 6) {
        hero[user2].energy++;
        hero[user2].energy_left = hero[user2].energy;
        $('#hero-energy2').append(like);
      }
      msg.append($('<li>').text(hero[user2].name + " has " + hero[user2].energy_left + " like's"));
      scroll();
      extraDmg = 0;
      attacked = false;
      userTurn = false;
    }
    else {
      msg.append($('<li>').text(hero[user].name + "'s turn"));
      if (hero[user].energy < 6) {
        hero[user].energy++;
        hero[user].energy_left = hero[user].energy;
        $('#hero-energy').append(like);
      }
      msg.append($('<li>').text(hero[user].name + " has " + hero[user].energy_left + " like's"));
      scroll();
      extraDmg = 0;
      attacked = false;
      userTurn = true;
    }
  }
  function turnCheck() {
    if (userTurn) {
      if (hero[user2].hp <= 0) {
        $('#hero-hp2').text("0");
        msg.append($('<li>').text(hero[user].name + " Wins!"));
        alert(hero[user].name + " Wins!");
        //insert sound of silence
      }
    }
    else {
      if (hero[user].hp <= 0) {
        $('#hero-hp').text("0");
        msg.append($('<li>').text(hero[user2].name + " Wins!"));
        alert(hero[user2].name + " Wins!");
        //insert sound of silence
      }
    }
  }
  function extraDmgTurn() {
      if (coinFlip()) {
        if (user == 2 || user2 == 2) // Pepe
          extraDmg += 10;
        if (user == 3 || user2 == 3) // Final Form Pepe
          extraDmg += 20;
        msg.append($('<li>').text("Coin flip result: Heads"));
      }
      else {
        if (user == 2) // Pepe
          extraDmg = -hero[user].m1_dmg
        else if (user2 == 2)
          extraDmg = -hero[user2].m1_dmg
        msg.append($('<li>').text("Coin flip result: Tails"));
      }
  }
  function evolve() {
    if (userTurn) {
      user++;
      if (user == 3)
        hero[user].hp += (hero[user - 1].hp - 120);
      hero[user].energy = hero[user - 1].energy;
      hero[user].energy_left = hero[user - 1].energy_left;
      msg.append($('<li>').text(hero[user - 1].name + " has evolved into " + hero[user].name));
      userCardPrint();
    }
    else {
      user2++;
      if (user2 == 3) {
        hero[user2].hp += (hero[user2 - 1].hp - 120);
      hero[user2].energy = hero[user2 - 1].energy;
      hero[user2].energy_left = hero[user2 - 1].energy_left;
      msg.append($('<li>').text(hero[user2 - 1].name + " has evolved into " + hero[user2].name));
      user2CardPrint();
      }
    }
  }
  function datBoi() {
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
  function extraDmgSupp(supp) {
      switch (supp) {
        case 0:
          extraDmg += 10;
          break;
        case 1:
          extraDmg += 20;
          break;
      }
  }

  // ------- Local Play-------- ///
  userCardPrint();
  user2CardPrint();
  msg.append($('<li>').text(hero[user].name + " is Heads."));
  msg.append($('<li>').text(hero[user2].name + " is Tails."));
  if (coinFlip()) {
    msg.append($('<li>').text("Coin flip result: Heads"));
    msg.append($('<li>').text(hero[user].name + " will go first"));
    hero[user].energy++;
    hero[user].energy_left = hero[user].energy;
    $('#hero-energy').append(like);
    msg.append($('<li>').text(hero[user].name + " has " + hero[user].energy + " like"));
    userTurn = true;
  }
  else {
    msg.append($('<li>').text("Coin flip result: Tails"));
    msg.append($('<li>').text(hero[user2].name + " will go first"));
    hero[user2].energy++;
    hero[user2].energy_left = hero[user2].energy;
    $('#hero-energy2').append(like);
    msg.append($('<li>').text(hero[user2].name + " has " + hero[user2].energy + " like"));
    userTurn = false;
  }

  $("#menu-move").click(function() {
    if (!attacked) {
      if (userTurn) {
        if (hero[user].energy_left >= hero[user].m1_energy) {
          msg.append($('<li>').text(hero[user].name + " used " + hero[user].m1));
          if ((userSuppsSummoned > 0 && support[userSupp].name == support[0].name) || (userSuppsSummoned == 2 && support[userSupp2].name == support[0].name))
            extraDmgSupp(0);
          console.log(userSuppsSummoned == 1 && support[userSupp].name == support[1].name);
          if (userSuppsSummoned == 1 && support[userSupp].name == support[1].name)
            extraDmgSupp(1);
          if (user == 2 || user == 3) // Pepe's 'Feels Bad Man' / Final Form Pepe's 'You Fool'
            extraDmgTurn();
          msg.append($('<li>').text(hero[user2].name + " took " + (hero[user].m1_dmg + extraDmg) + " damage"));
          hero[user2].hp -= hero[user].m1_dmg + extraDmg;
          $('#hero-hp2').text(hero[user2].hp);
          if (user == 1) // Dat Boi's ohh shit
            datBoi();
          hero[user].energy_left -= hero[user].m1_energy;
          scroll();
          attacked = true;
          turnCheck();
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    }
    else {
      alert("You can only attack once per turn.");
    }
  });
  $("#menu-move2").click(function() {
    if (!attacked) {
      if (userTurn) {
        if (hero[user].energy_left >= hero[user].m2_energy) {
          msg.append($('<li>').text(hero[user].name + " used " + hero[user].m2));
          if ((userSuppsSummoned > 0 && support[userSupp].name == support[0].name) || (userSuppsSummoned == 2 && support[userSupp2].name == support[0].name))
            extraDmgSupp(0);
          if (userSuppsSummoned == 1 && support[userSupp].name == support[1].name)
            extraDmgSupp(1);
          msg.append($('<li>').text(hero[user2].name + " took " + (hero[user].m2_dmg + extraDmg) + " damage"));
          hero[user2].hp -= hero[user].m2_dmg + extraDmg;
          $('#hero-hp2').text(hero[user2].hp);
          hero[user].energy_left -= hero[user].m2_energy;
          if (user == 2)
            evolve();
          scroll();
          attacked = true;
          turnCheck();
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    }
    else {
      alert("You can only attack once per turn.");
    }
  });
  $("#menu-item").click(function() {
    if (userTurn) {
      if (hero[user].energy_left >= 2) {
        if (userItemsAttached == 0) {
          userItem = randomG(0, itemCount);
          msg.append($('<li>').text(hero[user].name + " attached " + item[userItem].name));
          scroll();
          $('#item-name').text(item[userItem].name);
          $("#item-img").attr("src", item[userItem].img);
          $('#item-effect').html(item[userItem].effect);
          hero[user].energy_left -= 2;
          userItemsAttached++;
        }
        else {
          alert("You can only have one item attached.");
        }
      }
      else {
        alert("You don't have enough likes.")
      }
    }
  });
  $("#menu-1support").click(function() {
    if (userTurn) {
      if (hero[user].energy_left > 0) {
        if (userSuppsSummoned == 0) {
          userSupp = randomG(0, supportCount);
          msg.append($('<li>').text(hero[user].name + " summoned " + support[userSupp].name));
          scroll();
          $('#support-name').text(support[userSupp].name);
          $('#support-hp').text(support[userSupp].hp);
          $('#support-img').attr("src", support[userSupp].img);
          $('#support-effect').html(support[userSupp].effect);
          hero[user].energy_left--;
          if (userSupp == 0) {
            hero[user].hp += 10;
            $('#hero-hp').text(hero[user].hp);
            msg.append($('<li>').text(hero[user].name + " now has " + hero[user].hp + " HP"));
          }
          if (userSupp == 1)
            extraDmgSupp(1);
          userSuppsSummoned++;
        }
        else if (userSuppsSummoned == 1){
          do {
            userSupp2 = randomG(0, supportCount);
            //console.log(support[userSupp].name + " =supp |" + support[userSupp2].name + " = supp2 " + (support[userSupp].name == support[userSupp2].name));
          } while (support[userSupp].name == support[userSupp2].name);
          msg.append($('<li>').text(hero[user].name + " summoned " + support[userSupp2].name));
          scroll();
          $('#support2-name').text(support[userSupp2].name);
          $('#support2-hp').text(support[userSupp2].hp);
          $('#support2-img').attr("src", support[userSupp2].img);
          $('#support2-effect').html(support[userSupp2].effect);
          hero[user].energy_left--;
          if (userSupp2 == 0) {
            hero[user].hp += 10;
            $('#hero-hp').text(hero[user].hp);
            msg.append($('<li>').text(hero[user].name + " now has " + hero[user].hp + " HP"));
          }
          userSuppsSummoned++;
        }
        else {
          alert("You can only have 2 supports summoned.")
        }
      }
      else {
        alert("You don't have enough likes");
      }
    }
  });
  $("#menu-3support").click(function() {
    if (userTurn) {
      if (hero[user].energy_left >= 3) {
        if (userSuppsSummoned == 0) {
          userSupp = randomG(0, support3Count);
          msg.append($('<li>').text(hero[user].name + " summoned " + support3[userSupp].name));
          scroll();
          $('#support-name').text(support3[userSupp].name);
          $('#support-hp').text(support3[userSupp].hp);
          $('#support-img').attr("src", support3[userSupp].img);
          $('#support-effect').html(support3[userSupp].effect);
          hero[user2].energy_left -= 3;
          userSuppsSummoned++;
        }
        else if (userSuppsSummoned == 1) {
          do {
            userSupp2 = randomG(0, support3Count);
          } while (support[userSupp].name == support[userSupp2].name);
          msg.append($('<li>').text(hero[user].name + " summoned " + support3[userSupp2].name));
          scroll();
          $('#support2-name').text(support3[userSupp2].name);
          $('#support2-hp').text(support3[userSupp2].hp);
          $('#support2-img').attr("src", support3[userSupp2].img);
          $('#support2-effect').html(support3[userSupp2].effect);
          hero[user2].energy_left -= 3;
          userSuppsSummoned++;
        }
        else {
          alert("You can only have 2 supports summoned.")
        }
      }
      else {
        alert("You dont have enough like's to summon a 3 cost support.")
      }
    }
  });
  $("#menu-end").click(function() {
    if (userTurn)
      endTurn();
  });

  // User2 JS
  $("#menu2-move").click(function() {
    if (!attacked) {
      if (!userTurn) {
        if (hero[user2].energy_left >= hero[user2].m1_energy) {
          msg.append($('<li>').text(hero[user2].name + " used " + hero[user2].m1));
          if ((user2SuppsSummoned > 0 && support[user2Supp].name == support[0].name) || (user2SuppsSummoned == 2 && support[user2Supp2].name == support[0].name))
            extraDmgSupp(0);
          if (user2SuppsSummoned == 1 && support[user2Supp].name == support[1].name)
            extraDmgSupp(1);
          if (user2 == 2 || user2 == 3) // Pepe's 'Feels Bad Man' / Final Form Pepe's 'You Fool'
            extraDmgTurn();
          msg.append($('<li>').text(hero[user].name + " took " + (hero[user2].m1_dmg + extraDmg) + " damage"));
          hero[user].hp -= hero[user2].m1_dmg + extraDmg;
          $('#hero-hp').text(hero[user].hp);
          if (user2 == 1) // Dat Boi's ohh shit
            datBoi();
          hero[user2].energy_left -= hero[user2].m1_energy;
          scroll();
          attacked = true;
          turnCheck();
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    }
    else {
      alert("You can only attack once per turn.");
    }
  });
  $("#menu2-move2").click(function() {
    if (!attacked) {
      if (!userTurn) {
        if (hero[user2].energy_left >= hero[user2].m2_energy) {
          msg.append($('<li>').text(hero[user2].name + " used " + hero[user2].m2));
          if ((user2SuppsSummoned > 0 && support[user2Supp].name == support[0].name) || (user2SuppsSummoned == 2 && support[user2Supp2].name == support[0].name))
            extraDmgSupp(0);
          msg.append($('<li>').text(hero[user].name + " took " + (hero[user2].m2_dmg + extraDmg) + " damage"));
          hero[user].hp -= hero[user2].m2_dmg + extraDmg;
          $('#hero-hp').text(hero[user].hp);
          hero[user2].energy_left -= hero[user2].m2_energy;
          if (user2 == 2)
            evolve();
          scroll();
          attacked = true;
          turnCheck();
        }
        else {
          alert("You do not have enough likes to do this attack");
        }
      }
    }
    else {
      alert("You can only attack once per turn.");
    }
  });
  $("#menu2-item").click(function() {
    if (!userTurn) {
      if (hero[user2].energy_left >= 2) {
        if (user2ItemsAttached == 0) {
          user2Item = randomG(0, itemCount);
          console.log("user2 item = " + user2Item);
          msg.append($('<li>').text(hero[user2].name + " attached " + item[user2Item].name));
          scroll();
          $('#item-name2').text(item[user2Item].name);
          $("#item-img2").attr("src", item[user2Item].img);
          $('#item-effect2').html(item[user2Item].effect);
          hero[user2].energy_left -= 2;
          user2ItemsAttached++;
        }
        else {
          alert("You can only have one item attached.");
        }
      }
      else {
        alert("You don't have enough likes.")
      }
    }
  });
  $("#menu2-1support").click(function() {
    if (!userTurn) {
      if (hero[user2].energy_left > 0) {
        if (user2SuppsSummoned == 0) {
          user2Supp = randomG(0, supportCount);
          msg.append($('<li>').text(hero[user2].name + " summoned " + support[user2Supp].name));
          scroll();
          $('#support-name2').text(support[user2Supp].name);
          $('#support-hp2').text(support[user2Supp].hp);
          $('#support-img2').attr("src", support[user2Supp].img);
          $('#support-effect2').html(support[user2Supp].effect);
          hero[user2].energy_left--;
          if (user2Supp == 0) {
            hero[user2].hp += 10;
            $('#hero-hp2').text(hero[user2].hp);
            msg.append($('<li>').text(hero[user2].name + " now has " + hero[user2].hp + " HP"));
          }
          if (user2Supp == 1)
            extraDmgSupp(1);
          user2SuppsSummoned++;
        }
        else if (user2SuppsSummoned == 1){
          do {
            user2Supp2 = randomG(0, supportCount);
          } while (support[user2Supp].name == support3[user2Supp2].name);
          msg.append($('<li>').text(hero[user2].name + " summoned " + support[user2Supp2].name));
          scroll();
          $('#support2-name2').text(support[user2Supp2].name);
          $('#support2-hp2').text(support[user2Supp2].hp);
          $('#support2-img2').attr("src", support[user2Supp2].img);
          $('#support2-effect2').html(support[user2Supp2].effect);
          hero[user2].energy_left--;
          if (user2Supp2 == 0) {
            hero[user2].hp += 10;
            $('#hero-hp2').text(hero[user2].hp);
            msg.append($('<li>').text(hero[user2].name + " now has " + hero[user2].hp + " HP"));
          }
          user2SuppsSummoned++;
        }
        else {
          alert("You can only have 2 supports summoned.")
        }
      }
    else {
      alert("You don't have enough likes");
    }
    }
  });
  $("#menu2-3support").click(function() {
    if (!userTurn) {
      if (hero[user2].energy_left >= 3) {
        if (user2SuppsSummoned == 0) {
          user2Supp = randomG(0, support3Count);
          msg.append($('<li>').text(hero[user2].name + " summoned " + support3[user2Supp].name));
          scroll();
          $('#support-name2').text(support3[user2Supp].name);
          $('#support-hp2').text(support3[user2Supp].hp);
          $('#support-img2').attr("src", support3[user2Supp].img);
          $('#support-effect2').html(support3[user2Supp].effect);
          hero[user2].energy_left -= 3;
          user2SuppsSummoned++;
        }
        else if (user2SuppsSummoned == 1){
          do {
            user2Supp2 = randomG(0, support3Count);
          } while (support[user2Supp].name == support3[user2Supp2].name);
          msg.append($('<li>').text(hero[user2].name + " summoned " + support3[user2Supp2].name));
          scroll();
          $('#support2-name2').text(support3[user2Supp2].name);
          $('#support2-hp2').text(support3[user2Supp2].hp);
          $('#support2-img2').attr("src", support3[user2Supp2].img);
          $('#support2-effect2').html(support3[user2Supp2].effect);
          hero[user2].energy_left -= 3;
          user2SuppsSummoned++;
        }
        else {
          alert("You can only have 2 supports summoned.")
        }
      }
      else {
        alert("You dont have enough like's to summon a 3 cost support.")
      }
    }
  });
  $("#menu2-end").click(function() {
    if (!userTurn)
      endTurn();
  });
});
