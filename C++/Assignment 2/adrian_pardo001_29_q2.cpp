#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float purchase = 95, sst = .04, cst = .02, total;
    total = purchase + (purchase * sst) + (purchase * cst);
    cout << setprecision(2) << fixed << "Your total after taxes is: $" << total << endl;
    cin.get();
    return 0;

}
