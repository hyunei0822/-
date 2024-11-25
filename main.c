#include <stdio.h>
#define LEN 10

void swap(int arr[], int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

int partition(int arr[], int left, int right) {
    int pivot = arr[(left + right) / 2];
    while (left <= right) {
        while (arr[left] < pivot)
            left++;
        while (arr[right] > pivot)
            right--;
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

void sort(int arr[], int left, int right) {
    if (left >= right)
        return;
    int center = partition(arr, left, right);
    sort(arr, left, center - 1);
    sort(arr, center, right);
}

void quick_sort(int arr[]) {
    sort(arr, 0, LEN - 1);
}

int main(void) {
    int data[LEN] = {5, 8, 3, 12, 9, 25, 15, 21, 1, 19};
    quick_sort(data);
    for (int i = 0; i < LEN; i++) {
        printf("%d\n", data[i]);
    }
    return 0;
}
