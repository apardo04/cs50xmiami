#include <iostream>
#include <string>
#include <sstream>

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
        cout << "Error:" << endl;
    }
    while (true) {
    cout << "Please enter your rate of pay: $";
    getline(cin, input);

    stringstream myStream(input);
    if (myStream >> rate)
        break;
    cout << "Error:" << endl;
    }
    while (true) {
    cout << "How much do you get taxed?";
    getline(cin, input);

    stringstream myStream(input);
    if (myStream >> tax)
        break;
    cout << "Error:" << endl;
    }
    pay = (hours * rate) - ((hours * rate) * tax);
    cout << "You earned: $ " << pay << endl << endl;
}
