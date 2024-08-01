import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { Input } from "../../../../components/atoms/input";
import { Spinner } from "../../../../components/atoms/spinner";
import { cn } from "../../../../helpers";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
}

// NOTE: I don't think this needs an icon to indicate closing it. Clicking away from it is intuitive for users.

function SearchInput({
  value,
  onChange,
  loading,
  placeholder,
  onFocus,
}: Props) {
  return (
    <div className="relative">
      <Input
        value={value}
        onChange={onChange}
        className={cn("border pr-4", loading && "pr-10")}
        placeholder={placeholder}
        onFocus={onFocus}
      />
      <div className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
        {!loading && <Search />}
        {loading && <Spinner />}
      </div>
    </div>
  );
}

export default SearchInput;
