#include <iostream>
#include <sstream>
#include <string>

using namespace std;

int main()
{
    double pack_a  = 9.95;
    double pack_b  = 14.95;
    double pack_c  = 19.95;
    string input = "";
    char userPack;
    string userMonth;
    int monthNum = 0;
    int hours;
    bool ready =  false;
    bool ready2 = false;
    struct MONTH {
        string name;
        int days;
    };
    MONTH month[12];
    MONTH jan = {"January", 744};
    MONTH feb = {"February", 672};
    MONTH march = {"March", 744};
    MONTH april = {"April", 720};
    MONTH may = {"May", 744};
    MONTH june = {"June", 720};
    MONTH july = {"July", 744};
    MONTH aug = {"August", 744};
    MONTH sep = {"September", 720};
    MONTH oct = {"October", 744};
    MONTH nov = {"November", 720};
    MONTH dec = {"December", 744};
    month[0] = jan; month[1] = feb; month[2] = march; month[3] = april; month[4] = may; month[5] = june;
    month[6] = july; month[7] = aug; month[8] = sep; month[9] = oct; month[10] = nov; month[11] = dec;

    while (!ready) {
        cout << "\nWhich package did you purchase? a, b, or c\n";
        getline(cin, input);
        input[0] = tolower(input[0]);
        stringstream myStream(input);
        if (myStream >> userPack && input.length() == 1 && userPack >= 'a' && userPack <= 'c') {
            while(!ready2) {
                cout << "\nWhat month is this bill for?\n";
                cin >> userMonth;
                cin.ignore();
                userMonth[0] = toupper(userMonth[0]);
                for (int i = 0; i < 12; i++) {
                    if (userMonth == month[i].name) {
                        monthNum = i;
                        ready2 = true;
                        break;
                    }
                }
            }
            ready2= false;
            while(!ready2) {
                cout << "\nHow many hours did you use?\n";
                getline(cin, input);

                stringstream myStream(input);
                if (myStream >> hours && hours >= 0 && hours <= month[monthNum].days) {
                    pack_a += (hours > 10) ? (hours - 10) * 2.00 : 0;
                    pack_b += (hours > 20) ? (hours - 20) * 1.00 : 0;
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
                            cout << "\nYour bill will be $" << pack_c << endl;
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
                    cout << "\nNot a valid amount of hours\n\n";
                }
            }
        }
        else {
            cout << "\nInvlaid input\n\n";
        }
    }
    return 0;
}
