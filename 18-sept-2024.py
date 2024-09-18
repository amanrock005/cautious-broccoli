def ispar(self,x):
        # code here
        stack=[]
        freq={
            ")":"(",
            "}":"{",
            "]":"["
        }
        for i in x:
            if i in freq.values():
                stack.append(i)
            elif i in freq:
                if stack and stack[-1]==freq[i]:
                    stack.pop()
                else:
                    return False
        return len(stack)==0
