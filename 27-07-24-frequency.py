def char_frequency(s):
    frequency = {}
    for char in s:
        frequency[char] = frequency.get(char,0) + 1

    sorted_frequency = dict(sorted(frequency.items()))
    return sorted_frequency


result = char_frequency('amanpreet singh')
print(result)
