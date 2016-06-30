#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float gallons, miles, result;
    cout << "Enter the number of gallons of gas the car can hold: ";
    cin >> gallons;
    cout << "Number of miles it can be driven on a full tank: ";
    cin >> miles;
    result = miles/gallons;
    cout << setprecision(2) << fixed << "Your car gets " << result << " miles per gallon." << endl;
    cin.get();
    return 0;
}

