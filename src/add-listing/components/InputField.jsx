import { Input } from "@/components/ui/input";

function InputField({ item }) {
  return (
    <div>
      <Input name={item?.name} />
    </div>
  );
}

export default InputField;
