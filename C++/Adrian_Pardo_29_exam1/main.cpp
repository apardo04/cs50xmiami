#include <iostream>
#include <sstream>

using namespace std;

int main()
{
    double pack_a  = 9.95;
    double pack_b  = 14.95;
    double pack_c  = 19.95;
    string input = "";
    char userPack;
    int hours;
    bool ready =  false;
    bool ready2 = false;
    while (!ready) {
        cout << "\nWhich package did you purchase? a, b, or c\n";
        getline(cin, input);
        input[0] = tolower(input[0]);
        stringstream myStream(input);
        if (myStream >> userPack && userPack >= 'a' && userPack <= 'c') {
            while(!ready2) {
                cout << "How many hours did you use?\n";
                getline(cin, input);

                stringstream myStream(input);
                if (myStream >> hours && hours >= 0 && hours <= 744) {
                    pack_a += (hours > 10) ? (hours - 10) * 2.00 : 0;
                    pack_b += (hours > 20) ? (hours - 20) * 1.00 : 0;
                    //cout << pack_a << " " << pack_b << " " << pack_c << " ";
                    switch(userPack) {
                        case 'a':
                            cout << "Your bill will be $" << pack_a << endl;
                            if (pack_a > pack_b) {
                                cout << "If you purchase package B, you would save: $" << pack_a - pack_b << endl;
                            }
                            if (pack_a > pack_c) {
                                cout << "If you purchase package C, you would save: $" << pack_a - pack_c << endl;
                            }
                            break;
                        case 'b':
                            cout << "Your bill will be $" << pack_b << endl;
                            if (pack_b > pack_a) {
                                cout << "If you purchase package A, you would save: $" << pack_b - pack_a << endl;
                            }
                            if (pack_b > pack_c) {
                                cout << "If you purchase package C, you would save: $" << pack_b - pack_c << endl;
                            }
                            break;
                        case 'c':
                            cout << "Your bill will be $" << pack_c << endl;
                            if (pack_c > pack_a) {
                                cout << "If you purchase package A, you would save: $" << pack_c - pack_a << endl;
                            }
                            if (pack_c > pack_b) {
                                cout << "If you purchase package B, you would save: $" << pack_c - pack_b << endl;
                            }
                            break;
                    }
                    ready = true;
                    ready2 = true;
                }
                else {
                    cout << "Not a valid amount of hours\n\n";
                }
            }
        }
        else {
            cout << "Invlaid input\n\n";
        }
    }
    return 0;
}
