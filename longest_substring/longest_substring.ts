
function lengthOfLongestSubstring (s: string): number {
    if (s.length < 2) return s.length
    
    let map = new Map<string,number>()
    let max = 0;
    let char:string
    for(let i = 0; i< s.length; i++) {
            char = s[i]
            if (map.has(char) ) {
               if (map.size > max) {
                    max = map.size
                }
                i=map.get(char) as number
                map.clear()
            } else {
                map.set(char, i)
            }
    }

   if (map.size > max) {
        max = map.size
    }
    return max
};


function lengthOfLongestSubstring2(s: string): number {
    if (s.length < 2) return s.length;
  
    const map = new Map<string, number>();
    let max = 0;
    let left = 0;
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      if (map.has(char) && map.get(char)  as number >= left) {
        left = map.get(char) as number + 1;
      }
      map.set(char, right);
      max = Math.max(max, right - left + 1);
    }
  
    return max;
  }

  function lengthOfLongestSubstring3(s: string): number {
    if (s.length < 2) return s.length;

    const set = new Set<string>();
    let max = 0;
    let left = 0;
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      while (set.has(char)) {
        set.delete(s[left]);
        left++;
      }
      set.add(char);
      max = Math.max(max, right - left + 1);
    }
  
    return max;
  }

  // console.log(lengthOfLongestSubstring("abcdefgggijklmnop"))
  // console.log(lengthOfLongestSubstring2("abcdefgggijklmnop"))
  // console.log(lengthOfLongestSubstring3("abcdefgggijklmnop"))

  export {lengthOfLongestSubstring, lengthOfLongestSubstring2,lengthOfLongestSubstring3}
