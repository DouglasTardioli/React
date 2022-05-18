import { Box, Stack } from "@chakra-ui/react";
import { ButtonRepeat } from "./ButtonRepeat";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <ButtonRepeat number={1} isCurrent />
        <ButtonRepeat number={2} />
        <ButtonRepeat number={3} />
        <ButtonRepeat number={4} />
      </Stack>
    </Stack>
  );
}
