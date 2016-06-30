#include <iostream>
#include <iomanip>
#include <ctime>
#include <cstdlib>
#include <cmath>
#include <sstream>
#include <string>
using namespace std;
/* TODO:
Make the game GUI, HTML, or mobile?
Switch statements
do/while
link effect
*/
void menuPrint() {
    cout << "\n\n**************************************\n\n\n";
    cout << "|||  SUPER SMASH BROS(C++ Edition) |||\n\n\n";
    cout << "**************************************\n\n";
}

int randomg() {
    return rand() % 6 + 1;
}

void howToPlay(string userName, int userHp, string userM1, int userM1_dmg, string userM1_effect, string userM2, int userM2_dmg, int userEnergy) {
    cout << "\nThis game is simple. First one to 0 HP loses.\n";
    cout << "---------------------------------" << "\n|";
    cout << setw(28) << left << userName << setw(3) << left << userHp << "| <-- HP\n|";
    cout << setw(2) << left << userEnergy << " Energy" << setw(22) << "" << left << "| <-- Energies\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << userM1 << setw(3) << left << userM1_dmg << "| <-- Attack Dmg\n|";
    cout << setw(31) << "*" << "| <-- * = Energy required\n|";
    cout << setw(31) << userM1_effect << "| <-- Attack's ability\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << userM2 << setw(3) << left << userM2_dmg << "| <-- Attack dmg\n|";
    cout << setw(31) <<  "**" << setw(3) << left << "| <-- ** = 2 energy required\n";
    cout << "---------------------------------\n\n";
    cout << "Even: <-- Abilities that say this, will only go through with an even roll of a six sided die.\n\n";
    cout << "Every turn you will have two options:\nTry to gather energy for attacks in the 'Energy phase'\nOr attack the opponent in the 'Attack phase'.\n\n";
}

void cardView(string userName, int userHp, string userM1, int userM1_dmg, string userM1_effect, string userM1_desc, string userM2, int userM2_dmg, int userEnergy) {
    cout << "---------------------------------" << "\n|";
    cout << setw(28) << left << userName << setw(3) << left << userHp << "|\n|";
    cout << setw(2) << left << userEnergy << " Energy" << setw(22) << "" << left << "|\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << userM1 << setw(3) << left << userM1_dmg << "|\n|";
    cout << setw(31) << "*" << "|\n|";
    cout << setw(31) << userM1_effect << "|\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << userM2 << setw(3) << left << userM2_dmg << "|\n|";
    cout << setw(31) <<  "**" << "|\n";
    cout << "---------------------------------\n";
    cout << userM1_desc << "\n\n";
}

void battlePrint(string userName, int userHp, string userM1, int userM1_dmg, string userM1_effect, string userM2, int userM2_dmg, int userEnergy, string cpuName, int cpuHp, string cpuM1, int cpuM1_dmg, string cpuM1_effect, string cpuM2, int cpuM2_dmg, int cpuEnergy) {
    cout << "---------------------------------" << "\n|";
    cout << setw(28) << left << userName << setw(3) << left << userHp << "|\n|";
    cout << setw(2) << left << userEnergy << " Energy" << setw(22) << "" << left << "|\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << userM1 << setw(3) << left << userM1_dmg << "|\n|";
    cout << setw(31) << "*" << "|\n|";
    cout << setw(31) << userM1_effect << "|\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << userM2 << setw(3) << left << userM2_dmg << "|\n|";
    cout << setw(31) <<  "**" << "|\n";
    cout << "---------------------------------\n\n" << "VS\n\n";
    cout << "---------------------------------" << "\n|";
    cout << setw(28) << left << cpuName << setw(3) << left << cpuHp << "|\n|";
    cout << setw(2) << left << cpuEnergy << " Energy" << setw(22) << "" << left << "|\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << cpuM1 << setw(3) << left << cpuM1_dmg << "|\n|";
    cout << setw(31) << "*" <<  "|\n|";
    cout << setw(31) << cpuM1_effect << "|\n|";
    cout << setw(31) << "" << "|\n|";
    cout << setw(28) << left << cpuM2 << setw(3) << left << cpuM2_dmg << "|\n|";
    cout << setw(31) <<  "**" << "|\n";
    cout << "---------------------------------\n\n";
}

int hpControl(int hp) {
    return (hp <= 0) ? 0 : hp;
}

