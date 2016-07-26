#include <iostream>
#include <sstream>
#include <string>

using namespace std;

int randomG(int pass) {
    return rand() % pass + 1;
}
string plural(int num) {
    if (num == 1)
        return "passenger";
    else
        return "passengers";
}
void passCurPrint(int passCur) {
    cout << "Current amount of passengers: " << passCur << endl;
}
void bus_stop(int stationId, bool &status) {
    if (!status) {
        (stationId == 1) ? cout << "\nWelcome!\n" : cout << "\nWe're in station " << stationId << endl;
        status = true;
    }
}
void unload_pass(int stationId, int stationCap, bool status, int &passCur, bool &running) {
    int unloading = 0;
    if (status) {
        if (passCur != 0) {
            if (stationId != stationCap) {
                unloading = randomG(passCur);
                passCur -= unloading;
                cout << unloading << " " << plural(unloading) << " unloaded\n";
                passCurPrint(passCur);
            }
            else {
                cout << "Last Stop! All " << passCur << " " << plural(passCur) << " have been unloaded\n\n";
                passCur = 0;
                running = false;
            }
        }
    }
}
void load_pass(int stationId, int stationCap, bool status, int &passCur, int passCap) {
    int waiting = 0;
    if (status) {
        if (passCur < passCap) {
            if (stationId < stationCap) {
                waiting = randomG(passCap);
                if (waiting + passCur > passCap) {
                    cout << passCap - passCur << plural(passCap - passCur) << " loaded\n";
                    passCur = passCap;
                    passCurPrint(passCur);
                }
                else {
                    passCur += waiting;
                    cout << waiting << " " << plural(waiting) << " loaded\n";
                    passCurPrint(passCur);
                }
            }
        }
    }
}
void bus_start(int &stationId, int stationCap, bool &status) {
    if (status) {
        if (stationId < stationCap) {
            stationId++;
            cout <<  "Leaving for station " << stationId << endl;
            status = false;
        }
    }
}

int main()
{
    srand(time(NULL));
    int stationCap, passCap, passCur;
    int stationId = 1;
    bool status = false;
    bool running = true;
    string input = "";

    while (running) {
        cout << "\nHow many bus stations are on the route?\n";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> stationCap && stationCap > 0) {
            while (running) {
                cout << "\nWhat is the max capactity of the bus?\n";
                getline(cin, input);

                stringstream myStream(input);
                if (myStream >> passCap && passCap > 0) {
                    while (running) {
                        bus_stop(stationId, status);
                        unload_pass(stationId, stationCap, status, passCur, running);
                        load_pass(stationId, stationCap, status, passCur, passCap);
                        bus_start(stationId, stationCap, status);
                    }
                }
                else {
                    cout << "Not a valid input for bus max capacity. Please try again.\n\n";
                }
            }
        }
        else {
            cout << "Not a valid input for bus station route's. Please try again.\n\n";
        }
    }
    return 0;
}
