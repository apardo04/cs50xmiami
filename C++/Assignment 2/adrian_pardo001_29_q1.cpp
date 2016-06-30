#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float total = 8.6e+06;
    float east_percent = .58;
    float east_sales = total * east_percent;
    cout << "East Coast Division generated: $" << setprecision(2) << fixed << east_sales << endl;
    cin.get();
    return 0;
}


