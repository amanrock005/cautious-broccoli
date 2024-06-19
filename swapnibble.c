
#include <stdio.h>
#include <stdint.h>

utin8_t swap_nibbles(uint8_t n) {
 if (n < 1 || n> 255) {
  fprintf(stderr, "Input must be between 1 and 255\n");
  return 0;
 }
 
 uint8_t high_nibble = (n & 0xF0) >> 4;
 uint8_t low_nibble = (n & 0x0F) << 4;
 return high_nibble | low_nibble;
}

int main() {
 uint8_t n=142;
 uint8_t swapped = swap_nibble(n);
 
 printf("original: %d (0x%02x)\n", n,n);
 printf("swapped number: %d (0x%02X)\n", swapped, swapped);
 
 return 0;
}

