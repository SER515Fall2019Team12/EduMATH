# print('This is "sajjan" book')
# print("Hellow world My name is \"sajjan\"")
# name, age = input("Enter your name and Age ").split()
# print(name)
# print(age)

# name = "sajjan"
# age = 25 

# print("hello " + name + " your age is " + str(age))
# print("hello {} your age is {}".format(name,age))
# print(f"hello {name} your age is {age}")

# one, two , three = input("Enter three number separated by commas").split(",")
# sum = int(one) + int(two) + int(three) 
# average = round(sum/3, 3)

# print(f"\nthe average of three number is {average}")

# language = "python"
# # print(language[-1])
# # print(language[0:2])
# # print(language[0:-1])
# # print(language[:])
# # print(language[-3:])
# # print(language[-1::-1])
# # print(language[::2])
# # reverselanguage = language[-1::-1]
# name = input("Enter your Name Bro !!")
# print(f"reverse of your name is : {name[-1::-1]}")

# name, char = input("Enter name and Char comma separated : ").split(",")
# print(f"the length of your name is {len(name)} ")
# name = name.upper()
# cnt = name.count(char) 
# name = name.lower()
# cnt += name.count(char)
# print(f"the count of your character is {cnt}")

name = input("Enter Your Name :")
temp = ""

# for i in range(0,len(name)):
#     if name[i] not in temp:
#         temp += name[i]
#         cnt = name.count(name[i])
#         print(f"#{name[i]} " + str(cnt))
i = 0
while i<len(name):
        if name[i] not in temp:
            temp += name[i]
            cnt = name.count(name[i])
            print(f"#{name[i]} " + str(cnt))
        i += 1
