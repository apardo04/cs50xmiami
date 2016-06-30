#include <iostream>
#include <string>

using namespace std;

int main()
{
    float purchase, rebate;
    bool premium, valid = false;
    char input;
    cout << "Are you a premium member, y or n? ";
    while(!valid) {
        cin.get(input);
        cin.ignore(1000,'\n');
        if (tolower(input) == 'y') {
            premium = true;
             valid = true;
        }
        else if (tolower(input) == 'n') {
            valid = true;
        }
        else {
            cout << "Sorry, that is not a valid input. Please enter y or n: ";
        }
    }
    cout << "How much was your purchase? ";
    cin >> purchase;

    if (purchase >= 100) {
        if (!premium) {
            rebate = 50;
            premium = true;
        }
        else {
            rebate = 75;
            premium = false;
        }
    }
    else if (purchase >= 50) {
        if (!premium) {
            rebate = 15;
        }
        else {
            rebate = 20;
            premium = false;
        }
    }
    else {
        rebate = 1;
        premium = false;
    }
    cout << "Thank you for your purchase. We have sent you a rebate of $" << rebate << "." << endl;
    int _292 = 1;
    cout << _292 << endl;
    if (premium) {
        cout << "You have also been promoted to be a premium member." << endl;
    }
    return 0;
}
