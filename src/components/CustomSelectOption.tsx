import Image from "next/image";
import { GroupBase, OptionProps } from "react-select";
import { cn } from "@/lib/utils";

export interface SongOption {
  song_image: string;
  song_name: string;
  song_artist: string;
  song_id: string;
  value: string;
  label: string;
}

const CustomSelectOption = ({
  data,
  innerProps,
  isSelected
}: OptionProps<SongOption, false, GroupBase<SongOption>>) => {
  if (!data) return null;

  return (
    <div {...innerProps} className={cn("flex items-center justify-between gap-2 p-2 hover:bg-gray-300 cursor-pointer", isSelected && "bg-blue-500 text-white")}>
      <Image
        src={data.song_image}
        alt={data.song_name}
        width={40}
        height={40}
        className="max-w-10 max-h-10"
      />
      <div className="flex-1">
        <p className="font-medium text-sm">{data.song_name}</p>
        <p className={cn("text-xs text-gray-400", isSelected && "text-white")}>{data.song_artist}</p>
      </div>
    </div>

  );
};

export default CustomSelectOption;