int sonicBoom(bool sonic, int attk) {
    return (sonic) ? 0 : attk;
}

int main()
{
    srand(time(NULL));
    const int HERO_COUNT = 8;
    string input = "";
    int menu;
    int user;
    int cpu;
    int die1 = 0; // Holds die value
    int user_move;
    int user_attk;
    bool ready = false;
    bool user_turn = false;
    bool cpu_turn = false;
    bool user_sonic = false; // Sonic Boom
    bool cpu_sonic = false;
    struct Heros{
        string name;
        int hp;
        string m1;
        int m1_dmg;
        int m1_energy;
        string m1_effect;
        string m1_desc;
        string m2;
        int m2_dmg;
        int m2_energy;
        int energy;
    };
    Heros hero[HERO_COUNT];
    Heros mario = {"Mario", 120, "Power Up", 20, 1, " Even: +1 Energy & +20 HP", "Ability: On an even roll, you gain 1 energy and 20 HP.", "Fireball", 60, 2, 0};
    Heros donkeyKong = {"Donkey Kong", 140, "Barrel Throw", 30, 1, " Even: Opp -1 Energy", "Ability: On an even roll, the opponent loses 1 energy.", "Smash!",60, 2 ,0};
    Heros kingKoopa = {"King Koopa", 180, "Shell Spin", 20, 1, "Even: +1 Energy, Opp -1", "Ability: On an even roll, you gain 1 energy, and the opponent loses 1 energy.", "Ground Pound", 40, 2, 0};
    Heros samus = {"Samus", 130, "Laser Charge", 10, 1, " Zero Laser +20 dmg", "Ability: Zero Laser's base damage is increased by 20(This ability stacks).", "Zero Laser", 60, 2, 0};
    Heros sonic = {"Sonic", 130, "Sonic Boom", 20, 1, "Even:Opp next attack = 0 dmg", "Ability: On an even roll, Your opponents next attack won't do any damage to Sonic.", "Spin Dash", 60, 2, 0};
    Heros link = {"Link", 130, "Gale Boomerang", 30, 1, "This attack now does +10 dmg", "Ability: Gale Boomerang's attack base increases by 10(This ability stacks)", "Triforce Slash", 60, 2, 0};
    Heros bulbasaur = {"Bulbasaur", 100, "Leech Seed/Rare Candy", 10, 1, "+10 HP,Even: Evolve to Venusaur", "Ability: Gain +10 HP. On an even roll, Bulbasaur uses a Rare Candy to evolve into Venusaur.", "Vine Whip", 40, 2, 0};
    Heros venusaur = {"Venusaur", 160, "Growth", 10, 1, " Even: +1 Energy", "Venusaur must be evolved from Bulbasaur\nAbility: On an even roll, you gain 1 energy.", "Solar Beam", 80, 2, 0};
    hero[0] = mario; hero[1] = donkeyKong; hero[2] = kingKoopa; hero[3] = samus;hero[4] = sonic;hero[5] = link;hero[6] = bulbasaur;hero[7] = venusaur;
    // Game Menu
    menuPrint();
    while (!ready) {
        cout << "Menu:\n1. How To Play\n2. View Hero Cards\n3. Play\n";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> menu && menu > 0 && menu <= 3) {
            switch (menu) {
                case 1:
                    howToPlay(hero[menu].name, hero[menu].hp, hero[menu].m1, hero[menu].m1_dmg, hero[menu].m1_effect, hero[menu].m2, hero[menu].m2_dmg, hero[menu].energy);
                    break;
                case 2:
                    cout << "\nWhich hero card would you like to view?\n1. Mario\n2. Donkey Kong\n3. King Koopa\n4. Samus\n5. Sonic\n6. Link\n7. Bublasaur\n8. Venusaur\n";
                    while (true) {
                        getline(cin, input);

                        stringstream myStream(input);
                        if (myStream >> user && user > 0 && user <= HERO_COUNT) {
                            user--;
                            cout << "\nYou selected to view " << hero[user].name << endl;
                            cardView(hero[user].name, hero[user].hp, hero[user].m1, hero[user].m1_dmg, hero[user].m1_effect, hero[user].m1_desc, hero[user].m2, hero[user].m2_dmg, hero[user].energy);
                            break;
                        }
                        cout << "Not a valid choice. Type the number of the hero you would to view and press enter.\n\n";
                        break;
                    }
                    break;
                case 3:
                    ready = true;
                    break;
                default:
                    cout << "Not a valid choice. Type the number of your choice and press enter.\n";
            }
        }
    }
    // Check for valid user hero selection & determine cpu hero
    ready = false;
    while (true) {
        cout << "\nChoose your hero card:\n1. Mario\n2. Donkey Kong\n3. King Koopa\n4. Samus\n5. Sonic\n6. Link\n7. Bublasaur\n";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> user && user > 0 && user <= HERO_COUNT-1) {
            user--;
            cpu = user;
            while(cpu == user) {
                cpu = rand() % HERO_COUNT;
                cout << "cpu == " << cpu << endl;
            }
            break;
        }
        cout << "Not a valid choice. Type the number of your hero and press enter.\n";
    }
    // Print cards being used
    while(true) {
        cout << "\nYou selected " << hero[user].name << "\n" << "Prepare for battle!\n";
        battlePrint(hero[user].name, hero[user].hp, hero[user].m1, hero[user].m1_dmg, hero[user].m1_effect, hero[user].m2, hero[user].m2_dmg, hero[user].energy, hero[cpu].name, hero[cpu].hp, hero[cpu].m1, hero[cpu].m1_dmg, hero[cpu].m1_effect, hero[cpu].m2, hero[cpu].m2_dmg, hero[cpu].energy);
        cout << "Even roll, " << hero[user].name << " goes first. Odd, " << hero[cpu].name << " goes first.\nPress Enter to roll & start the game.\n";
        cin.get();
        break;
    }
    // Roll to see who goes first.
    die1 = randomg();
    if (die1 % 2 != 0){
        user_turn = true;
        cout << "The die rolled a " << die1 << ". " << hero[cpu].name << " will go first\n\n";
    }
    else {
        cout << "The die rolled a " << die1 << ". " << hero[user].name << " will go first\n\n";
    }
    // Battle Loop
    while (!ready) {
        // User Turn
        while (!user_turn) {
            cout << hero[user].name << " has " << hero[user].energy << " energy\nWhat would you like to do?\n1. Energy Phase(Attempt to roll even for an energy)\n2. Attack Phase(Must have an energy)\n3. View Card's\n";
            while (true) {
                getline(cin, input);

                stringstream myStream(input);
                if (myStream >> user_move && user_move > 0 && user_move <= 3) {
                    break;
                }
                cout << "Not a valid choice. Type the number of the phase you would like to go into.\n";
            }
            if (user_move == 1) {
                die1 = randomg();
                cout << endl << hero[user].name << " rolled a " << die1 << endl;
                if (die1 % 2 == 0) {
                    hero[user].energy++;
                    cout << hero[user].name << " now has " << hero[user].energy << " energy\n\n";
                    user_turn = true;
                    cpu_turn = false;
                }
                else {
                    cout << "Roll failed. " << hero[cpu].name << "'s turn\n\n";
                    user_turn = true;
                    cpu_turn = false;
                }
            }
            else if (user_move == 2) {
                if (hero[user].energy == 0) {
                    cout << "\nYou have no energy, you can't attack this turn.\n" << hero[user].name << " enters the energy phase\n";
                    die1 = randomg();
                    cout << hero[user].name <<" rolled a " << die1 << endl;
                    if (die1 % 2 == 0) {
                        hero[user].energy++;
                        cout << hero[user].name << " now has " << hero[user].energy << " energy\n\n";
                        user_turn = true;
                        cpu_turn = false;
                    }
                    else {
                        cout << "Roll failed. " << hero[cpu].name << "'s turn\n\n";
                        user_turn = true;
                        cpu_turn = false;
                    }
                }
                // Attack choice
                else {
                    cout << endl << hero[user].name << " has " << hero[user].energy << " energy to attack with.\n";
                    cout << "Which attack would you like to use?\n1. " << hero[user].m1 << " - " << hero[user].m1_energy << " Energy";
                    cout << "\n2. " << hero[user].m2 << " - " << hero[user].m2_energy << " Energy\n3. Go back\n";
                    while (true) {
                        getline(cin, input);

                        stringstream myStream(input);
                        if (myStream >> user_attk && user_attk > 0 && user_attk <= 3) {
                            break;
                        }
                        cout << "Not a valid choice.\nType the number of the attack you would like to use and press enter.\n\n";
                    }
                    if (user_attk == 1 && hero[user].energy >= hero[user].m1_energy) {
                        cout << endl << hero[user].name << " used " << hero[user].m1 << endl;
                        cout << hero[cpu].name <<  " took " << sonicBoom(cpu_sonic, hero[user].m1_dmg) << " damage.\n"; //cpu_sonicBoom
                        hero[cpu].hp -= sonicBoom(cpu_sonic, hero[user].m1_dmg); //cpu_sonicBoom
                        cpu_sonic = false;
                        cout << hero[cpu].name << " has " << hpControl(hero[cpu].hp) << " HP left.\n\n";
                        //Checking for Mario's Power Up
                        if (user == 0) {
                            die1 = randomg();
                            if (die1 % 2 == 0) {
                                hero[user].energy++;
                                hero[user].hp += 20;
                                cout << hero[user].name << " Power Up rolled a " << die1 << ". Effect went through.\n";
                                cout << hero[user].name << " has " << hero[user].energy << " energy.\n";
                                cout << hero[user].name << " has " << hero[user].hp << " HP.\n\n";
                            }
                            else {
                                cout << hero[user].name << " Power Up rolled a " << die1 << ". Effect didn't go through.\n\n";
                            }
                        }
                        // Checking for DK's Barrel Throw
                        if (user == 1) {
                            if (hero[cpu].energy > 0) {
                                die1 = randomg();
                                if (die1 % 2 == 0) {
                                    hero[cpu].energy--;
                                    cout << "Donkey Kong rolled a " << die1 << ". Effect went through.\n";
                                    cout << hero[cpu].name << " has " << hero[cpu].energy << " energy.\n\n";
                                }
                                else {
                                    cout << "Donkey Kong's Barrel Throw rolled a " << die1 << ". Effect didn't go through.\n\n";
                                }
                            }
                        }
                        // Checking for King Koopa's Shell Spin & Venusaur's Growth
                        if (user == 2 || user == 7) {
                            die1 = randomg();
                            if (die1 % 2 == 0) {
                                hero[user].energy++;
                                cout << hero[user].name << " "  << hero[user].m1 << " rolled a " << die1 << ". Effect went through.\n";
                                cout << hero[user].name << " has " << hero[user].energy << " energy.\n";
                                // i rewrote this on user side
                                if (hero[cpu].energy > 0 && user == 2) {
                                    hero[cpu].energy--;
                                    cout << hero[cpu].name << " has " << hero[cpu].energy << " energy.\n\n";
                                }
                                else {
                                    cout << endl;
                                }
                            }
                            else {
                                    cout << hero[user].name << "'s " << hero[user].m1 << " rolled a " << die1 << ". Effect didn't go through.\n\n";
                            }
                        }
                        // Checking for Samus Laser Charge
                        if (user == 3) {
                            hero[user].m2_dmg += 20;
                            cout << hero[user].m2 << " now does " << hero[user].m2_dmg << " damge.\n\n";
                        }
                        // Checking for Sonic's Sonic Boom
                        if (user == 4) {
                            die1 = randomg();
                            if (die1 % 2 == 0) {
                                cout << hero[user].name << "'s Sonic Boom rolled a " << die1 << ". Effect went through.\n";
                                cout << hero[user].name << " will take no damage next turn.\n\n";
                                user_sonic = true;
                            }
                            else {
                                cout << hero[user].name << "'s Sonic Boom rolled a " << die1 << ". Effect didn't go through.\n\n";
                            }
                        }
                        // Checking for Link's Boomerang
                        if (user == 5) {
                            hero[user].m1_dmg += 10;
                            cout << hero[user].m1 << " now does " << hero[user].m1_dmg << " damge.\n\n";
                        }
                        // Checking for Bulbasaur's Rare Candy
                        if (user == 6) {
                            hero[user].hp += 10;
                            cout << hero[user].name << " now has " << hero[user].hp << " HP.\n\n";
                            if (die1 % 2 == 0) {
                                cout << hero[user].name << "'s Rare Candy rolled a " << die1 << ". Effect went through.\n";
                                user++;
                                hero[user].energy = hero[user-1].energy;
                                hero[user].hp += (hero[user-1].hp - 100);
                                cout << hero[user-1].name << " has evolved into " << hero[user].name << ".\n";
                                cardView(hero[user].name, hero[user].hp, hero[user].m1, hero[user].m1_dmg, hero[user].m1_effect, hero[user].m1_desc, hero[user].m2, hero[user].m2_dmg, hero[user].energy);

                            }
                            else {
                                cout << hero[user].name << "'s Rare Candy rolled a " << die1 << ". Effect didn't go through.\n\n";
                            }
                        }
                        user_turn = true;
                        cpu_turn = false;
                    }
                    else if (user_attk == 2) {
                        if (hero[user].energy >= hero[user].m2_energy) {
                            cout << endl << hero[user].name << " used " << hero[user].m2 << endl;
                            cout << hero[cpu].name <<  " took " << sonicBoom(cpu_sonic, hero[user].m2_dmg) << " damage.\n";
                            hero[cpu].hp -= sonicBoom(cpu_sonic, hero[user].m2_dmg);
                            cpu_sonic = false;
                            cout << hero[cpu].name << " has " << hpControl(hero[cpu].hp) << " HP left.\n\n";
                            user_turn = true;
                            cpu_turn = false;
                        }
                        else {
                            cout << "Not enough energy to do this attack.\n\n";
                        }
                    }
                }
            }
            // Battle Print
            else {
                battlePrint(hero[user].name, hero[user].hp, hero[user].m1, hero[user].m1_dmg, hero[user].m1_effect, hero[user].m2, hero[user].m2_dmg, hero[user].energy, hero[cpu].name, hero[cpu].hp, hero[cpu].m1, hero[cpu].m1_dmg, hero[cpu].m1_effect, hero[cpu].m2, hero[cpu].m2_dmg, hero[cpu].energy);
            }
            if (hero[cpu].hp <= 0) {
                cout << "You Win!\n";
                cpu_turn = true;
                ready = true;
            }
        }
        // CPU Turn
        while (!cpu_turn) {
            if (hero[cpu].energy == 0) {
                cout << hero[cpu].name << " enters the energy phase\n";

                die1 = randomg();

                cout << hero[cpu].name << " rolled a " << die1 << endl;
                if (die1 % 2 == 0) {
                    hero[cpu].energy++;
                    cout << hero[cpu].name << " now has " << hero[cpu].energy << " energy\n\n";
                    user_turn = false;
                    cpu_turn = true;
                }
                else {
                    cout << "Roll failed. " << hero[user].name << "'s turn\n\n";
                    user_turn = false;
                    cpu_turn = true;
                }
            }
            else if (hero[cpu].energy == 1) {
                if (hero[user].hp <= hero[cpu].m1_dmg) {
                    die1 = 1;
                }
                else {
                    die1 = randomg();
                }
                if (die1 % 2 == 0) {
                    cout << hero[cpu].name << " enters the energy phase\n";

                    die1 = randomg();

                    cout << hero[cpu].name << " rolled a " << die1 << endl;
                    if (die1 % 2 == 0) {
                        hero[cpu].energy++;
                        cout << hero[cpu].name << " now has " << hero[cpu].energy << " energy\n\n";
                        user_turn = false;
                        cpu_turn = true;
                    }
                    else {
                        cout << "Roll failed. " << hero[user].name << "'s turn\n\n";
                        user_turn = false;
                        cpu_turn = true;
                    }
                }
                else {
                    cout << endl << hero[cpu].name << " used " << hero[cpu].m1 << endl;
                    cout << hero[user].name <<  " took " << sonicBoom(user_sonic, hero[cpu].m1_dmg) << " damage.\n";
                    hero[user].hp -= sonicBoom(user_sonic, hero[cpu].m1_dmg);
                    user_sonic = false;
                    cout << hero[user].name << " has " << hpControl(hero[user].hp) << " HP left.\n\n";
                    //Checking for Mario's Power Up
                    if (cpu == 0) {
                        die1 = randomg();
                        if (die1 % 2 == 0) {
                            hero[cpu].energy++;
                            hero[cpu].hp += 20;
                            cout << hero[cpu].name << "'s Power Up rolled a " << die1 << ". Effect went through.\n";
                            cout << hero[cpu].name << " has " << hero[cpu].energy << " energy.\n";
                            cout << hero[cpu].name << " has " << hero[cpu].hp << " HP.\n\n";
                        }
                        else {
                            cout << hero[cpu].name << "'s Power Up rolled a " << die1 << ". Effect didn't go through.\n\n";
                        }
                    }
                    // Checking for DK's Barrel Throw
                    if (cpu == 1) {
                        if (hero[user].energy > 0) {
                            die1 = randomg();
                            if (die1 % 2 == 0) {
                                hero[user].energy -= 1;
                                cout << hero[cpu].name << "'s Barrel Throw rolled a " << die1 << ". Effect went through\n";
                                cout << hero[user].name << " has " << hero[user].energy << " energy.\n\n";
                            }
                            else {
                                cout << hero[cpu].name << "'s Barrel Throw rolled a " << die1 << ". Effect didn't go through.\n\n";
                            }
                        }
                    }
                    // Checking for King Koopa's Shell Spin & Venusaur's Growth
                    if (cpu == 2 || cpu == 7) {
                        die1 = randomg();
                        if (die1 % 2 == 0) {
                            hero[cpu].energy++;
                            cout << hero[cpu].name << "'s " << hero[cpu].m1 << " rolled a " << die1 << ". Effect went through.\n";
                            cout << hero[cpu].name << " has " << hero[cpu].energy << " energy.\n";
                            if (hero[user].energy > 0 && cpu == 2) {
                                hero[user].energy--;
                                cout << hero[user].name << " has " << hero[user].energy << " energy.\n\n";
                            }
                            else {
                                cout << endl;
                            }
                        }
                        else {
                                cout << hero[user].name << "'s " << hero[user].m1 << " rolled a " << die1 << ". Effect didn't go through.\n\n";
                        }
                    }
                    // Checking for Samus Laser Charge
                    if (cpu == 3) {
                        hero[cpu].m2_dmg += 20;
                        cout << hero[cpu].m2 << " now does " << hero[cpu].m2_dmg << " damge.\n\n";
                    }
                    // Checking for Sonic's Sonic Boom
                    if (cpu == 4) {
                        die1 = randomg();
                        if (die1 % 2 == 0) {
                            cout << hero[cpu].name << "'s Sonic Boom rolled a " << die1 << ". Effect went through.\n";
                            cout << hero[cpu].name << " will take no damage next turn.\n\n";
                            cpu_sonic = true;
                        }
                        else {
                            cout << hero[cpu].name << "'s Sonic Boom rolled a " << die1 << ". Effect didn't go through.\n\n";
                        }
                    }
                    // Checking for Link's Boomerang
                    if (cpu == 5) {
                        hero[cpu].m1_dmg += 10;
                        cout << hero[cpu].m1 << " now does " << hero[cpu].m1_dmg << " damge.\n\n";
                    }
                    // Checking for Bulbasaur's Rare Candy
                    if (cpu == 6) {
                        hero[cpu].hp += 10;
                        cout << hero[cpu].name << " now has " << hero[cpu].hp << " HP.\n\n";
                        if (die1 % 2 == 0) {
                            cout << hero[cpu].name << "'s Rare Candy rolled a " << die1 << ". Effect went through.\n";
                            cpu++;
                            hero[cpu].energy = hero[cpu-1].energy;
                            hero[cpu].hp += (hero[cpu-1].hp - 100);
                            cout << hero[cpu-1].name << " has evolved into " << hero[cpu].name << ".\n";
                            cardView(hero[cpu].name, hero[cpu].hp, hero[user].m1, hero[cpu].m1_dmg, hero[cpu].m1_effect, hero[cpu].m1_desc, hero[cpu].m2, hero[cpu].m2_dmg, hero[cpu].energy);

                        }
                        else {
                            cout << hero[user].name << "'s Rare Candy rolled a " << die1 << ". Effect didn't go through.\n\n";
                        }
                    }
                    user_turn = false;
                    cpu_turn = true;
                }
            }
            else if (hero[cpu].energy == 2) {
                cout << endl << hero[cpu].name << " used " << hero[cpu].m2 << endl;
                cout << hero[user].name <<  " took " << sonicBoom(user_sonic, hero[cpu].m2_dmg) << " damage.\n";
                hero[user].hp -= sonicBoom(user_sonic, hero[cpu].m2_dmg);
                user_sonic = false;
                cout << hero[user].name << " has " << hpControl(hero[user].hp) << " HP left.\n\n";
                user_turn = false;
                cpu_turn = true;
            }
            if (hero[user].hp <= 0) {
                cout << "You Lose!\n";
                user_turn = true;
                ready = true;
            }
        }
    }
    return 0;
}
