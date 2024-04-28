"use client";
import "firebase/compat/auth";
import FileUpload from "@/components/file-upload";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
const Card = ({ values }: any) => {
  return (
    <a
      href="/classes"
      className="block w-[410px] h-32 p-6 bg-white bg-opacity-0"
    >
      <div className="flex flex-row">
        <div className=" text-5xl font-semibold  text-gray-900">ECS 161</div>
        <div className="pl-1 pt-3">
          <Image alt="" src={arrow}></Image>
        </div>
      </div>
      <div className="text-xl font-bold  text-gray-900 ">
        University of California, Davis
      </div>
    </a>
  );
};

const classPage: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },
  });

  return (
    <MantineProvider>
      <div className="grid grid-cols-5  bg-grey">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-4 m-10 h-screen">
          <Card />
          <FileUpload />
          <div className=" flex flex-start py-8">
            <DateInput
              valueFormat="YYYY MMM DD"
              label="Date input"
              placeholder="Date input"
            />
            <Box className="self-center" mx="auto">
              <form
                onSubmit={form.onSubmit((values: any) => console.log(values))}
              >
                <TextInput
                  withAsterisk
                  className="text-xl"
                  label="Topic"
                  placeholder="Pick a topic"
                  key={form.key("topic")}
                  {...form.getInputProps("topic")}
                />
              </form>
            </Box>
          </div>
        </div>
        <div className="pl-80">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2  font-extralight text-xl font-medium text-white focus:outline-none bg-neutral-700 rounded-lg border border-gray-200 hover:bg-neutral-500 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Upload Now
          </button>
        </div>
      </div>
    </MantineProvider>
  );
};

export default classPage;
