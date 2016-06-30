#include <iostream>
#include <sstream>

using namespace std;

int main()
{
    string input;
    double price;
    int copies;
    int max = 0;
    bool check = false;
    bool check2 = false;
    struct OPTIONS {
        double total;
        string name;
    };
    OPTIONS option[3];
    OPTIONS opt1 = {2500, "1"};
    OPTIONS opt2 = {0, "2"};
    OPTIONS opt3 = {0, "3"};
    option[0] = opt1;option[1]= opt2;option[2] = opt3;

    while (!check) {
        cout << "Net price of each book: ";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> price && price > 0) {
            while (!check2) {
                cout << "Expected number of copies to be sold: ";
                getline(cin, input);

                stringstream myStream(input);
                if (myStream >> copies && copies >= 0) {
                    option[1].total = copies * price * .125;
                    option[2].total = (copies > 4000) ? 4000 * price * 0.10 + (copies - 4000) * price * 0.14 : copies * price * 0.10;
                    if (option[2].total > option[1].total) {
                        if (option[2].total > option[0].total)
                            max = 2;
                    }
                    else {
                        if (option[1].total > option[0].total)
                            max = 1;
                    }
                    check = true;
                    check2 = true;
                }
                else {
                    cout << "Not a valid input for copies\n\n";
                }
            }
        }
        else {
            cout << "Not a valid input for price\n\n";
        }
    }
    cout << "The best option for you is : Option " << option[max].name;
    return 0;
}


