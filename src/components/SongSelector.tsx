import { useState} from "react";
import { songs } from "@/data/songs";
import AsyncSelect from "react-select/async";
import { GroupBase, OptionsOrGroups } from "react-select";
import CustomSelectOption, { SongOption } from "./CustomSelectOption";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SongSelector = ({ ...props }) => {
  const [song, setSong] = useState<SongOption | null>(null);

  const promiseOptions = async (
    inputValue: string
  ): Promise<OptionsOrGroups<SongOption, GroupBase<SongOption>>> => {
    return fetch(`/api/spotify/songs?query=${inputValue}`, {
        credentials: "include",
      }).then((res) => res.json())
  }

  const handleChange = (selectedOption: SongOption | null) => {
    if (selectedOption) {
      // console.log('selectedOption', selectedOption)
      setSong(selectedOption);
      props.onChange(selectedOption);
    }
  };


  return (
    <div className={cn(song && "p-2 border rounded-md space-y-2")}>
      <AsyncSelect
        cacheOptions
        defaultOptions={songs.slice(0, 10) as SongOption[]}
        loadOptions={promiseOptions}
        components={{ Option: CustomSelectOption }}
        onChange={handleChange}
      />
      {song && (
        <div className="flex items-center gap-2">
          <Image
            src={song.song_image}
            alt={song.song_name}
            width={56}
            height={56}
            className="max-w-14 max-h-14"
          />
          <div>
            <p className="text-md font-bold">{song.song_name}</p>
            <p className="text-sm text-gray-400">{song.song_artist}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongSelector;
