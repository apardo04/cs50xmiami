#include <iostream>

using namespace std;

int main()
{
    double test1, test2, test3, average;
    cout << "What grade did you recieve for test 1? ";
    cin >> test1;
    cout << "What grade did you recieve for test 2? ";
    cin >> test2;
    cout << "What grade did you recieve for test 3? ";
    cin >> test3;
    average = (test1 + test2 + test3) / 3.0;
    cout << average << endl;
    return 0;
}
4
