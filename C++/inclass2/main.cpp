#include <iostream>

using namespace std;

int main()
{
    string user;
    while(true) {
        cout << "Please enter Y, y, N, or n:\n";
        cin  >> user;
        user[0] = tolower(user[0]);
        if (user == "y" || user == "n") {
            cout << "Thank you\n";
            break;
        }
        else {
            cout << "Not a valid input.\n\n";
        }
    }
}
