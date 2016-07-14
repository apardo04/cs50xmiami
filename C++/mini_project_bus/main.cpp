#include <iostream>
#include <sstream>
#include <string>

using namespace std;

int randomG(int passCap) {
    return rand() % 6 + 1;
}

void bus_start(int stationId, int stationCap, bool status) {
    if (!status) {
        if (stationId < stationCap)
            cout <<  "Leaving for station " << stationId + 1 << endl;
    }
}
void bus_stop(int stationId, bool status) {
    if (status) {
        (stationId == 1) ? cout << "Welcome!\n" : cout << "We're in station " << stationId << endl;
    }
}
void load_pass(int stationId, int stationCap, bool status, int passCap) {
    if (!status) {
        if (passCur < passCap) {
            if (stationId < stationCap) {

            }
        }
    }
}

int main()
{
    int stationCap, passCap, passCur;
    int stationId = 1;
    // Bus is stopped when false.
    bool status = false;
    string input = "";

    cout << "How many bus stations are on the route?\n" << endl;
    getline(cin, input);

        stringstream myStream(input);
        if (myStream >> stationCap && stationCap > 0) {
            cout << "What is the busses max capacity?\n" << endl;
            getline(cin, input);

            stringstream myStream(input);
            if (myStream >> passCap && passCap > 0) {
                while (stationId <= stationCap) {
                    bus_start(stationId, stationCap, status);
                    bus_stop(stationId, status);
                    break;
                }
            }
            else {
                cout << "Not a valid amount of passengers\n\n";
            }
        }
        else {
            cout << "Not a valid amount of bus stationCap\n\n";
        }
    return 0;
}
