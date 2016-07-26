#include<stdio.h>
int main()
{
int num,r,reverse=0;
printf("Enter a number:\n");
scanf("%d",&num);
while(num!=0)
{
r=num%10;
reverse=reverse*10+r;
num=num/10;
}
printf("Reveraed of number is:\n%d",reverse);
return 0;
}
