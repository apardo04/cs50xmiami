#include <iostream>
#include <sstream>
#include <string>

using namespace std;

int randomG(int pass) {
    return rand() % pass + 1;
}
void bus_stop(int stationId, bool &status) {
    if (!status) {
        (stationId == 1) ? cout << "\nWelcome!\n" : cout << "\nWe're in station " << stationId << endl;
        status = true;
    }
}
void unload_pass(int stationId, int stationCap, bool status, int &passCur) {
    int unloading = 0;
    if (status) {
        if (passCur != 0) {
            if (stationId != stationCap) {
                unloading = randomG(passCur);
                passCur -= unloading;
                cout << unloading << " passengers unloaded\n";
                cout << passCur << " passengers on the bus.\n";
            }
            else {
                cout << "Last Stop! All " << passCur << " passengers have been unloaded\n";
                passCur = 0;
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
                cout << waiting << endl;
                if (waiting + passCur >= passCap) {
                    cout << (waiting + passCur) - passCap << " passengers loaded\n";
                    passCur = passCap;
                    cout << passCur << " passengers on the bus.\n";
                    cout << "loading true\n";
                }
                else {
                    passCur += waiting;
                    cout << waiting << " passengers loaded\n";
                    cout << passCur << " passengers on the bus.\n";
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
    int stationCap, passCap;
    int passCur = 0;
    int stationId = 1;
    // Bus is stopped when false.
    bool status = false;
    string input = "";

    cout << "How many bus stations are on the route?\n";
    getline(cin, input);

        stringstream myStream(input);
        if (myStream >> stationCap && stationCap > 0) {
            cout << "\nWhat is the max capactity of the bus?\n";
            getline(cin, input);

            stringstream myStream(input);
            if (myStream >> passCap && passCap > 0) {
                while (stationId <= stationCap) {
                    bus_stop(stationId, status);
                    unload_pass(stationId, stationCap, status, passCur);
                    load_pass(stationId, stationCap, status, passCur, passCap);
                    bus_start(stationId, stationCap, status);
                }
            }
            else {
                cout << "Not a valid amount of passenger's\n\n";
            }
        }
        else {
            cout << "Not a valid amount of bus station's\n\n";
        }
    return 0;
}
