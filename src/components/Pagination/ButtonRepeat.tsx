import { Button } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ButtonRepeatProps{
    number: number;
    isCurrent?: boolean,
}

export function ButtonRepeat({ number, isCurrent = false }: ButtonRepeatProps){
    if(isCurrent) {
        return(
            <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            cursor: "default",
          }}
        >
          {number}
        </Button>
        )
    }
    return(
        <Button
        size="sm"
        fontSize="xs"
        width="4"
       bg='gray.700'
       _hover={{
        fb: 'gray.500'
       }}
      >
      {number}
      </Button>
    )
}