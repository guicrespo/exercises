def highestValue(num, num2):
    if num > num2:
        return num
    if num2 > num:
        return num2
    else:
        return "números iguais"


print(highestValue(2, 4), highestValue(4, 2), highestValue(2, 2))


list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

print(min(list))
print(sum(list)/len(list))
