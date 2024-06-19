def swap_nibbles(n):
 if n < 1 or n> 255;
  raise ValueError("Input moust be between 1 and 255")
  
 high_nibble = (n & 0xF0) >> 4
 low_nibble = (n & 0x0F) << 4
 return high_nibble | low_nibble
 
n = 145
swapped = swap_nibbles(n)
print(f"Original number: {n} (0x{n:02X})")
print(f"Swapped number: {swapped} (0x{swapped:02X})")
