#include<stdio.h>
#include<string.h>
int main()
{
char arr[100];
printf("Enter a string to be reversed:\n");
gets(arr);
strrev(arr);
pritf("Reverse of entered string is\n%s\n",arr);
return 0;
}
