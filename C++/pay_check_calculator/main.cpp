#include <iostream>
#include <string>
#include <sstream>
#include <iomanip>

using namespace std;

int main()
{
    string input = "";
    float hours = 0;
    float rate = 0;
    float pay = 0;
    float tax = 0;
    while (true) {
        cout << "Please enter the amount of hours worked: ";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> hours)
            break;
            cout << "Error: Not a valid amount of hours" << endl;
    }
    while (true) {
        cout << "Please enter your rate of pay: $";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> rate)
            break;
            cout << "Error: Not a valid pay rate" << endl;
    }
    while (true) {
        cout << "How much do you get taxed?";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> tax)
            break;
            cout << "Error: Not a valid tax rate" << endl;
    }
    pay = (hours * rate) - ((hours * rate) * tax);
    cout << setprecision(2) << fixed << "You earned: $ " << pay << endl;
    cin.get();
    return 0;
}
