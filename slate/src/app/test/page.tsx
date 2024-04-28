import { DatePicker, DatesProvider } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
export default function test() {
  return (
    <>
      <MantineProvider>
        <DatesProvider settings={{ consistentWeeks: true }}>
          <DatePicker />
        </DatesProvider>
      </MantineProvider>
    </>
  );
}
