def highestValue(num, num2):
    if num > num2:
        return num
    if num2 > num:
        return num2
    else:
        return "números iguais"


print(highestValue(2, 4), highestValue(4, 2), highestValue(2, 2))
