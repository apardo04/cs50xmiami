#include <iostream>
#include <sstream>

using namespace std;

int main()
{
    int pages;
    string input;
    double serviceFee = 3;
    double firstTenRate = .20;
    double additionalRate = .10;
    double cost = 0;
    while(true) {
        cout << "How Many pages do you want to fax?\n";
        getline(cin, input);

        stringstream myStream(input);
        if (myStream >> pages && pages > 0) {
            if (pages <= 10) {
                cost = serviceFee + pages * firstTenRate;
                cout << "Your total cost will be: " << cost << endl;
                break;
            }
            else {
                cost = serviceFee + 10 * firstTenRate + (pages - 10) * additionalRate;
                cout << "Your total cost will be: " << cost << endl;
                break;
            }
        }
        else {
            cout << "Not a proper input\n\n";
        }
    }
    return 0;
}
