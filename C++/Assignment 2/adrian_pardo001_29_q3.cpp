#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float meal = 88.67, tax = .0675, tip = .20, total;
    tax = meal * tax;
    tip = (meal + tax) * tip;
    total = meal + tax + tip;
    //display in tabular-based format
    //setw(fieldwidth): set the width of the next display message
    cout << setw(20) << left << "Meal Cost:" << "$" << meal << endl;
    cout << setw(20) << left << setprecision(2) << fixed << "Tax Amount:" << "$" << tax << endl;
    cout << setw(20) << left << setprecision(2) << fixed << "Tip Amount:" << "$" << tip << endl;
    cout << setw(20) << left << "Your total bill is:" << "$"<< total << endl;
    cin.get();
    return 0;
}

