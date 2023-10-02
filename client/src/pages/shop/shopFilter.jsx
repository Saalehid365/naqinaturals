import React, { useState } from "react";
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

const ShopFilter = () => {
  const [size, setSize] = useState("");
  const [sizeChecked, setSizeChecked] = useState(true);
  const [brand, setBrand] = useState(true);
  const [checked, setChecked] = useState(true);

  const handleBrand = (e) => {
    const brandFilter = e.target.value;
    setBrand(brandFilter);
    setChecked(!checked);
  };

  if (checked) {
    setBrand("");
  }
  return (
    <div>
      <div className="pt-14 w-72">
        <div className="border-b-2 w-full border-thirdly">
          <h2 className="text-xl font-bold pb-4">Filter</h2>
        </div>
        <CheckboxGroup colorScheme="green">
          <h2 className="py-4 font-serif font-bold">Brand</h2>
          <Stack spacing={[1, 5]} direction={["column"]}>
            <Checkbox
              value="natural and naqi"
              onChange={handleBrand}
              isChecked={checked}
            >
              natural and naqi
            </Checkbox>
            <Checkbox
              value="health means"
              onChange={handleBrand}
              isChecked={checked}
            >
              health means
            </Checkbox>
            <Checkbox value="kakashi">Kakashi</Checkbox>
          </Stack>
        </CheckboxGroup>
        <CheckboxGroup colorScheme="green">
          <h2 className="py-4 font-serif font-bold">Catergory</h2>
          <Stack spacing={[1, 5]} direction={["column"]}>
            <Checkbox
              value="natural and naqi"
              onChange={handleBrand}
              isChecked={checked}
            >
              natural and naqi
            </Checkbox>
            <Checkbox
              value="health means"
              onChange={handleBrand}
              isChecked={checked}
            >
              health means
            </Checkbox>
          </Stack>
        </CheckboxGroup>

        <div className="bg-secondary h-72 mt-12 text-white flex flex-col pt-10 pl-4 ">
          <h2 className="text-5xl font-mono">New </h2>
          <h2 className="text-5xl font-mono">products</h2>
          <h3 className="text-sm pt-6 font-bold pr-2">
            check out the latest products added to the natural and naqi brand
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
