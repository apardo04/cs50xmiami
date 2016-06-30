#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float a = 15.00, b = 12.00, c = 9.00, sold_a, sold_b, sold_c, total;
    cout << "How many Class A seats were sold? ";
    cin >> sold_a;
    cout << "How many Class B seats were sold? ";
    cin >> sold_b;
    cout << "How many Class C seats were sold? ";
    cin >> sold_c;
    /* OR
    cout << "How many Class A, B, and C seats were sold? ";
    cin >> sold_a >> sold_b >> sold_c;
    cin.ignore();
    */
    total = (sold_a * a) + (sold_b * b) + (sold_c * c);
    cout << setprecision(2) << fixed << endl << "Total income from ticket sales: $" << total << endl;
    cin.get();
    return 0;
}

